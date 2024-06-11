
let choosingPage;
let homePage;
let endPage;
let sadPage;
let mouseJustPressed = false;


let person;
let hat;
let glasses;
let shorts;
let hair;
let shirt;
let jorts;

let axolotl;
let bubbles;
let glassesWater;
let jirt;
let headPiece;
let shirtWater;
let shortsWater;

let alien;
let crown;
let glassesAlien;
let shortsAlien;
let scarf;
let shirtAlien;
let jortsAlien;


let selectedObject;
let selectedObjectOffsetX;
let selectedObjectOffsetY;

function mouseClicked() {
	mouseJustPressed = true;
}

const pages = {
	start: 0,
	home: 1,
	human: 2,
	axolotl: 3,
	alien: 4,
	end: 5,
	sad: 6,
}


function setup() {
	createCanvas(900, 800);

	// frameRate(30);

	choosingPage = new ChoosingPage;
	homePage = new HomePage;
	endPage = new EndPage;
	sadPage = new SadPage;
	person = new Person(340, 350, 200, 450);
	hat = new Clothing(650, 100, 150, 150, 365, 170, 365, 515, 180, 345);
	shorts = new Clothing(650, 550, 150, 150, 362, 673, 362, 512, 673, 823);
	glasses = new Clothing(650, 325, 150, 150, 370, 275, 370, 520, 275, 380);
	hair = new Clothing(75, 80, 175, 175, 360, 300, 360, 510, 270, 450);
	shirt = new Clothing(75, 325, 185, 185, 347, 488, 347, 497, 488, 638);
	jorts = new Clothing(75, 590, 150, 150, 361, 673, 362, 512, 673, 823);

	axolotl = new Axolotl(340, 350, 200, 450);
	bubbles = new Clothing2(650, 100, 150, 150, 365, 170, 365, 515, 180, 345);
	glassesWater = new Clothing2(650, 325, 150, 150, 362, 255, 370, 459, 305, 455);
	jirt = new Clothing2(650, 550, 150, 150, 362, 673, 352, 527, 683, 798);
	headPiece = new Clothing2(75, 100, 150, 150, 350, 263, 366, 516, 263, 333);
	shirtWater = new Clothing2(75, 325, 150, 150, 334, 488, 347, 497, 488, 638);
	shortsWater = new Clothing2(75, 550, 150, 150, 362, 653, 352, 527, 683, 798);

	alien = new Alien(340, 350, 200, 450);
	crown = new Clothing3(650, 100, 150, 150, 365, 187, 365, 515, 187, 337);
	glassesAlien = new Clothing3(650, 325, 150, 150, 335, 265, 370, 520, 275, 380);
	shortsAlien = new Clothing3(650, 550, 150, 150, 361, 654, 362, 512, 673, 823);
	scarf = new Clothing3(75, 100, 150, 150, 343, 415, 343, 493, 415, 565);
	shirtAlien = new Clothing3(75, 325, 150, 150, 349, 488, 347, 497, 488, 638);
	jortsAlien = new Clothing3(75, 590, 150, 150, 362, 675, 362, 512, 673, 823);


}

function point_dist(x1, y1, x2, y2) {
	let dx = x1 - x2;
	let dy = y1 - y2;
	return Math.sqrt(dx * dx + dy * dy);
}

function mouseWithinCircle(x, y, diameter) {
	return point_dist(x, y, mouseX, mouseY) < diameter / 2;
}

function button(rx, ry, rw, rh) {
	//rect(rx, ry, rw, rh);
	return mouseJustPressed && mouseX > rx && mouseX < rx + rw && mouseY > ry && mouseY < ry + rh;

}

let currentPage = pages.start;


function draw() {


	if (selectedObject != undefined) {
		selectedObject.x = mouseX + selectedObjectOffsetX;
		selectedObject.y = mouseY + selectedObjectOffsetY;
	}

	background(197, 210, 224);

	if (currentPage == pages.start) {

		homePage.display();

		if (button(340, 500, 210, 55)) {
			currentPage = pages.home;
		}
		if (button(340, 570, 210, 55, 5)) {
			currentPage = pages.sad;
		}
	}
	else if (currentPage == pages.home) {
		let circles = [
			{ x: 250, y: 250, r: 250, page: pages.human },
			{ x: 650, y: 250, r: 250, page: pages.axolotl },
			{ x: 450, y: 550, r: 250, page: pages.alien },
		]
		for (const circle of circles) {
			push();
			fill(255, 0, 0);
			ellipse(circle.x, circle.y, circle.r);
			pop();
		}
		ChoosingPage.display();

		for (const circle of circles) {
			if (
				mouseIsPressed
				&& mouseWithinCircle(circle.x, circle.y, circle.r)
			) {
				currentPage = circle.page;
			}
		}
		
	}
	else if (currentPage == pages.human) {

		alexNameTag()

		person.display();
		glasses.displayGlasses();
		shorts.displayShorts();
		hair.displayHair();
		hat.displayHat();
		jorts.displayJorts();
		shirt.displayShirt();
		quit();

		if (mouseIsPressed && mouseWithinCircle(900, 800, 175)) {
			currentPage = pages.end;
		}
		if (mouseIsPressed && mouseWithinCircle(0, 800, 175)) {
			currentPage = pages.home;
		}


	}
	else if (currentPage == pages.axolotl) {

		axolotl.display();
		bubbles.displayBubbles();
		glassesWater.displayGlassesWater();
		jirt.displayJirt();
		headPiece.displayHeadPiece();
		shirtWater.displayShirtWater();
		shortsWater.displayShortsWater();
		ally()
		quit();



		if (mouseIsPressed && mouseWithinCircle(900, 800, 175)) {
			currentPage = pages.end;
		}
		if (mouseIsPressed && mouseWithinCircle(0, 800, 175)) {
			currentPage = pages.home;
		}
	}
	else if (currentPage == pages.alien) {


		alien.display();
		crown.displayCrown();
		glassesAlien.displayglassesAlien();
		shortsAlien.displayshortsAlien();
		shirtAlien.displayshirtAlien();
		scarf.displayScarf();
		jortsAlien.displayjortsAlien();
		quit();
		diva();

		if (mouseIsPressed && mouseWithinCircle(900, 800, 175)) {
			currentPage = pages.end;
		}
		if (mouseIsPressed && mouseWithinCircle(0, 800, 175)) {
			currentPage = pages.home;
		}


	} else if (currentPage == pages.end) {
		push();
		textSize(30);
		textAlign(CENTER, CENTER);
		endPage.display();
		pop();

		if (button(590, 610, 220, 110, 20)) {
			currentPage = pages.start;
		}

	} else if (currentPage == pages.sad){
		push();
		textSize(30);
		textAlign(CENTER, CENTER);
		sadPage.display();
		pop();
		
	}

	mouseJustPressed = false;
}

class Clothing {
	constructor(x, y, width, height, attachX, attachY, boundingBoxX1, boundingBoxX2, boundingBoxY1, boundingBoxY2) {
		this.homeX = x;
		this.homeY = y;
		this.x = x;
		this.y = y;
		this.h = height;
		this.w = width;
		this.attachX = attachX;// where it moves to when popping on
		this.attachY = attachY;
		this.boundingBoxX1 = boundingBoxX1;//area it needs to move to
		this.boundingBoxY1 = boundingBoxY1;
		this.boundingBoxX2 = boundingBoxX2;
		this.boundingBoxY2 = boundingBoxY2;
	}

	/*displayBackground() {
		push();
		//noStroke();
		stroke(105);
		fill(122, 122);
		rect(this.homeX - 25, this.homeY - 25, this.w + 50, this.h + 50, 25)
		pop();
	}*/

