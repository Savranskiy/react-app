const initialState = {
    friends: [
        { id: 1, name: 'Alfred', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYmgu_zkk1mk7QiBDwRfSiG_lc5Eq_aDyTQg&usqp=CAU' },
        { id: 2, name: 'Bob', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0kz3oY9g1LBLcpWcpMjpVtJbdbEDuJDp3dg&usqp=CAU' },
        { id: 3, name: 'Clayd', avatar: 'https://static2.olympus-lifescience.com/modules/imageresizer/602/757/a7025f48fa/480x480p240x240.jpg' },
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;
