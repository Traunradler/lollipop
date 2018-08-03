function setup() {
	createCanvas(1000,1000);
}

function draw() {
	background(50);

	/*fill(0, 200, 255);
	rect(290, 200, 20, 150);
	fill (255,0,200);
	ellipse(300,200, 100, 100);
*/
lollipop(100,200,40);
lollipop (200,150, 30);
lollipop (400, 100, 50);
lollipop (600, 200, 200);
lollipop ( 800,400,60);
lollipop(900, 300, 80);
lollipop(340, 600, 220);
}
function lollipop(x, y, diameter)
{
	fill(0, 200, 255);
	rect(x-10, y, 20, 150);
	fill (255,0,200);
	ellipse(x,y, diameter, diameter);

}
