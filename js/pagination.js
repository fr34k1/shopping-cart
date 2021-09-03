
import HtmlObject from "./htmlobject.js";

export default class Pagination extends HtmlObject{

    constructor(total,itemsLength){
        //console.log(total)
        super();
        this.total = total;
        this.itemsPerPage = itemsLength;
        this.totalPages = total>itemsLength ? Math.ceil(total/itemsLength) : 1;
        this.offset=0;
        this.actualPage=1;
    }

    htmlObject(){

        this.HTML2Object("pagination",{
            tag:"ul",
            attributes:{
                class:"pagination"
            },
            content:{
               
            }
        })

        //console.log(this.getHtmlObject("pagination"))
        this.generateLinks()
        document.querySelector("#pagination").innerHTML="";
        document.querySelector("#pagination").appendChild(this.getHtmlObject("pagination"));
    
    
    }

    generateLinks(){
        this.#prevLink();
        for(let i =0;i<this.totalPages;i++){
            if(i+1==this.actualPage){
                this.#linkToObject(i+1,true)
            }else{
                this.#linkToObject(i+1)
            }
            
        }
        this.#nextLink();
        //console.log(this.objects)
    }

    #linkToObject(text,active){
        //console.log(active)
        this.HTML2Object("linkPage",{
            tag:"li",
            attributes:{
                class: active? "page-item active" : "page-item",
                "data-page":text
            },
            content:{
            html:`<a class="page-link" href="#">${text}</a>`
            },
            events:{
                click:(e)=>{


                    this.actualPage = parseInt(e.target.innerText);
                    this.offset = (this.actualPage-1)*this.itemsPerPage;
 //                   console.log(this.actualPage,this.offset)
                }
            },
            parentNode:"pagination"
        },true)
    }

    #prevLink(){
        this.HTML2Object("linkPage",{
            tag:"li",
            attributes:{
                class:"page-item"
            },
            content:{
            html:`<a class="page-link" href="#">prev</a>`
            },
            events:{
                click:(e)=>{
                    this.actualPage = this.actualPage== 1 ? 1 : this.actualPage-1;
                    this.offset = (this.actualPage-1)*this.itemsPerPage;
                    //console.log(this.actualPage,this.offset)
                }
            },
            parentNode:"pagination"
        },true)
    }
    
    #nextLink(){
        this.HTML2Object("linkPage",{
            tag:"li",
            attributes:{
                class:"page-item"
            },
            content:{
            html:`<a class="page-link" href="#">next</a>`
            },
            events:{
                click:(e)=>{
                   // console.log(this.actualPage,this.totalPages)
                  
                    this.actualPage = this.actualPage==this.totalPages ? this.actualPage : this.actualPage+1;
                    this.offset = (this.actualPage-1)*this.itemsPerPage;
                    //console.log(this.actualPage,this.offset)
                }
            },
            parentNode:"pagination"
        },true)
    }


    
}