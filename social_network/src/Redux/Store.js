import profilePageReducer from "./ProfilePageReducer";
import dialogPageReducer from "./DialogPageReducer";

let store = {
    _state:{
        profilePage: {
            postsData: [
                {id: 1, message: "hello, i am new in this messenger"},
                {id: 2, message: "I am glad"}
            ],
            newPostText: 'bla-bla-bla'
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Oleh'},
                {id: 2, name: 'Masha'},
                {id: 3, name: 'Julia'},
                {id: 4, name: 'Andrew'},
            ],
            messagesData: [
                {id: 1, textMessage: "how are you?"},
                {id: 2, textMessage: "I would like to drink a cup of tea with you"}
            ],
            newMessageBody: "hello everyone"
        }
    },
    _callSubscriber() {
        console.log('state is changed');
    },
    getState() {
      return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogPageReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }

};




export default store;
window.state=store;