	displayHat() {
		//this.displayBackground();
		// fill(150,0,0);
		// rect(this.x, this.y, this.h, this.w);

		push();
		stroke(0);
		fill(50);
		rect(this.x, this.y + 100, this.w - 5, this.h - 115);//base
		rect(this.x + 33, this.y, this.w - 75, this.h - 50);//tall hat part
		fill(82, 40, 40);
		rect(this.x + 33, this.y + 80, this.w - 75, this.h - 130);//ribbon part
		pop();

	}
	displayGlasses() {

		//this.displayBackground();
		// fill(150,100,10);
		// rect(this.x, this.y, this.h, this.w);
		push();
		strokeWeight(3);
		stroke(0);
		fill(250, 250, 250, 3);
		ellipse(this.x + 20, this.y + 75, this.h - 90);
		ellipse(this.x + 120, this.y + 75, this.h - 90);

		line(this.x + 45, this.y + 75, this.x + 95, this.y + 75);
		line(this.x - 5, this.y + 75, this.x - 15, this.y + 75);
		line(this.x + 145, this.y + 75, this.x + 155, this.y + 75);
		pop()
	}
	displayShorts() {

		//this.displayBackground();
		//fill(150,150,0);
		//rect(this.x, this.y, this.h, this.w);
		push();
		strokeWeight(2);
		stroke(117, 93, 74);
		fill(156, 125, 100);
		rect(this.x - 9, this.y + 125, this.h + 23, this.w - 250);

		stroke(0);
		line(this.x + 80, this.y + 125, this.x + 80, this.y + 80);

		line(this.x + 90, this.y + 25, this.x + 90, this.y + 55);
		line(this.x + 80, this.y + 65, this.x + 90, this.y + 55);

		//belt loops
		stroke(74, 57, 44);
		fill(156, 125, 100);
		rect(this.x - 9, this.y + 28, this.h - 145, this.w - 131);
		rect(this.x + 160, this.y + 28, this.h - 145, this.w - 131);

		rect(this.x + 45, this.y + 28, this.h - 145, this.w - 131);
		rect(this.x + 110, this.y + 28, this.h - 145, this.w - 131);

		stroke(0);
		fill(59, 53, 48);
		ellipse(this.x, this.y + 60, this.h - 143, this.h - 140);
		line(this.x - 5, this.y + 50, this.x + 20, this.y + 50);
		ellipse(this.x + 155, this.y + 60, this.h - 143, this.h - 140);
		line(this.x + 135, this.y + 50, this.x + 160, this.y + 50);

		ellipse(this.x + 80, this.y + 35, this.h - 140);
		pop();

	}
	displayHair() {

		//this.displayBackground();
		fill(0, 150, 50);
		//rect(this.x, this.y, this.h, this.w);

		//hair
		stroke(0);
		fill(0);
		triangle(this.x + 80, this.y - 30, this.x + 90, this.y + 30, this.x + 105, this.y);
		triangle(this.x + 80, this.y - 30, this.x + 60, this.y + 30, this.x + 50, this.y);

		triangle(this.x + 80, this.y - 32, this.x + 30, this.y - 20, this.x + 5, this.y + 20);
		triangle(this.x + 80, this.y - 32, this.x + 130, this.y - 20, this.x + 155, this.y + 20);

		triangle(this.x + 156, this.y + 75, this.x + 155, this.y + 95, this.x + 147, this.y + 95);
		triangle(this.x + 4, this.y + 75, this.x + 13, this.y + 95, this.x + 5, this.y + 95);

		triangle(this.x + 136, this.y + 110, this.x + 155, this.y + 95, this.x + 147, this.y + 95);
		triangle(this.x + 24, this.y + 110, this.x + 13, this.y + 95, this.x + 5, this.y + 95);

		triangle(this.x + 20, this.y + 105, this.x + 5, this.y + 150, this.x + 35, this.y + 150);
		triangle(this.x + 141, this.y + 105, this.x + 126, this.y + 150, this.x + 156, this.y + 150);

		triangle(this.x + 20, this.y + 175, this.x + 5, this.y + 150, this.x + 35, this.y + 150);
		triangle(this.x + 141, this.y + 175, this.x + 126, this.y + 150, this.x + 156, this.y + 150);
	}
	displayShirt() {

		//this.displayBackground();
		//fill(0, 0, 150);
		//rect(this.x, this.y, this.h, this.w);

		//shirt
		noStroke();
		fill(71, 33, 33);
		//sleeves
		rect(this.x + 65, this.y + 145, this.h - 266, this.w - 325, this.w - 140);
		rect(this.x + 202, this.y + 145, this.h - 266, this.w - 325, this.w - 140);

		rect(this.x + 65, this.y + 205, this.h - 266, this.w - 350);
		rect(this.x + 202, this.y + 205, this.h - 266, this.w - 350);

		fill(82, 40, 40);

		//neck
		rect(this.x + 103, this.y + 100, this.h - 206, this.w - 340);

		fill(105, 50, 50);
		//shirt
		rect(this.x + 4.5, this.y - 25, this.h - 9.5, this.w, this.w + 175);
		rect(this.x + 4.5, this.y + 210, this.h - 9.5, this.w - 340);

		fill(82, 40, 40);
		rect(this.x + 4.5, this.y + 180, this.h - 10, this.w - 275);
		fill(133, 77, 77);
		rect(this.x + 4.5, this.y + 152, this.h - 10, this.w - 220);


	}


	displayJorts() {

		//this.displayBackground();
		// fill(75, 0, 150);
		// rect(this.x, this.y, this.h, this.w);

		//skirt
		strokeWeight(2);
		stroke(102, 115, 122);
		fill(140, 158, 168);
		rect(this.x - 9, this.y + 125, this.h + 23, this.w - 250);

		//belt
		strokeWeight(3);
		stroke(28, 26, 23);
		fill(31, 26, 20);
		rect(this.x - 7, this.y + 30, this.h + 19, this.w - 135);
		fill(74, 66, 53);
		rect(this.x - 7, this.y + 30, this.h - 19, this.w - 135);

		stroke(181, 178, 174);
		fill(61, 53, 41, 0);
		rect(this.x + 67, this.y + 30, this.h - 125, this.w - 135);
		line(this.x + 65, this.y + 37, this.x + 75, this.y + 37);

		strokeWeight(2);
		stroke(78, 90, 97);
		fill(102, 115, 122);
		rect(this.x - 3, this.y + 65, this.h - 117, this.w - 120);
		fill(129, 143, 150);
		rect(this.x - 5, this.y + 65, this.h - 113, this.w - 140);

		fill(102, 115, 122);
		rect(this.x + 127, this.y + 65, this.h - 117, this.w - 120);
		fill(129, 143, 150);
		rect(this.x + 125, this.y + 65, this.h - 113, this.w - 140);

		//belt loops
		stroke(78, 90, 97);
		fill(129, 143, 150);
		rect(this.x - 9, this.y + 28, this.h - 145, this.w - 131);
		rect(this.x + 160, this.y + 28, this.h - 145, this.w - 131);

		rect(this.x + 45, this.y + 28, this.h - 145, this.w - 131);
		rect(this.x + 110, this.y + 28, this.h - 145, this.w - 131);

		line(this.x + 80, this.y + 125, this.x + 80, this.y + 80);
	}

	setX(x) {
		this.x = x;
	}
	setY(y) {
		this.y = y;
	}
	setHeight(h) {
		this.h = h;
	}
	setWidth(w) {
		this.w = w;
	}

	getX() {
		return this.x;
	}
	getY() {
		return this.y;
	}
	getHeight() {
		return this.h;
	}
	getWidth() {
		return this.w;
	}
}
class Person {
	constructor(x, y, height, width) {
		this.x = x;
		this.y = y;
		this.h = height;
		this.w = width;
	}

	display() {
		noStroke();
		//arms
		fill(171, 145, 145);
		rect(this.x + 55, this.y + 145, this.h - 260, this.w - 175, this.w - 300);
		rect(this.x + 205, this.y + 145, this.h - 260, this.w - 175, this.w - 300);

		stroke(148, 118, 118);
		strokeWeight(1);
		//neck
		fill(171, 145, 145);
		rect(this.x + 90, this.y, this.h - 180, this.w - 300);

		//body
		fill(171, 145, 145);
		rect(this.x + 11.5, this.y + 115, this.h - 25, this.w, this.w - 300);

		//ears
		fill(171, 145, 145);
		ellipse(this.x + 20, this.y, this.h - 150);
		ellipse(this.x + 180, this.y, this.h - 150);

		//head
		fill(171, 145, 145);
		ellipse(this.x + 100, this.y, this.h - 40);

		//eyes
		stroke(107, 78, 78);
		fill(250);
		ellipse(this.x + 50, this.y, this.h - 160);
		ellipse(this.x + 150, this.y, this.h - 160);

		stroke(156, 173, 173);
		fill(178, 191, 191);
		ellipse(this.x + 50, this.y, this.h - 175);
		ellipse(this.x + 150, this.y, this.h - 175);

		stroke(56, 39, 39);
		fill(0);
		ellipse(this.x + 50, this.y, this.h - 190);
		ellipse(this.x + 150, this.y, this.h - 190);

		//eyebrows
		stroke(56, 39, 39);
		fill(0);
		ellipse(this.x + 55, this.y - 28, this.h - 190, this.h - 193);
		ellipse(this.x + 145, this.y - 28, this.h - 190, this.h - 193);

		//mouth
		line(this.x + 90, this.y + 10, this.x + 110, this.y + 10);

		//cheeks
		stroke(179, 136, 139);
		fill(212, 174, 177);
		ellipse(this.x + 50, this.y + 33, this.h - 180);
		ellipse(this.x + 150, this.y + 33, this.h - 180);



		//under clothes
		//clothing
		strokeWeight(1);
		stroke(200);
		fill(220);
		rect(this.x + 12, this.y + 175, this.h - 26, this.w - 150, this.w - 442);


		//detail
		stroke(180);
		fill(200);
		rect(this.x + 47, this.y + 130, this.h - 197, this.w - 395, this.w - 445);
		rect(this.x + 149, this.y + 130, this.h - 197, this.w - 395, this.w - 445);


		noStroke();
		fill(200);
		rect(this.x + 11.5, this.y + 200, this.h - 25, this.w - 350);

		fill(220);
		rect(this.x + 11.5, this.y + 210.5, this.h - 25, this.w - 375);






		//    //shirt
		//   fill(71, 33, 33);
		//   //sleeves
		//   rect(this.x + 60, this.y + 145, this.h - 266, this.w - 325, this.w - 300);
		// rect(this.x + 207, this.y + 145, this.h - 266, this.w - 325, this.w - 300);
		//   rect(this.x + 60, this.y + 185, this.h - 266, this.w - 350);
		// rect(this.x + 207, this.y + 185, this.h - 266, this.w - 350);

		//   fill(82, 40, 40);
		//   //neck
		//   rect(this.x + 87, this.y + 100, this.h - 174, this.w - 375);

		//   fill(105, 50, 50);
		//   //shirt
		//   rect(this.x + 7.5, this.y + 110, this.h - 17.5, this.w - 250, this.w - 300);
		//    rect(this.x + 7.5, this.y + 200, this.h - 17.5, this.w - 300);

		//   fill(82, 40, 40);
		//   rect(this.x + 7.5, this.y + 200, this.h - 17.5, this.w - 425);
		//   fill(133, 77, 77);
		//   rect(this.x + 7.5, this.y + 225, this.h - 17.5, this.w - 400);
		//   fill(82, 40, 40);
		//   rect(this.x + 7.5, this.y + 275, this.h - 17.5, this.w - 425);

	}

