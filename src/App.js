// import logo from './logo.svg';
// import './App.css';
// import { DISHES } from './shared/dishes';
// import Menu from './components/Menu';
// import MenuComponent from './components/MenuComponent';
// import ToDoList from './components/ToDoList'; 
// import Calculator from './components/Calculator';
// import AboutMe from './components/AboutMe';
import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';


const store = ConfigureStore();

// import React, { useState } from 'react';
// import DishDetail from './components/DishDetailComponent';

// function App() {
//   const [dishes, setDishes] = useState (DISHES);
  
//   const companies = [
//     { name: "Company One", category: "Finance", start: 1981, end: 2004 },
//     { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//     { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//     { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//     { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//     { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//     { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//     { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//     { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
//   ];
  
//   const CompanyName = companies.filter(Company => Company.category.localeCompare("Retail") == 0)
//   const CompanyName1 = companies.filter(Company => Company.start > 1987)
//   return (
//     <div className='App'>
//       <Main />
//        </div>
//   )}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
