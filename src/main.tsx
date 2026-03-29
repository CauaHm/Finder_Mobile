import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx' // Importe o Provider
import './styles/Global.css'
import './styles/Theme.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider> {/* Adicione aqui */}
      <App />
    </AuthProvider> {/* Feche aqui */}
  </StrictMode>,
)