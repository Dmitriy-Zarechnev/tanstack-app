import { createFileRoute } from '@tanstack/react-router'

import { MyPlaylistsPage } from '@/app/pages/MyPlaylistsPage'

export const Route = createFileRoute('/my-playlists')({
  component: MyPlaylistsPage,
})
