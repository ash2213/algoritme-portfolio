

const values = [21,22,23,25,27,28,29,31,32,34,35];

export function binarySearch( searchFor, values ) {
	let min = 0;
    let max = values.length - 1;
    let found = false;
    let iterations = 0;

    let middle

    while(!found && min <= max){

        middle= Math.floor((min+max)/2);

        iterations++;

        console.log("Min=",min,"Max=",max,"Middle=",middle,)


        if(values[middle]==searchFor){
            console.log("Tallet er fundet",values[middle]);
            found= true;

        }

        if(values[middle] < searchFor){
            console.log("Tallet er for lavt",values[middle]);
            min= middle + 1 ;
        }

        if(values[middle] > searchFor){
            console.log("Tallet er for højt",values[middle]);
            max = middle - 1;

        }

        console.log("Count=",iterations)


    }

    return {
        found:found,
        index:found ? middle : -1,
        iterations:iterations
    }

    
}

const result = binarySearch(23, values);
console.log("Resultat", result)


