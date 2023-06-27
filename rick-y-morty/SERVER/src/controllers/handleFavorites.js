let myFavorites = [];

const postFav = function (req,res){
    const character = req.body
    myFavorites.push(character);
    return res.status(200).json(myFavorites);
}

const deleteFav = function(req,res){
    const {id} = req.paramas;
    myFavorites = myFavorites.filter((favorite)=> favorite.id !== +id);

    return res.status(200).json(myFavorites);
}

module.exports = {postFav,deleteFav};