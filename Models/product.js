const { json } = require('body-parser');
const fs = require('fs');
const path = require('path');


const p = path.join(path.dirname(process.mainModule.filename), 'data', 'product.json');

const getProductFromFile = callback =>{
    fs.readFile(p,(err, fileContent)=>{
        if(err){
            callback([])
        }
        else{
            callback( JSON.parse(fileContent))
        }
    })
}

module.exports = class Product{
    constructor(title, description, link){
        this.title = title
        this.description = description
        this.link = link
    }
  
    save(){
        getProductFromFile(product =>{
            product.push(this)
            fs.writeFile(p, JSON.stringify(product), (err)=>{
                console.log(err)
            })
        })
    }
    
    static fetchAll(callback){
        getProductFromFile(callback)
    }
    
}





