import React from 'react';
import { useSelector } from 'react-redux';
import Paths from './Paths';
import styles from './paths.module.css'

function AllPaths() {

   // Достаю все пути и выбираю относящиеся к моим и маплю
   const ourSkill = useSelector(state => state.currentReducer?.skill)
   const paths = useSelector(state => state.pathsReducer?.paths)
   const ourPaths = paths?.filter(el => el.id_skill === ourSkill?.id_skill)




   return (
      <>
         <div className={styles.path_list_title}>Пути:</div>
         <div className={styles.path_list_container}>
            {ourPaths?.map(path => <Paths key={path.id_path} path={path} />)}
         </div>
      </>
   );
}

export default AllPaths;