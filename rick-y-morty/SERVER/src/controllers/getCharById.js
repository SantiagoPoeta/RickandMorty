const axios = require('axios');
const { response } = require('express');
const URL = "https://rickandmortyapi.com/api/character"

const getChardById = function(req,res){
    const {id} = req.params;
    axios.get(`${URL}/${id}`)
    .then(response => response.data)
    .then(({id,status,name,species,origin,image,gender})=>{
        if(name){
            const character = {
                id,
                name,
                species,
                origin,
                image,
                gender,
            }
           res.status(200).json(character);
        } else{
            res.status(404).send("Not Found");
        }
    }).catch((error) =>{
        res.status(500).send(error.message)
    })
}





module.exports = getChardById;