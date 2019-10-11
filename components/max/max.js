
const max = new Vue({
  el: '#max',
  data: {
    guest: 'Dheeraj Edupuganti',
    firstNumber: 1,
    secondNumber: 2
  },
  computed: {
    result: function () {
      const one = parseInt(this.firstNumber)
      const two = parseInt(this.secondNumber)
      return `${this.guest}, Max of two numbers ${Math.max(one, two)}.`
    }
  }
})