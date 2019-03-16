
  
var express = require('../node_modules/express');
var HRGRoutes = express.Router();



//common english words

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
let wordList = [
  "ability","able","aboard","about","above","accept","accident","according",
  "account","accurate","acres","across","act","action","active","activity",
  "actual","actually","add","addition","additional","adjective","adult","adventure",
  "advice","affect","afraid","after","afternoon","again","against","age",
  "ago","agree","ahead","aid","air","airplane","alike","alive",
  "all","allow","almost","alone","along","aloud","already",
  "also","am","among","amount","ancient","angel","angle","angry",
  "animal","announced","another","answer","ants","any","anybody","anyone",
  "anything","anyway","anywhere","apart","apartment","appearance","apple","applied",
  "appropriate","are","area","arm","army","around","arrange","arrangement",
  "arrive","arrow","art","article","as","aside","ask","asleep",
  "ate","atmosphere","atom","atomic","attached","attack","attempt",
  "attention","audience","author","automobile","available","average","avoid","aware",
  "away","baby","back","bad","badly","bag","balance","ball",
  "balloon","bank","bar","bare","bark","barn",
  "baseball","basic","basis","basket","bat","battle","bean",
  "bear","beat","beautiful","beauty","became","because","become","becoming",
  "bee","been","before","began","beginning","begun","behavior","behind",
  "being","believed","bell","belong","below","belt","bend","beneath",
  "bent","beside","best","bet","better","between","beyond","bicycle",
  "bigger","biggest","bill","birds","birth","birthday","bit","bite",
  "black","blanket","blew","blind","block","blood","blow",
  "blue","board","boat","body","bone","book","border","born",
  "both","bottle","bottom","bound","bow","bowl","box","boy",
  "brain","branch","brass","brave","break","breakfast","breath",
  "breathe","breathing","breeze","brick","bridge","brief","bright","bring",
  "broad","broke","broken","brother","brought","brown","buffalo",
  "build","building","built","buried","burn","burst","bush",
  "business","busy","but","buy","by","cabin","cage",
  "call","calm","can","canal", "cannot","cap","capital","captured","car","carbon",
  "care","careful","carefully","carried","carry","case","cast","castle",
  "cat","cattle","caught","cause","cave","cell","cent",
  "center","central","century","certain","certainly","chain","chair","chamber",
  "chance","change","changing","chapter","character","characteristic","charge","chart",
  "check","chemical","chest","chicken","chief","child","children",
  "choice","choose","chose","chosen","church","circle","citizen",
  "city","classroom","claws","clay","clean","clear",
  "climate","climb","clock","close","closer","cloth","clothes",
  "clothing","cloud","club","coal","coast","coat","coffee",
  "cold","collect","college","colony","color","column","combination","combine",
  "comfortable","coming","command","common","community","company","compare",
  "compass","complete","completely","complex","composed","composition",
  "compound","concerned","condition","congress","connected","consider","consist",
  "consonant","constantly","construction","contain","continent","continued","contrast",
  "control","conversation","cookies","cool","copper","corn","corner","correct","cost",
  "cotton","could","count","country","courage","course","court",
  "cover","cow","crack","create","creature","crew",
  "crop","cross","crowd","cry","cup","curious","current","curve",
  "customs","cut","cutting","daily","damage","dance","danger","dangerous",
  "dark","darkness","date","daughter","dawn","day","dead","deal",
  "dear","death","decide","declared","deep","deeply","deer","definition",
  "degree","depend","depth","describe","desert","desk","detail",
  "determine","develop","development","diagram","diameter","did","die","differ",
  "difference","different","difficult","difficulty","dig","dinner","direct","direction",
  "directly","dirt","dirty","disappear","discover","discovery","discuss","discussion",
  "disease","dish","distance","distant","divide","division","do","doctor",
  "does","dog","doing","doll","done","donkey","door",
  "dot","double","doubt","dozen","draw","drawn","dream",
  "dress","drew","dried","drink","driver","driving","drop","dropped","drove","duck","due","dug","dull",
  "during","dust","duty","each","eager","ear","earlier","early",
  "earn","earth","easier","easily","east","easy","eat","eaten",
  "edge","education","effect","effort","egg","eight","electric",
  "electricity","element","elephant","eleven","else","empty","end","enemy",
  "energy","engine","engineer","enjoy","enough","enter","entire","entirely",
  "environment","equal","equally","equator","equipment","escape","especially","essential",
  "establish","even","evening","event","eventually","every","everybody",
  "everyone","everything","everywhere","evidence","exact","exactly","examine","example",
  "excellent","except","exchange","excited","excitement","exciting","exercise",
  "exist","expect","experience","experiment","explain","explanation","explore","express",
  "expression","extra","eye","face","facing","fact","factor","factory",
  "failed","fair","fairly","fall","fallen","familiar","family","famous",
  "far","farm","farmer","farther","fast","fastened","faster","fat",
  "father","favorite","fear","feathers","feature","fed","feed","feel",
  "feet","fell","fellow","fence","few","fewer","field",
  "fierce","fifteen","fifth","fifty","fight","fighting","figure","fill",
  "film","final","finally","find","fine","finest","finger","finish",
  "fire","fireplace","firm","first","fish","five","fix","flag",
  "flame","flat","flight","floating","floor","flow",
  "flower","fly","fog","folks","follow","food","foot",
  "for","force","foreign","forest","forget","forgot","forgotten","form",
  "former","fort","forth","forty","forward","found","four",
  "fourth","fox","frame","free","freedom","frequently","fresh","friend",
  "friendly","frighten","frog","from","front","frozen","fruit","fuel",
  "full","fully","fun","function","funny","fur","furniture","further",
  "future","gain","garage","garden","gas","gate", "gather","gave","general","generally",
  "gentle","get","getting","giant","gift","girl","give","given","giving","glad","glass",
  "globe","go","goes","gold","golden","gone","good","goose",
  "got","government","grabbed","grade","gradually","grain","grandfather","grandmother",
  "graph","grass","gravity","gray","great","greater","greatest","greatly",
  "green","grew","ground","group","grow","grown","growth","guard",
  "guess","gulf","gun","habit","had","hair","half",
  "halfway","hall","hand","handle","hang","happen","happened",
  "happily","happy","harbor","hard","harder","hardly","has","hat",
  "have","having","hay","he","headed","heading","health","heard",
  "hearing","heart","heat","heavy","height","held","hello","help",
  "helpful","her","herd","here","herself","hidden","hide","high",
  "higher","highest","highway","hill","him","himself","his","history","hit","hold","hollow",
  "home","honor","hope","horn","horse","hospital","hot","hour","house","how","however","huge",
  "human","hundred","hung","hungry","hunt","hunter","hurried","hurry","hurt","husband",
  "ice","identity", "ill","image","imagine","immediately","importance","important",
  "impossible","improve","in","include","including","income","increase","indeed",
  "independent","indicate","individual","industry","influence","information","inside",
  "instance","instant","instead","instrument","interest","interior","into","introduced",
  "invented","involved","iron","is","island","it","its","itself","jar","jet","job",
  "join","joined","journey","joy","judge","just","keep","kept","key","kids","kill",
  "kind","kitchen","knew","know","knowledge","known","label","labor","lack",
  "lady","laid","lake","lamp","land","language","large","larger",
  "largest","last","later","laugh","law","lay","layers",
  "lead","leader","leaf","learn","least","leather","leave","leaving",
  "left","leg","length","lesson","let","letter","level",
  "library","lie","life","light","like","likely","limited",
  "lion","lips","liquid","listen","little","living","load","local","locate",
  "location","log","lonely","long","look","loose","lose","loss","lost","lot","loud",
  "love","lovely","low","lower","luck","lunch","lungs",
  "lying","machinery","mad","made","magic","magnet","mail",
  "mainly","major","make","making","man","managed","manner",
  "manufacturing","many","map","mark","market","married","mass","massage",
  "master","material","mathematics","matter","may","maybe","me","meal",
  "mean","means","meant","measure","meat","medicine","meet","melted",
  "member","memory","men","mental","merely","met","metal","method",
  "mice","middle","might","mighty","military","milk","mill",
  "mind","minerals","minute","mirror","missing","mission","mistake",
  "mix","mixture","model","moment","money","monkey",
  "month","mood","moon","morning","most","mostly","mother",
  "motion","motor","mountain","mouse","mouth","move","movement","movie",
  "moving","mud","muscle","music","must","my","myself",
  "mysterious","nails","name","nation","national","native","natural","naturally",
  "nature","near","nearby","nearer","nearest","nearly","necessary","neck",
  "needed","needle","negative","neighbor","neighborhood","nervous","nest",
  "never","new","news","newspaper","next","nice","night","nine",
  "nobody","noise","none","noon","north",
  "nose","not","note","noted","nothing","notice","noun","now",
  "number","numeral","object","observe","obtain","occasionally","occur",
  "ocean","of","off","offer","office","officer","official","oil",
  "old","older","oldest","on","once","one","only","onto",
  "open","operation","opportunity","opposite","or","orbit",
  "order","ordinary","organization","organized","origin","original","other",
  "our","ourselves","outer","outline","outside","over","own",
  "owner","oxygen","pack","package","page","paid","pain","paint",
  "pair","palace","pale","pan","paper","paragraph","parallel","parent",
  "park","part","particles","particular","particularly","partly","parts","party",
  "pass","passage","past","path","pattern","pay","peace", "pencil","people","per","perfect","perfectly","perhaps","period",
  "person","personal","pet","phrase","physical","pick","picture", "pictured","piece","pig","pile",
  "pipe","pitch","place","plain","plan","plane","planet","planned",
  "planning","plant","plastic","plate","plates","play","pleasant","please",
  "pleasure","plenty","plural","plus","poem","poet","poetry",
  "point","pole","police","policeman","political","pond","pony",
  "poor","popular","population","port","position","positive","possible",
  "possibly","post","pot","potatoes","pour","powder","power",
  "powerful","practical","practice","prepare","present","president","press","pressure",
  "pretty","prevent","price","pride","primitive","principal","principle",
  "printed","private","prize","probably","problem","process","produce","product",
  "production","program","progress","promised","proper","properly","property","protection",
  "proud","prove","provide","public","pull","pupil","purple",
  "purpose","push","put","putting","quarter","queen","question","quick",
  "quickly","quiet","quietly","quite","rabbit","race","radio","railroad",
  "rain","raise","ran","ranch","range","rapidly","rather",
  "raw","rays","reach","read","reader","ready","realize",
  "rear","reason","recall","receive","recent","recently","recognize","record",
  "red","refer","refused","region","related","relationship","religious",
  "remain","remarkable","remember","remove","repeat","replace","report",
  "represent","require","research","respect","rest","result","return","review",
  "rhyme","rhythm","rice","rich","ride","riding","right","ring",
  "rising","river","road","roar","rock","rocky",
  "rod","roll","roof","room","root","rope","rose","rough",
  "round","route","row","rubbed","rubber","rule","ruler","run",
  "running","rush","sad","saddle","safe","safety","said","sail",
  "sale","salmon","salt","same","sand","sang","satellites",
  "satisfied","save","saved","saw","scale","scared","scene",
  "school","science","scientific","scientist","score","sea","search",
  "season","seat","second","secret","section","see","seed","seeing",
  "seems","seen","seldom","select","selection","sell","send","sense",
  "sent","sentence","separate","series","serious","service","sets",
  "setting","settle","settlers","seven","several","shade","shadow","shake",
  "shaking","shall","shallow","shape","share","sharp","she","sheep",
  "shelf","shells","shelter","shine","shining","ship","shirt",
  "shoe","shoot","shop","shore","short","shorter","shot",
  "shoulder","shout","show","shown","shut","sick","sides","sight",
  "sign","signal","silence","silent","silk","silly","silver","similar",
  "simple","simplest","simply","since","sing","single","sink","sister",
  "sit","sitting","situation","six","size","skill","skin","sky",
  "slabs","slave","sleep","slept","slight","slightly","slip",
  "slipped","slope","slow","small","smaller","smallest","smell",
  "smile","smoke","smooth","snake","snow","soap","social",
  "society","soft","soil","solar","sold","soldier","solid",
  "solution","solve","some","somebody","somehow","someone","something","sometime",
  "somewhere","son","song","soon","sort","sound","source","south",
  "space","speak","special","species","specific","speech","speed",
  "spell","spend","spent","spider","spin","spirit","spite","split",
  "spoken","sport","spread","spring","square","stage","stairs","stand",
  "standard","star","start","state","statement","station","stay",
  "steady","steam","steel","steep","stems","step","stepped",
  "stiff","still","stock","stomach","stone","stood","stop","stopped",
  "store","storm","story","straight","strange","stranger","straw",
  "stream","street","strength","stretch","strike","string","strip","strong",
  "stronger","structure","struggle","stuck","student","studied","studying",
  "subject","substance","success","successful","such","sudden","suddenly","sugar",
  "suggest","suit","sum","summer","sunlight","supper","supply",
  "support","suppose","sure","surface","surprise","surrounded","swam","sweet",
  "swept","swim","swimming","swing","syllable","symbol","system",
  "table","tail","take","taken","tales","talk","tall","tank",
  "task","taste","taught","tax","tea","teach","teacher",
  "tears","teeth","telephone","tell","temperature","ten","term","terrible",
  "thank","that","them","themselves","theory","there","therefore","these","they",
  "thick","thin","thing","think","third","thirty","this","those",
  "thou","thought","thousand","thread","three","threw","throat","through",
  "throughout","throw","thrown","thumb","thus","thy","tide","tie","tight","till","time",
  "tin","tiny","tip","tired","title","tobacco","today","together","told","tomorrow",
  "tone","tongue","tonight","too","took","tool","top","topic",
  "torn","total","touch","toward","tower","town","toy","trace",
  "track","trade","traffic","trail","train","transportation","trap","travel",
  "treated","tree","triangle","tribe","trick","tried","trip","troops",
  "tropical","trouble","truck","trunk","truth","try","tube","tune",
  "turn","twelve","twenty","twice","two","type","typical","uncle",
  "under","underline","understanding","unhappy","union","unit","universe","unknown",
  "unless","until","unusual","up","upon","upper","upward","us",
  "use","useful","using","usual","usually","valley","valuable","value",
  "vapor","variety","various","vast","vegetable","verb","vertical","very",
  "vessels","victory","view","village","visit","visitor","voice","volume",
  "vote","vowel","voyage","wait","walk","wall","want","war","warm","warn","wash",
  "waste","watch","water","wave","way","we","weak","wealth","wear","weather","week",
  "weigh","weight","welcome","west","wet","whale","what","whatever","wheat","wheel",
  "when","whenever","where","whether","which","while","whispered","whistle",
  "white","who","whole","whom","whose","why","wide","widely","wife",
  "wild","will","willing","win","wind","window","wing","winter",
  "wire","wise","wish","with","within","without","wolf","women",
  "won","wonder","wonderful","wood","wooden","wool","word","wore",
  "work","worker","world","worried","worry","worse","worth","would",
  "wrapped","write","writer","writing","written","wrong","yard",
  "year","yellow","yes","yesterday","you","young","younger",
  "your","yourself","youth","zero","zebra","zoo","zulu"
];






