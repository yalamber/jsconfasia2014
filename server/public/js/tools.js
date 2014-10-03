var G = {
  angle: function  ( x1, y1, x2, y2 ) {
    var x = x1 - x2;
    var y = y1 - y2;
    return Math.atan2(y,x);
  },
  distance: function ( x1, y1, x2, y2 ) {
    var x = Math.abs(x1-x2);
    var y = Math.abs(y1-y2);
    return Math.sqrt( (x*x) + (y*y) );
  },
};

function ra_de(r) {
  return r*(180/Math.PI);
};

function de_ra(d) {
  var pi = Math.PI;
  return (d)*(pi/180);
};

function random0to (max) {
  return Math.floor( Math.random() * max );
}

function random1to (max) {
  return 1 + Math.floor( Math.random() * max );
}
