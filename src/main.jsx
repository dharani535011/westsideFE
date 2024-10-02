
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Othercontext from './Components/Othercontext.jsx'

createRoot(document.getElementById('root')).render(
  <Othercontext>
    <App />
    </Othercontext>
 ,
)
