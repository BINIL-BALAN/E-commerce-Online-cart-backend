const db = require('./db')

//function to fetch all products form database
const allProducts = () => {
    return db.Product.find()
    .then((result) => {
        if (result) {
            return {
                statusCode: 200,
                Products: result
            }
        } else {
           
            return {
                statusCode: 400,
                message: "Can't fetch data"
            }
        }
    })

}

const viewProduct=(id)=>{
    return db.Product.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                product:result
            }
        }else{
            return{
                statusCode:404,
                message:'Product not found'
            }
        }
    })
}
module.exports={
    allProducts,
    viewProduct
}