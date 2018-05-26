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

function getResources() {
	var numAttackerSpear = document.getElementById('numAttackerSpear').value;
	var numAttackerSword = document.getElementById('numAttackerSword').value;
	var numAttackerAxe = document.getElementById('numAttackerAxe').value;
	var numAttackerArcher = document.getElementById('numAttackerArcher').value;
	var numAttackerLightCalvary = document.getElementById('numAttackerLightCalvary').value;
	var numAttackerMountedArcher = document.getElementById('numAttackerMountedArcher').value;
	var numAttackerHeavyCalvary = document.getElementById('numAttackerHeavyCalvary').value;
	var numAttackerRam = document.getElementById('numAttackerRam').value;
	var numAttackerCatapult = document.getElementById('numAttackerCatapult').value;
	var numAttackerBerserker = document.getElementById('numAttackerBerserker').value;
	var numAttackerTrebuchet = document.getElementById('numAttackerTrebuchet').value;
	var numAttackerNoble = document.getElementById('numAttackerNoble').value;
	var numAttackerPaladin = document.getElementById('numAttackerPaladin').value; 

	var numDefenderSpear = document.getElementById('numDefenderSpear').value;
	var numDefenderSword = document.getElementById('numDefenderSword').value;
	var numDefenderAxe = document.getElementById('numDefenderAxe').value;
	var numDefenderArcher = document.getElementById('numDefenderArcher').value;
	var numDefenderLightCalvary = document.getElementById('numDefenderLightCalvary').value;
	var numDefenderMountedArcher = document.getElementById('numDefenderMountedArcher').value;
	var numDefenderHeavyCalvary = document.getElementById('numDefenderHeavyCalvary').value;
	var numDefenderRam = document.getElementById('numDefenderRam').value;
	var numDefenderCatapult = document.getElementById('numDefenderCatapult').value;
	var numDefenderBerserker = document.getElementById('numDefenderBerserker').value;
	var numDefenderTrebuchet = document.getElementById('numDefenderTrebuchet').value;
	var numDefenderNoble = document.getElementById('numDefenderNoble').value;
	var numDefenderPaladin = document.getElementById('numDefenderPaladin').value; 

	document.getElementById('total-wood-attacker').innerHTML = (numAttackerSpear * spear.wood) + 
														(numAttackerSword * sword.wood) + 
														(numAttackerAxe * axe.wood) +
														(numAttackerArcher * archer.wood) +
														(numAttackerLightCalvary * lightCalvary.wood) +
														(numAttackerMountedArcher * mountedArcher.wood) +
														(numAttackerHeavyCalvary * heavyCalvary.wood) +
														(numAttackerRam * ram.wood) +
														(numAttackerCatapult * catapult.wood) +
														(numAttackerBerserker * berserker.wood) +
														(numAttackerTrebuchet * trebuchet.wood) +
														(numAttackerNoble * nobleman.wood) +
														(numAttackerPaladin * paladin.wood); 

	document.getElementById('total-clay-attacker').innerHTML = (numAttackerSpear * spear.clay) + 
														(numAttackerSword * sword.clay) + 
														(numAttackerAxe * axe.clay) +
														(numAttackerArcher * archer.clay) +
														(numAttackerLightCalvary * lightCalvary.clay) +
														(numAttackerMountedArcher * mountedArcher.clay) +
														(numAttackerHeavyCalvary * heavyCalvary.clay) +
														(numAttackerRam * ram.clay) +
														(numAttackerCatapult * catapult.clay) +
														(numAttackerBerserker * berserker.clay) +
														(numAttackerTrebuchet * trebuchet.clay) +
														(numAttackerNoble * nobleman.clay) +
														(numAttackerPaladin * paladin.clay);

	document.getElementById('total-iron-attacker').innerHTML = (numAttackerSpear * spear.iron) + 
														(numAttackerSword * sword.iron) + 
														(numAttackerAxe * axe.iron) +
														(numAttackerArcher * archer.iron) +
														(numAttackerLightCalvary * lightCalvary.iron) +
														(numAttackerMountedArcher * mountedArcher.iron) +
														(numAttackerHeavyCalvary * heavyCalvary.iron) +
														(numAttackerRam * ram.iron) +
														(numAttackerCatapult * catapult.iron) +
														(numAttackerBerserker * berserker.iron) +
														(numAttackerTrebuchet * trebuchet.iron) +
														(numAttackerNoble * nobleman.iron) +
														(numAttackerPaladin * paladin.iron);

	document.getElementById('total-wood-defender').innerHTML = (numDefenderSpear * spear.wood) + 
														(numDefenderSword * sword.wood) + 
														(numDefenderAxe * axe.wood) +
														(numDefenderArcher * archer.wood) +
														(numDefenderLightCalvary * lightCalvary.wood) +
														(numDefenderMountedArcher * mountedArcher.wood) +
														(numDefenderHeavyCalvary * heavyCalvary.wood) +
														(numDefenderRam * ram.wood) +
														(numDefenderCatapult * catapult.wood) +
														(numDefenderBerserker * berserker.wood) +
														(numDefenderTrebuchet * trebuchet.wood) +
														(numDefenderNoble * nobleman.wood) +
														(numDefenderPaladin * paladin.wood); 

	document.getElementById('total-clay-defender').innerHTML = (numDefenderSpear * spear.clay) + 
														(numDefenderSword * sword.clay) + 
														(numDefenderAxe * axe.clay) +
														(numDefenderArcher * archer.clay) +
														(numDefenderLightCalvary * lightCalvary.clay) +
														(numDefenderMountedArcher * mountedArcher.clay) +
														(numDefenderHeavyCalvary * heavyCalvary.clay) +
														(numDefenderRam * ram.clay) +
														(numDefenderCatapult * catapult.clay) +
														(numDefenderBerserker * berserker.clay) +
														(numDefenderTrebuchet * trebuchet.clay) +
														(numDefenderNoble * nobleman.clay) +
														(numDefenderPaladin * paladin.clay);

	document.getElementById('total-iron-defender').innerHTML = (numDefenderSpear * spear.iron) + 
														(numDefenderSword * sword.iron) + 
														(numDefenderAxe * axe.iron) +
														(numDefenderArcher * archer.iron) +
														(numDefenderLightCalvary * lightCalvary.iron) +
														(numDefenderMountedArcher * mountedArcher.iron) +
														(numDefenderHeavyCalvary * heavyCalvary.iron) +
														(numDefenderRam * ram.iron) +
														(numDefenderCatapult * catapult.iron) +
														(numDefenderBerserker * berserker.iron) +
														(numDefenderTrebuchet * trebuchet.iron) +
														(numDefenderNoble * nobleman.iron) +
														(numDefenderPaladin * paladin.iron);
}

function battle(){
	getResources();
}

