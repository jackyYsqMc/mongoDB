/**
 * Created by jackyMC on 2017/9/18.
 */
const Event=require('./../model/EventModel');
let id='59bf723e3a79a07397648266'
Event.findByIdAndRemove(id).then(console.log('删除成功'))