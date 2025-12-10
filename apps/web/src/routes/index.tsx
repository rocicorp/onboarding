import {createFileRoute} from '@tanstack/react-router';

export const Route = createFileRoute('/')({component: App});

function App() {
  return (
    <div className="min-h-screen text-white bg-linear-to-b from-black via-black/90 to-black">
      <section className="p-6 max-w-7xl mx-auto">Start coding!</section>
    </div>
  );
}
