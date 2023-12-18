import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom'
import { DataProvider } from './ContextApi/DataContext.jsx'
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider 
    domain="dev-5zzsq2r86mc2xvpx.us.auth0.com"
    clientId="Vj1g73MAHcNmwfCnzwoNYoFNlNNK7jn6"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
     <DataProvider>
       <BrowserRouter>
        <App />
      </BrowserRouter>
     </DataProvider>
    </Auth0Provider>
    
    
  </React.StrictMode>,
)
