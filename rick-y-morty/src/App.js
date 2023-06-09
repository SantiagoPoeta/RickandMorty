import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Nav/NavBar.jsx';
import {useState} from "react";
import axios from 'axios';


function App() {

   function searchHandler(id){
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });  
    }

   function closeHandler(id){
      let deleted= characters.filter(character =>character.id !==Number(id));

      setCharacters(deleted);
   }
   
  const [characters,setCharacters] = useState([]);
   return (
      <div className='App'>
         <NavBar onSearch={searchHandler}/>
         <Cards characters={characters} onClose={closeHandler} />
      </div>
   );
}

export default App;
