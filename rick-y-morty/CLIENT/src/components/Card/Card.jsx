import { useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import style from "./Card.module.css";
import { addFav,removeFav } from "../Redux/actions";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

function Card(props) {
  const navigate = useNavigate();
  const {character,onClose,addFav,removeFav,myFavorites} = props;
  const [Fav,setFav]= useState(false);
  const{image,name,species,gender,id} = character;
  const favoritos = useSelector(state => state.myFavorites)

  useEffect(()=>{
    favoritos.forEach((fav) => {
      if(fav.id === id){
        setFav(true)
      }
    });
  },[favoritos]);

  function handleFavorite(character){
    if(!Fav){
      addFav(character)
      setFav(true)
    } else{
      removeFav(character)
      setFav(false)
    }
  }

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
          {
            Fav? (
              <button onClick={ ()=> handleFavorite(character.id)}>❤️</button>
                 ) : (
              <button onClick={ ()=> handleFavorite(character)}>🤍</button>
                  )}
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

const mapDispatchToProps = (dispatch) =>{ 
  return{
    addFav:(character) => dispatch(addFav(character)),

    removeFav: (id) => dispatch(removeFav(id)),
  }
}

const mapStateToProps = (state) =>{
  
  return{
    favorites : state.favoritos,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);