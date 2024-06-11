let alien;
let crown;
let glasses2;
let shorts2;
let scarf;
let shirt3;
let jorts2;
let slides = [];


let selectedObject;
let selectedObjectOffsetX;
let selectedObjectOffsetY;

function setup() {
	createCanvas(900, 800);
	alien = new Alien(340, 350, 200, 450);
  
	crown = new Clothing3(650, 100, 150, 150, 365, 187,365,515,187,337);
	glasses2 = new Clothing3(650, 325, 150, 150, 335, 265,370,520, 275,380);
	shorts2 = new Clothing3(650, 550, 150, 150, 361, 654,362,512,673,823);
	scarf = new Clothing3(75, 100, 150, 150, 343, 415, 343,493, 415,565);
	shirt3 = new Clothing3(75, 325, 150, 150, 349, 488,347,497,488,638);
	jorts2 = new Clothing3(75, 590, 150, 150, 362, 675,362,512,673,823);

}

function draw() {

	background(197, 210, 224);
	if (selectedObject != undefined) {
		selectedObject.x = mouseX + selectedObjectOffsetX;
		selectedObject.y = mouseY + selectedObjectOffsetY;
	}

	alien.display();
	crown.displayCrown();
	glasses2.displayglasses2();
	shorts2.displayshorts2();
	shirt3.displayshirt3();
	scarf.displayScarf();
	jorts2.displayjorts2();

	diva()
  quit();
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

function mousePressed() {
	if (mouseX > crown.x && mouseX < crown.x + 100 && mouseY > crown.y && mouseY < crown.y + 100) {
		selectedObject = crown;
		selectedObjectOffsetX = crown.x - mouseX;
		selectedObjectOffsetY = crown.y - mouseY;
	} else if (mouseX > glasses2.x && mouseX < glasses2.x + glasses2.w && mouseY > glasses2.y && mouseY < glasses2.y + glasses2.h) {
		selectedObject = glasses2;
		selectedObjectOffsetX = glasses2.x - mouseX;
		selectedObjectOffsetY = glasses2.y - mouseY;
	} else if (mouseX > shorts2.x && mouseX < shorts2.x + shorts2.w && mouseY > shorts2.y && mouseY < shorts2.y + shorts2.h) {
		selectedObject = shorts2;
		selectedObjectOffsetX = shorts2.x - mouseX;
		selectedObjectOffsetY = shorts2.y - mouseY;
	} else if (mouseX > scarf.x && mouseX < scarf.x + scarf.w && mouseY > scarf.y && mouseY < scarf.y + scarf.h) {
		selectedObject = scarf;
		selectedObjectOffsetX = scarf.x - mouseX;
		selectedObjectOffsetY = scarf.y - mouseY;
	} else if (mouseX > shirt3.x && mouseX < shirt3.x + shirt3.w && mouseY > shirt3.y && mouseY < shirt3.y + shirt3.h) {
		selectedObject = shirt3;
		selectedObjectOffsetX = shirt3.x - mouseX;
		selectedObjectOffsetY = shirt3.y - mouseY;
	} else if (mouseX > jorts2.x && mouseX < jorts2.x + jorts2.w && mouseY > jorts2.y && mouseY < jorts2.y + jorts2.h) {
		selectedObject = jorts2;
		selectedObjectOffsetX = jorts2.x - mouseX;
		selectedObjectOffsetY = jorts2.y - mouseY;
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



class Clothing3 {
	constructor(x, y, width, height, attachX, attachY,boundingBoxX1, boundingBoxX2, boundingBoxY1, boundingBoxY2) {
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
	displayglasses2() {
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
	displayshorts2() {
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
	displayshirt3() {
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
		//shirt3
		fill(200);
		stroke(160);
		rect(this.x + 103, this.y + 137, this.h - 176, this.w - 340);

		//fill(210);
		rect(this.x + 43.5, this.y - 25, this.h - 59.5, this.w + 20, this.w + 175);
		fill(210);
		rect(this.x + 43.5, this.y + 210, this.h - 59.5, this.w - 290);

		//shirt3
		stroke(163, 135, 59);
		rect(this.x + 43.5, this.y - 25, this.h - 59.5, this.w + 20, this.w + 175);
		fill(210);
		rect(this.x + 43.5, this.y + 208, this.h - 59.5, this.w - 287);

		//shirt3
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
	displayjorts2() {
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

class Slides {

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


  fill(236, 236, 236);
  
  strokeWeight(3);
	stroke(121, 146, 173);
	rect(280, 60, 325, 100, 15);

	fill(75, 97, 122);
	textSize(60);
	text('Diva', 375, 130);
}
