import type { FormEvent } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { signInWithEmail, signInWithGoogle } from '@/lib/firebase/auth'

const LoginForm = () => {
  const router = useRouter()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState<string | null>(null)

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await signInWithEmail({ email, password })
      router.push('/')
    }
    catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      setError('Invalid email or password')
    }
  }

  const handleLoginWithGoogle = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await signInWithGoogle()
      router.push('/')
    }
    catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      setError('Invalid email or password')
    }
  }

  return (
    <div className="mx-auto max-w-md space-y-4 rounded-xl bg-white p-6 shadow-md">
      <h2 className="text-xl font-semibold">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded border p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded border p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full rounded bg-blue-500 p-2 text-white">
          Login
        </button>
      </form>
      <button
        onClick={handleLoginWithGoogle}
        className="w-full rounded bg-red-500 p-2 text-white"
      >
        Sign in with Google
      </button>
    </div>
  )
}

export default LoginForm
