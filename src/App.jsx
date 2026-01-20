import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import Login from './pages/login'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
      </Switch>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App




