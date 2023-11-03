// Write a program to print prime nos between 1 to 100

for (let i = 2; i <= 100; i++) {
  let prime = true;

  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      prime = false;

      break;
    }
  }

  if (prime) {
    console.log(i);
  }
}
