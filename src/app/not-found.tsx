import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/common';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
        404
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight">
        Page not found
      </h1>

      <p className="mt-3 max-w-md text-muted-foreground">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
      </p>

      <Button asChild className="mt-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>
    </Container>
  );
}