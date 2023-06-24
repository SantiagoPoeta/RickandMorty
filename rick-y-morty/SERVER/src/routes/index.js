const {getChardById} = require("../controllers/getCharById");
const {postFav,deleteFav} = require("../controllers/handleFavorites");
const {login} = require("../controllers/login");
const {Router} = require(express);
const router = Router();

router.get("/character/:id" , (req,res)=>{
    getChardById(req,res);
});

router.get("/login" , (req,res)=>{
    login(req,res);
});

router.get("/fav" , (req,res)=>{
    postFav(req,res);
});

router.get("/fav/:id" , (req,res)=>{
    deleteFav(req,res);
});

module.exports = router;