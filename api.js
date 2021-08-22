/////////////////////////////////////////////
//                                         //
//                                         //
//            API FOR AUTO BAN             //
//              By FexorDEV                //
//        Do not edit this .js file        //
//                                         //
/////////////////////////////////////////////


const slaxprofile = require ('../profiles/deletedmess.json');
const stormzyprofile = require('../profiles/stormzy.json');
const nitrogenprofile = require('../profiles/nitrogenbypeter.json');
const milxnorprofile = require('../profiles/Milxnor.json');
const gkiprofile = require('../profiles/GKI.json');
const peterprofile = require('../profiles/! peter.json');
const densentprofile = require('../profiles/densent.json');
const inverseprofile = require('../profiles/inverse.json');
const ttvbotprofile = require('../profiles/ttvbot.json');
const lanceprofile = require('../profiles/lance to wavy.json');
const twitchfollowprofile = require('../profiles/twitchfollowers.json');
const errors = require ('../structs/errors.json');
module.exports = {
    sendSlax(message){
        try{
            message.channel.send(slaxprofile.note);
            message.channel.send(slaxprofile.name);
            message.channel.send(slaxprofile.discrim);
            message.channel.send(slaxprofile.uid);
            message.channel.send(slaxprofile.reason);
            }
            catch(error){
            message.channel.send(errors.failedcommand)
            }
    },
    sendStormzy(message){
        try{
            message.channel.send(stormzyprofile.note);
            message.channel.send(stormzyprofile.name);
            message.channel.send(stormzyprofile.discrim);
            message.channel.send(stormzyprofile.uid);
            message.channel.send(stormzyprofile.reason);
            }
            catch(error){
            message.channel.send(errors.failedcommand)
            }
    },
    sendNitroGenPeter(message){
        try{
            message.channel.send(nitrogenprofile.note);
            message.channel.send(nitrogenprofile.name);
            message.channel.send(nitrogenprofile.discrim);
            message.channel.send(nitrogenprofile.uid);
            message.channel.send(nitrogenprofile.reason);
            }
            catch(error){
            message.channel.send(errors.failedcommand)
            }
      
    },
    sendMilxnor(message){
        try{
            message.channel.send(milxnorprofile.note);
            message.channel.send(milxnorprofile.name);
            message.channel.send(milxnorprofile.discrim);
            message.channel.send(milxnorprofile.uid);
            message.channel.send(milxnorprofile.reason);
            }
            catch(error){
            message.channel.send(errors.failedcommand)
            }
    },
    sendGKI(message){
        try{
            message.channel.send(gkiprofile.note);
            message.channel.send(gkiprofile.name);
            message.channel.send(gkiprofile.discrim);
            message.channel.send(gkiprofile.uid);
            message.channel.send(gkiprofile.reason);
            }
            catch(error){
            message.channel.send(errors.failedcommand)
            }
    },
    sendpeter(message){
        try{
            message.channel.send(peterprofile.note);
            message.channel.send(peterprofile.name);
            message.channel.send(peterprofile.discrim);
            message.channel.send(peterprofile.uid);
            message.channel.send(peterprofile.reason);
            }
            catch(error){
            message.channel.send(errors.failedcommand)
            }
    },
    senddensent(message){
        try{
            message.channel.send(densentprofile.note);
            message.channel.send(densentprofile.name);
            message.channel.send(densentprofile.discrim);
            message.channel.send(densentprofile.uid);
            message.channel.send(densentprofile.reason);
            }
            catch(error){
            message.channel.send(errors.failedcommand)
            }
    },
    sendinverse(message){
        try{
            message.channel.send(inverseprofile.note);
            message.channel.send(inverseprofile.name);
            message.channel.send(inverseprofile.discrim);
            message.channel.send(inverseprofile.uid);
            message.channel.send(inverseprofile.reason);
            }
            catch(error){
            message.channel.send(errors.failedcommand)
            }
    },
    sendttvbot(message){
        try{
            message.channel.send(ttvbotprofile.note);
            message.channel.send(ttvbotprofile.name);
            message.channel.send(ttvbotprofile.discrim);
            message.channel.send(ttvbotprofile.uid);
            message.channel.send(ttvbotprofile.reason);
            }
            catch(error){
            message.channel.send(errors.failedcommand)
            }
    },
    sendlance(message){
        try{
            message.channel.send(lanceprofile.note);
            message.channel.send(lanceprofile.name);
            message.channel.send(lanceprofile.discrim);
            message.channel.send(lanceprofile.uid);
            message.channel.send(lanceprofile.reason);
            }
            catch(error){
            message.channel.send(errors.failedcommand)
            }
    },
    sendtwitchfollowers(message){
        try{
            message.channel.send(twitchfollowprofile.note);
            message.channel.send(twitchfollowprofile.name);
            message.channel.send(twitchfollowprofile.discrim);
            message.channel.send(twitchfollowprofile.uid);
            message.channel.send(twitchfollowprofile.reason);
            }
            catch(error){
            message.channel.send(errors.failedcommand)
            }
    },
    sendEmbed(message, title, description){
        const discord = require('discord.js');
        message.channel.send(new discord.MessageEmbed().setTitle(title).setDescription(description));
      }
  }