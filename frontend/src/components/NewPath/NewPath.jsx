import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SITE_URL } from '../../config';
import {
   pathChangeCategoryAC,
   pathChangeDescriptionAC,
   pathChangeNameAC,
   pathChangeNecessarySkillsAC,
   pathChangeNecessaryStuffAC,
   pathChangeSkillAC,
   pathChangeSubcategoryAC,
   pathEditorToEmptyAllAC
} from '../../redux/actionCreators/pathAC';
import InputListBasicAdvices from './BasicAdvices/InputListBasicAdvices';
import ConstructorDay from './ConstructorDay.jsx/ConstructorDay';
import DaysList from './DaysList/DaysList';
import styles from './NewPath.module.css'


function NewPath() {

   const dispatch = useDispatch()

   const [isDisabledCat, setIsDisabledCat] = useState(true)
   const [isDisabledSkill, setIsDisabledSkill] = useState(true)
   const [availableCategory, setAvailableCategory] = useState(null)
   const [availableSubcategory, setAvailableSubcategory] = useState(null)


   const categories = useSelector(state => state.categoriesReducer.categories)
   const subcategories = useSelector(state => state.subcategoriesReducer.subcategories)
   const skills = useSelector(state => state.skillsReducer.skills)
   const isConstructorDay = useSelector(state => state.constructorDayPopup.flag)

   const [totalDays, setTotalDays] = useState(0)
   const [totalTime, setTotalTime] = useState(0)
   const [totalTimeForDB, setTotalTimeForDB] = useState(0)


   const days = useSelector(state => state.pathEditorReducer.days)

   useEffect(() => {
      // записываю сколько всего дней набралось
      setTotalDays(days.length)

      // перевод минут в часы
      // достаю все в минутах, если записано в часах, то перевожу в минуты
      const totalMin = days.reduce((cul, el) => {
         const time = Number(el.time.time)
         const typeOfTime = el.time.typeOfTime
         if (typeOfTime === 'min') {
            return cul + time
         } else {
            return cul + (time * 60)
         }
      }, 0)


      // четкое время
      const toHoursAndMinutes = (totalMin) => {
         const minutes = totalMin % 60
         const hours = Math.floor(totalMin / 60)
         return `${hours.toString()}:${minutes.toString().padStart(2, '0')}`
      }

      setTotalTimeForDB(totalMin)
      setTotalTime(toHoursAndMinutes(totalMin))

   }, [days])



   const changePathName = (e) => {
      dispatch(pathChangeNameAC(e.target.value))
   }

   // добавляю/изменяю категорию и достаю ее подкатегории
   const changePathCategory = (e) => {
      dispatch(pathChangeCategoryAC(e.target.value))

      setIsDisabledCat(false)

      const thisCategory = categories.find(category => category.name_category === e.target.value)
      const id_category = thisCategory.id_category
      setAvailableCategory(subcategories.filter(subcategory => subcategory.id_category === id_category))


   }

   // добавляю/изменяю подкатегорию и достаю ее скилл
   const changePathSubcategory = (e) => {
      dispatch(pathChangeSubcategoryAC(e.target.value))

      setIsDisabledSkill(false)

      const thisSubcategory = subcategories.find(subcategory => subcategory.name_subcategory === e.target.value)
      const id_subcategory = thisSubcategory.id_subcategory
      setAvailableSubcategory(skills.filter(skill => skill.id_subcategory === id_subcategory))
   }

   const changePathSkill = (e) => {
      dispatch(pathChangeSkillAC(e.target.value))
   }

   const descriptionHanble = (e) => {
      dispatch(pathChangeDescriptionAC(e.target.value))
   }

   const necesarySkillHanble = (e) => {
      dispatch(pathChangeNecessarySkillsAC(e.target.value))
   }

   const necesaryStuffHanble = (e) => {
      dispatch(pathChangeNecessaryStuffAC(e.target.value))
   }






   // По нажатию на кнопку добавляю данные в бд--------------------------------------------------------------
   // Если не выбран скил или нет ни одного дня. 
   const [pathSkillError, setPathSKillError] = useState(false)
   const [pathDayError, setPathDayError] = useState(false)
   // Навигация для перехода на страницу с путями после создания нового пути
   const navigate = useNavigate()


   const { path_name,
      path_category,
      path_subcategory,
      path_skill,
      path_description,
      path_necessary_skills,
      path_necessary_stuff,
      path_basic_advices } = useSelector(state => state.pathEditorReducer)



   const addPathToDB = (e) => {
      e.preventDefault()

      setPathSKillError(false)
      setPathDayError(false)

      // TODO  нужно id_user, когда будет сделана регистрация

      // fetch(`http://localhost:3001/add_new_path`, {
      fetch(`${SITE_URL()}api/add_new_path`, {
         method: 'POST',
         mode: 'cors',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            path_name,
            path_skill,
            path_description,
            path_necessary_skills,
            path_necessary_stuff,
            path_basic_advices,
            days,
            path_total_days: Number(totalDays),
            path_total_time_in_min: Number(totalTimeForDB),

         })

      })
         .then(res => res.json())
         .then(data => {
            if (data.errorSkill && data.errorDay) {
               setPathSKillError(true)
               setPathDayError(true)
            }
            else if (data.errorSkill) {
               setPathSKillError(true)
            }
            else if (data.errorDay) {
               setPathDayError(true)
            }
            else {
               const forLinkCategory = categories.find(categ => categ.name_category === path_category)
               const link_category = forLinkCategory.link_name_category


               const forLinkSubcategory = subcategories.find(subcat => subcat.name_subcategory === path_subcategory)
               const link_subcategory = forLinkSubcategory.link_name_subcategory


               const forLinkSkill = skills.find(skill => skill.name_skill === path_skill)
               const link_skill = forLinkSkill.link_name_skill



               navigate(`/${link_category}/${link_subcategory}/${link_skill}`)

               // опустошаю pathEditorReducer
               dispatch(pathEditorToEmptyAllAC())
            }


         })



   }


   return (
      <div className={styles.new_path_container}>
         <div className={styles.new_path_title}>Новый путь</div>

         <form onSubmit={addPathToDB}>

            <div className={styles.path_name_container}>
               <label htmlFor="path_name" className={styles.path_name_label}>Название пути*: </label>
               <input className={styles.path_name_input} onBlur={changePathName} type="text" name="path_name" id="path_name" required />
            </div>

            <div>
               <div className={styles.selects_container}>

                  {/* category */}
                  <select className={styles.select} onChange={changePathCategory} defaultValue={'Категория'} name='category' required>
                     <option disabled hidden value={'Категория'} >Категория *</option>
                     {categories.map(category => <option key={category.id_category} value={category.name_category}>{category.name_category}</option>)}
                  </select>

                  {/* subcategory */}
                  <select className={styles.select} disabled={isDisabledCat} defaultValue={'Подкатегория'} onChange={changePathSubcategory} name='subcategory' required>
                     <option value={"Подкатегория"} disabled hidden>Подкатегория *</option>
                     {availableCategory?.map(subcategory => <option key={subcategory.id_subcategory} value={subcategory.name_subcategory}>{subcategory.name_subcategory}</option>)}
                  </select>

                  {/* skills */}
                  <select className={styles.select} disabled={isDisabledSkill} defaultValue={'Skill'} onChange={changePathSkill} name='skill' required>
                     <option value={"Skill"} disabled hidden>Навык *</option>
                     {availableSubcategory?.map(skill => <option key={skill.id_skill} value={skill.name_skill}>{skill.name_skill}</option>)}
                  </select>

               </div>
               {pathSkillError ? <div className={styles.error}>Необходимо выбрать нaвык</div> : null}

            </div>


            <div className={styles.description_container}>
               <div className={styles.description_label} >Описание:</div>
               <textarea cols="60" type="text"
                  className={styles.description_input}
                  onBlur={descriptionHanble}
                  name="description" />
            </div>


            <div className={styles.necessary_container}>

               <div className={styles.necessary_item_container}>
                  <div className={styles.necessary_label} >Необходимые навыки:</div>
                  <textarea cols="60" type="text"
                     onBlur={necesarySkillHanble}
                     className={styles.necessary_input}
                     name="necessary_skills" />
               </div>

               <div className={styles.necessary_item_container}>
                  <div className={styles.necessary_label} >Необходимые вещи:</div>
                  <textarea cols="60" type="text"
                     onBlur={necesaryStuffHanble}
                     className={styles.necessary_input}
                     name="necessary_stuff" />
               </div>

            </div>



            <div className={styles.basic_advices_container}>
               <InputListBasicAdvices />
            </div>



            <div className={styles.total_time_container}>
               <div className={styles.total_time_text}>Общее количество часов: <span className={styles.total_time}>{totalTime}</span> </div>
               <div className={styles.total_time_text}>Общее количество дней: <span className={styles.total_time}>{totalDays}</span> </div>
            </div>


            <div className={styles.days_list_container}>
               <DaysList />
            </div>

            <button type='submit' className={styles.btn_finish} >Закончить</button>
            {pathSkillError ? <div className={styles.error}>Необходимо выбрать нaвык</div> : null}
            {pathDayError ? <div className={styles.error}>В вашем пути нет ни одного дня</div> : null}

         </form>

         {isConstructorDay ? <ConstructorDay /> : null}


      </div>
   );
}

export default NewPath;