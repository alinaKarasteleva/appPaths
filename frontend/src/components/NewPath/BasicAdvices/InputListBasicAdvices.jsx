import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BasicAdviceInp from './InpBasicAdvice';
import { pathAddBasicAdviceAC } from '../../../redux/actionCreators/pathAC';
import styles from '../NewPath.module.css'

function InputListBasicinputList() {

   const dispatch = useDispatch()
   const inputList = useSelector(state => state.pathEditorReducer.path_basic_advices)

   const btnAddAdvice = (event) => {
      event.preventDefault()
      dispatch(pathAddBasicAdviceAC({ index: Date.now(), value: '' }))
   }

   return (
      <div>

         <div className={styles.basic_advices_label}>Дайте общие советы для всего пути:</div>

         {inputList.map(advice => <BasicAdviceInp key={advice.index} advice={advice} />)}

         <button className={styles.basic_advices_btn} onClick={btnAddAdvice}>Посоветовать еще</button>


      </div>
   );
}

export default InputListBasicinputList;