import { useState } from 'react';
import './App.css'
import { Sidebar, WikiPage } from './components'

export default function App() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  return (
    <div className='flex'>
      <Sidebar onSelect={(slug: string) => setSelectedSlug(slug)} />
      <main className="flex-1 p-8">
        { selectedSlug && <WikiPage slug={selectedSlug} /> }
      </main>
    </div>
  )
}

