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
    constructor(title, description, link, price){
        this.title = title
        this.description = description
        this.link = link
        this.price = price
    }
  
    save(){
        this.id = Math.random().toString()
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
    static findId(id, callback){
        getProductFromFile(products => {
           const prod = products.find(p => p.id === id)
           callback(prod)
        })
    }
}





