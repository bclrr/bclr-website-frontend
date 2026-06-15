import './App.css'
import { Sidebar, WikiPage, Navbar } from './components'
import { useParams } from 'react-router';

export default function App() {

  const { slug } = useParams();

  return <>
    <Navbar/>
    <Sidebar/>
    <main className="mt-14 lg:ml-[calc(var(--content-offset)+16rem)] p-16">
      { slug && <WikiPage slug={slug} /> }
    </main>
  </>
}

