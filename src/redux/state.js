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
      ]
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
  addPost() {
    const newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  upateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
};

export default store;