// Require model in our routes module

// Defined Create route
HRGRoutes.route('/getwords').get(function (req, res) {
  try {

    var keyword = wordList[Math.floor(Math.random() * (wordList.length))];  //random word


//jiso japanese api call
var apiurl = 'https://jisho.org/api/v1/search/words?keyword=' + keyword;
xhr.open("GET", apiurl, false);
xhr.send(); 


var result = JSON.parse(xhr.responseText)["data"][0];

res.send(result)



    

  } catch (error) {
    res.status(400).json({ 'Status': error });


  }



});

// HRGRoutes.route('/updatefile').get(function (req, res) {
//   try {

//     const csvFilePath=path.join(__dirname+'/hospitals_lat_lng_sheet.csv')
// csv()
// .fromFile(csvFilePath)
// .then((jsonObj)=>{

// jsonObj.forEach(element => {
//   console.log(element);


//   var data = {};
//   data['Name'] = element['Name of Hospital'];
//   data['Address'] = element['Address'];
//   data['lat'] = element['Latitude'];
//   data['long'] = element['Longitude'];
//   data['bdc'] = Math.floor(Math.random()*50).toString();
//   console.log(data);


//   let newuser = new Business(data);
//   newuser.save()
//     .then(user => {
      
//     })
//     .catch(err => {
//       res.status(400).json({ 'Status': 'Error Processing Data' });
//     });
  
// }); 
//  /**
//      * [
//      * 	{a:"1", b:"2", c:"3"},
//      * 	{a:"4", b:"5". c:"6"}
//      * ]
//      */ 
// })

    

//   } catch (error) {
//     res.status(400).json({ 'Status': error });


//   }



// });



// test route
HRGRoutes.route('/').get(function (req, res) {

  res.send({ "Status": "Api is Working" });

});
module.exports = HRGRoutes;