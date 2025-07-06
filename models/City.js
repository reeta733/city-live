import mongoose from "../config/conn.js";

let City = mongoose.model("city", mongoose.Schema({
    id : String,
    name : String,
    state : String
}, {collection : "city"}));

export default City;