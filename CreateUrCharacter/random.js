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
		this.plane(this.x, this.y, this.playerSize, this.playerSize);
		if (this.x > width + (this.playerSize + 480)) {
			this.x = -300;
			this.y = random(50, 550);
			console.log(this.y);
		}

		this.border();
	
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