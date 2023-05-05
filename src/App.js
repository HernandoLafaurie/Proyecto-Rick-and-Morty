import style from './App.module.css'
import { useState } from 'react';
import NavBar from './components/Nav/NavBar'
import Cards from './components/Cards/Cards'
import axios from 'axios'

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
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
