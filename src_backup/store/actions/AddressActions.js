export const AddAddress = (address) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const userId =  getState().firebase.auth.uid

        firestore.collection('address').add({
            ...address,
            userFirstName: profile.firstName,
            userLastName: profile.lastName,
            userId: userId,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'ADD_ADDRESS', address})
        }).catch((err) => {
            dispatch({type: 'ADD_ADDRESS_ERROR', err})
        })
    }
}