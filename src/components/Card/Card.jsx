import style from './Card.module.css'

const Card = ({ id, name, status, species, gender, origin, image, onClose }) => {
   return (
      <div className={style.container}>

          <div className={style.ButtonContainer}>
            <button onClick={()=> {onClose(id)}} className={style.button}>X</button>
         </div>

         <div className={style.PropsContainer}>
            <h2>Species: {species}</h2>
            <h2>Gender: {gender}</h2>
            <h2>Status: {status}</h2>
            <h2>Origin: {origin}</h2>
         </div>
            
         <div className={style.ImgContainer}>
            <img src={image} alt='' />
            <h2 className={style.NameContainer}>Name: {name}</h2>
         </div>

      </div>
   );
}

export default Card


