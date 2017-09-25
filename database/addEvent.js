/**
 * Created by jackyMC on 2017/9/18.
 */
const Event =require('./../model/EventModel');
let e1 = new Event({
    title:"python"
})
e1.save()
.then(document=>console.log(document))