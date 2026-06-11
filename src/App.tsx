import './App.css'
import { Sidebar, WikiPage } from './components'
import { useParams } from 'react-router';

export default function App() {

  const { slug } = useParams();

  return (
    <div className='flex'>
      <Sidebar/>
      <main className="flex-1 p-8">
        { slug && <WikiPage slug={slug} /> }
      </main>
    </div>
  )
}

