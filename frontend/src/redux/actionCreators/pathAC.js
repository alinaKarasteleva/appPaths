import { PATH_ADD_BASIC_ADVICE, PATH_ADD_NEW_DAY, PATH_CHANGE_BASIC_ADVICE, PATH_CHANGE_CATEGORY, PATH_CHANGE_DAY, PATH_CHANGE_DESCRIPTION, PATH_CHANGE_NAME, PATH_CHANGE_NECESSARY_SKILLS, PATH_CHANGE_NECESSARY_STUFF, PATH_CHANGE_SKILL, PATH_CHANGE_SUBCATEGORY, PATH_EDITOR_TO_EMPTY_ALL, PATH_REMOVE_BASIC_ADVICE, PATH_REMOVE_DAY } from "../reducers/pathEditorReducer"


export const pathChangeNameAC = (payload) => {
   return {
      type: PATH_CHANGE_NAME,
      payload
   }
}

export const pathChangeCategoryAC = (payload) => {
   return {
      type: PATH_CHANGE_CATEGORY,
      payload
   }
}

export const pathChangeSubcategoryAC = (payload) => {
   return {
      type: PATH_CHANGE_SUBCATEGORY,
      payload
   }
}


export const pathChangeSkillAC = (payload) => {
   return {
      type: PATH_CHANGE_SKILL,
      payload
   }
}

export const pathChangeDescriptionAC = (payload) => {
   return {
      type: PATH_CHANGE_DESCRIPTION,
      payload
   }
}

export const pathChangeNecessarySkillsAC = (payload) => {
   return {
      type: PATH_CHANGE_NECESSARY_SKILLS,
      payload
   }
}

export const pathChangeNecessaryStuffAC = (payload) => {
   return {
      type: PATH_CHANGE_NECESSARY_STUFF,
      payload
   }
}

export const pathAddBasicAdviceAC = (payload) => {
   return {
      type: PATH_ADD_BASIC_ADVICE,
      payload
   }
}

export const pathChangeBasicAdviceAC = (payload) => {
   return {
      type: PATH_CHANGE_BASIC_ADVICE,
      payload
   }
}

export const pathRemoveBasicAdviceAC = (payload) => {
   return {
      type: PATH_REMOVE_BASIC_ADVICE,
      payload
   }
}

export const pathAddNewDayAC = (payload) => {
   return {
      type: PATH_ADD_NEW_DAY,
      payload
   }
}

export const pathChangeDayAC = (payload) => {
   return {
      type: PATH_CHANGE_DAY,
      payload
   }
}

export const pathRemoveDayAC = (payload) => {
   return {
      type: PATH_REMOVE_DAY,
      payload
   }
}

export const pathEditorToEmptyAllAC = (payload) => {
   return {
      type: PATH_EDITOR_TO_EMPTY_ALL,
      payload
   }
}