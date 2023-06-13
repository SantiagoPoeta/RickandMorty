import { useNavigate } from "react-router-dom";
import style from "./Card.module.css";


export default function Card(props) {
  const navigate = useNavigate();
  const {character,onClose} = props;
  
  function navigateHandler(){
    navigate(`/detail/${character.id}`)
  }

   return (
      <div className={style.cardContainer}>
      <div className={style.imageContainer}>
        <img
          className={style.characterImage}
          src={character.image}
          alt={character.name}
          onClick={navigateHandler}
        />
        <h2 className={style.name}>{character.name}</h2>
        <button className={style.closeButton} onClick={()=>{onClose(character.id)}}>
          X
        </button>
      </div>

      <div className={style.atributes}>
        <h2>Species={character.species}</h2>
        <h2>Gender:{character.gender}</h2>
      </div>
    </div>
  );
}