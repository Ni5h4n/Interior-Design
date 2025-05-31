import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-8">Page Not Found</h2>
        <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link 
          href="/"
          className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 