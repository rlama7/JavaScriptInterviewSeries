class Arithmetic {
  constructor() {
    this.result = 0;
  }
  add(a, b) {
    this.result += a + b;
    return this;
  }

  sub(c) {
    this.result -= c;
    return this;
  }

  mul(d) {
    this.result *= d;
    return this;
  }

  end() {
    return this.result;
  }
}

calc = new Arithmetic();
console.log(calc.add(3, 2).sub(1).mul(3).end()); // 12
