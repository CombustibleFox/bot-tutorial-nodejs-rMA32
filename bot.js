var HTTPS = require('https');
var cool = require('cool-ascii-faces');


var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool/; botRegexSalt = /^\/salt/; botRegexDuty = /^\/duty/; botRegexDuty2 = /^\/tomorrow/; 
      botRegexHelp = /^\/help/; botRegexUp = /^\/update/; botRegexSor = /^\/sorry/; botRegexDuty3 = /^\/today/; botRegexTanner = /^\/tanner/; botRegexAcacia = /^\/acacia/; botRegexAnna = /^\/anna/; botRegexArmani = /^\/armani/; botRegexBrennan = /^\/brennan/; botRegexEmily = /^\/emily/; botRegexEverton = /^\/everton/; botRegexGarrett = /^\/garrett/; botRegexGeorge = /^\/george/; botRegexHaneen = /^\/haneen/; botRegexHeidi = /^\/heidi/; botRegexJacob = /^\/jacob/; botRegexJared = /^\/jared/; botRegexJulianne = /^\/julianne/; botRegexKeely = /^\/keely/; botRegexMarilynn = /^\/marilynn/; botRegexMonica = /^\/monica/; botRegexOlivia = /^\/olivia/; botRegexTavious = /^\/tavious/; botRegexVictoria = /^\/victoria/; 

    //Arrays of duty partners
  var jan = ["","","","","","Garrett and Armani", "Acacia and Jacob", "Marilynn and Keely", "Olivia and Jared", "Victoria and Everton", "Heidi and Monica", "Brennan and Julianne", "Emily and Brennan", "Tavious and Anna", "Tanner and Haneen", "Acacia and Armani", "Brennan and Olivia", "Heidi and Anna", "Armani and Julianne", "Armani and Julianne", "Garrett and Julianne", "Tanner and Emily", "Jared and Victoria", "Tavious and Anna", "Keely and Marilynn", "Keely and Emily", "Keely and Emily", "Victoria and Julianne", "Jacob and Anna", "Monica and Olivia", "Olivia and Brennan", ""]; 
  var feb = ["Heidi and Anna", "Anna and Haneen", "Anna and Haneen", "Julianne and Victoria", "Tanner and Everton", "Acacia and Armani", "Brennan and Olivia", "Jacob and Emily", "Jared and Acacia", "Jared and Jacob", "Garrett and Monica", "Tavious and Heidi", "Jared and Olivia", "Breannan and Anna", "Keely and Marilynn", "Victoria and Everton", "Victoria and Everton", "Julianne and Keely", "Tanner and Everton", "Heidi and Emily", "Jacob and Anna", "Everton and Haneen", "Olivia and Anna", "Olivia and Everton", "Garrett and Haneen", "Marilynn and Tanner", "Monica and Armani", "Acacia and Olivia", "", "", "", ""]; 
  var mar = ["Emily and Anna", "Tanner and Jacob", "Tanner and Olivia", "Heidi and Victoria", "Everton and Olivia", "Armani and Haneen", "Monica and Marilynn", "Keely and Emily", "Garrett and Heidi", "No One", "No One", "No One", "No One", "No One", "No One", "No One", "Garret and Acacia", "Jacob and Monica", "Tanner and Everton", "Tavious and Haneen", "Acacia and Breannan", "Everton and Heidi", "Olivia and Anna", "Tavious and Monica", "Emily and Julianne", "Tanner and Monica", "Tavious and Jared", "Marilynn and Anna", "Jacob and Keely", "Acacia and Marilynn", "Acacia and Marilynn", ""]; 
  var apr = ["Victoria and Julianne", "Emily and Armani", "Jared and Armani", "Tavious and Marilynn", "Everton and Garrett", "Monica and Haneen", "Monica and Haneen", "Garrett and Heidi", "Tavious and Jared", "Acacia and Jared", "Breannan and Tanner", "Keely and Monica", "Heidi and Marilynn", "Heidi and Keely", "Garrett and Julianne", "Everton and Garrett", "Acacia and Armani", "Olivia and Tavious", "Acacia and Haneen", "Jacob and Victoria", "Jared and Tanner", "Victoria and Tavious", "Emily and Jacob", "Jared and Marilynn", "Keely and Acacia", "Jacob and Haneen", "Garrett and Armani", "Jared and Armani", "Julianne and Haneen", "Armani and Jared", "", ""]; 
  var may = ["Marilynn and Victoria", "Brennan and Keely", "Tanner and Haneen", "Brennan and Tavious", "Breannan and Tavious", "Garrett and Heidi", "Im not sure", "Im not sure", "Im not sure", "Im not sure", "Im not sure", "Im not sure", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; 
  var aug = ["", "", "", "", "", "", "", "", "", "", "", "Garrett and Monica", "Heidi and Brennan", "Everton and Jacob", "Garrett and Monica", "Armani and Marilynn", "Acacia and Emily", "Julianne and Victoria", "Julianne and Victoria", "Marilynn and Victoria", "Tanner and Jared", "Tavious and Olivia", "Armani and Haneen", "Tavious and Keely", "Emily and Tanner", "Emily and Tanner", "Heidi and Haneen", "Victoria and Jared", "Acacia and Julianne", "Anna and Brennan", "Julianne and Anna", ""]; 
  var sep = ["Brennan and Julianne", "Brennan and Julianne", "Garrett and Tavious", "Jacob and Anna, with Emily on Day Duty", "Keely and Armani", "Everton and Marilynn", "Emily and Juianne", "Marilynn and Keely", "Marilynn and Keely", "Acacia and Haneen", "Tanner and Olivia", "Heidi and Garrett", "Victoria and Monica", "Emily and Acacia", "Everton and Armani", "Everton and Armani", "Heidi and Jared", "Everton and Jared", "Tavious and Brennan", "Victoria and Jacob", "Keely and Anna", "Jacob and Anna", "Jacob and Anna", "Haneen and Julianne", "Tanner and Monica", "Olivia and Jacob", "Aramani and Everton", "Brennan and Keely", "Heidi and Emily", "Heidi and Emily", ""]; 
  var oct = ["Heidi and Anna", "Tanner and Olivia", "Armani and Acacia", "Emily and Everton", "Marilynn and Keely", "Tavious and Haneen", "Tavious and Haneen", "Garrett and Julianne", "Haneen and Jared", "Olivia and Brennan", "Everton and Brennan", "Emily and Victoria", "Monica and Garrett", "Monica and Garrett", "Tavious and Garrett", "Tanner and Monica", "Anna and Keely", "Jacob and Armani", "Victoria and Julianne", "Marilynn and Keely", "Marilynn and Keely", "Acacia and Jacob", "Haneen and Monica", "Heidi and Tavious", "Emily and Tanner", "Marilynn and Jared", "Jacob and Brennan", "Jacob and Brennan", "Olivia and Marilynn", "Tanner and Olivia", "Everton and Acacia", ""]; 
  var nov = ["Armani and Emily", "Anna and Acacia", "Olivia and Jared", "Olivia and Jared", "Garrett and Julianne", "Haneen and Tavious", "Armani and Keely", "Tanner and Emily", "Tavious and Heidi", "Everton and Garrett", "Everton and Garrett", "Julianne and Anna", "Keely and Monica", "Jacob and Jared", "Victoria and Everton", "Marilynn and Brennan", "Acacia and Monica", "Everyone", "No One", "No One", "No One", "No One", "No One", "No One", "Acacia and Monica", "Garrett and Heidi", "Brennan and Monica", "Jared and Haneen", "Jacob and Everton", "Victoria and Mariynn", "", ""]; 
  var dec = ["Heidi and Tavious", "Heidi and Tavious", "Keely and Marilynn", "Tanner and Monica", "Armani and Jared", "Heidi and Olivia", "Olivia and Jacob", "Victoria and Tanner", "Victoria and Tanner", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; 

  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexHelp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("I am here to help! Here is a list of things I can do:\n/duty or /today - Gives the two people on duty today\n/tomorrow - Gives the two people on duty tomorrow\n\n/cool - Sends a cool emoji face\n/update - See what's new in this update\n/sorry - When you are truly sorry\n/salt - Don't use unless things get salty\n\nType /yourname and get a list of duty dates.\n\nLet Tanner know if something is not working or there is a image or reaction you would like added." );
    this.res.end();
  } 
  else if((request.text && botRegexDuty.test(request.text)) || (request.text && botRegexDuty3.test(request.text))) {
    this.res.writeHead(200);
    var d = convertUTCDateToLocalDate(new Date());
//    postMessage(d.toString());
    var month = d.getMonth();
    var day = d.getDate();
    
    var people = "";
    if (month == 0) {
      people = jan[day-1];
    }
    else if (month == 1) {
      people = feb[day-1];
    }
    else if (month == 2) {
      people = mar[day-1];
    }
    else if (month == 3) {
      people = apr[day-1];
    }
    else if (month == 4) {
      people = may[day-1];
    }
    else if (month == 7) {
      people = aug[day-1];
    }
     else if (month == 8) {
      people = sep[day-1];
    }
     else if (month == 9) {
      people = oct[day-1];
    }
     else if (month == 10) {
      people = nov[day-1];
    }
     else if (month == 11) {
      people = dec[day-1];
    }
    if (day % 2 == 0) {
      postMessage("Today " + people + " are on duty");
    } else if (day % 3 == 0) {
        postMessage(people + " I CHOOSE YOU!!");
    } else {
        postMessage(people + " are the choosen ones");
    }
    this.res.end();

  } 
   else if(request.text && botRegexDuty2.test(request.text)) {
    this.res.writeHead(200);
    var d = convertUTCDateToLocalDate(new Date());
    var month = d.getMonth();
    var day = d.getDate();
    var people = "";
    if (month == 0) {
      people = jan[day];
    }
     else if (month == 1) {
      people = feb[day];
    }
    else if (month == 2) {
      people = mar[day];
    }
     else if (month == 3) {
      people = apr[day];
    }
    else if (month == 4) {
      people = may[day];
    }
     else if (month == 7) {
      people = aug[day];
    }
     else if (month == 8) {
      people = sep[day];
    }
     else if (month == 9) {
      people = oct[day];
    }
     else if (month == 10) {
      people = nov[day];
    }
     else if (month == 11) {
      people = dec[day];
    }
    if (day % 2 == 0) {
      postMessage("Tomorrow " + people + " are on duty");
    } else if (day % 3 == 0) {
        postMessage("Watch out! " + people + " are on duty tomorrow");
    } else {
        postMessage(people + " are out to save the world tomorrow ");
    }
    this.res.end();

  } 
  
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexUp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif");
    postMessage("New in this update:\nNew schedule posted for:\n\n/acacia\n/anna\n/armani\n/brennan\n/emily\n/everton\n/garrett\n/george\n/haneen\n/heidi\n/jacob\n/jared\n/julianne\n/keely\n/marilynn\n/monica\n/olivia\n/tanner\n/tavious\n/victoria\n\n\n Are their any requests for Duty Bot? Any features or silly stuff you want added?");
    this.res.end();
  } 
  else if(request.text && botRegexSor.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media0.giphy.com/media/RFDXes97gboYg/200_s.gif");
    this.res.end();
  }
  else if(request.text && botRegexTanner.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Tanner's Duty Dates:\nJan: 15th, 22nd \nFeb: 5th, 19th, 26th \nMar: 2nd, 3rd, 19th, 26th \nApr: 11th, 21st \nMay: 3rd ");
    this.res.end();
  } 
  else if(request.text && botRegexAcacia.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Acacia's Duty Dates:\nJan: 7th, 16th \nFeb: 6th, 9th, 28th \nMar: 17th, 21st, 30th, 31st \nApr: 10th, 17th, 19th, 25th \nMay: None ");
    this.res.end();
  } 
  else if(request.text && botRegexAnna.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Anna's Duty Dates:\nJan: 14th, 18th, 24th, 29th \nFeb: 1st, 2nd, 3rd (RIP), 14th, 21st, 23rd  \nMar: 1st, 23rd, 28th \nApr: None \nMay: None ");
    this.res.end();
  } 
  else if(request.text && botRegexArmani.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Armani's Duty Dates:\nJan: 6th, 16th, 19th, 20th \nFeb: 6th, 27th \nMar: 6th  \nApr: 2nd, 3rd, 17th, 27th, 28th, 30th \nMay: None ");
    this.res.end();
  } 
  else if(request.text && botRegexBrennan.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Brennan's Duty Dates:\nJan: 12th, 13th, 17th, 31st \nFeb: 7th, 14th \nMar: 21st \nApr: 11th \nMay: 2nd, 4th, 5th ");
    this.res.end();
  } 
  else if(request.text && botRegexEmily.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Emily's Duty Dates:\nJan: 13th, 22nd, 26th, 27th \nFeb: 8th, 20th \nMar: 1st, 8th, 25th \nApr: 2nd, 23rd \nMay: None ");
    this.res.end();
  } 
  else if(request.text && botRegexEverton.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Evertons's Duty Dates:\nJan: 10th \nFeb: 5th, 16th, 17th, 19th, 22nd, 24th \nMar: 5th, 19th, 22nd \nApr: 5th, 16th \nMay: None ");
    this.res.end();
  } 
  else if(request.text && botRegexGarrett.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Garrett's Duty Dates:\nJan: 6th, 21st \nFeb: 11th, 25th \nMar: 9th, 17th \nApr: 5th, 8th, 15th, 16th, 27th \nMay: 6th ");
    this.res.end();
  } 
  else if(request.text && botRegexGeorge.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://imgur.com/a/MzaOH");
    this.res.end();
  } 
  else if(request.text && botRegexHaneen.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Haneen's Duty Dates:\nJan: 15th \nFeb: 2nd, 3rd, 22nd, 25th \nMar: 6th, 20th \nApr: 6th, 7th, 19th, 26th, 29th \nMay: 3rd ");
    this.res.end();
  } 
  else if(request.text && botRegexHeidi.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Heidi's Duty Dates:\nJan: 11th, 18th \nFeb: 1st, 12th, 20th \nMar: 4th, 9th, 22nd \nApr: 8th, 13th, 14th \nMay: 6th ");
    this.res.end();
  } 
  else if(request.text && botRegexJacob.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Jacob's Duty Dates:\nJan: 7th, 29th \nFeb: 8th, 10th, 21st \nMar: 2nd, 18th, 29th \nApr: 20th, 23rd, 26th \nMay:  ");
    this.res.end();
  } 
  else if(request.text && botRegexJared.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Jared's Duty Dates:\nJan: 9th, 23rd \nFeb: 9th, 10th, 13th \nMar: 27th \nApr: 3rd, 9th, 10th, 21st, 24th, 28th, 30th \nMay: None ");
    this.res.end();
  } 
  else if(request.text && botRegexJulianne.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Julianne's Duty Dates:\nJan: 12th, 19th, 20th, 21st (RIP), 28th \nFeb: 4th, 18th \nMar: 25th \nApr: 1st, 15th, 29th \nMay: None ");
    this.res.end();
  } 
  else if(request.text && botRegexKeely.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Keely's Duty Dates:\nJan: 8th, 25th, 26th, 27th (RIP) \nFeb: 15th, 18th \nMar: 8th, 29th \nApr: 12th, 14th, 25th \nMay: 2nd ");
    this.res.end();
  } 
  else if(request.text && botRegexMarilynn.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Marilynn's Duty Dates:\nJan: 8th, 25th \nFeb: 15th, 26th \nMar: 7th, 28th, 30th, 31st \nApr: 4th, 13th, 24th \nMay: 1st ");
    this.res.end();
  } 
  else if(request.text && botRegexMonica.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Monica's Duty Dates:\nJan: 11th, 30th \nFeb: 11th, 27th \nMar: 7th, 18th, 24th, 26th \nApr: 6th, 7th, 12th \nMay: None ");
    this.res.end();
  } 
  else if(request.text && botRegexOlivia.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Olivia's Duty Dates:\nJan: 9th, 17th, 30th, 31st \nFeb: 7th, 13th, 23rd, 24th, 28th \nMar: 3rd, 5th, 23rd \nApr: 18th \nMay: None ");
    this.res.end();
  } 
  else if(request.text && botRegexTavious.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Tavious's Duty Dates:\nJan: 14th, 24th \nFeb: 12th \nMar: 20th, 24th, 27th \nApr: 4th, 9th, 18th, 22nd \nMay: 4th, 5th ");
    this.res.end();
  } 
  else if(request.text && botRegexVictoria.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Victoria's Duty Dates:\nJan: 10th, 23rd, 28th \nFeb: 4th, 16th, 17th \nMar: 4th \nApr: 1st, 20th, 22nd \nMay: 1st ");
    this.res.end();
  } 
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response;

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function convertUTCDateToLocalDate(date) {
    var newDate = new Date();

    var offset = 7;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;   
}
exports.respond = respond;

