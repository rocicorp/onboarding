import {useQuery, useZero} from '@rocicorp/zero/react';
import {createFileRoute} from '@tanstack/react-router';
import {mutators, queries} from '@zero-onboarding/zero';

export const Route = createFileRoute('/')({component: App});

function App() {
  const zero = useZero();
  const [albums] = useQuery(queries.albums.byArtist({artistID: 'artist_1'}));

  const onClick = async () => {
    const result = zero.mutate(
      mutators.albums.create({
        id: 'album_6',
        artistID: 'artist_1',
        title: 'Please Please Me',
        year: 1963,
        createdAt: Date.now(),
      }),
    );

    const clientResult = await result.client;

    if (clientResult.type === 'error') {
      console.error('Failed to create album', clientResult.error.message);
    } else {
      console.log('Album created!');
    }
  };

  return (
    <div className="min-h-screen text-white bg-linear-to-b from-black via-black/90 to-black">
      <section className="p-6 max-w-7xl mx-auto">
        <ul className="space-y-4 list-disc">
          {albums.map(album => (
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
  );
}
