var TIMER = {'priority':1,'reg':5,'slow':25};


//not compress in old. use a custom isequal

//Complex system to track the data that has changed and that need to be send to the client.

Change.update = function(){
	//Entity
	for(var i in List.all){
		var mort = List.all[i];
		if(!mort.dead && mort.active !== false){
		    for(var m in Change.update.list[mort.type]){         //m = watch or exist
    		    for (var k in Change.update.list[mort.type][m]){     //k = priority , reg , slow
    		        if(frameCount % TIMER[k] === 0){
		            	for(var j in Change.update.list[mort.type][m][k])
		            	    Change.update[m](mort,Change.update.list[mort.type][m][k][j]);	
    }}}}}
	//MainList
	for(var i in List.main){
		var mort = List.main[i];
		for(var m in Change.update.list.main){
    		for (var k in Change.update.list.main[m]){
    	        if(frameCount % TIMER[k] === 0){
	            	for(var j in Change.update.list.main[m][k])
			            Change.update[m](mort,Change.update.list.main[m][k][j]);	
    }}}}
	//Private
	for(var i in List.main){
		var mort = List.all[i];
    	for(var m in Change.update.list.priv){		
    	    for (var k in Change.update.list.priv[m]){
    	        if(frameCount % TIMER[k] === 0){
	            	for(var j in Change.update.list.priv[m][k])
			            Change.update[m](mort,Change.update.list.priv[m][k][j],true);	
    }}}}
	
	
}




