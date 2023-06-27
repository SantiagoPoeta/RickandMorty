let myFavorites = [];

const postFav = function (req,res){
    const character = req.body
    myFavorites.push(character);
    return res.status(200).json(myFavorites);
}

const deleteFav = function(req,res){
    const {id} = req.paramas;
    const filtered = myFavorites.filter((character)=> character.id !== Number(id));
    myFavorites = filtered;

    return res.status(200).json(filtered);
}

module.exports = {postFav,deleteFav};