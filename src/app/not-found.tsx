import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-container-margin">
      <div className="text-center max-w-md">
        <span className="text-[120px] font-headline-lg text-primary/20 leading-none block mb-4">404</span>
        <h1 className="text-headline-lg font-headline-lg text-on-surface mb-4">Page Not Found</h1>
        <p className="text-on-surface-variant text-body-md mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-on-primary text-label-md font-label-md uppercase tracking-widest px-8 py-4 rounded-full hover:opacity-90 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
