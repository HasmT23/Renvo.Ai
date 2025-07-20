import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          Renvo
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          AI-powered vehicle listing optimization for car auctions
        </p>
        <div className="space-y-4">
          <Link
            href="/login"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
          <p className="text-sm text-gray-500">
            Sprint 1 - Foundation Setup Complete
          </p>
        </div>
      </div>
    </main>
  )
} 