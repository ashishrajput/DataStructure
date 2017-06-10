//better one
//[-2, -3, 4, -1, -2, 1, 5, -3];

function GetMaxSinlgeLoopFurthet(a) {
  var index = a[0];
  var max  = a[0];

  for(i = 1; i < a.length;i++) {

      index = a[i] > index + a[i] ? a[i] : index + a[i]; 
      max = index > max ? index : max;
  }
  return max;
}

function GetMaxSinlgeLoop(a) {
  var index = 0;
  var max  = 0;

  for(i = 0; i < a.length;i++) {
      index +=a[i]

      if(index < 0) {
          index =0;
      } else if(index > max) {
          max = index;
      }

  }
  return max;
//


}


//brute force
[-2, -3, 4, -1, -2, 1, 5, -3];
function GetMax(a) {
var max = Number.MIN_VALUE;
 for(var i = 0; i < a.length;i++) {
    var localSum = 0;
    var sum = 0;
    for(var j = i; j< a.length;j++) {
         localSum +=a[j];
         if(localSum > sum) {
             sum = localSum;
         }
    }
    if(sum > max) {
        max = sum;
    } 
 }
 return max;
}




//divide and conquere
function max(a,b,c) {
   var d = a>b ? a : b;
 return d > c ? d : c;

}

function merge(a,l,m,h) {

    var lSum = Number.MIN_VALUE;
    var rSum = Number.MIN_VALUE;
    var sum = 0;
    for(var i = m ; i >= l;i--) {
        sum = sum +a[i];
        if(sum > lSum) {
            lSum = sum;
        }
    }

sum = 0;
    for(var i = m+1 ; i <h;i++) {
        sum = sum +a[i];
        if(sum > rSum) {
            rSum = sum;
        }
    }

    return lSum + rSum;
}

function add(a,l,h) {
 debugger;
 if(l == h)
    return a[l];

var m = Math.floor((l+h)/2);

return max(add(a,l,m),add(a,m+1,h),merge(a,l,m,h));
}

var arr = [2, 3, 4, 5, 7]