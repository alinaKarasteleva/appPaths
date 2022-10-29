import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './subcategories.module.css'


function Subcategory({ subcat }) {


   const [isHover, setIsHover] = useState(false)
   const color = useSelector(state => state.currentReducer.category.color)

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

      <div className={styles.subcategory_link_container}
         style={hoverStyle}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>

         <div className={styles.subcategory_link} >
            {subcat.name_subcategory}
         </div>
      </div>

   );
}

export default Subcategory;