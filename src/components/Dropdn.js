
import React from 'react';





function Dropdn(props) {
    
  return (

    <div className="btn-group">
          <button type="button" style={{color: 'rgb(204, 0, 82)'}} className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Categories
          </button>
          <div className="dropdown-menu">
            {
              props.items.map((i)=>{
                return <a className="dropdown-item" onClick={props.filterByCategory}>{i}</a>
              })
            }
          </div>


          

          <div className="btn-group">
          <button type="button" style={{color: 'rgb(204, 0, 82)'}} className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Destinations
          </button>
          <div className="dropdown-menu">
            {
              props.places.map((i)=>{
                return <a className="dropdown-item" onClick={props.filterByLocation}>{i}</a>
              })
            }
          </div>
          </div>
    </div>
    

  );
}

export default Dropdn;
