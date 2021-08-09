## 1 - Installar react-router-dom

```js
npm install react-router-dom
```

## 2 - Crear Componente Router

```js
const AppRouter = () => {
    return (
        <div>
            Router
        </div>
    )
}
export default AppRouter;
```

## 3 - Importamos en componente a donde se va a mostrar router

### En este caso lo renderizamos en APP

```js
import './App.css';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className="App">
      <h1>Henry Countries</h1>
      <AppRouter/>
    </div>
  );
}

export default App;
```

## 3 - Importamos BrowserRouter

### En este caso lo AppRouter

```js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Countries}/>
            </Switch>
        </Router>
    )
}
export default AppRouter;
```

