import {createStore,applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger'

const initialState = {
    data: "boooooooooom",
}

const rootReducer = (state = initialState, action ) => {
   // console.log(action)
    switch(action.type){
        case 'changeTexts':
        
            return { data : "done "+state.data }
        case 'changeTextValues':
              
            return { data : action.payload }
    }
    return state
}

export default store = createStore(rootReducer,applyMiddleware(loggerMiddleware)) ;