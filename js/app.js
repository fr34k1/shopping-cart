
import products from './database.js';
import Product from './product.js';
import Cart from './cart.js';



export default class Application{
    
    constructor(){

        this.products=products;
        console.log(products)
        this.container =document.getElementById("product-view");
        this.cart = new Cart();
    }

    
    renderProducts(filter={}){
        if(!this.products.length){
            
        }else{
            
            if(filter){
                this.noFilterRender();
            }else{
                console.log("asdasd")
            }
        }
        
        
        
    }

    noFilterRender(){
        this.products.forEach(({id,title,price,description,image})=>{
            const p2 = new Product(id,price,title,description,image);
            this.container.appendChild(p2.toHTMLObject());
        })
    }

    filterRender({minPrice,maxPrice}){

    }
    
}