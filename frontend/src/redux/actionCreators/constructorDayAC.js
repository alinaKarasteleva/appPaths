import { CHANGEBLE_DAY, CONSTRUCTOR_DAY_POPUP } from "../actionTypes"


export const constructorDayPopupAC = (payload) => {
   return {
      type: CONSTRUCTOR_DAY_POPUP,
      payload
   }
}

export const changebleDayAC = (payload) => {
   return {
      type: CHANGEBLE_DAY,
      payload
   }
}