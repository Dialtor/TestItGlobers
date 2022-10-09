import { Route, Switch } from 'react-router-dom'
import { BookView, Home } from './screens'

function App() {

  return (
    <Switch>
      <Route path={"/"} exact>
          <Home/>
      </Route>
      <Route path={"/BookView/:id"}>
        <BookView/>
      </Route>
    </Switch>
  )
}

export default App
