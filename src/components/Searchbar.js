
import './Searchbar.css';
import React from 'react';


function Searchbar(props) {
  return (

    <div className="main" style={{marginTop:'68px'}}>
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input onChange={props.searchKey} type="text" className="form-control" placeholder="Where to next.." name="search2" />
      </div>
    </div>
  );
}

export default Searchbar;
