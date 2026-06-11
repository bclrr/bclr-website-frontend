import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import './index.css'
import App from './App.tsx'
import { SignIn } from './components'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Navigate to="wiki"></Navigate>}/>
      <Route path='wiki'>
        <Route index element={<App/>}/>
        <Route path=":slug" element={<App/>}/>
      </Route>
      <Route path='auth'>
        <Route index element={<SignIn/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
