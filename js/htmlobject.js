

export default class HtmlObject{
    constructor(){
        this.objects={};
        this.eventSubscribers={}
    }

    HTML2Object(key,{tag,attributes,content,events,parentNode},){
        
        const ob = document.createElement(tag); 
        
        if(attributes != undefined){
            for(let key in attributes){
                ob.setAttribute(key,attributes[key]);
                //console.log(key)
            }
        }

        if(content != undefined){
            if(content["html"]){
                ob.innerHTML=content["html"];
            }else if(content['text']){
                ob.innerText=content["text"];
            }
        }

        if(events != undefined){
            for (let ev in events ){
                ob.addEventListener(ev,(e)=>{
                    events[ev](e)

                    if(this.eventSubscribers[key][ev]!=undefined){
                        this.eventSubscribers[key][ev].forEach(([fn,args])=>{
                            fn(args,e)
                        })
                    }
                });
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
        this.objects[key].addEventListener(evnt,(e)=>{
            listener(e);
            
        });
    }

 

    subscribeListeners(tag,evnt,[callback,args],ob,){
        if(this.eventSubscribers[tag]== undefined){
            
            this.eventSubscribers[tag]={};
            this.eventSubscribers[tag][evnt]=[]
            this.eventSubscribers[tag][evnt].push([callback.bind(ob),args])
            
        }else{
            this.eventSubscribers[tag][evnt].push([callback.bind(ob),args])
        }
    }

    getHtmlObject(key){
        return this.objects[key];    
    }
}


