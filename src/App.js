import React, {useState} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App(props) {


  const [searchKeyword, setSearchKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');

  const filterOnLocation = (e)=>{
    console.log("Category in app=> ",e.target.innerHTML)
    setLocation(e.target.innerHTML);
  }

  const searchByKeyword = (e)=>{
    console.log(e.target.value);
    setSearchKeyword(e.target.value);
    console.log("After setting",searchKeyword);
  }

  const filterOnCategory = (e)=>{
    console.log("Category in app=> ",e.target.innerHTML)
    setCategory(e.target.innerHTML);
  }

  return (
    <>
      <Router>
        <Navbar filterOnCategory={filterOnCategory} filterOnLocation={filterOnLocation} searchByKey={searchByKeyword}  />

        <Switch>
          <Route path='/'
            exact
            render={() => (
              <Home categoryFilter={category} locationFilter={location} searchByKey={searchKeyword}/>
            )}
          />

          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
