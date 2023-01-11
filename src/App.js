import { useReducer } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';

function App() {
  const store = createStore(useReducer)
  return (
   <Provider store={store}>

   </Provider>
  );
}

export default App;