	setX(x) {
		this.x = x;
	}
	setY(y) {
		this.y = y;
	}
	setHeight(h) {
		this.h = h;
	}
	setWidth(w) {
		this.w = w;
	}
	getX() {
		return this.x;
	}
	getY() {
		return this.y;
	}
	getHeight() {
		return this.h;
	}
	getWidth() {
		return this.w;
	}

}

class ChoosingPage {
	static display() {
		push();
		noStroke();

		this.Alex();

		this.Paulywog();

		this.Diva();

		this.border();
		pop();
	}

	static Alex() {
		strokeWeight(4);
		stroke(75, 97, 122);
		fill(236, 236, 236);
		ellipse(250, 250, 250);

		noStroke();
		fill(171, 145, 145);
		ellipse(250, 250, 150);

		strokeWeight(4);
		stroke(236, 236, 236);
		fill(75, 97, 122);
		textSize(30);
		text('Alex', 220, 260);

		noStroke();
		fill(236, 236, 236);
		textSize(14);
		text('human', 220, 275);
	}

	static Paulywog() {
		strokeWeight(4);
		stroke(75, 97, 122);
		fill(236, 236, 236);
		ellipse(650, 250, 250);

		noStroke();
		fill(217, 184, 194);
		ellipse(650, 250, 150);

		strokeWeight(4);
		stroke(236, 236, 236);
		fill(75, 97, 122);
		textSize(30);
		text('Paulywog', 585, 260);

		noStroke();
		fill(236, 236, 236);
		textSize(14);
		text('axolotl', 585, 275);
	}

	static Diva() {
		strokeWeight(4);
		stroke(75, 97, 122);
		fill(236, 236, 236);
		ellipse(450, 550, 250);

		noStroke();
		fill(130, 184, 145);
		ellipse(450, 550, 150);
		strokeWeight(4);
		stroke(236, 236, 236);
		fill(75, 97, 122);
		textSize(30);
		text('Diva', 420, 560);

		noStroke();
		fill(236, 236, 236);
		textSize(14);
		text('alien', 420, 575);
	}
	static border() {
		noStroke();
		fill(121, 146, 173, 99);
		rect(830, 0, 70, 800);
		rect(0, 0, 70, 800);
	}

}
class HomePage {

	constructor() {

		background(197, 210, 224);
	}

	display() {
		let xSpacing = 10;
		let ySpacing = 25;

		let numRows = 100;
		let numCols = 100;
		push();
		this.border();
		pop();

		noStroke();
		push();
		for (let y = 0; y < numRows; y++) {
			push();
			for (let x = 0; x < numCols; x++) {
				fill(121, 146, 173, 100);
				rect(5, 5, 5, 5, 5);
				translate(xSpacing, 0);
			}
			pop();
			translate(0, ySpacing);
		}
		pop();

		push()
		fill(236, 236, 236);

		strokeWeight(3);
		stroke(121, 146, 173);
		rect(280, 60, 325, 100, 15);

		rect(330, 160, 235, 100, 15);

		rect(210, 260, 480, 100, 15);

		fill(75, 97, 122);
		rect(340, 500, 210, 55, 5);

		fill(145, 74, 74);
		rect(340, 570, 210, 55, 5);
		pop()

		fill(75, 97, 122);
		textSize(100);

		text('Create', 290, 145);

		text('Your', 345, 245);

		text('Character!', 220, 347);

		fill(236, 236, 236);
		textSize(50);
		text('START', 365, 545);

		//fill(197, 210, 224);
		text('QUIT', 385, 613);

	}

	border() {
		noStroke();
		fill(121, 146, 173, 99);
		rect(830, 0, 70, 800);
		rect(0, 0, 70, 800);
	}

}

function alexNameTag() {
	fill(236, 236, 236);

	strokeWeight(3);
	stroke(121, 146, 173);
	rect(280, 60, 305, 100, 15);

	fill(75, 97, 122);
	textSize(60);
	text('Alex', 375, 130);
}

function quit() {
	strokeWeight(3);
	stroke(121, 146, 173);
	fill(145, 74, 74);
	ellipse(900, 800, 175);

	noStroke();
	fill(236, 236, 236);
	textSize(30);
	text('quit', 840, 775);

	strokeWeight(3);
	stroke(121, 146, 173);
	fill(75, 97, 122);
	ellipse(0, 800, 175);

	fill(236, 236, 236);
	textSize(30);
	text('back', 5, 775);
}

function ally() {
	fill(236, 236, 236);
	strokeWeight(3);
	stroke(121, 146, 173);
	rect(280, 60, 325, 100, 15);

	fill(75, 97, 122);
	textSize(60);
	text('Paulywog', 310, 130);

}

class Clothing2 {
	constructor(x, y, width, height, attachX, attachY, boundingBoxX1, boundingBoxX2, boundingBoxY1, boundingBoxY2) {
		this.homeX = x;
		this.homeY = y;
		this.x = x;
		this.y = y;
		this.h = height;
		this.w = width;
		this.attachX = attachX;// where it moves to when popping on
		this.attachY = attachY;
		this.boundingBoxX1 = boundingBoxX1;//area it needs to move to
		this.boundingBoxY1 = boundingBoxY1;
		this.boundingBoxX2 = boundingBoxX2;
		this.boundingBoxY2 = boundingBoxY2;

	}


