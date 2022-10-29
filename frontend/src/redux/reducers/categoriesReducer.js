import { GET_CATEGORIES_FROM_DB } from '../actionTypes'


const initialState = { categories: [] }


const categoriesReducer = (state = initialState, action) => {

   switch (action.type) {
      case GET_CATEGORIES_FROM_DB:
         return {...state, categories: action.payload}



      default:
         return state
   }
}

export default categoriesReducer