/**
 * Created by jackyMC on 2017/9/18.
 */
const event =require('./../model/EventModel');
const data =require('./../json/events.json');
event.insertMany(data)
.then(documents=>console.log(documents));