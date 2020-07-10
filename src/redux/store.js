import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import sidebarReducer from "./reducers/sidebarReducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It\'s my first post!', likesCount: 11 },
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Alfred' },
                { id: 2, name: 'Bob' },
                { id: 3, name: 'Clayd' }
            ],
            messages: [
                { id: 1, message: 'msg 1' },
                { id: 2, message: 'msg 2' },
                { id: 3, message: 'msg 3' }
            ],
            newMessageBody: ''
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Alfred', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYmgu_zkk1mk7QiBDwRfSiG_lc5Eq_aDyTQg&usqp=CAU' },
                { id: 2, name: 'Bob', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0kz3oY9g1LBLcpWcpMjpVtJbdbEDuJDp3dg&usqp=CAU' },
                { id: 3, name: 'Clayd', avatar: 'https://static2.olympus-lifescience.com/modules/imageresizer/602/757/a7025f48fa/480x480p240x240.jpg' },
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;
