import { useState } from 'react';
import './App.css'
import { WikiPage, WikiPageList } from './components'

export default function App() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  return (
    <div>
      <WikiPageList onSelect={(slug: string) => setSelectedSlug(slug)} />
      {selectedSlug && <WikiPage slug={selectedSlug} />}
    </div>
  )
}

