/**
 * Created by jackyMC on 2017/9/18.
 */
const db = require("./../database/database.js")
const schema = new db.Schema({
    title:{
        type:String
    }
})

const Event = db.model('Event',schema);

module.exports=Event;