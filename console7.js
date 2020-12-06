for (var i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  }
  setTimeout(log, 100);
}

// heap memory is updated with latest value which is 3
// when log function is executed it asks heap to provide the value , which is 3 now.
  
// --solution
1.for (let i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  }
  setTimeout(log, 100);
}

2.for (var i = 1; i <= 3; i++) {
  (function(index) {
      setTimeout(function() {console.log(index); }, i * 1000);
  })(i);
}

3.  function doSetTimeout(i) {
  setTimeout(function() { console.log(i); }, 100);
}

for (var i = 1; i <= 3; ++i)
  doSetTimeout(i);