const EventEmitter=require('events');

class Message extends EventEmitter{
    message(m){
        console.log(m);
        this.emit('messageEvent',{id:100,Name:'Message event'});// rising an event
    }
    
}

module.exports=Message;