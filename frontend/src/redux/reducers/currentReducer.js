import { 
   CURRENT_CATEGORY, 
   CURRENT_SUBCATEGORY, 
   CURRENT_SKILL, 
   CURRENT_PATH, 
   DELETE_CURRENT_CATEGORY, 
   DELETE_CURRENT_SUBCATEGORY, 
   DELETE_CURRENT_SKILL, 
   DELETE_CURRENT_PATH } from "../actionTypes"


const initialState = { category: {}, subcategory: {}, skill: {}, path: {} }

const currentReducer = (state = initialState, action) => {

   switch (action.type) {

      // Добавление 
      case CURRENT_CATEGORY:
         return { ...state, category: action.payload }

      case CURRENT_SUBCATEGORY:
         return { ...state, subcategory: action.payload }

      case CURRENT_SKILL:
         return { ...state, skill: action.payload }

      case CURRENT_PATH:
         return { ...state, path: action.payload }

      // Удаление
      case DELETE_CURRENT_CATEGORY:
         return { ...state, category: {} }

      case DELETE_CURRENT_SUBCATEGORY:
         return { ...state, subcategory: {} }

      case DELETE_CURRENT_SKILL:
         return { ...state, skill: {} }

      case DELETE_CURRENT_PATH:
         return { ...state, path: {} }


      default:
         return state
   }
}

export default currentReducer