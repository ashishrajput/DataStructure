function heapify(arr,length,index) {
    var left = 2*index + 1;
    var right = 2*index + 2;
    var largest = index;
    if(left < length && arr[left] > arr[largest]) {
        largest = left;
    }

    if(right < length && arr[right] > arr[largest]) {
        largest = right;
    }

    if(largest != index) {
        arr[index] ^= arr[largest];
        arr[largest] ^= arr[index];
        arr[index] ^= arr[largest];
        heapify(arr,length,largest);
    }
}

function heapSort(arr,length) {
debugger;
    for(var i = Math.floor(length/2) - 1 ; i>=0;i--) {
        heapify(arr,length,i);
    }

    for(var i = length - 1; i >0;i--){
        arr[0] ^= arr[i];
        arr[i] ^= arr[0];
        arr[0] ^= arr[i];
        heapify(arr,i,0);
    }
}

var a = [12, 11, 13, 5, 6, 7];
heapSort(a,a.length);
a