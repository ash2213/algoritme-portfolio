export function merge(arrA, arrB) {
    const merged = [];
    let i = 0;
    let j = 0;
    while (i < arrA.length && j < arrB.length) {
        if (arrA[i] < arrB[j]) {
            merged.push(arrA[i]);
            i++;
        } else {
            merged.push(arrB[j]);
            j++;
        }
    }
    while (i < arrA.length) {
        merged.push(arrA[i]);
        i++;
    }
    while (j < arrB.length) {
        merged.push(arrB[j]);
        j++;
    }
    return merged;
}