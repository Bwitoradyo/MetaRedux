"use strict";
import {createStore} from "redux";

// IMPORT COMBINED REDUCERS
import reducers from "./reducers/index";

//STEP 1 create the store
const store = createStore(reducers);

store.subscribe(() => {
  console.log("current state is: ", store.getState());
})

//STEP 2 create and dispatch actions
store.dispatch({
  type:"POST_BOOK",
  payload: [{
    id: 1,
    title: "this is the book title",
    description: "this is the book description",
    price: 33.33
  },
  {
    id: 2,
    title: "this is the second book title",
    description: "this is the second book description",
    price: 50
  } 
  ]
});

//DELETE a book
store.dispatch({
  type: "DELETE_BOOK",
  payload:{id:1}
})

//UPDATE a book
store.dispatch({
  type: "UPDATE_BOOK",
  payload: {
    id: 2,
    title: "Learn Metaredux Now!"
  }
})

// -->>CART ACTIONS<<--
store.dispatch({
  type: "ADD_TO_CART",
  payload: [{id:1}]
})
