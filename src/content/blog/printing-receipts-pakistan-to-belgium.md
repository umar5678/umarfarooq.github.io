---
title: "Printing Receipts from Pakistan to Belgium"
description: "How I connected to a thermal printer 6,000 km away — with no tutorial, no guide, and no physical access to the hardware."
date: "2025-01-08"
tags: ["electron", "problem-solving", "hardware"]
published: true
---

## The Problem

The thermal printer was sitting in the client's restaurant kitchen in Belgium. I was working from Pakistan. There was no YouTube tutorial, no blog post, and no ready-made guide for what I needed to do.

The requirement was specific: connect to that particular thermal printer model, send structured order data, and trigger **silent printing** — no dialog boxes, no print preview, no user interaction. When a customer places an order, the receipt should print automatically in the kitchen.

Previous developers had attempted this and failed. This was the blocker that killed the project before I got involved.

## Research Phase

I started with the printer's user manual. Not the quick-start guide — the full technical documentation. I needed to understand the ESC/POS command set, the network protocol, and how the printer expected to receive data.

From there, I moved to documentation for Electron's printing APIs, Node.js network modules, and raw socket communication. I pieced together fragments from multiple sources — none of which addressed my exact scenario.

## Building the Test Environment

Before writing a single line of the main project, I built a sandbox:

```javascript
// test-server.js — minimal Express server
app.post('/print', (req, res) => {
  const { items, total, orderNumber } = req.body;
  
  // Format receipt data
  const receipt = formatReceipt({ items, total, orderNumber });
  
  // Send to connected Electron app via WebSocket
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: 'PRINT', data: receipt }));
    }
  });
  
  res.json({ success: true });
});
```
The Electron app listened for WebSocket events and forwarded the formatted data to the printer. A simple web form let me enter test data and hit "Print."

The Breakthrough
After multiple failed attempts — wrong encoding, malformed commands, connection timeouts — the printer responded. A receipt appeared in a restaurant kitchen in Belgium, triggered from my desk in Pakistan.

The moment it worked, I knew the rest of the project was viable.

Building Reliability
A working prototype is not a production system. I needed the printer to be reliable — handling network drops, printer jams, paper-out conditions, and server restarts without losing orders.

The final Electron app includes:

Print queue — orders are queued and processed sequentially
Order-level retry — if a single receipt fails, it retries before moving to the next
Queue-level retry — if the queue stalls, it resets and reprocesses pending items
Network-level recovery — if the network drops, the app reconnects and resumes
WebSocket reconnection — automatic reconnection with exponential backoff
Operational logging — every event is logged for remote debugging
```js
class PrintQueue {
  constructor() {
    this.queue = [];
    this.processing = false;
    this.retryCount = 0;
    this.maxRetries = 3;
  }

  async add(receipt) {
    this.queue.push(receipt);
    if (!this.processing) {
      await this.processNext();
    }
  }

  async processNext() {
    if (this.queue.length === 0) {
      this.processing = false;
      return;
    }
    this.processing = true;
    const receipt = this.queue[0];
    
    try {
      await this.print(receipt);
      this.queue.shift();
      this.retryCount = 0;
      await this.processNext();
    } catch (error) {
      if (this.retryCount < this.maxRetries) {
        this.retryCount++;
        await this.delay(1000 * this.retryCount);
        await this.processNext();
      } else {
        this.log('Max retries reached', receipt);
        this.queue.shift();
        this.retryCount = 0;
        await this.processNext();
      }
    }
  }
}
```
Remote Hardware Debugging
Because the hardware was remote, I had to guide the client through every physical step:

Where to connect the Ethernet cable
How to assign a static IP address to the printer
How to reset the printer and retrieve its network configuration
How to verify connectivity from his computer
I worked on his machine through remote desktop to configure the printer properly. Debugging hardware you can't see or touch teaches you a level of patience and systematic thinking that no coding tutorial ever will.

The Takeaway
I deliberately tackled this before starting the main project. It was the highest-risk problem — and the one that had stopped previous developers cold.

Solve the hardest problem first. If you can't solve it, you find out before investing months of work. If you can, everything else feels achievable.