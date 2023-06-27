const {getChardById} = require("../controllers/getCharById");
const {postFav,deleteFav} = require("../controllers/handleFavorites");
const {login} = require("../controllers/login.js");

const router= require("express").Router();

router.get("/character/:id" ,getChardById);
router.get("/login" , login);
router.get("/fav" , postFav);
router.get("/fav/:id" , deleteFav);

module.exports = {router};