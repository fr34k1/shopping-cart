
import HtmlObject from './htmlobject.js';

export default class Cart extends HtmlObject{
    constructor(){
        super();
        this.items=[];
        this.total=0;
        this.shop=document.querySelector(".shop-cart");
        console.log("asdasd")
        $(".cart-image").on("click",(e)=>{
    
            $(".sidebar").toggle(2000)
        })
    }

    add2cart(product,event){
        
       
       product.id=this.items.length
        
       this.items.push(product);
        
        const item = new CartItem(this.items.length,product.title,product.price,Date(),product.image);

        this.shop.appendChild(item.item2Html((e)=>{         
            this.items = this.items.filter((item)=>{
                console.log(item)
                console.log(product.id)
                return item.id != product.id;
            })
           
            this.calculateTotal();
        }))
       
        this.calculateTotal();

        //console.log(this)
            
    }


    calculateTotal(){
        this.total=0;
        this.items.forEach(item=>{
            this.total+=item.price;    
        });
        
        const t = document.querySelector(".total-price");
        t.innerText="$"+this.total.toFixed(2);
    }
}


class CartItem{

    constructor(id,title,price,date,image){
        this.title=title;
        this.price=price;
        this.date=date;
        this.ob=null;
        this.image=image;
    }

    
    item2Html(callback){
        this.ob = document.createElement("a");
        this.ob.setAttribute("class","list-group-item list-group-item-action");
        this.ob.innerHTML=`<div class="d-flex w-100 justify-content-between">
                <img width="90" height="50" src="${this.image}" class="mr-3" alt="...">
                <h5 class="mb-1">$${this.price}</h5>
            </div>
            <p class="mb-1">${this.title}</p>
        <small>3 days ago</small>`;
        this.ob.appendChild(this.deleteFromCart(((callback))))
        return this.ob;
    }



    deleteFromCart(callback){
        const ob = document.createElement("a");
        ob.setAttribute("class","remove-from-cart");
        ob.setAttribute("href","#");
        ob.innerHTML="X";
        ob.addEventListener("click",(e)=>{
            callback(e)
            this.ob.remove();
            
        })
        return ob;
    }
}