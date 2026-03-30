import { StrictMode } from 'react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import AuthContext from './context/AuthContext.jsx'


const Layout = ()=>{

  let isUserLoggedIn = useState(localStorage.getItem("access_user") ? true : false);
  return(
    <AuthContext.Provider value={isUserLoggedIn}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
<Layout/>
  </StrictMode>
)
