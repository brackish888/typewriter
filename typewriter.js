const sentence = "hello there from lighthouse labs";
let delay = 0;

for (const char of sentence) {
  setTimeout(()=>{
    process.stdout.write(char);

  }, delay);
  delay += 50;
}
setTimeout(()=>{
  process.stdout.write('\n');
  // console.log('')
}, delay += 1000);

// for (const char of sentence) {
//   // let i = 0;
//   setTimeout(()=>{
//      process.stdout.write(char[i]);
//     //  console.log(char)
//       // char.slice(1);
//       // for (i = 0; i >= sentence.length; i++)
//       // if (!char.length) {
//         // clearTimeout(time)
//     }, 1000);
 
// };