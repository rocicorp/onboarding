import { useQuery, useZero } from '@rocicorp/zero/react'
import { createFileRoute } from '@tanstack/react-router'
import { queries, Schema, Mutators } from '@tutorial-tanstack-drizzle/zero'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const zero = useZero<Schema, Mutators>()
  const [albums] = useQuery(queries.albumsByArtist({ artistID: 'artist_1' }))

  const greatestId = albums.reduce(
    (max, album) => Math.max(max, parseInt(album.id.split('_')[1])),
    0,
  )

  const onClick = async () => {
    zero.mutate.albums.create({
      id: `album_${greatestId + 1}`,
      artistID: 'artist_1',
      title: `Please Please Me (Greatest Hits ${greatestId + 1})`,
      year: 1963,
      createdAt: Date.now(),
    })
  }

  return (
    <div className="min-h-screen text-white bg-linear-to-b from-black via-black/90 to-black">
      <section className="p-6 max-w-7xl mx-auto">
        <ul className="space-y-4 list-disc">
          {albums.map((album) => (
            <li key={album.id} className="mb-0">
              <p>{album.title}</p>
            </li>
          ))}
        </ul>
        <button
          className="mt-8 cursor-pointer bg-black text-white px-4 py-2 rounded-md border border-white/10"
          onClick={onClick}
        >
          Create Album
        </button>
      </section>
    </div>
  )
}
