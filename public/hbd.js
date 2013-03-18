$(function() {
  var HBD = (function() {
    function PaintCanvas(ctx) {
      var that = this;

      that.draw = function() {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        that.drawBackground();
        that.drawText();
      };

      that.drawBackground = function() {
        ctx.beginPath();
        ctx.fillStyle = that.randomColor();

        ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fill();
      };

      that.drawText = function() {
        ctx.beginPath();
        ctx.fillStyle = "#FFF";
        ctx.font = "bold 500 Helvetica";
        ctx.textAlign = "center";
        ctx.fillText("HBD", ctx.canvas.width/2, ctx.canvas.height * 2/3);
      };

      that.randomColor = function() {
        rgb = [Math.floor(Math.random() * 255),
               Math.floor(Math.random() * 255),
               Math.floor(Math.random() * 255)];

        return "rgb(" + rgb.join(", ") + ")";
      };

      that.initialize = (function() {
        setInterval(that.draw, 255);
      })();
    }

    return {
      PaintCanvas: PaintCanvas
    };
  })();

  (function() {
    var canvas = $("canvas")[0];
    var ctx = canvas.getContext("2d");

    new HBD.PaintCanvas(ctx, canvas);
  })();
});