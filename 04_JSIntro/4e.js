function findLWord(str) {
    var lWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return lWord[0];
  }
  function Length(str) {
    var lWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return lWord[0].length;
  }

  var str = "Very very loooooooong word";
  console.log(findLWord(str) + " Length: " + Length(str));