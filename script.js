(function countdown(number, callback) {
    document.getElementById('countdown').textContent = number;
  
    setTimeout(function() {
      if (number > 1) {
        countdown(number - 1, callback);
      } else {
        setTimeout(function() {
          callback(function() {
            document.getElementById('countdown').textContent = "Happy independence day!";
          });
        }, 1000);
      }
    }, 1000);
  })(10, function(callback) {
    callback();
  });