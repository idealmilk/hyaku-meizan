import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from './useAuth'

export default function useProtected(redirectUrl = '/register') {
  const router = useRouter()
  const { user, isLoading } = useAuth()

  useEffect(() => {
    if (isLoading || user) return
    if (!user) router.replace(redirectUrl)
  }, [ router, redirectUrl, user, isLoading ])
}
