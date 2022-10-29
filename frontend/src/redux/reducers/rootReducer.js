import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import subcategoriesReducer from "./subcategoriesReducer";
import skillsReducer from "./skillsReducer";
import pathsReducer from "./pathsReducer";
import currentReducer from "./currentReducer";
import pathEditorReducer from "./pathEditorReducer";
import constructorDayPopup from "./constructorDayPopup";



const rootReducer = combineReducers({
   categoriesReducer,
   subcategoriesReducer,
   skillsReducer,
   pathsReducer,
   currentReducer,
   pathEditorReducer,
   constructorDayPopup

})

export default rootReducer

