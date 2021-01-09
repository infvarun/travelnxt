import React, { useState, useEffect } from "react"
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

const FireTest = () => {
  const lists = useLists()
  console.log(lists);

  return (
    <div>
      {lists.map(list => {
        return (
          <ul>
            <li>sndjkf</li>
          </ul>
        )
      })}
    </div>
  )
}
export default FireTest;