const eventList = {};
const $on = (eventType,cb)=>{

    let event = eventList[eventType];
    if(!event){
        eventList[eventType] = [];
    }
    eventList[eventType].push(cb)
};


const $off = (eventType,cb)=>{

    let event = eventList[eventType];
    if(event){
        if(cb){
            event.findIndex((item,index)=>{
                if(cb == item){
                    event.splice(index,1);
                }
            })
        }else{
            eventList[eventType] = [];
        }
    }
};

const $emit = (eventType,params)=>{

    let event = eventList[eventType];

    if(!event)return;
    event.map((cb)=>{

        cb(params);
    })

};


export default {
    $on,
    $off,
    $emit
}

