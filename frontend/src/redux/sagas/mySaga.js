import { call, put, takeEvery } from 'redux-saga/effects'
import { SITE_URL } from '../../config'
import { getCategoriesFromDBAC, getPathsFromDBAC, getSkillsFromDBAC, getSubcategoriesFromDBAC } from '../actionCreators/dbAC'
import { SAGA_FETCH_CATEGORIES, SAGA_FETCH_PATHS, SAGA_FETCH_SKILLS, SAGA_FETCH_SUBCATEGORIES } from '../actionTypes'

// асинхронная функция

const fetchCategoriesDB = async () => {

   // const res = await fetch(`http://localhost:3001/`)
   const res = await fetch(`${SITE_URL}api`)
   const data = await res.json()

   return data.categories
}

const fetchSubcategoriesDB = async () => {

   // const res = await fetch(`http://localhost:3001/`)
   const res = await fetch(`${SITE_URL}api`)
   const data = await res.json()

   return data.subcategories
}

const fetchSkillsDB = async () => {

   const res = await fetch(`${SITE_URL}api`)
   const data = await res.json()

   return data.skills
}

const fetchPathsDB = async () => {

   const res = await fetch(`${SITE_URL}api`)
   const data = await res.json()


   return data.paths

}


// workers исполнители
function* workerCategoriesDB() {
   try {
      const categories = yield call(fetchCategoriesDB)
      yield put(getCategoriesFromDBAC(categories))

   } catch (error) {
      yield put({ type: 'GET_CATEGORIES_FAILD', message: error.message })

   }
}


function* workerSubcategoriesDB() {
   try {
      const subcategories = yield call(fetchSubcategoriesDB)
      yield put(getSubcategoriesFromDBAC(subcategories))

   } catch (error) {
      yield put({ type: 'GET_SUBCATEGORIES_FAILD', message: error.message })

   }
}

function* workerSkillsDB() {
   try {
      const skills = yield call(fetchSkillsDB)
      yield put(getSkillsFromDBAC(skills))

   } catch (error) {
      yield put({ type: 'GET_SKILLS_FAILD', message: error.message })

   }
}

function* workerPathsDB() {
   try {
      const paths = yield call(fetchPathsDB)
      yield put(getPathsFromDBAC(paths))

   } catch (error) {
      yield put({ type: 'GET_PATHS_FAILD', message: error.message })

   }
}



// watсher наблюдатель
export function* mySaga() {
   yield takeEvery(SAGA_FETCH_CATEGORIES, workerCategoriesDB)
   yield takeEvery(SAGA_FETCH_SUBCATEGORIES, workerSubcategoriesDB)
   yield takeEvery(SAGA_FETCH_SKILLS, workerSkillsDB)
   yield takeEvery(SAGA_FETCH_PATHS, workerPathsDB)
}