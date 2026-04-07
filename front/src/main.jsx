import { StrictMode } from 'react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import AuthContext from './context/AuthContext.jsx'
import {Provider} from 'react-redux'
import {configureStore,combineReducers} from '@reduxjs/toolkit'
import  cartReducer from './Redux/CartSlice'

let rootReducer = combineReducers({cartReducer})

let store= configureStore({
  reducer : rootReducer
})


const Layout = ()=>{

  let isUserLoggedIn = useState(localStorage.getItem("access_user") ? true : false);
  return(
    <Provider store={store}>

    <AuthContext.Provider value={isUserLoggedIn}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </AuthContext.Provider>
    </Provider>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
<Layout/>
  </StrictMode>
)
