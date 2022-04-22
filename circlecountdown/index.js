new Vue({
  el: '#app',
  data: {
    strokeWidth: 10,
    w: 120,
    h: 120,
    cy: 60,
    cx: 60,
    strokeDashoffset: 0,
    number: 100
  },
  computed: {
    strokeDasharray() {
      return Math.PI * 2 * this.radius
    },
    radius() {
      return (this.w - this.strokeWidth) / 2
    },
  },
  methods: {
    animate() {
      if (this.strokeDashoffset <=
        this.strokeDasharray) {
        let offset = 0.005 * this.strokeDasharray
        if (offset + this.strokeDashoffset >
          this.strokeDasharray) {
          this.strokeDashoffset = this.strokeDasharray
        } else {
          this.strokeDashoffset += offset
        }
        this.number = (100 -
          100 * this.strokeDashoffset / this.strokeDasharray).toFixed(0)
        requestAnimationFrame(this.animate);
      }
    }
  }
})