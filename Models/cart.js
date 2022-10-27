const path = require('path')
const fs = require('fs');
const { json } = require('body-parser');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');
module.exports = class Cart {
    static addProduct(id, productPrice) {
         fs.readFile(p, (err, filecontent)=>{
            let cart = {product: [], totalprice: 0 }
            if(!err){
             
              try{
                cart = JSON.parse(filecontent)
                console.log(cart)
              }
              catch(err){
                    console.log('error', err)
              }
              
            }
            console.log(cart)
            const existingProductsIndex = cart.product.findIndex(prod => prod.id === id)
            const existingProducts = cart.product[existingProductsIndex]
            let updateProduct
            if(existingProducts){
                updateProduct ={...existingProducts}
                updateProduct.qty = updateProduct.qty + 1
                cart.product = [...cart.product]
                cart.product[existingProductsIndex] = updateProduct
            }else{
                updateProduct = {id: id, qty: 1}
                cart.product = [...cart.product, updateProduct]
            }
            cart.totalprice = cart.totalprice + +productPrice
            fs.writeFile(p, JSON.stringify(cart), (err)=>{
                console.log(err)
            } )
         })
    }
}