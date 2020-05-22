const initState = {
  projects: [
              {id: '1', title:'help me find mango', content:'laa laa la lala laa laa la lala'},
              {id: '2', title:'collect all the stars', content:'laa laa la lala laa laa la lala'},
              {id: '3', title:'play pool when in Mumbai', content:'laa laa la lala laa laa la lala'}
  ]
}

const projectReducer = (state = initState, action)=>{
  switch(action.type){
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.e);
      return state;
    default:
      return state;
  } 
}
export default projectReducer;