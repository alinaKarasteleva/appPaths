import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sagaCategoriesFromDBAC, sagaPathsFromDBAC, sagaSkillsFromDBAC, sagaSubategoriesFromDBAC } from '../../redux/actionCreators/dbAC';

function CatAndSubcatFromDB() {
   const dispatch = useDispatch()

   useEffect(() => {

      dispatch(sagaCategoriesFromDBAC())
      dispatch(sagaSubategoriesFromDBAC())
      dispatch(sagaSkillsFromDBAC())
      dispatch(sagaPathsFromDBAC())


      // fetch(`http://localhost:3001/`)
      //    .then(res => res.json())
      //    .then(data => {


      //       // CategoriesFromDB
      //       dispatch(getCategoriesFromDBAC(data.categories))

      //       // SubcategoriesFromDB
      //       dispatch(getSubcategoriesFromDBAC(data.subcategories))

      //       // SkillsFromDB
      //       dispatch(getSkillsFromDBAC(data.skills))

      //       // PathsFromDB
      //       dispatch(getPathsFromDBAC(data.paths))
      //    }
      //    )




   }, [dispatch,])



   return (
      <>

      </>
   );
}

export default CatAndSubcatFromDB;