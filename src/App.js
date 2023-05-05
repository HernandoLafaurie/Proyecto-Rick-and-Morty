import style from './App.module.css'
import { useState } from 'react';
import NavBar from './components/Nav/NavBar'
import Cards from './components/Cards/Cards'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'

function App() {

   const[characters, setCharacters] = useState([])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(
         characters.filter((characters)=>{
            return characters.id !== Number(id)
         })
         )
      }

   return (
      <div className={style.AppContainer}>
         <NavBar onSearch={onSearch}/>

            <Routes>

               <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>

               <Route path='/about' element={<About/>}/>

               <Route path='/detail/:id' element={<Detail/>}/>
               
            </Routes>

      </div>
   );
}

export default App;
