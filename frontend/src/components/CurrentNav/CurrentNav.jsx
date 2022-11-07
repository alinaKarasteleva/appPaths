import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
   currentCategoryAC,
   currentPathAC,
   currentSkillAC,
   currentSubcategoryAC,
   deleteCurrentCategoryAC,
   deleteCurrentPathAC,
   deleteCurrentSkillAC,
   deleteCurrentSubcategoryAC
} from '../../redux/actionCreators/currentAC';
import styles from './current.module.css'
import arrows from './icons/arrows.png'
import { SITE_URL } from '../../config';


function CurrentNav() {
   const { categ, subcateg, skill, id_path } = useParams()


   const dispatch = useDispatch()


   const [ourCategory, setOurCategory] = useState(null)
   const [ourSubcategory, setOurSubcategory] = useState(null)
   const [ourSkill, setOurSkill] = useState(null)
   const [ourPath, setOurPath] = useState(null)


   const categories = useSelector(state => state?.categoriesReducer?.categories)
   const subcategories = useSelector(state => state?.subcategoriesReducer?.subcategories)
   const skills = useSelector(state => state?.skillsReducer?.skills)
   const paths = useSelector(state => state?.pathsReducer?.paths)




   useEffect(() => {
      if (categ) {
         setOurCategory(categories.find(el => el.link_name_category === categ))
         dispatch(currentCategoryAC(categories.find(el => el.link_name_category === categ)))
      } else {
         setOurCategory(null)
         dispatch(deleteCurrentCategoryAC())
      }

      if (subcateg) {
         setOurSubcategory(subcategories.find(el => el.link_name_subcategory === subcateg))
         dispatch(currentSubcategoryAC(subcategories.find(el => el.link_name_subcategory === subcateg)))
      } else {
         setOurSubcategory(null)
         dispatch(deleteCurrentSubcategoryAC())
      }

      if (skill) {
         setOurSkill(skills.find(el => el.link_name_skill === skill))
         dispatch(currentSkillAC(skills.find(el => el.link_name_skill === skill)))
      } else {
         setOurSkill(null)
         dispatch(deleteCurrentSkillAC())
      }

      if (id_path) {
         fetch(`${SITE_URL()}api/open_path/${id_path}`)
            .then(res => res.json())
            .then(data => {
               const path = paths.find(el => el.id_path === Number(id_path))
               dispatch(currentPathAC({ basicAdvices: data.basicAdvices, days: data.plansAndAdvices, path }))
            })


         setOurPath(paths.find(el => el.id_path === Number(id_path)))


      } else {
         setOurPath(null)
         dispatch(deleteCurrentPathAC())
      }

   }, [dispatch, categories, subcategories, skills, paths, categ, subcateg, skill, id_path])



   return (
      <div className={styles.current} style={ourCategory ? { backgroundColor: `${ourCategory?.color}` } : { display: 'none' }}>

         {ourCategory ?
            <Link to={ourCategory.link_name_category} className={styles.current_link}>
               <span className={styles.current_item}>
                  {ourCategory.name_category}
                  <img src={arrows} alt="" className={styles.icon_arrows} />
               </span>
            </Link> :
            null
         }

         {ourSubcategory ?
            <Link to={`${ourCategory.link_name_category}/${ourSubcategory.link_name_subcategory}`} className={styles.current_link}>
               <span className={styles.current_item}>
                  {ourSubcategory.name_subcategory}
                  <img src={arrows} alt="" className={styles.icon_arrows} /></span>
            </Link> :
            null
         }

         {ourSkill ?
            <Link to={`${ourCategory.link_name_category}/${ourSubcategory.link_name_subcategory}/${ourSkill.link_name_skill}`} className={styles.current_link}>
               <span className={styles.current_item}>
                  {ourSkill.name_skill}
                  <img src={arrows} alt="" className={styles.icon_arrows} />
               </span>
            </Link> :
            null
         }
         {ourPath ?
            <span className={styles.current_item}>
               {ourPath.name_path}
            </span> :
            null
         }

      </div>

   );
}

export default CurrentNav;