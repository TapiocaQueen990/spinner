const frames = ['|   ', '/   ', '-   ', '\\   '];

let delay = 100

for (const char of frames) {
  setTimeout (() => {
    {process.stdout.write(`\r${char}`)}
  }, delay)
  delay += 200
}