	displayBubbles() {

		//fill(150, 0, 0);
		// rect(this.x, this.y, this.h, this.w);

		strokeWeight(1);
		stroke(255);
		fill(255, 255, 255, 75);
		ellipse(this.x, this.y, this.h - 130);
		ellipse(this.x + 125, this.y + 75, this.h - 110);
		ellipse(this.x + 90, this.y + 30, this.h - 140);
		ellipse(this.x + 25, this.y + 125, this.h - 140);
		ellipse(this.x + 15, this.y + 100, this.h - 125);
		ellipse(this.x + 135, this.y + 140, this.h - 130);

		fill(255);
		ellipse(this.x + 2, this.y, this.h - 147);
		ellipse(this.x + 136, this.y + 70, this.h - 145);
		ellipse(this.x + 92, this.y + 30, this.h - 148);
		ellipse(this.x + 27, this.y + 125, this.h - 148);
		ellipse(this.x + 20, this.y + 98, this.h - 145);
		ellipse(this.x + 137, this.y + 140, this.h - 147);

		ellipse(this.x - 2, this.y - 5, this.h - 149);
		ellipse(this.x + 132, this.y + 65, this.h - 147);
		ellipse(this.x + 16, this.y + 93, this.h - 147);
		ellipse(this.x + 133, this.y + 135, this.h - 149);

	}
	displayGlassesWater() {
		//fill(150, 100, 10);
		//rect(this.x, this.y, this.h, this.w);

		strokeWeight(1.5);
		stroke(0);
		fill(250, 250, 250, 3);
		rect(this.x - 10, this.y + 75, this.h - 85, this.h - 100, this.h - 135);
		rect(this.x + 105, this.y + 75, this.h - 85, this.h - 100, this.h - 135);

		strokeWeight(2);
		line(this.x + 50, this.y + 80, this.x + 109, this.y + 80);
		line(this.x + 54, this.y + 87, this.x + 106, this.y + 87);

		line(this.x - 19, this.y + 86, this.x - 6, this.y + 86);
		line(this.x + 164, this.y + 86, this.x + 179, this.y + 86);

	}
	displayJirt() {
		//fill(150, 150, 0);
		//rect(this.x, this.y, this.h, this.w);

		strokeWeight(1.5);
		stroke(117, 140, 148);
		fill(144, 168, 176);
		rect(this.x - 9, this.y + 125, this.h + 23, this.w - 250);

		//belt loops
		fill(117, 140, 148);
		stroke(96, 118, 125);
		rect(this.x - 9, this.y + 28, this.h - 145, this.w - 131);
		rect(this.x + 160, this.y + 28, this.h - 145, this.w - 131);

		rect(this.x + 45, this.y + 28, this.h - 145, this.w - 131);
		rect(this.x + 110, this.y + 28, this.h - 145, this.w - 131);


		//circles
		fill(60, 76, 82);
		stroke(82, 103, 110);
		ellipse(this.x - 3, this.y + 95, this.h - 145);
		ellipse(this.x + 5, this.y + 108, this.h - 140);
		ellipse(this.x + 25, this.y + 100, this.h - 125);
		ellipse(this.x + 50, this.y + 110, this.h - 135);
		ellipse(this.x + 75, this.y + 95, this.h - 115);
		ellipse(this.x + 100, this.y + 108, this.h - 140);
		ellipse(this.x + 115, this.y + 94, this.h - 130);
		ellipse(this.x + 125, this.y + 108, this.h - 145);
		ellipse(this.x + 145, this.y + 100, this.h - 125);

		fill(96, 118, 125);
		stroke(117, 140, 148);
		ellipse(this.x - 3, this.y + 95, this.h - 150);
		ellipse(this.x + 5, this.y + 108, this.h - 145);
		ellipse(this.x + 25, this.y + 100, this.h - 130);
		ellipse(this.x + 50, this.y + 110, this.h - 140);
		ellipse(this.x + 75, this.y + 95, this.h - 120);
		ellipse(this.x + 100, this.y + 108, this.h - 145);
		ellipse(this.x + 115, this.y + 94, this.h - 135);
		ellipse(this.x + 125, this.y + 108, this.h - 150);
		ellipse(this.x + 145, this.y + 100, this.h - 130);

		stroke(117, 140, 148);
		fill(144, 168, 176);
		ellipse(this.x + 25, this.y + 100, this.h - 140);
		ellipse(this.x + 50, this.y + 110, this.h - 150);
		ellipse(this.x + 75, this.y + 95, this.h - 130);
		ellipse(this.x + 115, this.y + 94, this.h - 145);
		ellipse(this.x + 145, this.y + 100, this.h - 140);

		strokeWeight(1.5);
		fill(82, 103, 110);
		stroke(60, 76, 82);
		line(this.x + 90, this.y + 25, this.x + 90, this.y + 55);
		line(this.x + 80, this.y + 65, this.x + 90, this.y + 55);

		ellipse(this.x + 80, this.y + 35, this.h - 140);

	}
	displayHeadPiece() {
		fill(0, 150, 50);
		//rect(this.x, this.y, this.h, this.w);
		fill(124, 150, 111);
		line(this.x + 40, this.y + 25, this.x + 140, this.y + 25);
		ellipse(this.x + 90, this.y + 33, this.h - 140);
		ellipse(this.x + 78, this.y + 30, this.h - 145);
		ellipse(this.x + 102, this.y + 30, this.h - 145);
	}
	displayShirtWater() {
		//fill(0, 0, 150);
		//rect(this.x, this.y, this.h, this.w);
		//shirt2
		noStroke();
		fill(82, 103, 110);
		//sleeves
		rect(this.x - 5.5, this.y + 5, this.h - 57.5, this.w - 60, this.w + 175);
		rect(this.x - 5.5, this.y + 100, this.h - 57.5, this.w - 200);

		rect(this.x + 125.5, this.y + 5, this.h - 57.5, this.w - 60, this.w + 175);
		rect(this.x + 125.5, this.y + 100, this.h - 57.5, this.w - 200);

		fill(117, 140, 148);
		//shirt2
		rect(this.x + 18.5, this.y - 25, this.h + 24.5, this.w + 20, this.w + 175);
		fill(124, 150, 111);
		rect(this.x + 18.5, this.y + 210, this.h + 24.5, this.w - 290);

		stroke(82, 103, 110);
		ellipse(this.x + 105, this.y + 25, this.h - 95);

		//circles
		fill(60, 76, 82);
		stroke(82, 103, 110);
		ellipse(this.x + 27, this.y + 95, this.h - 145);
		ellipse(this.x + 35, this.y + 108, this.h - 140);
		ellipse(this.x + 55, this.y + 100, this.h - 125);
		ellipse(this.x + 80, this.y + 110, this.h - 135);
		ellipse(this.x + 105, this.y + 95, this.h - 115);
		ellipse(this.x + 130, this.y + 108, this.h - 140);
		ellipse(this.x + 145, this.y + 94, this.h - 130);
		ellipse(this.x + 155, this.y + 108, this.h - 145);
		ellipse(this.x + 175, this.y + 100, this.h - 125);

		fill(96, 118, 125);
		stroke(117, 140, 148);
		ellipse(this.x + 27, this.y + 95, this.h - 150);
		ellipse(this.x + 35, this.y + 108, this.h - 145);
		ellipse(this.x + 55, this.y + 100, this.h - 130);
		ellipse(this.x + 80, this.y + 110, this.h - 140);
		ellipse(this.x + 105, this.y + 95, this.h - 120);
		ellipse(this.x + 130, this.y + 108, this.h - 145);
		ellipse(this.x + 145, this.y + 94, this.h - 135);
		ellipse(this.x + 155, this.y + 108, this.h - 150);
		ellipse(this.x + 175, this.y + 100, this.h - 130);

		stroke(117, 140, 148);
		fill(144, 168, 176);
		ellipse(this.x + 55, this.y + 100, this.h - 140);
		ellipse(this.x + 80, this.y + 110, this.h - 150);
		ellipse(this.x + 105, this.y + 95, this.h - 130);
		ellipse(this.x + 145, this.y + 94, this.h - 145);
		ellipse(this.x + 175, this.y + 100, this.h - 140);


	}
	displayShortsWater() {
		fill(75, 0, 150);
		//rect(this.x, this.y, this.h, this.w);
		fill(82, 103, 110);
		stroke(82, 103, 110);
		rect(this.x - 9, this.y + 145, this.h + 23, this.w - 250);

		fill(117, 140, 148);
		stroke(144, 168, 176);

		//belt loops
		strokeWeight(2)
		fill(144, 168, 176);
		stroke(92, 110, 115);
		rect(this.x - 12, this.y + 145, this.h + 29, this.w - 170);

		stroke(52, 67, 71);
		rect(this.x - 9, this.y + 48, this.h - 145, this.w - 131);
		rect(this.x + 160, this.y + 48, this.h - 145, this.w - 131);

		rect(this.x + 45, this.y + 48, this.h - 145, this.w - 131);
		rect(this.x + 110, this.y + 48, this.h - 145, this.w - 131);

		strokeWeight(2);
		stroke(52, 67, 71);
		line(this.x + 80, this.y + 145, this.x + 80, this.y + 100);



	}

	setX(x) {
		this.x = x;
	}
	setX(y) {
		this.y = y;
	}
	setHeight(h) {
		this.h = h;
	}
	setWidth(w) {
		this.w = w;
	}

	getX() {
		return this.x;
	}
	getY() {
		return this.y;
	}
	getHeight() {
		return this.h;
	}
	getWidth() {
		return this.w;
	}
}

class Axolotl {
	constructor(x, y, height, width) {
		this.x = x;
		this.y = y;
		this.h = height;
		this.w = width;
	}

	display() {

		//anteni
		stroke(168, 116, 118);
		strokeWeight(1);
		fill(196, 145, 147);
		triangle(this.x + 35, this.y - 40, this.x + 30, this.y - 35, this.x + 25, this.y - 70);
		triangle(this.x + 165, this.y - 40, this.x + 170, this.y - 35, this.x + 175, this.y - 70);

		triangle(this.x + 25, this.y - 30, this.x + 20, this.y - 20, this.x + 10, this.y - 60);
		triangle(this.x + 175, this.y - 30, this.x + 180, this.y - 20, this.x + 190, this.y - 60);

		triangle(this.x + 25, this.y + 10, this.x + 20, this.y - 10, this.x, this.y - 30);
		triangle(this.x + 175, this.y + 10, this.x + 175, this.y - 5, this.x + 200, this.y - 30);

		noStroke();
		//arms
		fill(217, 184, 194);
		rect(this.x + 55, this.y + 145, this.h - 260, this.w - 175, this.w - 300);
		rect(this.x + 205, this.y + 145, this.h - 260, this.w - 175, this.w - 300);

		stroke(196, 153, 166);
		strokeWeight(1);
		//neck
		fill(217, 184, 194);
		rect(this.x + 90, this.y, this.h - 180, this.w - 300);

		//body
		fill(217, 184, 194);
		rect(this.x + 11.5, this.y + 115, this.h - 25, this.w, this.w - 300);

		//head
		fill(217, 184, 194);
		ellipse(this.x + 100, this.y, this.h - 40);

		//eyes
		stroke(189, 121, 123);
		fill(189, 121, 123);
		ellipse(this.x + 50, this.y, this.h - 160);
		ellipse(this.x + 150, this.y, this.h - 160);

		stroke(0);
		fill(0);
		ellipse(this.x + 50, this.y, this.h - 165);
		ellipse(this.x + 150, this.y, this.h - 165);

		stroke(250);
		fill(250);
		ellipse(this.x + 40, this.y + 5, this.h - 197);
		ellipse(this.x + 55, this.y - 5, this.h - 192);

		ellipse(this.x + 140, this.y + 5, this.h - 197);
		ellipse(this.x + 155, this.y - 5, this.h - 192);

		//eyebrows
		stroke(168, 116, 118);
		fill(196, 145, 147);
		ellipse(this.x + 55, this.y - 28, this.h - 190, this.h - 193);
		ellipse(this.x + 145, this.y - 28, this.h - 190, this.h - 193);

		//mouth
		line(this.x + 90, this.y + 10, this.x + 110, this.y + 10);

		//cheeks
		stroke(179, 136, 139);
		fill(214, 167, 169);
		ellipse(this.x + 50, this.y + 33, this.h - 180);
		ellipse(this.x + 150, this.y + 33, this.h - 180);

		//under clothes
		//clothing
		strokeWeight(1);
		stroke(200);
		fill(220);
		rect(this.x + 12, this.y + 175, this.h - 26, this.w - 150, this.w - 442);


		//detail
		//stroke(180);
		fill(200);
		rect(this.x + 47, this.y + 130, this.h - 197, this.w - 395, this.w - 445);
		rect(this.x + 149, this.y + 130, this.h - 197, this.w - 395, this.w - 445);


		//stroke(180);
		fill(200);
		rect(this.x + 11.5, this.y + 200, this.h - 25, this.w - 350);

		//stroke(200);
		fill(220);
		rect(this.x + 11.5, this.y + 210.5, this.h - 25, this.w - 375);
	}

