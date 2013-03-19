$(function() {
  var HBD = (function() {
    function Confetti(ctx, x, y) {
      var that = this;

      that.x = x;
      that.y = y;
      that.DIM = 20;

      that.draw = function() {
        that.update({x: 0, y: 2});
        that.drawSquare();
      };

      that.drawSquare = function() {
        ctx.beginPath();
        ctx.fillStyle = "#000";
        ctx.rect(that.x, that.y, that.DIM, that.DIM);
        ctx.fill();
      };

      that.update = function(velocity) {
        that.x += velocity.x;
        that.y += velocity.y;
      };
    }

    function PaintCanvas(ctx) {
      var that = this;

      that.confetti = [];

      that.draw = function() {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        that.drawBackground();
        that.drawText();
        that.drawConfetti()
      };

      that.drawConfetti = function() {
        for (var i=0; i<that.confetti.length; i++) {
          that.confetti[i].draw();
        }
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
        ctx.font = "bold 450 Helvetica";
        ctx.textAlign = "center";
        ctx.fillText("HBD", ctx.canvas.width/2, ctx.canvas.height * 5/8);
      };

      that.randomColor = function() {
        rgb = [Math.floor(Math.random() * 255),
               Math.floor(Math.random() * 255),
               Math.floor(Math.random() * 255)];

        return "rgb(" + rgb.join(", ") + ")";
      };

      that.generateConfetti = function(clickedX, clickedY) {
        c = new Confetti(ctx, clickedX, clickedY);

        that.confetti.push(c);
      };

      that.clickPage = function() {
        $("canvas").click(function(e) {
          that.generateConfetti(e.pageX, e.pageY);
        });
      };

      that.initialize = (function() {
        that.clickPage();
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