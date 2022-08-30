const args = process.argv.slice(2);

const timer = (args) => { 
  let times = [];
  args.forEach(element => {
    if(element >= 0 && Number(element) !== NaN)
    times.push(element * 1000);
  })

  times.forEach(time => {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time);
  });
};

timer(args);