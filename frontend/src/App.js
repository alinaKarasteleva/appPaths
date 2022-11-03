import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatAndSubcatFromDB from './components/FromDB/CatAndSubcatFromDB';
import Homepage from './components/Layout/Homepage';
import Layout from './components/Layout/Layout';
import Subcategories from './components/Subcategories/Subcategories';
import store from './redux/store';
import Skills from './components/Skills/Skills';
import NotFound from './components/Layout/NotFound';
import Path from './components/Paths/Path';
import SignUP from './components/Layout/sign/SignUP';
import SignIN from './components/Layout/sign/SignIN';
import PathesList from './components/Paths/PathsList';
import PersonalArea from './components/PersonalArea/PersonalArea';
import NewPath from './components/NewPath/NewPath';
import {SITE_URL} from './config.js';


function App() {

  console.log('process.env', process.env)
  console.log('SITE_URL', SITE_URL)

  const pongHandler =async  () => {
    const res = await fetch(SITE_URL)
    const data = res.json()
    console.log(data)
  }

  return (

    <Provider store={store}>
      <button onClick={pongHandler}> Ping button</button>
      {/* Достаю темы */}
      <CatAndSubcatFromDB />



      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Layout />} >

            <Route index element={<Homepage />} />
            <Route path=":categ/" element={<Subcategories />} />
            <Route path=":categ/:subcateg" element={<Skills />} />
            <Route path=":categ/:subcateg/:skill" element={<PathesList />} />
            <Route path=":categ/:subcateg/:skill/:id_path" element={<Path />} />
            <Route path="signUp" element={<SignUP />} />
            <Route path="signIn" element={<SignIN />} />
            <Route path="personal_area" element={<PersonalArea />} />
            <Route path="new_path" element={<NewPath />} />


            {/* <Route path="*" element={<NotFound />} />  */}

          </Route>

        </Routes>

      </BrowserRouter>



    </Provider>
  );
}

export default App;
