const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Arman'},
        {id: 2, name: 'Beka'},
        {id: 3, name: 'Zabit'}
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Good bye'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }
}

// ACTIONS
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody: newMessageBody})
export default dialogsReducer