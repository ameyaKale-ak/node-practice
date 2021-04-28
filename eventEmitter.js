//loading EventEmitter Class
const EventEmitter=require('events');

let EvtObj=new  EventEmitter();//creating event object

//registering a listner
EvtObj.on('messageEvent',(arg)=>{
    console.log('Event is emitted',arg);
});

//rising an event
EvtObj.emit('messageEvent',{id:12212,Name:'Message Event'});