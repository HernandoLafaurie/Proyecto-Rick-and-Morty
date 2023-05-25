import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../Redux/Actions';
import {connect} from 'react-redux';
import { useState, useEffect } from 'react';

const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) => {

   const [isFav, setIsFav] = useState(false);
 
   const handleFavorite = () =>{
     isFav ? removeFav(id) : addFav({id, name, status, species, gender, origin, image, onClose});
     setIsFav(!isFav)
   };
 
   useEffect((id) => {
     myFavorites.forEach((fav) => {
        if (fav.id === id) {
           setIsFav(true);
        }
     });
  }, [myFavorites]);
   

   return (
      <div className={style.container}>
         <div className={style.ButtonContainer}>
         {
            isFav ? (
               <button onClick={handleFavorite}>⭐</button>
             ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
            
               <button onClick={()=> {onClose(id)}} className={style.button}>X</button>
            </div>

         <Link to={`/detail/${id}`}>
        
            <div className={style.ImgContainer}>
               <img src={image} alt='' />
            </div>
         </Link>
      </div>

   );
};

const mapDispatchToProps = (dispatch)=>{
   return {
     addFav: (character) => dispatch(addFav(character)),
     removeFav: (id) => dispatch(removeFav(id)),
   }
 };
 
 const mapStateToProps =(state)=>{
   return{
     myFavorites: state.myFavorites
   }
 };
 
 
 export default connect(mapStateToProps, mapDispatchToProps)(Card)

