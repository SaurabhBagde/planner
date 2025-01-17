const initState = {
    authError: null
}

const authReducer = (state = initState, action)=>{
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('Login failed...');
            return{
                ...state,
                authError: 'Login Failed...'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login success...');
            return{
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Sign Out success...');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('Sign Up success...'); 
            return{
                ...state,
                authError: null
            }
         case 'SIGNUP_ERROR':
            console.log('Signup failed...');
            return{
                ...state,
                authError: action.e.message
            }
        default:
            return state;
    }
}
export default authReducer;