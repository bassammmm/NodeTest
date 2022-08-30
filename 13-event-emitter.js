const EventEmitter = require('events');

const customEmitter = new EventEmitter();


customEmitter.on('response',((data,user,val)=>{
    console.log(`Data Revieved - first method ${data} by ${user}`);
}))
customEmitter.on('response',()=>{
    console.log(`Data Revieved - second method`);
})

customEmitter.emit('response','12344','Bassam','hahaha');