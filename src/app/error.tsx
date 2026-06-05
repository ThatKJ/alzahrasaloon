"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-container-margin">
      <div className="text-center max-w-md">
        <span className="text-[120px] font-headline-lg text-primary/20 leading-none block mb-4">!</span>
        <h1 className="text-headline-lg font-headline-lg text-on-surface mb-4">Something Went Wrong</h1>
        <p className="text-on-surface-variant text-body-md mb-8">
          An unexpected error occurred. Please try again or contact us on WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-primary text-on-primary text-label-md font-label-md uppercase tracking-widest px-8 py-4 rounded-full hover:opacity-90 transition-all"
          >
            Try Again
          </button>
          <a
            href="/"
            className="border-2 border-primary text-primary text-label-md font-label-md uppercase tracking-widest px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
