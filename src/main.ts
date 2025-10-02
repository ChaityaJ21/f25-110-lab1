import Konva from "konva";

// first we need to create a stage
const stage = new Konva.Stage({
  container: "container",
  width: window.innerWidth,
  height: window.innerHeight,
});

// then create layer
const layer = new Konva.Layer();
stage.add(layer);

// create our shape
const lemon = new Konva.Shape({
  sceneFunc: function (context, shape) {
    context.beginPath();
    context.moveTo(10, 100);
    context.bezierCurveTo(60,0,160,0,200,100);
    context.bezierCurveTo(165,200,60,200,10,100);
    context.closePath();
    context.fillStrokeShape(shape);
  },
  x: stage.width() / 2 - 100,
  y: stage.height() / 2 - 100,
  fill: "yellow",
  stroke: "black",
  strokeWidth: 4,
  draggable: true,
});

// add the shape to the layer
layer.add(lemon);

// add hover
lemon.on("mouseover", function () {
  document.body.style.cursor = "pointer";
  lemon.fill("lightyellow");
  layer.draw();
});
lemon.on("mousedown", function () {
  lemon.scale({ x: 1.5, y: 1.5 });
  layer.draw();
});
lemon.on("mouseup", function () {
  lemon.scale({ x: 1, y: 1 });
  layer.draw();
});
lemon.on("mouseout", function () {
  document.body.style.cursor = "default";
  lemon.fill("yellow");
  layer.draw();
});

// add the layer to the stage
stage.add(layer);
