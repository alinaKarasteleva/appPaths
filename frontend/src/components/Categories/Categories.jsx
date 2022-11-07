import React from 'react';
import { useSelector } from 'react-redux';
import Category from './Сategory';
import styles from './categories.module.css'


function Categories() {
  
   //Достаю все категории и меплю их
   const categories = useSelector(state => state?.categoriesReducer?.categories)
  


   return (

      <div className={styles.categories_item}>

         {categories.map((category, i) => {
            // стиль для того, чтобы разместить их по кругу
            const length = categories.length
            const arc = 2 * Math.PI * (1 / length)
            const radius = 45

            const angle = i * arc
            const x = radius * Math.cos(angle)
            const y = radius * Math.sin(angle)

            const left = x + 50 + '%'
            const top = y + 50 + '%'

            return < Category key={category.id_category} category={category} left={left} top={top} />
         })}


      </div>


   );
}

export default Categories;