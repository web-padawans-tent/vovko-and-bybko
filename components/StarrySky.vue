<template>
  <canvas ref="starCanvas"></canvas>
</template>

<script>
export default {
  name: "StarrySky",
  data() {
    return {
      numStars: 35,
      stars: [],
      starSymbol: "✦",
    };
  },
  mounted() {
    this.initCanvas();
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    initCanvas() {
      this.updateStarCount();
      this.canvas = this.$refs.starCanvas;
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.createStars();
      this.animate();
    },
    createStars() {
      this.stars = [];
      for (let i = 0; i < this.numStars; i++) {
        this.stars.push(this.createStar());
      }
    },
    createStar() {
      return {
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 8 + 6,
        opacity: Math.random() * 0.5 + 0.5,
        speed: Math.random() * 0.3 + 0.1,
        twinkle: Math.random() * 0.05 + 0.02,
      };
    },
    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.stars.forEach(star => {
        this.updateStar(star);
        this.drawStar(star);
      });
      requestAnimationFrame(this.animate);

      console.log(this.numStars)
    },
    drawStar(star) {
      this.ctx.font = `${star.size}px Arial`;
      this.ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      this.ctx.fillText(this.starSymbol, star.x, star.y);
    },
    updateStar(star) {
      star.y += star.speed;
      if (star.y > this.canvas.height) star.y = 0;
      star.opacity += (Math.random() - 0.5) * star.twinkle;
      star.opacity = Math.max(0.3, Math.min(1, star.opacity));
    },
    updateStarCount() {
      if (window.innerWidth > 992) {
        this.numStars = 35;
      } else if (window.innerWidth < 992 && window.innerWidth > 768) {
        this.numStars = 20;
      } else if (window.innerWidth < 768) {
        this.numStars = 10;
      }
    },
    handleResize() {
      this.updateStarCount();
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.createStars();
    },
  },
};
</script>

<style>
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    z-index: -1;
  }
</style>
