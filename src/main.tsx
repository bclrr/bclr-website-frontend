import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import './index.css'
import App from './App.tsx'
import { SignIn, SignUp } from './components'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Navigate to="wiki"/>}/>
      <Route path='wiki'>
        <Route index element={<App/>}/>
        <Route path=":slug" element={<App/>}/>
      </Route>
      <Route path='auth'>
        <Route index element={<Navigate to="login"/>}/>
        <Route path='login' element={<SignIn/>}/>
        <Route path='register' element={<SignUp/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
