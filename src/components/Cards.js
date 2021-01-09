import React, { useState, useEffect, useRef } from 'react';
import './Cards.css';
// import jsonData from './data.json'
import { Link } from 'react-router-dom';
import firebase from "./firebase"


function useLists() {
  const [lists, setLists] = useState([])
  useEffect(() => {
    firebase
      .firestore()
      .collection("destinations")
      .onSnapshot(snapshot => {
        const lists = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        setLists(lists)
      })
  }, [])
  return lists
}

function Cards(props) {
  const lists = useLists();
  console.log('Category rcvd in cards top=> '+props.categoryFilter);
  console.log('Location rcvd in cards top=> '+props.locationFilter);
  console.log('Searchkeyword rcvd in cards top=> '+props.searchByKey);

  const [destinations, setDestinations] = useState(function getInitialState() {
    //const lists = useLists()// expensive operation
    return lists;
  });

//componentdidupdate when categoryFilter props changes
  const isFirstUpdate = useRef(true);
  useEffect(() => {

    console.log("Props changed=> "+props.categoryFilter)

    if (isFirstUpdate.current) {
      isFirstUpdate.current = false;
      return;
    }

    setDestinations(lists.filter(v=>{
      if(v.label === props.categoryFilter){
        return v;
      }
    }));

  }, [props.categoryFilter]);
  //end

  //componentdidmount
  useEffect(() => {

    console.log("component loaded");

    if (isFirstUpdate.current) {
      isFirstUpdate.current = false;
      setDestinations(lists);
      return;
    }

    setDestinations(lists);

  },[lists]);
//end

  useEffect(() => {

    console.log("Props changed=> "+props.locationFilter)

    if (isFirstUpdate.current) {
      isFirstUpdate.current = false;
      return;
    }


    setDestinations(lists.filter(v=>{
      if(v.loc === props.locationFilter){
        return v;
      }
    }));

  }, [props.locationFilter]);
  //end

  //componentdidupdate when SesarchKeyword props changes

  useEffect(() => {

    console.log("Props changed=> "+props.searchByKey)

    if (isFirstUpdate.current) {
      isFirstUpdate.current = false;
      return;
    }

    setDestinations(lists.filter(v=>{
      if(kmpSearch(props.searchByKey.toLowerCase(), v.desc.toLowerCase()+v.loc.toLowerCase()+v.label.toLowerCase()) != -1) {
        return v;
      }
    }));

  }, [props.searchByKey]);
  //end

  //componentdidupdate when sideFilter props changes
  useEffect(() => {

    console.log("Props changed=> "+props.sideFilter)

    if (isFirstUpdate.current) {
      isFirstUpdate.current = false;
      return;
    }

    if(props.sideFilter.length < 1) {
      setDestinations(lists);
    } else {
    setDestinations(lists.filter(v=>{
      if(props.sideFilter.includes(v.label)){
        return v;
      }
    }));
  }
  }, [props.sideFilter]);
  //end

  //Search function
  function kmpSearch(pattern, text) {
    if (pattern.length == 0)
      return 0; // Immediate match

    // Compute longest suffix-prefix table
    var lsp = [0]; // Base case
    for (var i = 1; i < pattern.length; i++) {
      var j = lsp[i - 1]; // Start by assuming we're extending the previous LSP
      while (j > 0 && pattern.charAt(i) != pattern.charAt(j))
        j = lsp[j - 1];
      if (pattern.charAt(i) == pattern.charAt(j))
        j++;
      lsp.push(j);
    }

    // Walk through text string
    var j = 0; // Number of chars matched in pattern
    for (var i = 0; i < text.length; i++) {
      while (j > 0 && text.charAt(i) != pattern.charAt(j))
        j = lsp[j - 1]; // Fall back in the pattern
      if (text.charAt(i) == pattern.charAt(j)) {
        j++; // Next char matched, increment position
        if (j == pattern.length)
          return i - (j - 1);
      }
    }
    return -1; // Not found
  }


  //filter on location
  const filterBy = (e) => {
    const currentFilter = e.target.innerHTML;

      setDestinations(destinations.filter(v=>{
        if(v.loc === currentFilter){
          return v;
        }
      }));
  }

  const clearFilters = () => {
    setDestinations(function getInitialState() {
      //const lists = useLists()// expensive operation
    return lists;
    });
  }

  return (

    <>
      <div>
        <main role="main">
          <div className="album py-5">

            <div className="container">

              <div className="row" >
              {

                  destinations.map((v,i)=> {

                    return (
                      <div key={v.id} className="col-md-4 " >
                        <div className="card mb-4 shadow-sm">
                          <div className="img-hover-zoom img-hover-zoom--zoom-n-pan-v">
                            <img alt='Thumbnail' src={v.img} />
                            </div>
                          <div className="card-body">
                            <p className="card-text">
                              {v.desc}
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="btn-group">
                                <Link
                                to={v.path}
                                  type="button"
                                  className="btn btn-sm btn-success"
                                >
                                  View
                                </Link>

                              </div>
                              <span style={{cursor:"pointer"}} class="badge badge-primary" onClick={filterBy}>{v.loc}</span>
                              <span class="badge badge-secondary">{v.label}</span>

                            </div>
                          </div>
                        </div>
                      </div>

                    )
                  }

                    )}
                </div>
            </div>
          </div>
        </main>
      </div>

    </>
  );
}

export default Cards;
