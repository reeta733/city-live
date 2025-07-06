import City from '../models/City.js'
let getAllCity = async(req, res)=>{
    let result = await City.find();
    res.send(result);
}

export {getAllCity}