

export default class HtmlObject{
    constructor(){
        //console.log("asdasdasd2323")
        this.objects={};
    }

    HTML2Object(key,{tag,attributes,content,events,parentNode},){

        const ob = document.createElement(tag);
        
        if(attributes != undefined){
            //.log("asdasdasd123123")
           
            
            for(let key in attributes){
                ob.setAttribute(key,attributes[key]);
                console.log(key)
            }
        }
        

        if(content != undefined){
            if(content["html"]){
                ob.innerHTML=content["html"];
            }else if(content['text']){
                ob.innerText=content["text"];
            }
        }

        if(events){
            for (let key in events ){
                ob.addEventListener(events[key].event,events[key].listenner);
            };
        }

       
        
        this.objects[key]=ob;
        
        if(parentNode){
            if(this.objects[parentNode]){
                this.objects[parentNode].appendChild(ob)
            }
        }
        //console.log(this.objects)
        
    }

    addEvent2Object(key,{evnt,listener}){
        this.objects[key].addEventListener(evnt,listener);
    }


    getHtmlObject(key){
        return this.objects[key];    
    }
}


