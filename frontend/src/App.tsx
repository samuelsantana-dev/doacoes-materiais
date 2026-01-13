import './App.css'
// Routes
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
// Components
import { Header } from './components/layout/Header';

function App() {

  return (
     <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
