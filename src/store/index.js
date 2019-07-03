import {createStore,applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger'

const initialState = {
    data: "boooooooooom",
    nextId: 4,
    Overlay: {
        isVisible: false,
        
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
            }
            return { ...state, Overlay: New_Overlay  }
        
        case 'saveNote':
            New_Overlay = { 
                    id: null,
                    text: null,
                    header: null,
                    isVisible: false,
            }
            new_notes = [ ...state.notes, action.note ]
            return {...state, nextId: state.nextId+1, Overlay: New_Overlay, notes : new_notes  } 

        case 'showOverlays':
            New_Overlay = { 
                id: action.Overlay.id,
                text: action.Overlay.text,
                header: action.Overlay.header,
                isVisible: true,
            }
            return { ...state, Overlay: New_Overlay  }
        case 'HideOverlays':
            New_Overlay = { 
                    id: null,
                    text: null,
                    header: null,
                    isVisible: false,
            }
            return { ...state, Overlay: New_Overlay  }
        case 'ChangeText':
            New_Overlay = { 
                    ...state.Overlay,
                    text: action.text,
                    
            }
            return { ...state, Overlay: New_Overlay  }
        

    }
    return state
}

export default store = createStore(rootReducer,applyMiddleware(loggerMiddleware)) ;