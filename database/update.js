/**
 * Created by jackyMC on 2017/9/18.
 */
const Event=require('./../model/EventModel');
let id='59bf723e3a79a07397648266'
let newObj={
    title:'newObj'
}
Event.findByIdAndUpdate(id,{$set:newObj},{new:true})
.then(document=>console.log(document))