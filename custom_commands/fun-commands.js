var cmds = [cmdFlipCoin, cmdRollDice, lenny, brocode, playbook];

exports.checkCommands = function(dataHash, callback) {
  for (cmd in cmds) {
    var test = cmds[cmd](dataHash.request, callback);
    if (test) {
      if (!dataHash.funMode){
        callback(true, "Sorry I'm no fun right now", []);
        return test;
      }
      callback(true, test, []);
      return test;
    }
  }
}

exports.getCmdListDescription = function () {
  cmdArr = [
    {cmd: "/flipcoin", desc: "Returns heads or tails 50/50 chance", fun: true},
    {cmd: "/roll #d#", desc: "Will simulate a random dice roll of # number dice and # sides. EX: /roll 2d6 will roll two six sided dice.", fun: true}
  ];

  return cmdArr;
}

function cmdFlipCoin(request){
  var regex = /^\/flipcoin$/i;

  if (regex.test(request.text)) {
    var num = Math.floor((Math.random() * 2) + 1);
    var msg = "Heads!";
    if (num == 1) {
      msg = "Tails!";
    }

    return msg;
  } else {
    return false;
  }
}

function cmdRollDice(request){
  var regex = /^\/roll (\d+)d(\d+)/i;

  if (regex.test(request.text)) {
    var val = regex.exec(request.text);
    var msg = "";

    if (val[1] < 1) {
      msg = "Hey I rolled no dice and the result is ... You're an idiot";
    } else if (val[1] > 20) {
      msg = "If I can't fit more than 20 dice in my robot hand";
    } else if (val[2] > 1000) {
      msg = "I'm 3d printing dice with more than 1000 sides just for this silly request. I'll get back to you in 37 years.";
    } else if (val[2] < 2) {
      msg = "Your results are: Unicorns";
    } else {
      for (i = 0; i < val[1]; i++) {
        var die = Math.floor((Math.random() * val[2]) + 1);
        msg += " " + die;
      }
      msg = "Your results are:" + msg;
    }
    return msg;
  } else {
    return false;
  }
}

function lenny(request){
  var regex = /^\/lenny$/i;

  if (regex.test(request.text)) {
    var val = regex.exec(request.text);
    
	var lennies = [
	"( ͡° ͜ʖ ͡°)",
	"¯\_(ツ)_/¯",
	"▄︻̷̿┻̿═━一",
	"ʕ•ᴥ•ʔ",
	"(▀̿Ĺ̯▀̿ ̿)",
	"(ง ͠° ͟ل͜ ͡°)ง",
	"༼ つ ◕_◕ ༽つ",
	"ಠ_ಠ",
	"(づ｡◕‿‿◕｡)づ",
	"[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]",
	"(• ε •)",
	"(ง'̀-'́)ง",
	"(͡ ͡° ͜ つ ͡͡°)",
	"(ಥ﹏ಥ)",
	"[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]",
	"(ノಠ益ಠ)ノ彡┻━┻",
	"﴾͡๏̯͡๏﴿ O'RLY?",
	"(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
	"(◕‿◕✿)",
	"(☞ﾟ∀ﾟ)☞",
	"(¬‿¬)",
	"(ᵔᴥᵔ)",
	"| (• ◡•)| (❍ᴥ❍ʋ)",
	"ლ(ಠ益ಠლ)",
	"(づ￣ ³￣)づ",
	"ಠ╭╮ಠ",
	"♥‿♥",
	"ヾ(⌐■_■)ノ♪",
	"( ͡ᵔ ͜ʖ ͡ᵔ )",
	"\ (•◡•) /",
	"ᕙ(⇀‸↼‶)ᕗ",
	"⚆ _ ⚆",
	"ᕦ(ò_óˇ)ᕤ",
	"(｡◕‿‿◕｡)",
	"ಥ_ಥ",
	"ヽ༼ຈل͜ຈ༽ﾉ",
	"(☞ຈل͜ຈ)☞",
	"(•ω•)",
	"(°ロ°)☝",
	"ლ(´ڡ`ლ)",
	"( ಠ ͜ʖರೃ)",
	"╚(ಠ_ಠ)=┐",
	"( ⚆ _ ⚆ )",
	"(ʘᗩʘ')",
	"¯\(°_o)/¯",
	"(° ͡ ͜ ͡ʖ ͡ °)",
	"¬_¬",
	"(/) (°,,°) (/)",
	"^̮^",
	"=U",
	">_>",
	"(づ` ͜ʖ´)づ",
	"ᕦ⚆Д⚆ᕥ",
	"乁(ꖘ ͟ʖꖘ)ㄏ",
	"ヽ(⨶v⨶)ﾉ",
	"¯\_❍ᨎ❍_/¯",
	"(づ꘠‿꘠)づ",
	"(づ   ͟ل͜  )づ",
	"\(´•  ͟ل͜ •`)/",
	"(σᴥσ)",
	"( ͡o ͜ʖ ͡o)",
	"( ͡° ͜ʖ ͡°)"
    ]
	
	msg = lennies[Math.floor(Math.random() * lennies.length)];
	
	return msg;
	   
  }
}

