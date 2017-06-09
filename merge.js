function sort(inputArray,start,end) {
    debugger;
if(start < end) {
    var mid = Math.floor((start+end)/2);
    sort(inputArray,start,mid);
    sort(inputArray,mid+1,end);
    merge(inputArray,start,end,mid);
}
}

function merge(inputArray,start,end,mid) {
 var n1 = mid-start+1;
 var n2 = end-mid;
 var arr1 = new Array(n1);
  var arr2 = new Array(n2);

for(var i = 0; i < n1;i++) {
    arr1[i] = inputArray[start + i];
}

for(var i = 0; i < n2;i++) {
    arr2[i] = inputArray[mid + 1 + i];
}

var i = 0,j= 0,k = start;

while(i< n1 && j < n2) {
    if(arr1[i] < arr2[j]) {
        inputArray[k] = arr1[i];
        i++;
    } else if(arr2[j] < arr1[i]) {
        inputArray[k] = arr2[j];
        j++;
    }
    k++;
}

while(i < n1) {
    inputArray[k] = arr1[i];
    i++;
    k++;
}

while(j < n2) {
    inputArray[k] = arr2[j];
    j++;
    k++;
}

}

//var a =[41, 52, 26, 38, 57, 9, 49]