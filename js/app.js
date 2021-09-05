
import products from './database.js';
import Product from './product.js';
import Cart from './cart.js';
import Pagination from './pagination.js';
import Filter from './filter.js';


export default class Application{
    constructor(){
        this.products=products;
        this.filter = new Filter();
        this.container =document.getElementById("product-view");
        this.cart = new Cart();
        this.pagination=new Pagination(this.products.length,3);
    }

    render(filter={search:{},pagination:{actual:1}}){
        
        if(!this.products.length){
            
        }else{
            console.log(filter.pagination.actual,23)
            this.noFilterRender(); 
        }

       
             
        if(this.pagination.areOnjectsEmpty()){
             //this.pagination.eventSubscribers()
            this.pagination.subscribeListeners(
            "linkPage",
            "click",
            [this.render,filter={pagination:{actual:this.pagination.actualPage}}],
            this,  )
           
        }

        this.pagination.htmlObject()
        
    }

    noFilterRender(){
       // console.log("asdasd")
        this.container.innerHTML='';
        let total = 
        this.pagination.itemsPerPage >
        this.products.length ?
        this.products.length :
        this.pagination.itemsPerPage+this.pagination.offset>this.products.length ?  this.products.length: this.pagination.itemsPerPage+this.pagination.offset;  


        for (let off = this.pagination.offset; off < total ; off++) {
            const p = this.products[off]
           
            const p2 = new Product(p.id,p.price,p.title,p.description,p.image);
            const listener = this.cart.add2cart
            
            p2.subscribeListeners(
                "add2cartBtn",
                "click",
                [listener,{
                    id:p.id,
                    price:p.price,
                    description:p.description,
                    title:p.title,
                    image:p.image
                }],
                this.cart,
                 
                )
                
            this.container.appendChild(p2.toHTMLObject());
            
        }
       
    }
    
}