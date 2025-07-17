
import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Language Plus</title>
      </Head>
      <main className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to JoLiHub</h1>
        <p className="text-lg text-gray-700">Your multi-language learning platform</p>
        <p className="mt-6 text-sm text-gray-500">Coming soon: English, French, and more!</p>
      </main>
    </div>
  )
}
