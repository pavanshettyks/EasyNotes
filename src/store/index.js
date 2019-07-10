import {createStore,applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger'
import AsyncStorage from '@react-native-community/async-storage';


import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";


const initialState = {
    data: "boooooooooom",
    nextId: 4,
    Overlay: {
        isVisible: false,
        idEditable:false,
        isNew:false,
        id: null,
        text: null,
        header: null,
    },
    notes:[{
        id: 1,
        text:"something for the time being ",
        header: "Note 1"
    },
    {
        id: 2,
        text:"somehe time being \n ddbdhbdh \n dhbebdeh",
        header: "Note 2"
    },
    {
        id: 3,
        text:"wfhfrjf \n  something for the time being ",
        header: "Note 3"
    },
]
}

const rootReducer = (state = initialState, action ) => {
   // console.log(action)
    switch(action.type){
        case 'changeTexts':
        
            return { ...state, data : "done "+state.data }

        case 'changeTextValues':
              
            return { ...state, data : action.payload }

        case 'deleteNotes':
            updated_notes = state.notes.filter(note => action.id !== note.id
            )
            return { ...state, notes : updated_notes }
        
        case 'newNote':
             New_Overlay = { 
                id: state.nextId,
                text: " ",
                header: "New Note"+ state.nextId,
                isVisible: true,
                isEditable:false,
                isNew:true,
            }
            return { ...state, Overlay: New_Overlay  }

        case 'camNote':
                New_Overlay = { 
                   id: state.nextId,
                   text: action.payload,
                   header: "New Note "+ state.nextId,
                   isVisible: true,
                   isEditable:true,
                   isNew: true,
            }
            return { ...state, Overlay: New_Overlay  }
        
        case 'saveNote':
            New_Overlay = { 
                    id: null,
                    text: null,
                    header: null,
                    isVisible: false,
                    isEditable:false,
                    isNew: false,
            }
            new_notes = [ ...state.notes, action.note ]
            return {...state, nextId: state.nextId+1, Overlay: New_Overlay, notes : new_notes  } 
        
        case 'updateNote':
        New_Overlay = { 
            id: null,
            text: null,
            header: null,
            isVisible: false,
            idEditable:false,
            isNew:false,
        }
        updated_notes = state.notes.map(note => {
            if(note.id == action.note.id ){
                note.text = action.note.text;
             
            }
            return note;
        })
        //updated_notes = [ ...state.notes, action.note ]


        return {...state, Overlay: New_Overlay, notes : updated_notes  } 

        
        case 'showOverlays':
            New_Overlay = { 
                id: action.Overlay.id,
                text: action.Overlay.text,
                header: action.Overlay.header,
                isVisible: true,
                isEditable:false,
                isNew:false,
            }
            return { ...state, Overlay: New_Overlay  }

        case 'HideOverlays':
            New_Overlay = { 
                    id: null,
                    text: null,
                    header: null,
                    isVisible: false,
                    isEditable:false,
                    isNew:false,
            }
            return { ...state, Overlay: New_Overlay  }

        case 'ChangeText':
            New_Overlay = { 
                    ...state.Overlay,
                    text: action.text,
                    
            }
            return { ...state, Overlay: New_Overlay  }

        case 'makeEditable':
            New_Overlay = { 
                        ...state.Overlay,
                        isEditable: true,
                        
            }
        return { ...state, Overlay: New_Overlay  }
        

    }
    return state
}

const persistConfig = {
    key: "root", // name of the key for storing the data
    storage // storage to use. defaults to AsyncStorage
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

//export default store = createStore(rootReducer,applyMiddleware(loggerMiddleware)) ;

const store = createStore(
    persistedReducer,
    applyMiddleware(loggerMiddleware),
  );
  // Middleware: Redux Persist Persister
  let persistor = persistStore(store);
  // Exports
  export {
    store,
    persistor,
  };
