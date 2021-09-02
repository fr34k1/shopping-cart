
import HtmlObject from "./htmlobject.js";

export default class Pagination extends HtmlObject{

    constructor(total,itemsLength){
        super();
        this.total = total;
        this.itemsLength = itemsLength;
        this.totalPages = Math.ceil(total>itemsLength) ? total/itemsLength : 1;
        
    }

    htmlObject(){

        this.html2Object("pagination",{
            tag:"ul",
            attributes:{
                class:"pagination"
            },
            content:{
                html:`<li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
              </li>
              
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>`,
            }
        })
        
        document.querySelector("#pagination").appendChild(this.getHtmlObject("pagination"));
    }

    generateLinks(){

        for(let i =0;i<this.totalPages;i++){
            this.ht
        }
    }
}