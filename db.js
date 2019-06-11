const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fruits' ,  { useNewUrlParser: true } );

const productSchema = new mongoose.Schema({
  name: String,
  src: String, 
  price: Number
});

const Product = mongoose.model('Product', productSchema);

async function createProduct() {
  
    const product = new  Product({
       name: 'Orange' , 
       src: 'orange',
       price: 20
    });
    const result = await  product.save(); 
   // console.log(result);
}


// createProduct();

// async function getProduct() {
  
//   const producs = await Product.find();
//   console.log(producs);
// }

createProduct();
