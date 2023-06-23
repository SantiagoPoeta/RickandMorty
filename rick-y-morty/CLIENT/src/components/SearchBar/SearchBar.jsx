import style from './SearchBar.module.css';
import {useState} from  "react";

export default function SearchBar(props) {
   const {onSearch}= props;
   const[id,setId]= useState("");

   const changeHandler = (e) => {
      e.preventDefault();
      let input= e.target.value
      setId(input)
   }
   
   return (
      <div className='search-container'>
          <input className={style.input} type='search' value={id} onChange={changeHandler}/>
         <button className ={style.onClick} onClick={()=> onSearch(id)}>Buscar</button>
      </div>
   );
}
