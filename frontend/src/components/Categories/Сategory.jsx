import React from 'react';
import { Link } from 'react-router-dom'
import styles from './categories.module.css'


//одна катерогия, например спорт
function Category({ category, left, top }) {

   return (
      <div >
         <Link to={category.link_name_category} className={styles.category} style={{ top: top, left: left, backgroundColor: `${category.color}` }} >
            {category.name_category}
         </Link>
      </div>
   );
}

export default Category;