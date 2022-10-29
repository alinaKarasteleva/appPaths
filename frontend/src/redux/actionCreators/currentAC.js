import { CURRENT_CATEGORY, CURRENT_PATH, CURRENT_SKILL, CURRENT_SUBCATEGORY, DELETE_CURRENT_CATEGORY, DELETE_CURRENT_PATH, DELETE_CURRENT_SKILL, DELETE_CURRENT_SUBCATEGORY } from "../actionTypes"


export const currentCategoryAC = (payload) => {
   return {
      type: CURRENT_CATEGORY,
      payload
   }
}

export const deleteCurrentCategoryAC = (payload) => {
   return {
      type: DELETE_CURRENT_CATEGORY,
      payload
   }
}

export const currentSubcategoryAC = (payload) => {
   return {
      type: CURRENT_SUBCATEGORY,
      payload
   }
}

export const deleteCurrentSubcategoryAC = (payload) => {
   return {
      type: DELETE_CURRENT_SUBCATEGORY,
      payload
   }
}

export const currentSkillAC = (payload) => {
   return {
      type: CURRENT_SKILL,
      payload
   }
}

export const deleteCurrentSkillAC = (payload) => {
   return {
      type: DELETE_CURRENT_SKILL,
      payload
   }
}

export const currentPathAC = (payload) => {
   return {
      type: CURRENT_PATH,
      payload
   }
}

export const deleteCurrentPathAC = (payload) => {
   return {
      type: DELETE_CURRENT_PATH,
      payload
   }
}