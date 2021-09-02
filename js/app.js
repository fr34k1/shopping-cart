
import products from './database.js';
import Product from './product.js';
import Cart from './cart.js';
import Pagination from './pagination.js';


export default class Application{
    
    constructor(){
        this.products=products;
        console.log(products)
        this.container =document.getElementById("product-view");
        this.cart = new Cart();
        this.pagination=new Pagination(this.products.length,3);
    }

    
    renderProducts(filter={search:{},pagination:{actual:1}}){
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
            const listener = this.cart.add2cart
            
            p2.subscribeListeners(
                "add2cartBtn",
                "click",
                [listener,{
                    id:id,
                    price:price,
                    title:title,
                    image:image
                }],
                this.cart,
                 
                )
            this.container.appendChild(p2.toHTMLObject());
        })
    }

    filterRender({minPrice,maxPrice}){

    }
    
}