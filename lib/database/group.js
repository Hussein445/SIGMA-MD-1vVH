const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
events: { type: String, default: "true" },
nsfw : { type: String, default: "false" },
pdm : { type: String, default: "false" },
antipromote  : { type: String, default: "false" },
antidemote  : { type: String, default: "false" },
welcome :{ type: String, default: ` @pp *_Hi Dear @user_*\n*_Welcome In_* @gname\n*_Read The Description CareFully_*\n@desc\n\n\n*_Support Me By Subscribing_*\n*_https://www.youtube.com/@InnoxentTech?sub_confirmation=1_*` },
goodbye :{ type: String, default: ` @pp *_User @user_*\n*_Left The_* @gname\n*_Read The Description CareFully_*\n@desc\n\n\n*_Support Me By Subscribing_*\n*_https://www.youtube.com/@InnoxentTech?sub_confirmation=1_*` },
botenable : { type: String, default: "true" },
antilink : { type: String, default: "false" },
antibadwords : { type: String, default: "false" },
antifake : { type: String, default: "false" },
antispam : { type: String, default: "false" },
antibot : { type: String, default: "false" },
onlyadmin : { type: String , default: "false" },
economy : { type: String, default: "false" },
disablecmds : { type: String, default: "false" },
mute : { type: String },
unmute : { type: String }
})
const sck =mongoose.model("Sck", GroupSchema)
module.exports = { sck } 



 

