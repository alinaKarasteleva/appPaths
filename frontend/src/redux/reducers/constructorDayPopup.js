import { CHANGEBLE_DAY, CONSTRUCTOR_DAY_POPUP } from '../actionTypes'


const initialState = { flag: false, openDay:  {
   day: '',
   index: '',
   plans: '',
   time: { time: '', typeOfTime: '' },
   advices: '',
   repetition: ''
}}


const constructorDayPopup = (state = initialState, action) => {

   switch (action.type) {
      case CONSTRUCTOR_DAY_POPUP:
         
         return { ...state, flag: action.payload }


      case CHANGEBLE_DAY:
         return {...state, openDay: action.payload}




      default:
         return state
   }
}

export default constructorDayPopup