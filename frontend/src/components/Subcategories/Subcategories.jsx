import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Subcategory from './Subcategory'
import styles from './subcategories.module.css'


function Subcategories() {

   //Достаю категории уже из текущего состояния
   const ourCategory = useSelector(state => state.currentReducer?.category)
   

   // // Достаю все подкатегории, из них достаю относящиеся к моей и маплю
   const subcategories = useSelector(state => state.subcategoriesReducer?.subcategories)
   
   const ourSubcategories = subcategories.filter(el => el.id_category === ourCategory?.id_category)
   



   return (

      <div className={styles.subcategories}>

         {ourSubcategories.map(subcat => {
            return <div key={subcat.id_subcategory}>
               <Link to={subcat.link_name_subcategory} className={styles.subcategory_el}>
                  <div className={styles.circle} style={{ backgroundColor: `${ourCategory.color}`, }} />
                  <Subcategory subcat={subcat} />
               </Link>
            </div>
         })}

      </div>

   );
}

export default Subcategories;