function brocode(request){
  var regex = /^\/brocode$/i;

  if (regex.test(request.text)) {
    var val = regex.exec(request.text);
    
	var brocodes = [ 
		"Bros before hoes", 
		"A Bro will not talk about something lame in front of a woman",
		"Bros don't date their bro ex girlfriends",
		"Bros buy porn for all the bros",
		"A bro never sends a greeting card to another bro",
		"Bros do not share dessert",
		"Poorly-planned-mediocre-social-media-practical-jokes before honesty",
		"A Bro shall always alert another Bro of any girl fight",
		"Bros cannot make eye contact during a devil's threeway",
		"A Bro will, whenever possible, provide a bro with protection",
		"A bro saves a bro from his ex",
		"A bro saves a bro from the friend zone",
		"A Bro shall at all times say \"yes\"",
		"The mom of a Bro is always off-limits. But the step-mom of a Bro is fair game if she initiates it and/or is wearing at least one article of leopards print clothing",
		"A bro pretends to like cigars",
		"A bro never dates a bro's ex-girlfriend (unless granted permission)",
		"A bro that calls \"dibs\" first, has dibs",
		"No leaving a Bro hanging",
		"A Bro always likes the new profile picture of another bro",
		"A true Bro will never be \"Necklace Guy\".",
		"A bro shall not have a weird moment with another bro's fiance",
	];
	
	var bro = brocodes[Math.floor(Math.random() * brocodes.length)];
	
	msg = bro + " - Barney"
	
	return msg;
	   
  }
}

function playbook(request){
  var regex = /^\/playbook$/i;

  if (regex.test(request.text)) {
    var val = regex.exec(request.text);
    
	var playbooks = [ 
		"Bros before hoes", 
		"A Bro will not talk about something lame in front of a woman",
		"Bros don't date their bro ex girlfriends",
		"Bros buy porn for all the bros",
		"A bro never sends a greeting card to another bro",
		"Bros do not share dessert",
		"Poorly-planned-mediocre-social-media-practical-jokes before honesty",
		"A Bro shall always alert another Bro of any girl fight",
		"Bros cannot make eye contact during a devil's threeway",
		"A Bro will, whenever possible, provide a bro with protection",
		"A bro saves a bro from his ex",
		"A bro saves a bro from the friend zone",
		"A Bro shall at all times say \"yes\"",
		"The mom of a Bro is always off-limits. But the step-mom of a Bro is fair game if she initiates it and/or is wearing at least one article of leopards print clothing",
		"A bro pretends to like cigars",
		"A bro never dates a bro's ex-girlfriend (unless granted permission)",
		"A bro that calls \"dibs\" first, has dibs",
		"No leaving a Bro hanging",
		"A Bro always likes the new profile picture of another bro",
		"A true Bro will never be \"Necklace Guy\".",
		"A bro shall not have a weird moment with another bro's fiance",
	];
	
	var pb = playbooks[Math.floor(Math.random() * playbooks.length)];
	
	msg = pb + " - Barney";
	
	return msg;
	   
  }
}