Change.update.init = function(){
	//w = watch, a = array for value, s = array to send, f = function filter, n = name, c = condition to test
	//NOTE: for .e being in 2 category, must put r:noreset. otherwise, second wont get
	//MEANS PRIVATE MUST BE LAST
	
	Change.update.list = {};
	//Fulllist
	Change.update.list['enemy'] = {
		'watch':{'priority':[
				{'array':['x'],'filter':Math.round},
				{'array':['y'],'filter':Math.round},
				{'array':['angle'],'filter':Math.round},
			],
			'reg':[
				{'array':['hp'],'filter':Math.round,'condition':(function(e){ return !e.nevercombat; })},
				{'array':['resource','hp','max'],'filter':Math.round,'condition':(function(e){ return !e.nevercombat; })},
				{'array':['sprite','name']},
				{'array':['sprite','sizeMod']},
			],
			'slow':[
				{'array':['combat']},
				{'array':['spdX'],'filter':Math.round,'condition':(function(e){ return !e.nevermove; })},
				{'array':['spdY'],'filter':Math.round,'condition':(function(e){ return !e.nevermove; })},
			]},	
		'exist':{'reg':[
				{'array':['sprite','anim']},
				{'array':['chatHead']},
			]}
	};
		
	Change.update.list['bullet'] = {
		'watch':{'priority':[
				{'array':['x'],'filter':Math.round},
				{'array':['y'],'filter':Math.round},
				{'array':['angle'],'filter':Math.round},
			],
			'reg':[
				{'array':['sprite','name']},
				{'array':['sprite','sizeMod']},
			]}
	};
	
	Change.update.list['player'] = {
		'watch':{'priority':[
				{'array':['x'],'filter':Math.round},
				{'array':['y'],'filter':Math.round},
				{'array':['angle'],'filter':Math.round},
			],
			'reg':[
				{'array':['spdX'],'filter':Math.round},
				{'array':['spdY'],'filter':Math.round},
				{'array':['combat']},
				{'array':['map'],'filter':Change.send.convert.map},
				{'array':['hp'],'filter':Math.round},
				{'array':['resource','hp','max'],'filter':Math.round},
				{'array':['sprite','name']},
				{'array':['sprite','sizeMod']},
			],
			
			
			},	
		'exist':{'reg':[
				{'array':['sprite','anim'],'reset':'noreset'},
				{'array':['chatHead'],'reset':'noreset'},
			]}
	};
	
	//Main
	Change.update.list['main'] = {
		'watch':{'priority':[],
			'reg':[
				{'array':['currentTab']},
				{'array':['context']},
				{'array':['dialogue']},	
				
				
				{'array':['popupList','weapon']},
				{'array':['popupList','armor']},
				
				{'array':['windowList','bank']},
				{'array':['windowList','offensive']},
				{'array':['windowList','defensive']},
				{'array':['windowList','trade'],'filter':Change.send.convert.tradeWindow},
				{'array':['windowList','shop'],'filter':Change.send.convert.shopWindow},
				{'array':['windowList','ability']},
				{'array':['windowList','passive']},
				{'array':['windowList','quest']},
				
				{'array':['invList'],'filter':'toClient'},
				{'array':['bankList'],'filter':'toClient'},
				{'array':['tradeList'],'filter':Change.send.convert.invList},
				{'array':['optionList'],'filter':Change.send.convert.optionList},
				
				{'array':['temp']},
				{'array':['help']},
				
			],
			'slow':[
				{'array':['pref']},	
				{'array':['friendList']},	
				{'array':['muteList']},
				
				{'array':['quest']},
				
				{'array':['passivePt']},
				{'array':['passive']},
				{'array':['clanList']},						
			]
			},	
		'exist':{'reg':[
				{'array':['chatBox'],'reset':[]},
				{'array':['chatInput'],'reset':''}
			]}
	};
	
	//Private
	Change.update.list['priv'] = {
		'watch':{'priority':[
				{'array':['x'],'filter':Math.round},
				{'array':['y'],'filter':Math.round},
				{'array':['angle'],'filter':Math.round},
			],
			'reg':[
				{'array':['spdX'],'filter':Math.round},
				{'array':['spdY'],'filter':Math.round},
				{'array':['map'],'filter':Change.send.convert.map},
				{'array':['hp'],'filter':Math.round},
				{'array':['mana'],'filter':Math.round},
				{'array':['dodge'],'filter':Math.round},
				{'array':['fury'],'filter':Math.round},
				{'array':['sprite','name']},
				{'array':['sprite','sizeMod']},
				
				
				{'array':['armor','piece','body','id'],'sendArray':['armor','piece','body'],'sendFilter':(function(w){ return {'visual':w.visual,id:w.id} }) },
				{'array':['armor','piece','helm','id'],'sendArray':['armor','piece','helm'],'sendFilter':(function(w){ return {'visual':w.visual,id:w.id} }) },
				{'array':['armor','piece','shield','id'],'sendArray':['armor','piece','shield'],'sendFilter':(function(w){ return {'visual':w.visual,id:w.id} }) },
				{'array':['armor','piece','bracelet','id'],'sendArray':['armor','piece','bracelet'],'sendFilter':(function(w){ return {'visual':w.visual,id:w.id} }) },
				{'array':['armor','piece','gloves','id'],'sendArray':['armor','piece','gloves'],'sendFilter':(function(w){ return {'visual':w.visual,id:w.id} }) },
				{'array':['armor','piece','boots','id'],'sendArray':['armor','piece','boots'],'sendFilter':(function(w){ return {'visual':w.visual,id:w.id} }) },
				{'array':['armor','piece','pants','id'],'sendArray':['armor','piece','pants'],'sendFilter':(function(w){ return {'visual':w.visual,id:w.id} }) },
				{'array':['armor','piece','amulet','id'],'sendArray':['armor','piece','amulet'],'sendFilter':(function(w){ return {'visual':w.visual,id:w.id} }) },
				{'array':['armor','piece','ring','id'],'sendArray':['armor','piece','ring'],'sendFilter':(function(w){ return {'visual':w.visual,id:w.id} }) },
				
				
				{'array':['weapon','id'],'sendArray':['weapon'],'sendFilter':(function(w){ return {'type':w.type,'piece':w.piece,'visual':w.visual,id:w.id} }) },
				{'array':['weaponList','melee','id'],'sendArray':['weaponList','melee'],'sendFilter':(function(w){ return {'type':w.type,'visual':w.visual,id:w.id} }) },
				{'array':['weaponList','range','id'],'sendArray':['weaponList','range'],'sendFilter':(function(w){ return {'type':w.type,'visual':w.visual,id:w.id} }) },
				{'array':['weaponList','magic','id'],'sendArray':['weaponList','magic'],'sendFilter':(function(w){ return {'type':w.type,'visual':w.visual,id:w.id} }) },
				
				
			],
			'slow':[
				{'array':['resource'],'filter':(function(w){ for(var i in w){ for(var j in w[i]){ w[i][j] = Math.round(w[i][j]); }} })},
				
				{'array':['permBoost']},
				{'array':['armor','def']},
				{'array':['def']},
				
				//???
				{'array':['armor','piece','body','def']},
				{'array':['armor','piece','helm','def']},
				{'array':['armor','piece','shield','def']},
				{'array':['armor','piece','bracelet','def']},
				{'array':['armor','piece','gloves','def']},
				{'array':['armor','piece','boots','def']},
				{'array':['armor','piece','pants','def']},
				{'array':['armor','piece','amulet','def']},
				{'array':['armor','piece','ring','def']},
				
				
				{'array':['ability'],'filter':Change.send.convert.abilityList },
				{'array':['abilityList'],'filter':Change.send.convert.abilityList },
				
				{'array':['skill','exp']},
				{'array':['skill','lvl']},
			]
			},	
		'exist':{'reg':[
				{'array':['sprite','anim']},
				{'array':['chatHead']},
			]}
	};
	Change.update.list['strike'] = null;
	Change.update.list['drop'] = null;
	Change.update.list['shop'] = null;
	
	for(var i in Change.update.list){
		if(!Change.update.list[i]){ Change.update.list[i] = {'watch':{'priority':[],'reg':[],'slow':[]},'exist':{'priority':[],'reg':[],'slow':[]}}; }
		
		for(var j in Change.update.list[i]){
		    var w = Change.update.list[i][j];
			w.priority = w.priority || []; 
			w.reg = w.reg || []; 
			w.slow = w.slow || []; 
			
			for(var k in w){
				for(var m in w[k]){
				    w[k][m].id = w[k][m].sendArray ? w[k][m].sendArray.toString() : w[k][m].array.toString()
				}
			}
		}
	}
	
}

