import { createFileRoute } from '@tanstack/react-router'
import PlaylistsPage from '@/app/pages/PlaylistsPage'

export const Route = createFileRoute('/')({
  component: PlaylistsPage,
})