	setX(x) {
		this.x = x;
	}
	setX(y) {
		this.y = y;
	}
	setHeight(h) {
		this.h = h;
	}
	setWidth(w) {
		this.w = w;
	}
	getX() {
		return this.x;
	}
	getY() {
		return this.y;
	}
	getHeight() {
		return this.h;
	}
	getWidth() {
		return this.w;
	}

}

class Clothing3 {
	constructor(x, y, width, height, attachX, attachY, boundingBoxX1, boundingBoxX2, boundingBoxY1, boundingBoxY2) {
		this.homeX = x;
		this.homeY = y;
		this.x = x;
		this.y = y;
		this.h = height;
		this.w = width;
		this.attachX = attachX;// where it moves to when popping on
		this.attachY = attachY;
		this.boundingBoxX1 = boundingBoxX1;//area it needs to move to
		this.boundingBoxY1 = boundingBoxY1;
		this.boundingBoxX2 = boundingBoxX2;
		this.boundingBoxY2 = boundingBoxY2;
	}


	displayCrown() {
		//fill(150, 0, 0);
		//rect(this.x, this.y, this.h, this.w);
		stroke(163, 135, 59);
		strokeWeight(4);
		fill(235, 199, 101);
		triangle(this.x + 60, this.y + 65, this.x + 50, this.y + 85, this.x + 70, this.y + 85);
		//right
		triangle(this.x + 90, this.y + 65, this.x + 80, this.y + 85, this.x + 100, this.y + 85);
		//middle
		triangle(this.x + 75, this.y + 50, this.x + 65, this.y + 85, this.x + 85, this.y + 85);


		noStroke();
		//left
		triangle(this.x + 60, this.y + 65, this.x + 50, this.y + 85, this.x + 70, this.y + 85);

		//right
		triangle(this.x + 90, this.y + 65, this.x + 80, this.y + 85, this.x + 100, this.y + 85);

		//middle
		triangle(this.x + 75, this.y + 50, this.x + 65, this.y + 85, this.x + 85, this.y + 85);


		//stones
		strokeWeight(2);
		stroke(122, 59, 59);
		fill(179, 64, 64);
		ellipse(this.x + 75, this.y + 68, this.h - 144);

		ellipse(this.x + 90, this.y + 75, this.h - 144);

		ellipse(this.x + 60, this.y + 75, this.h - 144);

		ellipse(this.x + 75, this.y + 78, this.h - 142);

		//shine
		fill(250, 242, 242);
		noStroke();
		ellipse(this.x + 76, this.y + 68, this.h - 148);

		ellipse(this.x + 91, this.y + 75, this.h - 148);

		ellipse(this.x + 61, this.y + 75, this.h - 148);

		ellipse(this.x + 77, this.y + 78, this.h - 147);
	}
	displayglassesAlien() {
		//fill(150, 100, 10);
		//rect(this.x, this.y, this.h, this.w);
		strokeWeight(3);
		stroke(0);
		fill(179, 64, 64, 99);
		quad(this.x + 20, this.y + 75, this.x + 80, this.y + 75, this.x + 80, this.y + 95, this.x + 35, this.y + 95);

		quad(this.x + 190, this.y + 75, this.x + 130, this.y + 75, this.x + 130, this.y + 95, this.x + 175, this.y + 95);

		line(this.x + 80, this.y + 77, this.x + 130, this.y + 77);
		line(this.x + 17, this.y + 80, this.x + 22, this.y + 80);
		line(this.x + 193, this.y + 80, this.x + 188, this.y + 80);

	}
	displayshortsAlien() {
		//fill(150, 150, 0);
		//rect(this.x, this.y, this.h, this.w);
		stroke(82, 67, 52);
		fill(138, 118, 99);
		rect(this.x - 9, this.y + 145, this.h + 23, this.w - 250);

		fill(117, 140, 148);
		stroke(144, 168, 176);

		//stripes/cordaroy
		stroke(107, 89, 73);
		line(this.x - 5, this.y + 45, this.x - 5, this.y + 145);
		line(this.x, this.y + 45, this.x, this.y + 145);
		line(this.x + 5, this.y + 45, this.x + 5, this.y + 145);
		line(this.x + 10, this.y + 45, this.x + 10, this.y + 145);
		line(this.x + 15, this.y + 45, this.x + 15, this.y + 145);
		line(this.x + 20, this.y + 45, this.x + 20, this.y + 145);
		line(this.x + 25, this.y + 45, this.x + 25, this.y + 145);
		line(this.x + 30, this.y + 45, this.x + 30, this.y + 145);
		line(this.x + 35, this.y + 45, this.x + 35, this.y + 145);
		line(this.x + 40, this.y + 45, this.x + 40, this.y + 145);
		line(this.x + 45, this.y + 45, this.x + 45, this.y + 145);
		line(this.x + 50, this.y + 45, this.x + 50, this.y + 145);
		line(this.x + 55, this.y + 45, this.x + 55, this.y + 145);
		line(this.x + 60, this.y + 45, this.x + 60, this.y + 145);
		line(this.x + 65, this.y + 45, this.x + 65, this.y + 145);
		line(this.x + 70, this.y + 45, this.x + 70, this.y + 145);
		line(this.x + 75, this.y + 45, this.x + 75, this.y + 145);
		line(this.x + 80, this.y + 45, this.x + 80, this.y + 145);
		line(this.x + 85, this.y + 45, this.x + 85, this.y + 145);
		line(this.x + 90, this.y + 45, this.x + 90, this.y + 145);
		line(this.x + 95, this.y + 45, this.x + 95, this.y + 145);
		line(this.x + 100, this.y + 45, this.x + 100, this.y + 145);
		line(this.x + 105, this.y + 45, this.x + 105, this.y + 145);
		line(this.x + 110, this.y + 45, this.x + 110, this.y + 145);
		line(this.x + 115, this.y + 45, this.x + 115, this.y + 145);
		line(this.x + 120, this.y + 45, this.x + 120, this.y + 145);
		line(this.x + 125, this.y + 45, this.x + 125, this.y + 145);
		line(this.x + 130, this.y + 45, this.x + 130, this.y + 145);
		line(this.x + 135, this.y + 45, this.x + 135, this.y + 145);
		line(this.x + 140, this.y + 45, this.x + 140, this.y + 145);
		line(this.x + 145, this.y + 45, this.x + 145, this.y + 145);
		line(this.x + 150, this.y + 45, this.x + 150, this.y + 145);
		line(this.x + 155, this.y + 45, this.x + 155, this.y + 145);
		line(this.x + 160, this.y + 45, this.x + 160, this.y + 145);

		strokeWeight(1.5);
		fill(36, 29, 22);
		stroke(36, 29, 22);
		line(this.x + 90, this.y + 45, this.x + 90, this.y + 75);
		line(this.x + 80, this.y + 85, this.x + 90, this.y + 75);

		ellipse(this.x + 80, this.y + 55, this.h - 140);

		//belt loops
		strokeWeight(2)
		fill(110, 92, 76);
		stroke(74, 59, 47);
		rect(this.x - 12, this.y + 145, this.h + 29, this.w - 170);

		stroke(36, 29, 22);
		rect(this.x - 9, this.y + 48, this.h - 145, this.w - 131);
		rect(this.x + 160, this.y + 48, this.h - 145, this.w - 131);

		rect(this.x + 45, this.y + 48, this.h - 145, this.w - 131);
		rect(this.x + 110, this.y + 48, this.h - 145, this.w - 131);

		strokeWeight(2);
		stroke(36, 29, 22);
		line(this.x + 80, this.y + 145, this.x + 80, this.y + 100);
	}
	displayScarf() {
		//fill(0, 150, 50);
		//rect(this.x, this.y, this.h, this.w);
		strokeWeight(2);
		stroke(63, 88, 110);
		fill(54, 78, 99);
		rect(this.x + 35, this.y + 15, this.h - 100, this.w - 30, this.w - 140);
		rect(this.x + 30, this.y + 15, this.h - 20, this.w - 100, this.w - 140);

		fill(96, 127, 153);
		rect(this.x + 38, this.y + 15, this.h - 125, this.w - 100);
		rect(this.x + 80, this.y + 15, this.h - 125, this.w - 100);
		rect(this.x + 122, this.y + 15, this.h - 125, this.w - 100);

		rect(this.x + 35, this.y + 65, this.h - 100, this.w - 125);
		rect(this.x + 35, this.y + 102, this.h - 100, this.w - 125);

		noStroke();
		fill(80, 108, 133);
		rect(this.x + 36, this.y + 66, this.h - 102, this.w - 140);

		strokeWeight(4);
		stroke(54, 78, 99);
		line(this.x + 42, this.y + 137, this.x + 42, this.y + 153);

		line(this.x + 51, this.y + 137, this.x + 51, this.y + 153);

		line(this.x + 60, this.y + 137, this.x + 60, this.y + 153);

		line(this.x + 69, this.y + 137, this.x + 69, this.y + 153);

		line(this.x + 78, this.y + 137, this.x + 78, this.y + 153);
	}
	displayshirtAlien() {
		//fill(0, 0, 150);
		//rect(this.x, this.y, this.h, this.w);

		strokeWeight(4)
		stroke(163, 135, 59);
		fill(235, 199, 101);
		//sleeves
		rect(this.x - 20.5, this.y + 5, this.h - 57.5, this.w - 60, this.w + 175);
		rect(this.x - 20.5, this.y + 50, this.h - 57.5, this.w);
		rect(this.x + 110.5, this.y + 5, this.h - 57.5, this.w - 60, this.w + 175);
		rect(this.x + 110.5, this.y + 50, this.h - 57.5, this.w);

		noStroke();
		fill(222, 185, 82);
		//sleeves
		rect(this.x - 20.5, this.y + 5, this.h - 57.5, this.w - 60, this.w + 175);
		rect(this.x - 20.5, this.y + 50, this.h - 57.5, this.w);
		rect(this.x + 110.5, this.y + 5, this.h - 57.5, this.w - 60, this.w + 175);
		rect(this.x + 110.5, this.y + 50, this.h - 57.5, this.w);

		stroke(163, 135, 59);
		fill(235, 199, 101);
		//jacket
		rect(this.x + 3.5, this.y - 25, this.h + 24.5, this.w + 20, this.w + 175);
		rect(this.x + 3.5, this.y + 210, this.h + 24.5, this.w - 290);

		noStroke();
		fill(235, 199, 101);
		//jacket
		rect(this.x + 3.5, this.y - 25, this.h + 24.5, this.w + 20, this.w + 175);
		rect(this.x + 3.5, this.y + 210, this.h + 24.5, this.w - 290);

		strokeWeight(4);
		//shirt
		fill(200);
		stroke(160);
		rect(this.x + 103, this.y + 137, this.h - 176, this.w - 340);

		//fill(210);
		rect(this.x + 43.5, this.y - 25, this.h - 59.5, this.w + 20, this.w + 175);
		fill(210);
		rect(this.x + 43.5, this.y + 210, this.h - 59.5, this.w - 290);

		//shirt
		stroke(163, 135, 59);
		rect(this.x + 43.5, this.y - 25, this.h - 59.5, this.w + 20, this.w + 175);
		fill(210);
		rect(this.x + 43.5, this.y + 208, this.h - 59.5, this.w - 287);

		//shirt
		noStroke();
		fill(200);
		rect(this.x + 103, this.y + 137, this.h - 176, this.w - 340);

		//fill(210);
		rect(this.x + 43.5, this.y - 25, this.h - 59.5, this.w + 20, this.w + 175);
		fill(210);
		rect(this.x + 43.5, this.y + 210, this.h - 59.5, this.w - 290);

		strokeWeight(2)
		stroke(175);
		//neck
		line(this.x + 80, this.y - 42, this.x + 80, this.y - 52);
		line(this.x + 85, this.y - 42, this.x + 85, this.y - 52);
		line(this.x + 90, this.y - 42, this.x + 90, this.y - 52);
		line(this.x + 95, this.y - 42, this.x + 95, this.y - 52);
		line(this.x + 100, this.y - 42, this.x + 100, this.y - 52);

		//bottom
		line(this.x + 45, this.y + 200, this.x + 45, this.y + 210);
		line(this.x + 50, this.y + 200, this.x + 50, this.y + 210);
		line(this.x + 55, this.y + 200, this.x + 55, this.y + 210);
		line(this.x + 60, this.y + 200, this.x + 60, this.y + 210);
		line(this.x + 65, this.y + 200, this.x + 65, this.y + 210);
		line(this.x + 70, this.y + 200, this.x + 70, this.y + 210);
		line(this.x + 75, this.y + 200, this.x + 75, this.y + 210);
		line(this.x + 80, this.y + 200, this.x + 80, this.y + 210);
		line(this.x + 85, this.y + 200, this.x + 85, this.y + 210);
		line(this.x + 90, this.y + 200, this.x + 90, this.y + 210);
		line(this.x + 95, this.y + 200, this.x + 95, this.y + 210);
		line(this.x + 100, this.y + 200, this.x + 100, this.y + 210);
		line(this.x + 105, this.y + 200, this.x + 105, this.y + 210);
		line(this.x + 110, this.y + 200, this.x + 110, this.y + 210);
		line(this.x + 115, this.y + 200, this.x + 115, this.y + 210);
		line(this.x + 120, this.y + 200, this.x + 120, this.y + 210);
		line(this.x + 125, this.y + 200, this.x + 125, this.y + 210);
		line(this.x + 130, this.y + 200, this.x + 130, this.y + 210);

		//pockets
		stroke(201, 165, 64);
		//stroke(222, 185, 82);
		fill(214, 175, 64);
		rect(this.x + 4, this.y + 150, this.h - 114, this.w - 120);

		rect(this.x + 4, this.y + 70, this.h - 114, this.w - 120);

		rect(this.x + 138, this.y + 70, this.h - 110, this.w - 120);

		rect(this.x + 138, this.y + 150, this.h - 110, this.w - 120);

		fill(222, 185, 82);
		rect(this.x + 4, this.y + 160, this.h - 114, this.w - 165);

		rect(this.x + 4, this.y + 80, this.h - 114, this.w - 165);

		rect(this.x + 138, this.y + 80, this.h - 110, this.w - 165);

		rect(this.x + 138, this.y + 160, this.h - 110, this.w - 165);

		fill(82, 67, 52);
		noStroke();
		ellipse(this.x + 21, this.y + 154, this.h - 142);

		ellipse(this.x + 21, this.y + 74, this.h - 142);

		ellipse(this.x + 157, this.y + 74, this.h - 142);

		ellipse(this.x + 157, this.y + 154, this.h - 142);
	}
	displayjortsAlien() {
		//fill(75, 0, 150);
		//rect(this.x, this.y, this.h, this.w);
		strokeWeight(2);
		stroke(73, 101, 128);
		fill(111, 142, 171);
		rect(this.x - 9, this.y + 125, this.h + 23, this.w - 250);

		stroke(0);
		line(this.x + 80, this.y + 125, this.x + 80, this.y + 80);

		line(this.x + 90, this.y + 25, this.x + 90, this.y + 55);
		line(this.x + 80, this.y + 65, this.x + 90, this.y + 55);

		//belt loops
		stroke(46, 69, 89);
		fill(93, 124, 153);
		rect(this.x - 9, this.y + 28, this.h - 145, this.w - 131);
		rect(this.x + 160, this.y + 28, this.h - 145, this.w - 131);

		rect(this.x + 45, this.y + 28, this.h - 145, this.w - 131);
		rect(this.x + 110, this.y + 28, this.h - 145, this.w - 131);

		stroke(0);
		fill(59, 53, 48);
		ellipse(this.x, this.y + 60, this.h - 143, this.h - 140);
		line(this.x - 5, this.y + 50, this.x + 20, this.y + 50);
		ellipse(this.x + 155, this.y + 60, this.h - 143, this.h - 140);
		line(this.x + 135, this.y + 50, this.x + 160, this.y + 50);

		ellipse(this.x + 80, this.y + 35, this.h - 140);
	}

