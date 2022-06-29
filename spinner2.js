
const spinner = [
  '\r|   ',
  '\r/   ',
  '\r-   ',
  '\r\\   ',
  '\r|   ',
  '\r/   ',
  '\r-   ',
  '\r\\   ',
  '\r|   ',
  '\rDone   ']

let timer = 1000
for (const char of spinner) {
  timer += 400
  setTimeout(function () {
    process.stdout.write(char)
  }, timer)
}
setTimeout(function () {
  process.stdout.write('\n')
}, timer)
