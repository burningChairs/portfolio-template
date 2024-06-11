let axolotl;
let bubbles;
let glasses2;
let jirt;
let headPiece;
let shirt2;
let shorts;

let selectedObject;
let selectedObjectOffsetX;
let selectedObjectOffsetY;

function setup() {
	createCanvas(900, 800);
	  axolotl= new Axolotl(340, 350, 200, 450);
  
	bubbles = new Clothing2(650, 100, 150, 150, 365, 170, 365, 515, 180, 345);
	glasses2 = new Clothing2(650, 325, 150, 150, 362, 255,370, 459,305,455);
	jirt = new Clothing2(650, 550, 150, 150, 362, 673,352,527,683,798);
	headPiece = new Clothing2(75, 100, 150, 150,350, 263,366, 516,263,333);
	shirt2 = new Clothing2(75, 325, 150, 150,334,488,347,497,488,638);
	shorts = new Clothing2(75, 550, 150, 150,362, 653,352,527,683,798);

}

function draw() {
	background(197, 210, 224);

	
	if (selectedObject != undefined) {
		selectedObject.x = mouseX + selectedObjectOffsetX;
		selectedObject.y = mouseY + selectedObjectOffsetY;
	}


	axolotl.display();
	bubbles.displayBubbles();
	glasses2.displayGlasses();
	jirt.displayJirt();
	headPiece.displayHeadPiece();
	shirt2.displayShirt();
	shorts.displayShorts();
	ally()
  quit();
  restart();
}

function ally(){
	fill(236, 236, 236);
  strokeWeight(3);
  stroke(121, 146, 173);
  rect(280, 60, 325, 100, 15);
  
	fill(75, 97, 122);
  textSize(60);
  text('Paulywog', 310, 130);

}

function mousePressed() {
	if (mouseX > bubbles.x && mouseX < bubbles.x + 100 && mouseY > bubbles.y && mouseY < bubbles.y + 100) {
		selectedObject = bubbles;
		selectedObjectOffsetX = bubbles.x - mouseX;
		selectedObjectOffsetY = bubbles.y - mouseY;
	} else if (mouseX > glasses2.x && mouseX < glasses2.x + glasses2.w && mouseY > glasses2.y && mouseY < glasses2.y + glasses2.h) {
		selectedObject = glasses2;
		selectedObjectOffsetX = glasses2.x - mouseX;
		selectedObjectOffsetY = glasses2.y - mouseY;
	} else if (mouseX > jirt.x && mouseX < jirt.x + shorts.w && mouseY > jirt.y && mouseY < jirt.y + jirt.h) {
		selectedObject = jirt;
		selectedObjectOffsetX = jirt.x - mouseX;
		selectedObjectOffsetY = jirt.y - mouseY;
	} else if (mouseX > headPiece.x && mouseX < headPiece.x + headPiece.w && mouseY > headPiece.y && mouseY < headPiece.y + headPiece.h) {
		selectedObject = headPiece;
		selectedObjectOffsetX = headPiece.x - mouseX;
		selectedObjectOffsetY = headPiece.y - mouseY;
	} else if (mouseX > shirt2.x && mouseX < shirt2.x + shirt2.w && mouseY > shirt2.y && mouseY < shirt2.y + shirt2.h) {
		selectedObject = shirt2;
		selectedObjectOffsetX = shirt2.x - mouseX;
		selectedObjectOffsetY = shirt2.y - mouseY;
	} else if (mouseX > shorts.x && mouseX < shorts.x + shorts.w && mouseY > shorts.y && mouseY < shorts.y + shorts.h) {
		selectedObject = shorts;
		selectedObjectOffsetX = shorts.x - mouseX;
		selectedObjectOffsetY = shorts.y - mouseY;
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


class Clothing2 {
	constructor(x, y, width, height, attachX, attachY,boundingBoxX1, boundingBoxX2,boundingBoxY1,boundingBoxY2) {
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
	displayGlasses() {
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
	displayShirt() {
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
	displayShorts() {
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