import React, { useState, useEffect, useRef } from 'react';
import '../../App.css';
import '../pages/Home.css';
import SideFilter from '../SideFilter';
import FireTest from '../FireTest';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';



function Home(props) {
  //console.log('Category rcvd in home=> '+props.categoryFilter);
  //console.log('Location rcvd in home=> '+props.locationFilter);

  //console.log('Searchkeyword rcvd in home=> '+props.searchByKey);
  const [sideFilter, setsideFilter] = useState([]);

  //filteroncat ka hanbdler
  const filterOnCategory = (e)=>{
    console.log("Category in home on checkbox=> ",e.target.value)
    if(sideFilter.length < 1){
      const tempSideFilter = [];
      tempSideFilter.push(e.target.value);
      setsideFilter(tempSideFilter);
      return;
    }

    if(sideFilter.includes(e.target.value)){
      const index = sideFilter.indexOf(e.target.value);
      // below will remove element from array
      if (index > -1) {
        const tempSideFilter = [...sideFilter];
        tempSideFilter.splice(index, 1);
        setsideFilter(tempSideFilter);
      }
    } else{
      const tempSideFilter = [...sideFilter];
      tempSideFilter.push(e.target.value);
      setsideFilter(tempSideFilter);
    }
  }

  return (
    <>
    <div >
      <div className="row">
        <div className="col-3" >
          <SideFilter filterByCategory={filterOnCategory} items={['Adrenaline', 'Adventure', 'Mystery', 'Luxury','Peace']}/>
        </div>
        <div className="col-9">
          <Cards {...props } sideFilter={sideFilter}/>
        </div>
      </div>
    </div>

    <Footer />
    </>
  );
}

export default Home;