Change.update.watch = function(mort,info,priv){
    //Test condition to test
	if(info.condition && !info.condition(mort)) return; 

	//Get Old and New Value and Set Old = to New
	var valRaw = valueViaArray({'origin':mort,'array':info.array});
	if(valRaw && info.filter)  valRaw = info.filter !== 'toClient' ? info.filter(valRaw) : valRaw.toClient();
	        
	var val0 = stringify(valRaw);                                   //Get new
	
	
	if(!priv){ var val1 = mort.old[info.id]; }
    else { var val1 = mort.privateOld[info.id]; }                      //Get old
	
	//Test !=
	if(!isEqual(val0, val1)){
		if(!priv){ mort.old[info.id] = val0; }                  //Set Old
		else { mort.privateOld[info.id] = val0; }
		
		
	    if(info.sendArray){                                                 //Modify array of what to send
			var valRaw = valueViaArray({'origin':mort,'array':info.sendArray});
			if(info.sendFilter) valRaw = info.sendFilter(valRaw);
			var val0 = stringify(valRaw);
		}
		
		if(!priv){ mort.change[info.id] = valRaw; }          //Add to change list for send.js know
		else {	mort.privateChange[info.id] = valRaw; }
	}
}	





Change.update.exist = function(mort,info,priv){
	//Test condition to test
	if(info.condition && !info.condition(mort)) return; 

	var valRaw = valueViaArray({'origin':mort,'array':info.array});
	if(valRaw){
	    if(Array.isArray(valRaw) && valRaw.length === 0) return;
	    var val0 = stringify(valRaw); 
		
		if(!priv){ mort.change[info.id] = valRaw; }
		else {	mort.privateChange[info.id] = valRaw; }
			
		if(!info.reset){ changeViaArray({'origin':mort,'array':info.array,'value':null}); }
		else if(info.reset !== 'noreset'){ changeViaArray({'origin':mort,'array':info.array,'value':deepClone(info.reset)}); }
		
	}
}