	setX(x) {
		this.x = x;
	}
	setX(y) {
		this.y = y;
	}
	setHeight(h) {
		this.h = h;
	}
	setWidth(w) {
		this.w = w;
	}

	getX() {
		return this.x;
	}
	getY() {
		return this.y;
	}
	getHeight() {
		return this.h;
	}
	getWidth() {
		return this.w;
	}
}

class Alien {
	constructor(x, y, height, width) {
		this.x = x;
		this.y = y;
		this.h = height;
		this.w = width;
	}

	display() {
		//glow
		stroke(130, 184, 145, 30)
		fill(130, 184, 145, 20);
		rect(this.x - 14.5, this.y - 100, this.h + 30, this.w + 200, this.w - 300);

		ellipse(this.x - 10, this.y - 50, this.h - 140);
		ellipse(this.x + 210, this.y - 50, this.h - 140);

		stroke(100, 158, 116);
		strokeWeight(2);
		//anteni
		fill(130, 184, 145);
		triangle(this.x + 25, this.y - 30, this.x + 20, this.y - 20, this.x - 10, this.y - 50);
		triangle(this.x + 175, this.y - 30, this.x + 180, this.y - 20, this.x + 210, this.y - 50);

		ellipse(this.x - 10, this.y - 50, this.h - 180);
		ellipse(this.x + 210, this.y - 50, this.h - 180);

		//arms
		noStroke()
		rect(this.x + 55, this.y + 145, this.h - 260, this.w - 175, this.w - 300);
		rect(this.x + 205, this.y + 145, this.h - 260, this.w - 175, this.w - 300);

		stroke(100, 158, 116);
		//neck
		fill(130, 184, 145);
		rect(this.x + 90, this.y, this.h - 180, this.w - 300);

		//body
		fill(130, 184, 145);
		rect(this.x + 11.5, this.y + 115, this.h - 25, this.w, this.w - 300);

		//head
		fill(130, 184, 145);
		ellipse(this.x + 100, this.y, this.h - 40);

		//eyes
		stroke(0);
		fill(0);
		ellipse(this.x + 50, this.y, this.h - 150);
		ellipse(this.x + 150, this.y, this.h - 150);

		fill(250);
		ellipse(this.x + 50, this.y, this.h - 195);
		ellipse(this.x + 150, this.y, this.h - 195);

		//mouth
		line(this.x + 95, this.y + 10, this.x + 105, this.y + 10);



		//under clothes
		//clothing
		strokeWeight(2.5);
		stroke(200);
		fill(220);
		rect(this.x + 12, this.y + 175, this.h - 26, this.w - 150, this.w - 442);


		//detail
		stroke(180);
		fill(200);
		rect(this.x + 47, this.y + 130, this.h - 197, this.w - 395, this.w - 445);
		rect(this.x + 149, this.y + 130, this.h - 197, this.w - 395, this.w - 445);


		stroke(180);
		fill(200);
		rect(this.x + 11.5, this.y + 200, this.h - 25, this.w - 350);

		stroke(200);
		fill(220);
		rect(this.x + 11.5, this.y + 210.5, this.h - 25, this.w - 375);


	}

