function loopsentences() {
  for (let i = 0; i < arguments.length; i += 2) {
    console.log(`${arguments[i]} is ${arguments[i + 1]}`);
  }
}

loopsentences("C", "fun", "Python", "cool", "JavaScript", "amazing");