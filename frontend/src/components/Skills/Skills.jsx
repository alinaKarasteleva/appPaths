import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Skill from './Skill';
import styles from './skills.module.css'

function Skills() {

   //Достаю текущую категорию и подкатегорию
   const ourCategory = useSelector(state => state.currentReducer?.category)
   const ourSubcategory = useSelector(state => state.currentReducer?.subcategory)


   // Достаю все skills, выбираю относящиеся к моим и маплю
   const skills = useSelector(state => state.skillsReducer?.skills)
   const ourSkills = skills.filter(el => el.id_subcategory === ourSubcategory?.id_subcategory)



   return (
      <div className={styles.skills}>


         {ourSkills.map(skill => {
            return <div key={skill.id_skill}>
               <Link to={skill.link_name_skill} className={styles.skill_el}>
                  <div className={styles.circle} style={{ backgroundColor: `${ourCategory.color}`, }} />
                  <Skill skill={skill} />
               </Link>
            </div>
         }
         )}

      </div>

   );
}

export default Skills;