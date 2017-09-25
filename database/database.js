/**
 * Created by jackyMC on 2017/9/18.
 */
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/mymongo';
const options={
    useMongoClient:true
}
mongoose.Promise=global.Promise;
mongoose.connect(uri,options)
.then(db => console.log('链接成功'))
.catch (error=>console.log('链接失败'));


module.exports=mongoose;