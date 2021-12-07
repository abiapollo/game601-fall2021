let snailX = 100
let snailY = 450
let hue = 0
let colorchange = 1
let movementspeed = .5

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {

	//background
	fill(8, 174, 71);
	rect(0, 0, width, height);
	
	//grass
	fill(16, 30, 82);
	rect(0, -200, width, 450);
	
	//half moon2
	fill(225, 231, 86);
	circle(100, 100, 150)

	fill(74, 77, 8);
	arc(100, 100, 150, 150, radians(90), radians(270));
	
	//path
	fill(169, 169, 169);
	noStroke();
	rect(0, 375, width, 100)
	
	//grass sign
	fill(192, 123, 11);
	rect(100, 300, 10, 70)
	rect(45, 220, 120, 80)

	textSize(24);
	fill(175, 0, 0);	
	text('KEEP OFF', 45, 250);
	
	textSize(28);
	fill(175, 0, 0);	
	text('GRASS', 55, 290);
	
	//back eye stalk
	stroke(112, 123, 97);
	strokeWeight(4);
	line(snailX + 90, snailY - 25, snailX + 75, snailY + 5);
	
	//snail body
	noStroke();
	fill(128, 141, 109);	
	ellipse(snailX, snailY, 180, 35);
	
	//shell
	stroke(0, 0, 0);
	colorMode(HSB);
	fill(hue, 100, 80);
	strokeWeight(1);
	ellipse(snailX - 15, snailY - 55, 150, 120)
	
	hue = hue + colorchange
	if(hue > 360 || hue < 0)
	colorchange *= -1;
	
	ellipse(snailX - 15, snailY - 55, 100, 80)
	ellipse(snailX - 15, snailY - 55, 60, 40)
	
	//front eye stalk
	colorMode(RGB);
	stroke(112, 123, 97);
	strokeWeight(4);
	line(snailX + 60, snailY - 25, snailX + 65, snailY - 5);
	
	
	snailX = snailX + movementspeed


	//park sign
	noStroke();
	fill(215, 206, 173);	
	rect(1200, 570, 10, 70)	
	rect(1400, 570, 10, 70)
	rect(1100, 430, 410, 160)	
	
	textSize(42);
	fill(0, 0, 0);	
	text('PARK HOURS:', 1165, 480);
	
	textSize(40);
	text('SUNRISE - SUNSET', 1120, 550);
	
	
	
	//stars
	
	fill(225, 231, 86);
	
	circle(800, 100, 5);
	circle(900, 50, 10);
	circle(500, 60, 8);
	circle(300, 55, 6);
	circle(250, 20, 7);
	circle(400, 80, 5);
	circle(275, 35, 8);
	circle(1000, 60, 7);
	circle(700, 30, 6);
	circle(350, 45, 5);
	circle(550, 65, 8);
	circle(660, 35, 9);
	circle(475, 25, 5);
	circle(880, 62, 10);
	circle(520, 22, 7);
	circle(730, 88, 6);
	circle(990, 77, 7);
	circle(555, 55, 5);
	circle(420, 66, 9);
	circle(1500, 150, 9);
	circle(1200, 200, 5);
	circle(1111, 111, 5);
	circle(1234, 123, 10);
	circle(980, 166, 7);
	circle(1212, 152, 5);
	circle(877, 144, 5);
	circle(1444, 50, 8);
	circle(554, 177, 5);
	circle(776, 166, 8);
	circle(444, 180, 5);
	circle(666, 177, 7);
	circle(468, 125, 10);
	circle(567, 154, 6);
	circle(682, 111, 8);
	circle(792, 133, 5);
	circle(522, 99, 9);
	circle(987, 98, 7);
	circle(1400, 140, 5);
	circle(1450, 200, 5);
	circle(1222, 198, 6);
	circle(1122, 20, 8);
	circle(777, 15, 5);
	circle(888, 50, 6);
	circle(985, 35, 8);
	circle(635, 180, 7);
	circle(550, 40, 6);
	circle(740, 188, 10);
	circle(822, 33, 9);
	circle(1345, 123, 6);
	circle(1432, 198, 7);
	circle(1278, 25, 7);	
	circle(250, 180, 7);	
	circle(234, 190, 5);	
	circle(290, 160, 8);	
	circle(277, 177, 7);	
	circle(333, 159, 6);	
	circle(295, 148, 10);	
	circle(258, 155, 6);	
	circle(276, 192, 6);	
	circle(310, 170, 8);	
	circle(388, 170, 6);	
	circle(327, 188, 5);	
	
	
}