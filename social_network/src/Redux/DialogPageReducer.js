const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Oleh'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Julia'},
        {id: 4, name: 'Andrew'},
    ],
    messagesData: [
        {id: 1, textMessage: "how are you?"},
        {id: 2, textMessage: "I would like to drink a cup of tea with you"}
    ]
};

const dialogPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, textMessage: body}]
            }
        }
        default: {
            return state;
        }
    }

};

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
};

export default dialogPageReducer;