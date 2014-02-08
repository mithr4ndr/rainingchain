Init.db.map = function (){
	Db.map = {};
	
	Db.map['test'] = function(){
		var m = {};
		m.name = "Test";
		m.grid = ['000000000000000000000000000000000000100000000000000000000000100000000000000000000000000000000000','000000000000000000000000000000000000100000000000000000000000100000000000000000000000000000000000','000000000000000000000000000000000000100000000000000000000000100000000000000000000000000000000000','000000000000000000000000000000000000100000000000000000000000100000000000000000000000000000000000','000000000000000000000000000000000000100000000100000010011000100000000000000000000000000000000000','000000000000000000000000000000000000100000000100000010000000100000000000000000000000000000000000','000000000000000000000000000000000000100000000000000000000000100000111110000000000000000000000000','000000000000000000000000111111111111100000000000000000000000111111100010000000000000000000000000','000000000000000000000000100000000000000000000000000000000000000000000010000001111100000000000000','000000000000000000000000100110000000000000000000000000000000000000000010000111000110000000000000','000000000000000000000000100110000000000000000000000000000000000000000001111100000110000000000000','000000011111000000000000100000000000000000000000000000000000000000011000000000000110000000000000','000000010001000000000000100000000000100000000000000000000000000000011000000000000010000000000000','000001110001000000000000100000000000000000000000000000000000000110000000000000000010000000000000','000001000001000000000000100000000000000000000000000000000000000000000000000000000010000000000000','000001001101000000000000100000000000000000000000000000000000000000000000000000000010000000000000','000001001101000000000000111110000000000000000011000000000000000000000000001111111111110000000000','000001000001000000000000111010000000000000000011000000000000000000000000011000000010010000000000','000001110111000000000000110010000000000000000000000000000000000000000000010000000001010000000000','000000010111000000000000110010000000000000000000000000000000000000000000010000000001010000000000','000000010001000000000000110010000000000000000000000000000000000000000000010000000000111100000000','000000010001000000000000111110000000000000000000000011111100000000000000010000000000010110000000','000000010001111111111111100000000000000000000000111110000100001100000000010000000000010010000000','000000010000000000000000000000000000000000001111100000000110001100000000010000000000010010000000','000000010000000000000000000000000000000001111000000000000010001100000000010000000000010010000000','000000010000000000000000000000000000111111000000000000000010001100000000011100000011110110000000','000000010001100000000000000000000000100000000000000000000011100000000000001000000010000100000000','000000010001100000000000000000000000100000000000000000000000100000000000001000000010000100000000','000000110000000000000000000000000001100000000000000011000000100000000011111000000010000100000000','000000100000000000000000000000000001000000110000000011000000100000000011111111111110000100000000','000000100000000000000001000000000001000000110011110000000000100000000000000000000000000100000000','000000100000000000000000000000000001000000110011110000000000100000000000000000000000000100000000','000000110000000000000000000000000011000000001000000000000000100000000000000000000000000111000000','000000010000000000000000000000000010000000000000000000000111100000000000000000000000000001100000','000000010000000000000000000000000010000000000000000000000111100010000000000000000011000001100000','000000010000000000000000000000000010000000000000000000000111100000000000001111000011000000100000','000000011111000000000000000000000010000000000000000000000111100000000000001111000000000000100000','000000000001000000000000000000000010000000000000000000000111100000000000001111000000000000100000','000000000001111000000000000000000011000000000000000000000100000000000000000000000000000001100000','000000000000001000000000000000000011100000000000000000000100000000000000001111000000000001000000','000000000000001001000000000000000011110000000000000000000100000000000000011001111000000001000000','000000000000001000000000000011000011111100000000000000000100000000000000010000001111000001000000','000000000000001000000000000011000001111110000000000000000100000000000000010000000001100111000000','000000000000001100000000000000000000111111000001100000001100000000000000010000000000111100000000','000000000000000100000000000000000000111111000001111111111100000000000000010000000000000000000000','000000000000000100000000000000000000001111000001111011100100000001000000010000000000000000000000','000000000000000100000000000000000000000011000001100000000100000000000000010000110000000000000000','000000000000000100000000000000000000000011000001100000011100000000000000010000110000000000000000','000000000000000100000000000000000000000000000000111111110000000000000000011000000000000000000000','000000000000000100000000000000000000000000000000000000000000000000000000001000000000000000000000','000000000000000100000000000000000000000000000000000000000000000000000000001000000000000000000000','000000000000000100000110000000000000000000000000000000110000000000000000001000000000000000000000','000000000000000100000110000000000000000000000000000000110000000000000000001000000000000000000000','000000000000001100000110000000000000000000000000000000000000000000000011001000000000000000000000','000000000000001000000110000000000000000000000000000000000000000000000011001100000000000000000000','000000000000001000000000000000000000000000000000000000000000000000000011000100000000000000000000','000000000000001000000000000000000000000000000000000000000000000000000011000100000000000000000000','000000000000001000000000000000000000000000000000000000000001000000000000000100000000000000000000','000000000000111000000000000000000000000000000000000000000000000000000000000111110000000000000000','000000000011100000000000000000000000000000000011110000000000000000000000000000010000000000000000','000000001110000000000000000001000000000000000011110000000000000000000000000000011100000000000000','000000001000000000000000000000000000000000000000000000000000000000000000000000000100000000000000','000000001000000000111111110000000000000000000000000000000000000000000000000000000100000000000000','000000001000000011100000011100000000000000000000000000000000000000111111111111100100000000000000','000000011000001110000000000100000000000111100000000000000000001111100000000000111100000000000000','000000010000001010000000000100000000000111100000000000000000001000000000000000001100000000000000','000000010000001000000000000100000000000111100000000000000000011000000000000000000111000000000000','000000010000001000000000000100000000000000000000000000000000010000000000000000000101010000000000','000000010000001000000000000100000000000000000000000000000000010000000000000000000101110000000000','000000011100001110000000111100000000000000000000000000000000010000000000000000000100111000000000','000000000100000010000000100000000000000000000000000000000000010000000000000000000100011000000000','000000000100000010000000100000000000000000000000000000110000010000000000000000000100011000000000','000000000100000010000000100000000110000000000000000000110000011110000000000000000100011000000000','000000000100000011111111100000000110000000000000000000000000000010000000000000000100001000000000','000000000100000000000000000000000000000000000000000000000000000010000000000000011100001000000000','000000000100000000000000000000000000000000000000000000000000000010000000000000010000011000000000','000000000100000000000000000000000000000000000110000000000000000010000000000000010000010000000000','000000000100000000000000000000000000000010000110000000000000000010000000000000010000010000000000','000000000100000000000000000000000000000000000000000110000000000011111111111111110000010000000000','000000000111111100000000000000000000000000000000000000000000000000000000110000000000010000000000','000000000000000100000000000000000000000000000000000000000000000000110000110111100000010000000000','000000000000000110000000000000000000000000000000000000000000000000000000000111100000010000000000','000000000000000010000000000000000000000000000000000000000000000000000000000000000000010000000000','000000000000000010000000000000000000000000000000000000000000000000000000000000000000010000000000','000000000000000011000000000000000000000000000000000000000000000000000000000000000000110000000000','000000000000000001000000000000000000000000000000000000000000000000000000000000000000100000000000','000000000000000001000000000000000000000000000000000011000000000000011110000000000111100000000000','000000000000000001100000000000000000000000000000000011000000001111011110000000000100000000000000','000000000000000000100000000000000000000000011111000000000000001111000000000000000100000000000000','000000000000000000100000000001111111111000010001110000000000000000000000000000111100000000000000','000000000000000000111000000001000000001000010000011111111111111111110000000000100000000000000000','000000000000000000001000000001000000001111110000000000000000000000011000111111100000000000000000','000000000000000000001111111111000000000000000000000000000000000000001111100000000000000000000000','000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000','000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000','000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000']
		m.load = {};
		m.load.main = function(map){
			
			
			Actor.creation.group({'x':1060,'y':1900,'map':map,'respawn':100},[
				{'amount':3,"category":"troll","variant":"ice",'lvl':0,'modAmount':1},
			]);
			
			
			
		}
		/*
		[0,0,0,1,2,0,0,
		0,0,0,0,3,0,0,0,]
		
		enemyList = [
		{x:4*32,y:0*32},
		{x:5*32,y:0*32},
		{x:5*32,y:1*32},
		
		]
		
		x:enemyList[3].x
		*/
		
		m.loop = {};
		m.loop.main = function(map,variable,cst){
			if(Loop.interval(10) && false){
				Map.collisionRect(map,[1000,1400,1000,1400],'player',function(key){
					var mort = List.all[key];
					mort.hp -= 100;
					
					Attack.creation(
						{x:mort.x,y:mort.y,map:map,hitIf:'player-simple',angle:mort.angle},
						useTemplate(Attack.template(),cst.atk)
					);
					
				});
			}
		}
		
		
		
		m.cst = {
			atk:{'type':"bullet",'angle':15,'amount':1, 'aim': 0,'objImg':{'name':"iceshard",'sizeMod':1},'hitImg':{'name':"ice2",'sizeMod':0.5},
				'dmg':{'main':1,'ratio':{'melee':0,'range':10,'magic':80,'fire':10,'cold':0,'lightning':0}}},	
		};
		return m;
	};
	//ts("Actor.creation.group({'x':1060,'y':1900,'map':'test@MAIN','respawn':100},[{'amount':1,'category':'boss','variant':'iceTroll','lvl':0,'modAmount':1},]);")
			
		

	Db.map['tutorial'] = function(){
		var m = {};
		m.name = "Tutorial";
		m.grid = ["11111111111111111111111111111111111110000001111111111111111111111111111111111111","11111111111111111111111111011000000000000001111111111111111111111111111111111111","11111111111111111111111111011000000000000001111111111111111111111111111111111111","11111111111111111111111111000000000000000001111111111111111111111111111111111111","11111111111111111111111111000000000000000001111111111111111111111111111111111111","11111111111111111111111111000000000000000001111111111111111111111111111111111111","11111111111111111111111111000000000001111001111111111111111111111111111111111111","11111111111111111111111111000000001101111001111111111101111111110111111111111111","11111111111111111111111111000000001101111001111111111101111111110111111111111111","11111111111111111111111111100000010000000001111111111100011111000111111111111111","11111111111111111111111111100000011111111101111111111100000000000111111111111111","11111111111111111111111111100000011111111111111111111100000000000111111111111111","11111111111111111111111111100000011111111111111111111100000000000111111111111111","11111111111111111100000000100000010000000011111111111100000000000111111111111111","11111111111111111101111000000000000001100011111111111100000000111111111111111111","11111111111111111101111000000000000001100011111111111100000001111111111111111111","11111111111111111101111000000000000000000011111111111000000011111111111111111111","11111111111111111100000000000000000000000001111111110000000111111111111111111111","11111111111111111100000000000000000000000000111111100000000111111111111111111111","11111111111111111100000000000000000000000000000000000000000211111111111111111111","11111111111111111100000000000000000000000000000000000000002221111111111111111111","11111111111111111100000000000000000000000000000000000000022222111111111111111111","11111111111111111100000000000000000000000000111111100000222222222222222221111111","11111111111111111100000000000000000000111101111111110000222222222222222221111111","11111111111111111100000000000000000000111111111111111000222222222222222222111111","11111111111111111100000000000000000000111111111111111122222222222222222222111111","11111111111111111100000000000000000000000011111111111122222222222222222222111111","11111111111111111100000000000000000000011111111111111122222222222222222222111111","11111111111111111100000000000000000000111111111111111122222222222222222221111111","11111111111111111111110000000000000001111111111111111122222222111111111111111111","11111111111111111111111000000000000011111111111111111122222221111111111111111111","11111111111111111111111100010000100011111111111111111122222211111111111111111111","11111111111111111111111101110000111011111111111111111122222111111111111111111111","11111111111111111111111111110000111111111111111111111122222111111111111111111111","11111111111111111111111110010000100111111111111111111111111111111111111111111111","11111111111111111111111110000000000111111111111111111111111111111111111111111111","11111111111111111111111110000000000111111111111111111111111111111111111111111111","11111111111111111111111110000000000111111111111111111111111111111111111111111111","11111111111111111111111110000000000111111111111111111111111111111111111111111111","11111111111111111111111110000000000111111111111111111111111111111111111111111111","11111111111111111111111110000000000111111111111111111111111111111111111111111111","11111111111111111111111110000000000111111111111111111111111111111111111111111111","11111111111111111111111110000000000111111111111111111111111111111111111111111111","11111111111111111111111110000100100111111111111111111111111111111111111111111111","11111111111111111111111111111100111111111111111111111111111111111111111111111111","11111111111111111111111111111100111111111111111111111111111111111111111111111111","11111111111111111111111111111100111111111111111111111111111111111111111111111111","11111111111111111111111111111100111111111111111111111111111111111111111111111111","11111111111111111111111111111100111111111111111111111111111111111111111111111111","11111111111111111111111111111100111111111111111111111111111111111111111111111111","11111111111111111111111111111100111111111111111111111111111111111111111111111111","11111111111111111111111111111100111111111111111111111111111111111111111111111111","11111111111111111111000111110100111111111111111111111111111111111111111111111111","11111111111111111111000111110000011111111111111111111111111111111111111111111111","11111111111111111111000111110000011111111111111111111111111111111111111111111111","11111111111111111111000111110000011111111111111111111111111111111111111111111111","11111111111111111111000111110000011111111111111111111111111111111111111111111111","11111000001111111111000111110000011111111111111111111111111111111111111111111111","11111000000000020000000111110000011111111111111111111112221111111111111111111111","11111000000000020000000111110000011111111111111111111112221111111111111111111111","11111000000000020000000111110000011111111111111111111122222111111111111111111111","11111000001111110000000111110000011111111111111111111222222211111111111111111111","11111000001111110000000011100000011111111111111111112222222221111111111111111111","11111111111111110000000001000000011111111110000022222222222222200011011111111111","11111111111111110000000000000000011111111110000011111111111111100011011111111111","11111111111111110000000000000000111111111110000000000000000000000000011111111111","11111111111111111111111000000001111111111110000000000000000000000000011111111111","11111111111111111111111100000001111111111110000011111111111111100000011111111111","11111111111111111111111110000001111111111110000022222222222222200000011111111111","11111111111111111111111111000001111111111110000022222222222222200000011111111111","11111111111111111111111111000001111111111110000002222222222222111110011111111111","11111111111111111111111111000000111111111100000000222222222221111110011111111111","11111111111111111111111111000000011111111000000000000222222221111110011111111111","11111111111111111111111111000000001111110000000000000002222221111110011111111111","11111111111111111111111111000000000000001111000000000000222221111110011111111111","11111111111111111111111111011000000000001111000000000000222221111110011111111111","11111111111111111111111111111000000000001111111100000000222221100000011111111111","11111111111111111111111111111000000000000000111100000000222222001100011111111111","11111111111111111111111111111111111110000000111100000000222222001100011111111111","11111111111111111111111111111111111111000000000020000000222222200000011111111111","11111111111111111111111111111111111111100000000020000000222222220000011111111111","11111111111111111111111111111111111111100000000020000000222222222111111111111111","11111111111111111111111111111111111111100000000000000000222222222111111111111111","11111111111111111111111111111111111111100000000000000011122222221111111111111111","11111111111111111111111111111111111111111110000000000100012222221111111111111111","11111111111111111111111111111111111111111111000000001100001222222111111111111111","11111111111111111111111111111111111111111111100000011111000122222111111111111111","11111111111111111111111111111111111111111111110000111111000012222111111111111111","11111111111111111111111111111111111111111111110000111111000001111111111111111111","11111111111111111111111111111111111111111111110000100000011111111111111111111111","11111111111111111111111111111111111111111111111001100000011111111111111111111111","11111111111111111111111111111111111111111111111001100000011111111111111111111111","11111111111111111111111111111111111111111111110000110000000011111111111111111111","11111111111111111111111111111111111111111111110000111000000011122211111111111111","11111111111111111111111111111111111111111111100000011100111111122211111111111111","11111111111111111111111111111111111111111111000000001100111111222211111111111111","11111111111111111111111111111111111111111110000000110100111112222211111111111111","11111111111111111111111111111111111111100000000000110000002222222211111111111111","11111111111111111111111111111111111111100000000000000000002222222211111111111111","11111111111111111111111111111111111111100000000000000000002222222211111111111111","11111111111111111111111111111111111111101111000000000000000222222211111111111111","11111111111111111111111111111111111111101111000000000000000222222211111111111111","11111111111111111111111111111111111111101111000000000000000222222211111111111111","11111111111111111111111111111111111111100000000000000000000222222211111111111111","11111111111111111111111111111111111111100000000000000000002222222211111111111111","11111111111111111111111111111111111111111111111111111111111112222211111111111111","11111111111111111111111111111111111111111111111111111111111111222211111111111111","11111111111111111111111111111111111111111111111111111111111111122211111111111111","11111111111111111111111111111111111111111111111111111111111111112111111111111111","11111111111111111111111111111111111111111111111111111111111111111111111111111111","01111111111111111111111111111111111111111111111111111111111111111111111111111111","01111111111111111111111111111111111111111111111111111111111111111111111111111111","01111111111111111111111111111111111111111111111111111111111111111111111111111111","01111111111111111111111111111111111111111111111111111111111111111111111111111111","01111111111111111111111111111111111111111111111111111111111111111111111111111111","01111111111111111111111111111111111111111111111111111111111111111111111111111111","01111111111111111111111111111111111111111111111111111111111111111111111111111111","01111111111111111111111111111111111111111111111111111111111111111111111111111111","01111111111111111111111111111111111111111111111111111111111111111111111111111111","01111111111111111111111111111111111111111111111111111111111111111111111111111111"];
		m.hotspot = {"m":{"x":1904,"y":272},"n":[864,1024,352,384],"l":{"x":1840,"y":464},"k":{"x":944,"y":656},"q":{"x":1056,"y":1184},"e":{"x":576,"y":1680},"j":{"x":992,"y":1696},"i":{"x":976,"y":1872},"a":{"x":240,"y":1904},"f":{"x":544,"y":1984},"o":{"x":912,"y":2288},"b":{"x":2176,"y":2400},"c":{"x":2064,"y":2480},"d":{"x":1552,"y":2544},"g":{"x":1760,"y":2880},"h":{"x":1824,"y":3136},"p":{"x":1808,"y":3248}};
		
		m.load = {};
		m.load.main = function(map,loadtype,hotspot){
			
			//tree...
			
			//drop
			
			//grave
			Actor.creation({'x':hotspot.h.x,'y':hotspot.h.y,'map':map,
				"category":"system","variant":"grave"
			});
			Actor.creation({'x':hotspot.q.x,'y':hotspot.q.y,'map':map,
				"category":"system","variant":"grave"
			});
			
			//chest
			Actor.creation({'x':hotspot.m.x,'y':hotspot.m.y,'map':map,
				"category":"system","variant":"chest",extra:{
					'treasure':function(key){
						Itemlist.add(List.main[key].invList,'tutorial-iceshard',1);
						return true;
					}
				}
			});
			
			//tree
			Actor.creation({'x':hotspot.e.x,'y':hotspot.e.y,'map':map,
				"category":"tree","variant":"red"
			});
			
			
			
			//drop staff
			Drop.creation({'x':hotspot.o.x,'y':hotspot.o.y,'map':map,
				"item":"Q-tutorial-staff","amount":1,'timer':1/0
			});
			
			//block for switch
			Actor.creation({'x':hotspot.b.x,'y':hotspot.b.y,'map':map,
				"category":"block","variant":"2x2"
			});
			//Block to block arrow
			Actor.creation({'x':hotspot.f.x,'y':hotspot.f.y,'map':map,
				"category":"block","variant":"2x2"
			});
			
			//Block that disppear when bee dead
			Actor.creation({'x':hotspot.j.x,'y':hotspot.j.y,'map':map,
				"category":"block","variant":"2x2Fix",extra:{
					'viewedIf':function(key){
						if(List.all[key].type !== 'player') return true;
						return !List.main[key].quest['tutorial'].beeDead;
					}				
				}
			});
			
			//First monster
			Actor.creation({'x':hotspot.i.x,'y':hotspot.i.y,'map':map,
				"category":"tutorial","variant":"bee",extra:{
					'deathFunc':function(killers){
						for(var i in killers){
							var main = List.main[killers[i]];
							main.quest['tutorial'].beeDead = true;						
						}
					}				
				}
			});
			
			//Bees Near Chest
			Actor.creation.group({'x':hotspot.l.x,'y':hotspot.l.y,'map':map,'respawn':100},[
				{'amount':3,"category":"tutorial","variant":"bee","lvl":0,'modAmount':0}
			]);
			
			//Boss Fire
			Actor.creation({'x':hotspot.k.x,'y':hotspot.k.y,'map':map,
				"category":"tutorial","variant":"demon",extra:{
					death:function(killers){
						for(var i in killers){
							List.main[killers[i]].quest.tutorial.bossDead = true;
						}
					}
				}
			});
			
			//Switch
			Actor.creation({'x':hotspot.c.x,'y':hotspot.c.y,'map':map,
				"category":"switch","variant":"box",extra:function(mort){
					mort.onclick.shiftLeft = {
						name:'Activate',
						param:[mort.id],
						func:function(key,mortid){
							var mort = List.all[mortid];
							List.map[mort.map].variable.rotation *= -1;
							Sprite.change(mort,{'anim':'off'});
							Actor.removeOnClick(mort,'shiftLeft');
							Chat.add(key,"You have activated a switch.");
						}
					};
				}
			});
			
		};
		
		m.loop = {};
		m.loop.main =  function(map,variable,cst,hotspot){

		
			if(Loop.interval(25)){
				Map.collisionRect(map,hotspot.n,'player',function(key){
					var mort = List.all[key];
					if(List.main[key].quest.tutorial.bossDead){
						Chat.add(key,'Congratz! You have beaten the tutorial!.');
					} else {
						Chat.add(key,'You need to kill the Fire Demon first.');
					}	
					
				});
			}
					
			
			if(Loop.interval(4)){
				
				//Arrow
				Attack.creation(
					{hitIf:'player-simple',x:hotspot.a.x,y:hotspot.a.y,map:map,angle:0},
					useTemplate(Attack.template(),cst.arrow)
				);
				
				//Fireball
				variable.angle += variable.rotation;
				variable.angle = (variable.angle+360)%360;
				Attack.creation(
					{hitIf:'player-simple',x:hotspot.d.x,y:hotspot.d.y,map:map,angle:variable.angle},
					useTemplate(Attack.template(),cst.fireball)
				);
				
				Attack.creation(
					{hitIf:'player-simple',x:hotspot.d.x,y:hotspot.d.y,map:map,angle:(variable.angle+120)%360},
					useTemplate(Attack.template(),cst.fireball)
				);
				
				Attack.creation(
					{hitIf:'player-simple',x:hotspot.d.x,y:hotspot.d.y,map:map,angle:(variable.angle+240)%360},
					useTemplate(Attack.template(),cst.fireball)
				);
				
			}
			
		}
		m.variable = {
			rotation: -9,
			angle:0,
		
		};
		m.cst = {
			arrow:{'type':"bullet",'angle':15,'amount':1, 'aim': 0,'objImg':{'name':"arrow",'sizeMod':1},'hitImg':{'name':"ice2",'sizeMod':0.5},
				'dmg':{'main':10000,'ratio':{'melee':100,'range':0,'magic':0,'fire':0,'cold':0,'lightning':0}}},	
			fireball:{maxTimer:15,'type':"bullet",'angle':0,'amount':1, 'aim': 0,'objImg':{'name':"fireball",'sizeMod':1},'hitImg':{'name':"ice2",'sizeMod':0.5},
				'dmg':{'main':10000,'ratio':{'melee':100,'range':0,'magic':0,'fire':0,'cold':0,'lightning':0}}},	
		
		
		};
		return m;
	};
	
	for(var m in Db.map){	
		Db.map[m] = Db.map[m]();
		Db.map[m].id = m;
		Map.creation.model(Db.map[m]);
	}
	
}
