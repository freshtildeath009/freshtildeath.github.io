import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import PageRoute from './PageRoute'
import HeaderHome from './components/HeaderHome'
function App() {

  return (
    <>
      <Router>
        <HeaderHome />
        <PageRoute />
      </Router>
    </>
  )
}

export default App
