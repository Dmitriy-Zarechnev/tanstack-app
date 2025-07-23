import { createFileRoute } from '@tanstack/react-router'
import { OauthCallbackPage } from '@/app/pages/auth/OauthCallbackPage'

export const Route = createFileRoute('/oauth/callback')({
  component: OauthCallbackPage,
})
