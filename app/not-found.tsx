export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-4 text-lg">Oops! This page doesn’t exist.</p>
      <a href="/" className="mt-6 text-blue-600 hover:underline">
        Go back home
      </a>
    </div>
  )
}
