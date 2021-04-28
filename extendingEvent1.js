// const EventEmitter=require('events');

const message=require('./extendingEvent2');//loading event2 module 
let mObj=new message();

mObj.on('messageEvent',(arg)=>{// listning an event
    console.log('Listner called ',arg);
});

mObj.message('Hey');// using message function from event2 module
