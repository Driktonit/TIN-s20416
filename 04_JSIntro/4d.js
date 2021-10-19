function Alph_order(str) { 
    var arr = str.split(''),
    x = arr.sort().join('').replace(/\s+/g, '');
    return x; 
 }


 console.log(Alph_order("webmaster"));
