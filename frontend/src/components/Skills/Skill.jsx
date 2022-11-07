import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import styles from './skills.module.css'


function Skill({ skill }) {


   const [isHover, setIsHover] = useState(false)
   const color = useSelector(state => state?.currentReducer?.category?.color)

   const handleMouseEnter = () => {
      setIsHover(true)
   }
   const handleMouseLeave = () => {
      setIsHover(false)
   }
   const hoverStyle = {
      boxShadow: isHover ? `inset 1000px 0 0 0 ${color}` : `inset 0 0 0 0 ${color}`,
   };

   return (
      <div className={styles.skill_link_container}
         style={hoverStyle}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>

         <div className={styles.skill_link}>
            {skill.name_skill}
         </div>

      </div>
   )
}

export default Skill;