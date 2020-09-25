const express = require('express');
const { Collection } = require('mongoose');

module.exports = (Collection) =>{

//create 

const create = (req,res) => {
    const newEntry  =req.body;
    Collection.create(newEntry, (e,newEntry)=> {
        if(e){
            console.log(e);
            res.sendStatus(500);
        }
    });
}

// Read Many
const readMany = (req,res) => {
    let query = res.locals.query || {};

    Collection.find(query, (e,result) => {
        if(e){
            res.status(500).send(e);
            console.log(e.message);
        }else{
            res.send(result);
        }
    })
}

}

module.exports = router;