// Define all of the different units stats
var spear = unit(50, 30, 20, 1, 10, 25, 45, 10, 1.5);
var sword = unit(30, 30, 70, 1, 25, 55, 5, 30, 2);
var axe = unit(60, 30, 40, 1, 45, 10, 5, 10, 2.5);
var archer = unit(80, 30, 60, 1, 25, 10, 30, 60, 3);
var lightCalvary = unit(125, 100, 250, 4, 130, 30, 40, 30, 6);
var mountedArcher = unit(250, 200, 100, 5, 150, 40, 30, 50, 7.5);
var heavyCalvary = unit(200, 150, 600, 6, 150, 200, 160, 180, 10);
var ram = unit(300, 200, 200, 5, 2, 20, 50, 10, 8);
var catapult = unit(320, 400, 100, 8, 100, 100, 50, 100, 7.5);
var berserker = unit(1200, 1200, 2400, 6, 300, 100, 100, 50, 20);
var trebuchet = unit(4000, 2000, 2000, 10, 30, 200, 250, 200, 20);
var nobleman = unit(40000, 50000, 50000, 100, 30, 100, 50, 100, 180);
var paladin = unit(0, 0, 0, 1, 150, 250, 400, 150, 360);

var numAttSp, numAttSw, numAttAx, numAttAr, numAttLC, numAttMA, numAttHC, numAttRam, numAttCat, numAttBer, numAttTreb, numAttNob, numAttPal;

var numDefSp, numDefSw, numDefAx, numDefAr, numDefLC, numDefMA, numDefHC, numDefRam, numDefCat, numDefBer, numDefTreb, numDefNob, numDefPal;

// Creates a new unit object
function unit(w,c,i,fs,a,id,cd,ad,rt) {
	var troop = new Object();
	troop.wood = w; 
	troop.clay = c;
	troop.iron = i; 
	troop.farmSpace = fs;
	troop.attack = a; 
	troop.infantryDefense = id;
	troop.calvaryDefense = cd; 
	troop.archerDefense = ad;
	troop.recruitTime = rt;

	return troop;
}

function battle(){

	numAttSp = $("#numAttackerSpear").val();
	numAttSw = $("#numAttackerSword").val();
	numAttAx = $("#numAttackerAxe").val();
	numAttAr = $("#numAttackerArcher").val();
	numAttLC = $("#numAttackerLightCalvary").val();
	numAttMA = $("#numAttackerMountedArcher").val();
	numAttHC = $("#numAttackerHeavyCalvary").val();
	numAttRam = $("#numAttackerRam").val();
	numAttCat = $("#numAttackerCatapult").val();
	numAttBer = $("#numAttackerBerserker").val();
	numAttTreb = $("#numAttackerTrebuchet").val();
	numAttNob = $("#numAttackerNoble").val();
	numAttPal = $("#numAttackerPaladin").val(); 

	numDefSp = $("#numDefenderSpear").val();
	numDefSw = $("#numDefenderSword").val();
	numDefAx = $("#numDefenderAxe").val();
	numDefAr = $("#numDefenderArcher").val();
	numDefLC = $("#numDefenderLightCalvary").val();
	numDefMA = $("#numDefenderMountedArcher").val();
	numDefHC = $("#numDefenderHeavyCalvary").val();
	numDefRam = $("#numDefenderRam").val();
	numDefCat = $("#numDefenderCatapult").val();
	numDefBer = $("#numDefenderBerserker").val();
	numDefTreb = $("#numDefenderTrebuchet").val();
	numDefNob = $("#numDefenderNoble").val();
	numDefPal = $("#numDefenderPaladin").val();

	getResources();
	getFarmSpace();
}

function getFarmSpace() {
	/* Farm space for the attacker */
	$("#total-attacker-farm-space").text((numAttSp * spear.farmSpace) + 
									(numAttSw * sword.farmSpace) + 
									(numAttAx * axe.farmSpace) +
									(numAttAr * archer.farmSpace) +
									(numAttLC * lightCalvary.farmSpace) +
									(numAttMA * mountedArcher.farmSpace) +
									(numAttHC * heavyCalvary.farmSpace) +
									(numAttRam * ram.farmSpace) +
									(numAttCat * catapult.farmSpace) +
									(numAttBer * berserker.farmSpace) +
									(numAttTreb * trebuchet.farmSpace) +
									(numAttNob * nobleman.farmSpace) +
									(numAttPal * paladin.farmSpace));

	/* Farm space for the defender */
	$("#total-defender-farm-space").text((numDefSp * spear.farmSpace) + 
									(numDefSw * sword.farmSpace) + 
									(numDefAx * axe.farmSpace) +
									(numDefAr * archer.farmSpace) +
									(numDefLC * lightCalvary.farmSpace) +
									(numDefMA * mountedArcher.farmSpace) +
									(numDefHC * heavyCalvary.farmSpace) +
									(numDefRam * ram.farmSpace) +
									(numDefCat * catapult.farmSpace) +
									(numDefBer * berserker.farmSpace) +
									(numDefTreb * trebuchet.farmSpace) +
									(numDefNob * nobleman.farmSpace) +
									(numDefPal * paladin.farmSpace));
}

