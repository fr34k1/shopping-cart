
import  Cart from './cart.js';
import HtmlObject from './htmlobject.js';

export default class Product extends HtmlObject{

    constructor(id,price,title,description,image){
        
        super();
        this.id=id;
        this.price=price;
        this.title=title;
        this.description=description;
        this.image=image;
        this.productOb=null;
    }

    
    toHTMLObject(){
        this.HTML2Object("product",{
            tag:"div",
            attributes:{
                class:"card",
                style:"width:18rem;",
            },
            content:{
                html:`<img src="${this.image}" width="150" class="card-img-top" alt="...">`
            },
            children:[this.getHtmlObject("card-body")]

        })
        
        this.body();

        return this.getHtmlObject("product")
    }

    body(){
        this.HTML2Object("product-body",{
            tag:"div",
            attributes:{
                class:"card-body",
            },
            content:{
                html:`
                <h5 class="card-title">${this.price}</h5>
                <p class="card-text">${this.title}.</p>`
            },
            parentNode:"product"

        })
        this.add2cartButton()
        
        this.detailsButton()
        
    }

    

    add2cartButton(){
        this.HTML2Object("add2cartBtn",{
            tag:"a",
            attributes:{
                href:"#",
            },
            content:{
                text:"add 2 cart"
            },
            children:[this.getHtmlObject("add2cartBtn"),this.getHtmlObject("detailsProduct")],
            events:{
                click:(e)=>{
                    
                    if(confirm("quieres agregar este producto al shopping cart?")){
                        const item=this.product2Object();
                        //console.log(x)
                    }
                },  
            },
            parentNode:"product-body"
        })   
    }

    detailsButton(){

        this.HTML2Object("detailsBtn",{
            tag:"a",
            attributes:{
                "data-toggle":"modal",
                href:"#",

            },
            content:{
                text:"show"
            },
            children:[this.getHtmlObject("add2cartBtn"),this.getHtmlObject("detailsProduct")],
            events:{
                click:(e)=>{
                   
                    const t=document.querySelector(".product-title");
                    
                    t.innerHTML=this.title;

                    const p=document.querySelector(".product-price");
                    p.innerHTML="$"+this.price;

                    const i=document.querySelector(".product-image");
                    i.setAttribute("src",this.image)

                    const d=document.querySelector(".product-description");
                    d.innerHTML=this.description;
                    $("#details-modal").modal("show");
                },
                
            },
            parentNode:"product-body"
        })
    }

    product2Object(){
        return {
            id:this.id,
            title:this.title,
            description:this.description,
            price:this.price,
            image:this.image
        }
    }



   
}


