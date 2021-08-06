<h1>Repositorio para el estudio de react-redux con funciones.</h1>
Crear acciones (preferiblement con constantes).

```
const INCREMENTAR = 'INCREMENTAR';
const DECREMENTAR = 'DECREMENTAR';
```

Las actions (acciones) son las funciones que se van a pasar al reductor (reducer). Se exportan porque se van a usar para modificar el estado en el componente que lo necesite.


```
export const incrementar = (cant)=>{
    return {
        type: INCREMENTAR,
        payload:cant
    }
}
export const decrementar = (cant)=>{
    return {
        type:DECREMENTAR,
        payload:cant
    }
}
```

Reducer

1-Se crea un estado inicial

```
const initialState = {
    contador:25,
}
```

2- Se crea la funcion reductora

```
function numReducer(state = initialState, action){
    switch(action.type){
        case INCREMENTAR:
            return {
                ...state,
                contador: state.contador - action.payload
            }
        case DECREMENTAR:
            return{
                ...state,
                contador: state.contador + action.payload
            }
        default: return state
    }
}
```

Si se usaron varias funciones reducer, hay que conbinarlas, para esto usar combineReducers, hay que importarlo de redux.

```
import {combineReducers} from 'redux';
```

Para esto creamos una constantante que la llame "combinaReductores" que va a ser igual al combineReducers que recive en este caso todos las funciones reductoras destructuradas (recuerda que siempre retornan objetos). 

```
const combinaReductores = combineReducers({numReducer});
```

Creamos la store
Importamos
```
import {createStore} from 'redux';
```
Creamos la constante que yo llamo aqui "store" y la igualamos al mentodo createSotre que recibe el reducer o si se combinaron reducers, se le pasan combinados, como se hizo mas arriba. Tambien se puede agregar la herramienta para developers "Redux DevTools" (al final explico como se instala) y se le pasa el codigo como el ejemplo.

```
const store = createStore(
    combinaReductores,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
```

Al crear la store, hay que pasarle los reducers.

```
createStore(combineReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
```

"Redux DevTools"
Buscamos la herramienta para nuestro navegador, por ejemplo "https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es" la instalamos y al crear la store, hay que pasarle a createStore(combineReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

Con todo esto tenemos redux armado pero falta conectarlo.
Lo principal para compartir el estado y las acciones es envolver en provider los componentes que las van a usar, app o index, segun como se haya planteado.

Importamos Provider de react-redux, envolvemos los componentes que usaran state/actions y le pasamos por props la store.

```
import { Provider } from 'react-redux';
```

Codigo completo de App.
```
//CSS que viene por defecto
import './App.css';
//Compoente "EstadoNumeros" que tenemos creado.
import EstadoNumeros from './Components/EstadoNumeros';
//Compoente "Botones" que tenemos creado.
import Botones from './Components/Botones';
//Compoente "store" yo lo llame asi para crear todo lo externo de redux que tenemos creado.
import store from './redux/redux1';
//Compoente "Provider" que comparte estados y acciones.
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
    
      <Provider store = {store}>
        <EstadoNumeros/>
        <Botones/>
      </Provider>
    </div>
  );
}

export default App;
```

Para este caso de estudio vamos a compartir el estado con el componente "EstadoNumeros".
En este componente importaremos "connect".

```
import { connect } from 'react-redux';
```

No olvidar pasarle las "props" al componente por parametro. Abajo vemos ```{props.contador}``` este es el estado que que se quiere modificar dinamicamente.

```
const EstadoNumeros = (props)=>{    
    return (
        <div>
            {props.contador}
        </div>
    )
}
```

Como es un estado complejo que puede estar compuesto (objeto o array) puede contener distintos estados en sus partes. Este se debe recorrer para compartirlo, por convencion se hace con "mapStateToProps". Esta es una funcion que recibe el state(completo) y retorna un objeto con los estados a modificar en el componente actual.

Para este caso el estado se ve asi inicialmente:
```
state:{
    numReducer:{
        contador: 25
    }
}
```

Implementacion del mapStateToProps
```
const mapStateToProps = (state)=>{
    console.log("Estado",state)
    return{
        contador:state.numReducer.contador
    }
}
```
Al final exportamos por dafault todo, usando "connect" de la siguiente manera.
Funcion currificada (Clousure), parametro para funcion interna.
```
export default connect (mapStateToProps)(EstadoNumeros);
```

A estas alturas debemos tener el componente de la siguiente manera.

```
import { connect } from 'react-redux';
const EstadoNumeros = (props)=>{    
    return (
        <div>
            {props.contador}
        </div>
    )
}
const mapStateToProps = (state)=>{
    console.log("Estado",state)
    return{
        contador:state.numReducer.contador
    }
}
export default connect (mapStateToProps)(EstadoNumeros);
```

Componente Botones falta comentar

```
import { connect } from 'react-redux';
import {incrementar, decrementar } from '../redux/redux1';
const Botones = (props)=>{
    return (
        <div>
            <button onClick={()=>props.incrementar(1)}>Incrementar</button>
            <button onClick={()=>props.decrementar(1)}>Decrementar</button>
        </div>
    )
}

const mapDispatchToProps = {
    decrementar,
    incrementar
}
export default connect(null, mapDispatchToProps)(Botones);
```

Mi componente redux
```
import {createStore} from 'redux';
import {combineReducers} from 'redux';


//Action
const INCREMENTAR = 'INCREMENTAR';
const DECREMENTAR = 'DECREMENTAR';

//Function dipach actions
export const incrementar = (cant)=>{
    return {
        type: INCREMENTAR,
        payload:cant
    }
}

export const decrementar = (cant)=>{
    return {
        type:DECREMENTAR,
        payload:cant
    }
}
//Reducer
const initialState = {
    contador:25,
}
function numReducer(state = initialState, action){
    switch(action.type){
        case INCREMENTAR:
            return {
                ...state,
                contador: state.contador - action.payload
            }
        case DECREMENTAR:
            return{
                ...state,
                contador: state.contador + action.payload
            }
        default: return state
    }
}

//CombineReducer
const combinaReductores = combineReducers({numReducer})

//Store
const store = createStore(
    combinaReductores,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;
```

Ahora a cada componente que necesite el state (estado) y/o las actions (acciones) las vamos a conectar con la store.