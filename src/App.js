import Cards from "./components/Cards/Cards.jsx";
import style from "./App.module.css";
import NavBar from './components/Nav/NavBar.jsx';
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Forms from './components/Forms/Forms';
const EMAIL = 'wang@gmail.com';
const PASSWORD = 'wang1234';

function App() {

   const [characters, setCharacters] = useState([]);

   const {pathname} = useLocation();

   const navigate = useNavigate();

   const [access, setAccess] = useState(false);
 
 
 function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
       setAccess(true);
       navigate('/home');
    }
 };
 
 useEffect(() => {
   !access && navigate('/');
 }, [access]);
   
 
 
   function onSearch(id) {
     axios(`https://rickandmortyapi.com/api/character/${id}`).then(
       ({ data }) => {
         if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
         } else {
           window.alert("¡No hay personajes con este ID!");
         }
       }
     );
   }
 
   const onClose = (id) => {
     setCharacters(
       characters.filter((char) => {
         return char.id !== Number(id);
       })
     );
   };
 
   return (
 
     <div className={style.App}>
      {pathname !== '/' && <NavBar onSearch={onSearch} />}
 
          <Routes>

             <Route path="/" element={<Forms login={login}/>}/>

             <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>

             <Route path="/about" element={<About/>}/>

             <Route path="/detail/:id" element={<Detail/>}/>

          </Routes>
 
     </div>
   );
 }
 
 export default App;
