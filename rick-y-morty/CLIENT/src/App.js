import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Nav/NavBar.jsx';
import {useState,useEffect} from "react";
import axios from 'axios';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import Detail from './views/Detail/Detail.jsx'
import About from './views/About/About.jsx';
import Favorites from './views/favorites/favorites.jsx'
import ErrorPage from './views/ErrorPage/Error';
import LandingPage from './views/LandingPage/LandingPage';


function App() {

   const [characters,setCharacters] = useState([]);
   const [access,setAccess] = useState(false);
   
   const navigate = useNavigate();
   const location = useLocation();

   async function login(userData){
      try {
         const {email,password} = userData;
         const URL = "http://localhost:3001/rickandmorty/login/";
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const {access} = data;
         setAccess(data);
         access && navigate("/home");
      } catch (error) {
         console.log(error)
      }
   }
   function logOut(){
      setAccess(false)
      navigate("/home");
   }
   useEffect(()=>{
      !access && navigate('/')
   },[access]);

   async function searchHandler(id){
      try {
        const response = await axios(`https://rickandmortyapi.com/api/character/${id}`)
        const data = response.data;
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
      
      } catch (error) {
         console.log(error)
      } 
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

   return (
      <div className='App'>
         {location.pathname !== "/" &&  <NavBar onSearch={searchHandler} random={randomHandler} logOut={logOut}/>}
         
         <Routes>
            <Route path= "/" element= {<LandingPage login={login}/>}/>
            <Route path= "/home" element= {<Cards characters={characters} onClose={closeHandler}/>}/>
            <Route path= "/about" element= {<About/>}/>
            <Route path= "/favorites" element= {<Favorites/>}/>
            <Route path= "/detail/:id" element= {<Detail/>}/>
            <Route path= "*" element= {<ErrorPage/>}/>
         </Routes>
      </div>
   );
}

export default App;
