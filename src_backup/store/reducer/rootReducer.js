import authReducer from './authReducer';
import AddressReducer from './AddressReducer'
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    address: AddressReducer
})

export default rootReducer