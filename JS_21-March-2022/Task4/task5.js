/*
    5
    what is the error:
    function double(cat) {
      return 2 * x;
    }
    function double(7) {
      return 2 * 7;
    }
    function double('7') {
      return 2 * 'x';
    }
    */
    function double1(cat) {
      var  mult= 2*cat;
        return mult ;
    }
    console.log(double1(7))
