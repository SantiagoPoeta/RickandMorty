import SearchBar from '../SearchBar/SearchBar';
import style from './NavBar.module.css';
import { Link } from 'react-router-dom';
export default function NavBar ({onSearch,random}){
    return(
        <div className={style.navContainer}>
            <div className={style.buttons}>
                <Link className={style.about} to='/about'>About</Link>
                <Link className ={style.home}to='/home'>Home</Link>
            </div>
            <SearchBar onSearch={onSearch}/>
            <button className={style.random} onClick={random}> Add Random</button>
        </div>
    )
}