import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/HomePage/Home'
import Footer from './components/pages/Footer/Footer'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home} ></Route>
      </Switch>
      <Footer></Footer>
    </Router>
  )
}

export default App
