function debounceFn(fn, delay) {
  let timer;

  return function(...args) {
    console.log(args)
    const context = this;
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  }
}

function getData(sTerm) {
  // Call API
  console.log('Fetching... :',sTerm);
}

const onSearch = debounceFn(getData, 5000);