	setX(x) {
		this.x = x;
	}
	setX(y) {
		this.y = y;
	}
	setHeight(h) {
		this.h = h;
	}
	setWidth(w) {
		this.w = w;
	}
	getX() {
		return this.x;
	}
	getY() {
		return this.y;
	}
	getHeight() {
		return this.h;
	}
	getWidth() {
		return this.w;
	}

}

function mousePressed() {
	if (currentPage == pages.human) {
		if (mouseX > hat.x && mouseX < hat.x + 100 && mouseY > hat.y && mouseY < hat.y + 100) {
			selectedObject = hat;
			selectedObjectOffsetX = hat.x - mouseX;
			selectedObjectOffsetY = hat.y - mouseY;
		} else if (mouseX > glasses.x && mouseX < glasses.x + glasses.w && mouseY > glasses.y && mouseY < glasses.y + glasses.h) {
			selectedObject = glasses;
			selectedObjectOffsetX = glasses.x - mouseX;
			selectedObjectOffsetY = glasses.y - mouseY;
		} else if (mouseX > shorts.x && mouseX < shorts.x + shorts.w && mouseY > shorts.y && mouseY < shorts.y + shorts.h) {
			selectedObject = shorts;
			selectedObjectOffsetX = shorts.x - mouseX;
			selectedObjectOffsetY = shorts.y - mouseY;
		} else if (mouseX > hair.x && mouseX < hair.x + hair.w && mouseY > hair.y && mouseY < hair.y + hair.h) {
			selectedObject = hair;
			selectedObjectOffsetX = hair.x - mouseX;
			selectedObjectOffsetY = hair.y - mouseY;
		} else if (mouseX > shirt.x && mouseX < shirt.x + shirt.w && mouseY > shirt.y && mouseY < shirt.y + shirt.h) {
			selectedObject = shirt;
			selectedObjectOffsetX = shirt.x - mouseX;
			selectedObjectOffsetY = shirt.y - mouseY;
		} else if (mouseX > jorts.x && mouseX < jorts.x + jorts.w && mouseY > jorts.y && mouseY < jorts.y + jorts.h) {
			selectedObject = jorts;
			selectedObjectOffsetX = jorts.x - mouseX;
			selectedObjectOffsetY = jorts.y - mouseY;
		}
	}
	else if (currentPage == pages.axolotl) {
		if (mouseX > bubbles.x && mouseX < bubbles.x + 100 && mouseY > bubbles.y && mouseY < bubbles.y + 100) {
			selectedObject = bubbles;
			selectedObjectOffsetX = bubbles.x - mouseX;
			selectedObjectOffsetY = bubbles.y - mouseY;
		} else if (mouseX > glassesWater.x && mouseX < glassesWater.x + glassesWater.w && mouseY > glassesWater.y && mouseY < glassesWater.y + glassesWater.h) {
			selectedObject = glassesWater;
			selectedObjectOffsetX = glassesWater.x - mouseX;
			selectedObjectOffsetY = glassesWater.y - mouseY;
		} else if (mouseX > jirt.x && mouseX < jirt.x + shorts.w && mouseY > jirt.y && mouseY < jirt.y + jirt.h) {
			selectedObject = jirt;
			selectedObjectOffsetX = jirt.x - mouseX;
			selectedObjectOffsetY = jirt.y - mouseY;
		} else if (mouseX > headPiece.x && mouseX < headPiece.x + headPiece.w && mouseY > headPiece.y && mouseY < headPiece.y + headPiece.h) {
			selectedObject = headPiece;
			selectedObjectOffsetX = headPiece.x - mouseX;
			selectedObjectOffsetY = headPiece.y - mouseY;
		} else if (mouseX > shirtWater.x && mouseX < shirtWater.x + shirtWater.w && mouseY > shirtWater.y && mouseY < shirtWater.y + shirtWater.h) {
			selectedObject = shirtWater;
			selectedObjectOffsetX = shirtWater.x - mouseX;
			selectedObjectOffsetY = shirtWater.y - mouseY;
		} else if (mouseX > shortsWater.x && mouseX < shortsWater.x + shortsWater.w && mouseY > shortsWater.y && mouseY < shortsWater.y + shortsWater.h) {
			selectedObject = shortsWater;
			selectedObjectOffsetX = shortsWater.x - mouseX;
			selectedObjectOffsetY = shortsWater.y - mouseY;
		}

	}
	else if (currentPage == pages.alien) {
		if (mouseX > crown.x && mouseX < crown.x + 100 && mouseY > crown.y && mouseY < crown.y + 100) {
			selectedObject = crown;
			selectedObjectOffsetX = crown.x - mouseX;
			selectedObjectOffsetY = crown.y - mouseY;
		} else if (mouseX > glassesAlien.x && mouseX < glassesAlien.x + glassesAlien.w && mouseY > glassesAlien.y && mouseY < glassesAlien.y + glassesAlien.h) {
			selectedObject = glassesAlien;
			selectedObjectOffsetX = glassesAlien.x - mouseX;
			selectedObjectOffsetY = glassesAlien.y - mouseY;
		} else if (mouseX > shortsAlien.x && mouseX < shortsAlien.x + shortsAlien.w && mouseY > shortsAlien.y && mouseY < shortsAlien.y + shortsAlien.h) {
			selectedObject = shortsAlien;
			selectedObjectOffsetX = shortsAlien.x - mouseX;
			selectedObjectOffsetY = shortsAlien.y - mouseY;
		} else if (mouseX > scarf.x && mouseX < scarf.x + scarf.w && mouseY > scarf.y && mouseY < scarf.y + scarf.h) {
			selectedObject = scarf;
			selectedObjectOffsetX = scarf.x - mouseX;
			selectedObjectOffsetY = scarf.y - mouseY;
		} else if (mouseX > shirtAlien.x && mouseX < shirtAlien.x + shirtAlien.w && mouseY > shirtAlien.y && mouseY < shirtAlien.y + shirtAlien.h) {
			selectedObject = shirtAlien;
			selectedObjectOffsetX = shirtAlien.x - mouseX;
			selectedObjectOffsetY = shirtAlien.y - mouseY;
		} else if (mouseX > jortsAlien.x && mouseX < jortsAlien.x + jortsAlien.w && mouseY > jortsAlien.y && mouseY < jortsAlien.y + jortsAlien.h) {
			selectedObject = jortsAlien;
			selectedObjectOffsetX = jortsAlien.x - mouseX;
			selectedObjectOffsetY = jortsAlien.y - mouseY;
		}
	}
}
function mouseReleased() {

	if (selectedObject != undefined) {
		if (
			mouseX > selectedObject.boundingBoxX1
			&& mouseX < selectedObject.boundingBoxX2
			&& mouseY > selectedObject.boundingBoxY1
			&& mouseY < selectedObject.boundingBoxY2
		) {
			selectedObject.x = selectedObject.attachX;
			selectedObject.y = selectedObject.attachY;
		} else {
			selectedObject.x = selectedObject.homeX;
			selectedObject.y = selectedObject.homeY;
		}
	}

	selectedObject = undefined;
}

