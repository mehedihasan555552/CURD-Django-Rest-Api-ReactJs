import './App.css';
import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    
    <Router>
       <div className="App">
       <Navbar/>

        <Switch>
     
     

        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/adduser" component={AddUser}/>
        <Route exact path="/edituser/:id" component={EditUser}/>

        </Switch>
      
     
      </div>

     
      

    </Router>
    
  );
}

export default App;
