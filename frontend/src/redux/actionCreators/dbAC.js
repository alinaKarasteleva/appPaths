import {
   GET_CATEGORIES_FROM_DB,
   GET_SUBCATEGORIES_FROM_DB,
   GET_SKILLS_FROM_DB,
   GET_PATHS_FROM_DB,
   SAGA_FETCH_CATEGORIES,
   SAGA_FETCH_SUBCATEGORIES,
   SAGA_FETCH_SKILLS,
   SAGA_FETCH_PATHS,
} from "../actionTypes"


export const getCategoriesFromDBAC = (payload) => {
   return {
      type: GET_CATEGORIES_FROM_DB,
      payload
   }
}

export const sagaCategoriesFromDBAC = () => {
   return {
      type: SAGA_FETCH_CATEGORIES
   }
}

export const getSubcategoriesFromDBAC = (payload) => {
   return {
      type: GET_SUBCATEGORIES_FROM_DB,
      payload
   }
}

export const sagaSubategoriesFromDBAC = () => {
   return {
      type: SAGA_FETCH_SUBCATEGORIES
   }
}

export const getSkillsFromDBAC = (payload) => {
   return {
      type: GET_SKILLS_FROM_DB,
      payload
   }
}

export const sagaSkillsFromDBAC = () => {
   return {
      type: SAGA_FETCH_SKILLS
   }
}

export const getPathsFromDBAC = (payload) => {
   return {
      type: GET_PATHS_FROM_DB,
      payload
   }
}

export const sagaPathsFromDBAC = () => {
   return {
      type: SAGA_FETCH_PATHS
   }
}