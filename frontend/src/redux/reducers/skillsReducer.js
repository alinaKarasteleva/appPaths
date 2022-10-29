import { GET_SKILLS_FROM_DB } from '../actionTypes'


const initialState = { skills: [] }


const skillsReducer = (state = initialState, action) => {

   switch (action.type) {
      case GET_SKILLS_FROM_DB:
         return {...state, skills:action.payload}



      default:
         return state
   }
}

export default skillsReducer