/**
 * Created by jackyMC on 2017/9/18.
 */
const Event=require('./../model/EventModel');
Event.find({}).then(documents=>console.log(documents))