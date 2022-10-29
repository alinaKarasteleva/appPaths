import { GET_PATHS_FROM_DB } from '../actionTypes'


const initialState = { paths: [] }


const pathsReducer = (state = initialState, action) => {

   switch (action.type) {
      case GET_PATHS_FROM_DB:
         return { ...state, paths: action.payload }



      default:
         return state
   }
}

export default pathsReducer