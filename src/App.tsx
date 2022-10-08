import { Route, Switch } from 'react-router-dom'
import { Home } from './screens'

function App() {

  return (
    <Switch>
      <Route path={"/"} exact>
          <Home/>
      </Route>
    </Switch>
  )
}

export default App
