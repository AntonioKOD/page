import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { IconHome, IconArrowLeft } from '@tabler/icons-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-6xl font-bold text-primary mb-4">404</div>
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          The mystical page you&apos;re looking for seems to have vanished into the cosmic void. 
          Let us guide you back to the realm of possibilities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="mystical" size="lg">
            <Link href="/" className="flex items-center gap-2">
              <IconHome className="w-4 h-4" />
              Return Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="javascript:history.back()" className="flex items-center gap-2">
              <IconArrowLeft className="w-4 h-4" />
              Go Back
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
