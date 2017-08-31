var HTTPS = require('https');
var cool = require('cool-ascii-faces');


var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool/; botRegexSalt = /^\/salt/; botRegexDuty = /^\/duty/; botRegexDuty2 = /^\/tomorrow/; 
      botRegexHelp = /^\/help/; botRegexUp = /^\/update/; botRegexSor = /^\/sorry/; botRegexDuty3 = /^\/today/; botRegexTanner = /^\/tanner/; botRegexAcacia = /^\/acacia/; botRegexAnna = /^\/anna/; botRegexArmani = /^\/armani/; botRegexBrennan = /^\/brennan/; botRegexEmily = /^\/emily/; botRegexEverton = /^\/everton/; botRegexGarrett = /^\/garrett/; botRegexGeorge = /^\/george/; botRegexHaneen = /^\/haneen/; botRegexHeidi = /^\/heidi/; botRegexJacob = /^\/jacob/; botRegexJared = /^\/jared/; botRegexJulianne = /^\/julianne/; botRegexKeely = /^\/keely/; botRegexMarilynn = /^\/marilynn/; botRegexMonica = /^\/monica/; botRegexOlivia = /^\/olivia/; botRegexTavious = /^\/tavious/; botRegexVictoria = /^\/victoria/; 

    //Arrays of duty partners
  var jan = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; 
  var feb = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; 
  var mar = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; 
  var apr = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; 
  var may = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; 
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
        postMessage("Today's lucky winners are " + people);
    } else {
        postMessage(people + " get to go fight the good fight tonight");
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
        postMessage("Tomorrow's Hunger Games tributes are " + people);
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
    postMessage("New in this update:\nAdded functions:\n\n/acacia\n/anna\n/armani\n/brennan\n/emily\n/everton\n/garrett\n/george\n/haneen\n/heidi\n/jacob\n/jared\n/julianne\n/keely\n/marilynn\n/monica\n/olivia\n/tanner\n/tavious\n/victoria\n");
    this.res.end();
  } 
  else if(request.text && botRegexSor.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media0.giphy.com/media/RFDXes97gboYg/200_s.gif");
    this.res.end();
  }
  else if(request.text && botRegexTanner.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Tanner's Duty Dates:\nAug: 21st, 25th & 26th \nSept: 11th, 25th \nOct: 2nd, 16th, 25th, 30th \nNov: 8th\nDec: 4th, 8th & 9th\nGame Days: Sept 9th");
    this.res.end();
  } 
  else if(request.text && botRegexAcacia.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Acacia's Duty Dates:\nAug: 17st, 29th \nSept: 10th, 14th \nOct: 3rd, 22nd, 31st \nNov: 2nd, 17th & 25th\nDec: none\nGame Days: Oct 14th");
    this.res.end();
  } 
  else if(request.text && botRegexAnna.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Anna's Duty Dates:\nAug: 30th, 31st \nSept: 4th, 21st, 22nd & 23rd \nOct: 1st, 17th \nNov: 2nd, 12th \nDec: none\nGame Days: Oct 14th");
    this.res.end();
  } 
  else if(request.text && botRegexArmani.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Armani's Duty Dates:\nAug: 16th, 23rd \nSept: 5th, 15th & 16th, 27th \nOct: 3rd, 18th \nNov: 1st, 7th\nDec: 5th \nGame Days: none");
    this.res.end();
  } 
  else if(request.text && botRegexBrennan.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Brennan's Duty Dates:\nAug: 13th, 30th \nSept: 1st & 2nd, 19th, 28th \nOct: 10th, 11th, 27th & 28th \nNov: 16th, 27th\nDec: 4th, 8th & 9th\nGame Days: Nov 11th");
    this.res.end();
  } 
  else if(request.text && botRegexEmily.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Emily's Duty Dates:\nAug: 17th, 25th & 26th \nSept: 4th (Day Duty), 7th, 14th, 29th & 30th \nOct: 4th, 12th, 25th \nNov: 1st, 8th\nDec: none\nGame Days: none");
    this.res.end();
  } 
  else if(request.text && botRegexEverton.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Everton's Duty Dates:\nAug: 14th \nSept: 6th, 15th & 16th, 18th, 27th \nOct: 4th, 11th, 31st \nNov: 10th and 11th, 15th, 29th\nDec: none\nGame Days: none");
    this.res.end();
  } 
  else if(request.text && botRegexGarrett.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Garrett's Duty Dates:\nAug: 12th, 15th \nSept: 3rd, 12th \nOct: 8th, 13th & 14th, 15th \nNov: 5th, 10th & 11th, 26th\nDec: none\nGame Days: Nov 18th");
    this.res.end();
  } 
  else if(request.text && botRegexGeorge.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://imgur.com/a/MzaOH");
    this.res.end();
  } 
  else if(request.text && botRegexHaneen.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Haneen's Duty Dates:\nAug: 23rd, 27th \nSept: 10th, 24th \nOct: 6th & 7th, 9th, 23rd \nNov: 6th, 28th\nDec: none\nGame Days: Oct 28th");
    this.res.end();
  } 
  else if(request.text && botRegexHeidi.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Heidi's Duty Dates:\nAug: 13th, 27th \nSept: 12th, 17th, 29th & 30th \nOct: 1st, 24th \nNov: 9th, 26th\nDec: 1st & 2nd, 6th \nGame Days: Sept 9th");
    this.res.end();
  } 
  else if(request.text && botRegexJacob.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Jacob's Duty Dates:\nAug: 14th \nSept: 4th, 20th, 22nd & 23rd, 26th \nOct: 18th, 22nd, 27th & 28th \nNov: 14th, 29th\nDec: 7th\nGame Days: none");
    this.res.end();
  } 
  else if(request.text && botRegexJared.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Jared's Duty Dates:\nAug: 21st, 28th \nSept: 17th, 18th \nOct: 9th, 26th \nNov: 3rd & 4th, 14th, 28th\nDec: 5th\nGame Days: Aug 26th");
    this.res.end();
  } 
  else if(request.text && botRegexJulianne.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Julianne's Duty Dates:\nAug: 18th & 19th, 29th, 31st \nSept: 1st & 2nd, 7th, 24th \nOct: 8th, 19th \nNov: 5th, 12th\nDec: none\nGame Days: Nov 18th");
    this.res.end();
  } 
  else if(request.text && botRegexKeely.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Keely's Duty Dates:\nAug: 24th \nSept: 5th, 8th & 9th, 21st, 28th \nOct: 5th, 17th, 20th & 21st \nNov: 7th, 13th\nDec: 3rd \nGame Days: August 26th");
    this.res.end();
  } 
  else if(request.text && botRegexMarilynn.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Marilynn's Duty Dates:\nAug: 16th, 20th \nSept: 6th, 8th & 9th \nOct: 5th, 20th & 21st, 26th, 29th \nNov: 16th, 30th\nDec: 3rd\nGame Days: none");
    this.res.end();
  } 
  else if(request.text && botRegexMonica.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Monica's Duty Dates:\nAug: 12th, 15th \nSept: 13th, 25th \nOct: 13th & 14th, 16th, 23rd \nNov: 13th, 17th & 25th, 27th\nDec: 4th\nGame Days: Oct 28th");
    this.res.end();
  } 
  else if(request.text && botRegexOlivia.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Olivia's Duty Dates:\nAug: 22nd \nSept: 11th, 26th \nOct: 2nd, 10th, 29th, 30th \nNov: 3rd & 4th\nDec: 6th, 7th \nGame Days: none");
    this.res.end();
  } 
  else if(request.text && botRegexTavious.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Tavious's Duty Dates:\nAug: 22nd, 24th \nSept: 3rd, 19th \nOct: 6th & 7th, 15th, 24th \nNov: 6th, 9th\nDec: 1st & 2nd\nGame Days:none");
    this.res.end();
  } 
  else if(request.text && botRegexVictoria.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Victoria's Duty Dates:\nAug: 18th & 19th, 20th, 28th \nSept: 13th, 20th \nOct: 12th, 19th \nNov: 15th, 30th \nDec: 8th & 9th\nGame Days: Nov 11th");
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