class EndPage {
	x = -100;
	y = 350;
	changeInX = 5;
	playerSize = 100;

	display() {
		background(197, 210, 224);

		let xSpacing = 10;
		let ySpacing = 25;

		let numRows = 100;
		let numCols = 100;

		noStroke();
		push();
		for (let y = 0; y < numRows; y++) {
			push();
			for (let x = 0; x < numCols; x++) {
				fill(121, 146, 173, 90);
				rect(5, 5, 5, 5);
				translate(xSpacing, 0);
			}
			pop();
			translate(0, ySpacing);
		}
		pop();

		this.x += this.changeInX;
		this.plane(this.x, this.y, this.playerSize, this.playerSize);
		if (this.x > width + (this.playerSize + 480)) {
			this.x = -300;
			this.y = random(50, 550);
			console.log(this.y);
		}

		this.border();
		this.restart();
	}

	plane(x, y, w, h) {
		//base
		{
			strokeWeight(2);
			stroke(0);
			fill(196, 147, 150, 0);
			triangle(x, y - 10, x - 35, y - 35, x - 35, y + 10);

			strokeWeight(1);
			noStroke();
			fill(140, 68, 63);
			quad(x, y, x + 100, y - 40, x + 140, y - 40, x + 140, y + 5); //body

			quad(x, y, x + 25, y - 10, x + 17, y - 20, x - 5, y - 30); //back fin

			beginShape();
			vertex(x + 140, y - 40);
			vertex(x + 160, y - 25);
			vertex(x + 185, y - 20);
			vertex(x + 183, y - 10);
			vertex(x + 170, y);
			vertex(x + 140, y + 5);
			endShape(); //front

			stroke(2);
			fill(175)
			ellipse(x + 105, y + 10, h - 87); //back wheel
			ellipse(x + 140, y + 10, h - 90); //front wheel

			fill(236, 236, 236);
			rect(x - 450, y - 65, h + 315, h + 12); //flag
			fill(75, 97, 122);
			textSize(75);
			text('Thank you!', x - 250, y - 5);
		}

		//detail
		{
			strokeWeight(2);
			stroke(99, 46, 42);
			fill(99, 46, 42);
			line(x + 127, y, x + 127, y - 40);
			line(x + 90, y - 25, x + 90, y);
			line(x + 155, y - 25, x + 155, y);

			rect(x + 117, y - 25, h - 92, h - 97);

			rect(x + 130, y - 25, h - 92, h - 97);

			strokeWeight(1);
			fill(80);
			quad(x + 100, y - 35, x + 125, y - 35, x + 125, y - 25, x + 90, y - 25); //back window

			quad(x + 130, y - 25, x + 130, y - 35, x + 140, y - 35, x + 155, y - 25); //front window

			strokeWeight(1);
			fill(50);
			ellipse(x + 105, y + 10, h - 95); //back wheel
			ellipse(x + 140, y + 10, h - 97); //front wheel

			triangle(x + 185, y - 18, x + 184, y - 12, x + 190, y - 15); //nose thing

			fill(170);
			strokeWeight(2);
			stroke(115);
			triangle(x, y, x + 170, y, x + 140, y + 4);
			triangle(x, y, x + 170, y, x + 183, y - 10); //light design

			triangle(x + 17, y - 20, x - 5, y - 30, x - 2, y - 15);

			stroke(75);
			strokeWeight(1);
			fill(175);
			quad(x + 108, y - 43, x + 133, y - 43, x + 138, y - 37, x + 103, y - 37); //wing

			quad(x + 5, y - 5, x + 10, y - 10, x + 20, y - 10, x + 25, y - 5); //side fin

			triangle(x + 190, y - 15, x + 185, y - 35, x + 190, y - 50); //top fin

			triangle(x + 190, y - 15, x + 185, y + 5, x + 190, y + 20); //bottom fin

		}
	}

	border() {
		noStroke();
		fill(121, 146, 173, 99);
		rect(830, 0, 70, 800);
		rect(0, 0, 70, 800);
	}

	restart() {
		strokeWeight(3);
		stroke(121, 146, 173);
		fill(75, 97, 122);
		rect(590, 610, 220, 110, 20);
		fill(236, 236, 236);
		textSize(45);
		noStroke();
		text('Restart', 700, 660);
	}
}

function diva() {
	// fill(236, 236, 236);
	// strokeWeight(3);
	// stroke(121, 146, 173);
	// rect(280, 60, 325, 100, 15);

	strokeWeight(3);
	stroke(121, 146, 173);
	rect(280, 60, 325, 100, 15);

	fill(75, 97, 122);
	textSize(60);
	text('Diva', 375, 130);

}
class SadPage {
	x = -100;
	y = 350;
	changeInX = 5;
	playerSize = 100;

	display() {
		background(197, 210, 224);

		let xSpacing = 10;
		let ySpacing = 25;

		let numRows = 100;
		let numCols = 100;

		noStroke();
		push();
		for (let y = 0; y < numRows; y++) {
			push();
			for (let x = 0; x < numCols; x++) {
				fill(121, 146, 173, 90);
				rect(5, 5, 5, 5);
				translate(xSpacing, 0);
			}
			pop();
			translate(0, ySpacing);
		}
		pop();

		this.x += this.changeInX;
		this.plane2(this.x, this.y, this.playerSize, this.playerSize);
		if (this.x > width + (this.playerSize + 480)) {
			this.x = -300;
			this.y = random(50, 550);
			console.log(this.y);
		}

		this.border();
	
	}

	plane2(x, y, w, h) {
		//base
		{
			strokeWeight(2);
			stroke(0);
			fill(196, 147, 150, 0);
			triangle(x, y - 10, x - 35, y - 35, x - 35, y + 10);

			strokeWeight(1);
			noStroke();
			fill(140, 68, 63);
			quad(x, y, x + 100, y - 40, x + 140, y - 40, x + 140, y + 5); //body

			quad(x, y, x + 25, y - 10, x + 17, y - 20, x - 5, y - 30); //back fin

			beginShape();
			vertex(x + 140, y - 40);
			vertex(x + 160, y - 25);
			vertex(x + 185, y - 20);
			vertex(x + 183, y - 10);
			vertex(x + 170, y);
			vertex(x + 140, y + 5);
			endShape(); //front

			stroke(2);
			fill(175)
			ellipse(x + 105, y + 10, h - 87); //back wheel
			ellipse(x + 140, y + 10, h - 90); //front wheel

			fill(236, 236, 236);
			rect(x - 450, y - 65, h + 315, h + 12); //flag
			fill(75, 97, 122);
			textSize(75);
			text(':(', x - 250, y - 15);
		}

		//detail
		{
			strokeWeight(2);
			stroke(99, 46, 42);
			fill(99, 46, 42);
			line(x + 127, y, x + 127, y - 40);
			line(x + 90, y - 25, x + 90, y);
			line(x + 155, y - 25, x + 155, y);

			rect(x + 117, y - 25, h - 92, h - 97);

			rect(x + 130, y - 25, h - 92, h - 97);

			strokeWeight(1);
			fill(80);
			quad(x + 100, y - 35, x + 125, y - 35, x + 125, y - 25, x + 90, y - 25); //back window

			quad(x + 130, y - 25, x + 130, y - 35, x + 140, y - 35, x + 155, y - 25); //front window

			strokeWeight(1);
			fill(50);
			ellipse(x + 105, y + 10, h - 95); //back wheel
			ellipse(x + 140, y + 10, h - 97); //front wheel

			triangle(x + 185, y - 18, x + 184, y - 12, x + 190, y - 15); //nose thing

			fill(170);
			strokeWeight(2);
			stroke(115);
			triangle(x, y, x + 170, y, x + 140, y + 4);
			triangle(x, y, x + 170, y, x + 183, y - 10); //light design

			triangle(x + 17, y - 20, x - 5, y - 30, x - 2, y - 15);

			stroke(75);
			strokeWeight(1);
			fill(175);
			quad(x + 108, y - 43, x + 133, y - 43, x + 138, y - 37, x + 103, y - 37); //wing

			quad(x + 5, y - 5, x + 10, y - 10, x + 20, y - 10, x + 25, y - 5); //side fin

			triangle(x + 190, y - 15, x + 185, y - 35, x + 190, y - 50); //top fin

			triangle(x + 190, y - 15, x + 185, y + 5, x + 190, y + 20); //bottom fin

		}
	}

	border() {
		noStroke();
		fill(121, 146, 173, 99);
		rect(830, 0, 70, 800);
		rect(0, 0, 70, 800);
	}
}