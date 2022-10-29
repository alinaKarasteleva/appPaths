import React from 'react';
import { useSelector } from 'react-redux';
import AddDay from './AddDay';
import Day from './Day';
import styles from '../NewPath.module.css'

function DaysList() {
   const days = useSelector(state => state.pathEditorReducer.days)


   return (

      <div className={styles.days_list} >

         {days ? days.map(el => <Day key={el.index} day={el} />) : null}
         <AddDay />

      </div>
   );
}

export default DaysList;