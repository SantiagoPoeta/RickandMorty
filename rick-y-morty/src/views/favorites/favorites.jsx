
import Cards from "../../components/Cards/Cards";
import {useSelector,useDispatch} from "react-redux";
import { orderFavs,filterFavs,resetFavs } from "../../components/Redux/actions";


export default function Favorites({myFavorites}){
    const dispatch = useDispatch();
    const favorites = useSelector((state)=> state.myFavorites);

    function handleSort(e){
        dispatch(orderFavs(e.target.value));
    }

    function handleFilter(e){
        dispatch(filterFavs(e.target.value))
    }
    function handleReset(){
        dispatch(resetFavs());
    }

    return(
        <div>
            <select placeholder="Gender" onChange={handleFilter}>
                {["Male","Female","Unknown","Genderless"].map((gender)=>(
                    <option value={gender}>{gender}</option>
                ))}    
            </select>
            <select placeholder="Orden" onChange={handleSort}>
                {["Ascendente","Descendente"].map((order)=>(
                    <option value={order}>{order}</option>
                ))}    
            </select>
            <button onClick={handleReset}>Reset Filters</button>
            <Cards characters = {favorites}/>
        </div>
    )
}
