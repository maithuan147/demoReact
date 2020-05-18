import React, {Component} from 'react';
import './App.css';
// import Traff from './component/Traff';
//import Click from './component/handlingEvent/Click';
// import Toogle from './component/handlingEvent/Toogle';
// import Rendering from './component/rendering/Rendering';
// import List from './component/ListsAndKey/List';
// import Form from './component/Forms/Form';
// import Contaiment from './component/contaiment/Contaiment';
import Product from './component/Product/Product';
import TodoApp from './component/toDoApp/TodoApp';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Traff /> */}
        {/* <Click />
        <Toogle />
        <Rendering />
        <List />
        <Form />
        <Contaiment /> */}
        <Product />
        <TodoApp />
      </div>
    );
  }
}

export default App;
