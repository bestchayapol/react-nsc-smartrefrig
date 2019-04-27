const initstate = {
    address: [
        {id: '1', name: 'chayapol mahatthanachai',  phone: '0835753909', address: '270/48 tarina chiang mai'},
        {id: '2', name: 'jame bourer',  phone: '0885443902', address: '130/14 nongjom chiang mai'},
        {id: '3', name: 'smither kitchen',  phone: '0814535902', address: '144/48 nonghoi chiang mai'}
    ]
}

const AddressReducer = (state = initstate, action) => {
    switch(action.type) {
        case 'ADD_ADDRESS':
            console.log('add address', action.address);
            return state
        case 'ADD_ADDRESS_ERROR':
            console.log('add address error', action.err);
            return state
        default:
            return state
    }
}

export default AddressReducer