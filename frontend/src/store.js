import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


import { roomsAllReducer } from './reducers/roomsReducer.js'
import { 
      userLoginReducer,  
      userDetailsReducer, 
} from './reducers/userReducer'



const reducer = combineReducers({
      roomsAll: roomsAllReducer,
      userLogin: userLoginReducer,
      userDetails: userDetailsReducer,
})


const middleware = [thunk]

const store = createStore(
      reducer,
      composeWithDevTools(applyMiddleware(...middleware))
)

export default store