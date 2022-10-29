import { GET_SUBCATEGORIES_FROM_DB } from '../actionTypes'


const initialState = { subcategories: [] }


const subcategoriesReducer = (state = initialState, action) => {

   switch (action.type) {
      case GET_SUBCATEGORIES_FROM_DB:
         return {...state, subcategories: action.payload}



      default:
         return state
   }
}

export default subcategoriesReducer