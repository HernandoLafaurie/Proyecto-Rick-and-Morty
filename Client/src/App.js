import Cards from "./components/Cards/Cards.jsx";
import style from "./App.module.css";
import NavBar from "./components/Nav/NavBar.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Forms from "./components/Forms/Forms.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";


function App() {
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();


  const navigate = useNavigate();
  const [access, setAccess] = useState(false);


  async function login(userData) {
    try {

      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';

      const {data} = await axios(URL + `?email=${email}&password=${password}`)

      if(data){
        const { access } = data;
        setAccess(access);
        access && navigate('/home');
      };
      
    } catch (error) {
        console.log(error.message);
    }
 };

useEffect(() => {
  !access && navigate('/');
}, [access]);
  


  async function onSearch(id) {
    try {

      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }

    } catch (error) {
        console.log(error)
    }
}

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== (id);
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

             <Route path="/favorites" element={<Favorites/>}/>

          </Routes>
 
     </div>
   );
 }
 
 export default App;