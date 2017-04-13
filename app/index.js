import{ createStore } from 'redux'
import reducer from  './reducer'
import render from './render'

console.log('Wuz up?');

const store = createStore( reducer,
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(store);

 const newShirtDiv = document.querySelector('#input')
 newShirtDiv.querySelector('#submit_input').onclick=()=>{
   store.dispatch({
     type: 'SHIRT@ADD',
     color: newShirtDiv.querySelector('.color input').value,
     size: newShirtDiv.querySelector('.size').value,
     motto: newShirtDiv.querySelector('#motto').value
   })
 }

 document.querySelector('#remove').onclick = () => store.dispatch({
      type: 'SHIRT@REMOVE',
      id: parseInt(document.querySelector('#id').value)})

store.subscribe( () => {
  console.log("store.getState();", store.getState())
  render(store.getState())
})

console.clear();
