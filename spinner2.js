process.stdout.write('hello from spinner1.js... \rheyyy\n');

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);
let delay = 0;
let sentence = ["|", "/", "-", "|", "n\\", "|"];
for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(`\r${char}   `);
  }, delay);
   delay += 200;
}