const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 10},
        {id: 2, message: 'How are you', likesCount: 12}
    ],
    newPostText: 'it-hub',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = { // Тут создается новый элемент массива state
                id: 5,
                message: state.newPostText,//newPostText это текст который мы обновили в ЭКШНЕ updateNewPostTextActionCreator
                likesCount: 17
            };
            return {  // Возвращаем уже новый state, и в него добавляем новый элемент newPost
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: { //Обновляет вводимые данные
            return {
                ...state,
                newPostText: action.newText // в свойство newPostText из объекта state, мы присваиваем значение из newText, которое содержит text из MyPosts
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

// Action-ы которые передаются в метод dispatch
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})// в свойстве newText содержится text из updateNewPostText, а точнее text из MyPosts
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})
export default profileReducer