
// actionTypes
export const PATH_CHANGE_NAME = 'PATH_CHANGE_NAME'
export const PATH_CHANGE_CATEGORY = 'PATH_CHANGE_CATEGORY'
export const PATH_CHANGE_SUBCATEGORY = 'PATH_CHANGE_SUBCATEGORY'
export const PATH_CHANGE_SKILL = 'PATH_CHANGE_SKILL'

export const PATH_CHANGE_DESCRIPTION = 'PATH_CHANGE_DESCRIPTION'
export const PATH_CHANGE_NECESSARY_SKILLS = 'PATH_CHANGE_NECESSARY_SKILLS'
export const PATH_CHANGE_NECESSARY_STUFF = 'PATH_CHANGE_NECESSARY_STUFF'

export const PATH_ADD_BASIC_ADVICE = 'PATH_ADD_BASIC_ADVICE'
export const PATH_CHANGE_BASIC_ADVICE = 'PATH_CHANGE_BASIC_ADVICE'
export const PATH_REMOVE_BASIC_ADVICE = 'PATH_REMOVE_BASIC_ADVICE'
export const PATH_ADD_NEW_DAY = 'PATH_ADD_NEW_DAY'
export const PATH_CHANGE_DAY = 'PATH_CHANGE_DAY'
export const PATH_REMOVE_DAY = 'PATH_REMOVE_DAY'

export const PATH_EDITOR_TO_EMPTY_ALL = 'PATH_EDITOR_TO_EMPTY_ALL'

const initialState = {
   path_name: null,
   path_category: null,
   path_subcategory: null,
   path_skill: null,
   path_description: null,
   path_necessary_skills: null,
   path_necessary_stuff: null,
   path_basic_advices: [{ index: '0', value: '' }],
   days: []
}


const pathEditorReducer = (state = initialState, action) => {

   switch (action.type) {
      case PATH_CHANGE_NAME:
         return { ...state, path_name: action.payload }

      case PATH_CHANGE_CATEGORY:
         return { ...state, path_category: action.payload }

      case PATH_CHANGE_SUBCATEGORY:
         return { ...state, path_subcategory: action.payload }

      case PATH_CHANGE_SKILL:
         return { ...state, path_skill: action.payload }



      case PATH_CHANGE_DESCRIPTION:
         return { ...state, path_description: action.payload }

      case PATH_CHANGE_NECESSARY_SKILLS:
         return { ...state, path_necessary_skills: action.payload }

      case PATH_CHANGE_NECESSARY_STUFF:
         return { ...state, path_necessary_stuff: action.payload }




      case PATH_ADD_BASIC_ADVICE:
         return { ...state, path_basic_advices: [...state.path_basic_advices, action.payload] }

      case PATH_CHANGE_BASIC_ADVICE:
         return {
            ...state, path_basic_advices: state.path_basic_advices.map(el => {
               if (el.index === action.payload.index) {
                  return action.payload
               }
               return el
            })
         }

      case PATH_REMOVE_BASIC_ADVICE:
         return { ...state, path_basic_advices: state.path_basic_advices.filter(el => el.index !== action.payload) }


      // Добавить новый день в days
      case PATH_ADD_NEW_DAY:
         if (action.payload?.repetition > 0) {
            const rep = Number(action.payload?.repetition)

            let arrOfDays = []
            for (let i = 1; i <= rep; i++) {

               arrOfDays.push({
                  day: action.payload.day - 1 + i,
                  index: action.payload.index - 1 + i,
                  plans: action.payload.plans,
                  time: { time: action.payload.time, typeOfTime: action.payload.typeOfTime },
                  advices: action.payload.advices
               })
            }

            return {
               ...state, days: [...state.days.concat(arrOfDays)]
            }

         } else {
            return {
               ...state, days: [...state.days, {
                  day: action.payload.day,
                  index: action.payload.index,
                  plans: action.payload.plans,
                  time: { time: action.payload.time, typeOfTime: action.payload.typeOfTime },
                  advices: action.payload.advices
               }]
            }
         }

      case PATH_CHANGE_DAY:
         return {
            ...state, days: state.days.map(el => {

               if (el.index === action.payload.openDayIndex) {
                  return {
                     ...el,
                     plans: action.payload.plans,
                     time: { time: action.payload.time, typeOfTime: action.payload.typeOfTime },
                     advices: action.payload.advices,
                     repetition: action.payload.repetition
                  }
               }
               return el
            })

         }


      case PATH_REMOVE_DAY:

         let flag = false
         return {
            ...state, days: state.days.reduce((newArr, oneDay) => {

               if (flag) {

                  oneDay.day -= 1
                  oneDay.index -= 1

                  newArr.push(oneDay)
                  return newArr
               }
               else if (oneDay.index === action.payload) {
                  flag = true
                  return newArr
               }
               else {
                  newArr.push(oneDay)
                  return newArr
               }

            }, [])
         }

      case PATH_EDITOR_TO_EMPTY_ALL:

         return {
            path_name: null,
            path_category: null,
            path_subcategory: null,
            path_skill: null,
            path_description: null,
            path_necessary_skills: null,
            path_necessary_stuff: null,
            path_basic_advices: [{ index: '0', value: '' }],
            days: []
         }




      default:
         return state
   }
}

export default pathEditorReducer