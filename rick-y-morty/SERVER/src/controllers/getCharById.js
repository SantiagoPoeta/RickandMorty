const axios = require('axios');
const { response } = require('express');
const URL = "https://rickandmortyapi.com/api/character/"

const getChardById = async function(req,res){
    try {
        const {id} = req.params;
        const {data} = await axios(URL + id);
                const character = {
                    id : data.id,
                    name: data.name,
                    species : data.species,
                    origin : data.origin,
                    image : data.image,
                    gender : data.gender,
                }
            character.name
            ? res.status(200).json(character)
            : res.status(404).send("Not Found");
            
    } catch (error) {
        res.status(500).send(error.message)
    }
}





module.exports = {getChardById};