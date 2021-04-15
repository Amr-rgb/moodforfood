import Filter from "./components/Filter";
import Header from "./components/Header";
import Random from './components/Random'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path='/'>
              <Filter />
            </Route>
            <Route exact path='/random'>
              <Random />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
