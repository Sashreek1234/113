function preload() {
  }
  
  function setup() {
  Canvas=createCanvas(600,400);
  Canvas.position(110,250);
  video=createCapture(VIDEO);
video.hide();

  }
  
  function draw() {
  image(video,0,0,600,400);
fill("red");
stroke("aqua");
circle(50,50,80);
circle(550,50,80);
circle(550,350,80);
circle(50,350,80);
fill("green");
stroke("aqua");
rect(37,90,20,222);
rect(538,90,20,222);
rect(89,45,425,22);
rect(90,340,425,22);

 }
 function take_snapshot(){
    save("student_name.png");
 }
 function filter_tint(){
    tint_color=document.getElementById("ti").value;
 }