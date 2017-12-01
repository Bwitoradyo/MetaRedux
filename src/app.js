"use strict";
import {createStore} from "redux";

//STEP 3 define reducers
const reducer = (state = {books:[]}, action) => {
  switch(action.type){
    case "POST_BOOK":
    return {books:[...state.books, ...action.payload]};
    break;
  }
  return state
}

//STEP 1 create the store
const store = createStore(reducer);

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

store.dispatch({
  type: "POST_BOOK",
  payload:[{
    id:3,
    title:"this is the third book title",
    description: "this is the third book description",
    price: 44
  }]
})
