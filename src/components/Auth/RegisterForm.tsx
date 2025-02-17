import { useState } from 'react'
import { useRouter } from 'next/router'

import { signUp } from '@/lib/firebase/auth'

const RegisterForm = () => {
  const router = useRouter()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState<string | null>(null)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await signUp({ email, password })
      router.push('/')
    }
    catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      setError('Error creating account')
    }
  }

  return (
    <div className="mx-auto max-w-md space-y-4 rounded-xl bg-white p-6 shadow-md">
      <h2 className="text-xl font-semibold">Register</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleRegister} className="space-y-4">
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
        <button type="submit" className="w-full rounded bg-green-500 p-2 text-white">
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
