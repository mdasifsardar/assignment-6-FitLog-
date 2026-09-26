import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-slate-900 text-white">
      <h1 className="text-9xl font-extrabold text-blue-500 tracking-widest">
        404
      </h1>
      <div className="bg-blue-600 text-white px-2 text-sm rounded rotate-12 absolute mb-16">
        Page Not Found
      </div>
      <p className="text-xl text-slate-300 mt-4 mb-8">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