function getResources() { 
	console.log(numAttSp);
	
	$("#total-wood-attacker").text((numAttSp * spear.wood) + 
									(numAttSw * sword.wood) + 
									(numAttAx * axe.wood) +
									(numAttAr * archer.wood) +
									(numAttLC * lightCalvary.wood) +
									(numAttMA * mountedArcher.wood) +
									(numAttHC * heavyCalvary.wood) +
									(numAttRam * ram.wood) +
									(numAttCat * catapult.wood) +
									(numAttBer * berserker.wood) +
									(numAttTreb * trebuchet.wood) +
									(numAttNob * nobleman.wood) +
									(numAttPal * paladin.wood)); 

	$("#total-clay-attacker").text((numAttSp * spear.clay) + 
									(numAttSw * sword.clay) + 
									(numAttAx * axe.clay) +
									(numAttAr * archer.clay) +
									(numAttLC * lightCalvary.clay) +
									(numAttMA * mountedArcher.clay) +
									(numAttHC * heavyCalvary.clay) +
									(numAttRam * ram.clay) +
									(numAttCat * catapult.clay) +
									(numAttBer * berserker.clay) +
									(numAttTreb * trebuchet.clay) +
									(numAttNob * nobleman.clay) +
									(numAttPal * paladin.clay));

	$("#total-iron-attacker").text((numAttSp * spear.iron) + 
									(numAttSw * sword.iron) + 
									(numAttAx * axe.iron) +
									(numAttAr * archer.iron) +
									(numAttLC * lightCalvary.iron) +
									(numAttMA * mountedArcher.iron) +
									(numAttHC * heavyCalvary.iron) +
									(numAttRam * ram.iron) +
									(numAttCat * catapult.iron) +
									(numAttBer * berserker.iron) +
									(numAttTreb * trebuchet.iron) +
									(numAttNob * nobleman.iron) +
									(numAttPal * paladin.iron));

	$("#total-wood-defender").text((numDefSp * spear.wood) + 
									(numDefSw * sword.wood) + 
									(numDefAx * axe.wood) +
									(numDefAr * archer.wood) +
									(numDefLC * lightCalvary.wood) +
									(numDefMA * mountedArcher.wood) +
									(numDefHC * heavyCalvary.wood) +
									(numDefRam * ram.wood) +
									(numDefCat * catapult.wood) +
									(numDefBer * berserker.wood) +
									(numDefTreb * trebuchet.wood) +
									(numDefNob * nobleman.wood) +
									(numDefPal * paladin.wood)); 

	$("#total-clay-defender").text((numDefSp * spear.clay) + 
									(numDefSw * sword.clay) + 
									(numDefAx * axe.clay) +
									(numDefAr * archer.clay) +
									(numDefLC * lightCalvary.clay) +
									(numDefMA * mountedArcher.clay) +
									(numDefHC * heavyCalvary.clay) +
									(numDefRam * ram.clay) +
									(numDefCat * catapult.clay) +
									(numDefBer * berserker.clay) +
									(numDefTreb * trebuchet.clay) +
									(numDefNob * nobleman.clay) +
									(numDefPal * paladin.clay));

	$("#total-iron-defender").text((numDefSp * spear.iron) + 
									(numDefSw * sword.iron) + 
									(numDefAx * axe.iron) +
									(numDefAr * archer.iron) +
									(numDefLC * lightCalvary.iron) +
									(numDefMA * mountedArcher.iron) +
									(numDefHC * heavyCalvary.iron) +
									(numDefRam * ram.iron) +
									(numDefCat * catapult.iron) +
									(numDefBer * berserker.iron) +
									(numDefTreb * trebuchet.iron) +
									(numDefNob * nobleman.iron) +
									(numDefPal * paladin.iron));
}