import React from 'react';
import { useDispatch } from 'react-redux';
import { pathChangeBasicAdviceAC, pathRemoveBasicAdviceAC } from '../../../redux/actionCreators/pathAC';
import styles from '../NewPath.module.css'

function BasicAdviceInp({ advice }) {
   const dispatch = useDispatch()

   const inpBlur = (e) => {
      dispatch(pathChangeBasicAdviceAC({ index: advice.index, value: e.target.value }))
   }

   const deleteHandler = () => {
      dispatch(pathRemoveBasicAdviceAC(advice.index))
   }

   return (
      <div className={styles.basic_advice_one_advice}>
         <textarea className={styles.basic_advice_textarea} rows="2" cols="60"
            onBlur={inpBlur}
            type="text" defaultValue={advice.value} />
         <button className={styles.basic_advice_delete} onClick={deleteHandler}>Удалить</button>
      </div>

   );
}

export default BasicAdviceInp;