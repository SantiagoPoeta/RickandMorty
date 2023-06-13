import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Nav/NavBar.jsx';
import {useState} from "react";
import axios from 'axios';
import {Route, Routes} from 'react-router-dom';
import Detail from './views/Detail/Detail.jsx'
import About from './views/About/About.jsx';


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
   function randomHandler(){
      let yaloTengo=[];
      let random=(Math.random()*826).toFixed();
      random=Number(random);
      
      if(!yaloTengo.includes(random)){
         yaloTengo.push(random);
         fetch(`https://rickandmortyapi.com/api/character/${random}`)
         .then((response)=> response.json())
         .then((data) => {
            if(data.name){
               setCharacters((oldChars)=>[...oldChars,data]);
            } else{
               window.alert("No hay personajes con ese ID");
            }
         })
      }else{
         console.log("Ya agregaste a todos los personajes")
         return false;
      }
   }
   
  const [characters,setCharacters] = useState([]);
   return (
      <div className='App'>
         <NavBar onSearch={searchHandler} random={randomHandler}/>
         <Routes>
            <Route path= "/home" element= {<Cards characters={characters} onClose={closeHandler}/>}/>
            <Route path= "/about" element= {<About/>}/>
            <Route path= "/detail/:id" element= {<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
