
export function swapElement(array: any[], i: number, j: number) {
    let aux = array[i];
    array[i] = array[j];
    array[j] = aux;
}

export function bubbleSort(array: any[]) {
    let length = array.length;

    for(let i = 0; i < length; i ++) {
        for(let j = 0; j < length - 1; j ++) {
            if (array[j] > array[j+1]) {
                swapElement(array, j, j+1);
            }
        }
    }
}

export function modifiedBubbleSort(array: any[]) {
    let length = array.length;
    for(let i = 0; i < length; i ++) {
        for(let j = 0; j < length - 1 - i; j ++) {
            if (array[j] > array[j+1]) {
                swapElement(array, j, j+1);
            }            
        }
    }
}

export function selectionSort(array: any[]) {
    let length = array.length;
    let indexMin: number = -1;

    for(let i = 0; i < length - 1; i ++) {
        indexMin = i;
        for(let j = i; j < length; j ++) {
            if (array[indexMin] > array[j]) {
                indexMin = j;
            }
        }

        if (i !== indexMin) {
            swapElement(array, i, indexMin);
        }
    }
}

export function insertionSort(array: any[]) {
    let length = array.length;
    let j: number, tmp: any;

    for(let i = 1; i < length; i++) {
        j = i;
        tmp = array[i];

        while(j > 0 && array[j-1] > tmp) {
            array[j] = array[j-1];
            j --;
        }

        array[j] = tmp;
    }
}

export function quickSort(array: any[], left: number, right: number) {

}
