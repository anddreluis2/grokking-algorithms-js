const testArray = [1, 2, 3, 4, 5, 6, 7, 8]

// Later I'll do the recursive way
const binarySearch = (list, item) => { 
    let low = 0
    let high = list.length - 1
    let numberOfTentatives = 0

    console.log(list)

    while ( high >= low) {
        let mid = Math.floor((low + high) / 2)
        numberOfTentatives++

        console.log(`Low position ${low} -> Low number ${list[low]}`)
        console.log(`High position ${high} -> High number ${list[high]}`)
        console.log(`Mid position ${mid} -> Mid number ${list[mid]}`)
        console.log("------------------------------")

        if (list[mid] == item){
            console.log(`done, you tried ${numberOfTentatives} times and your number are ${list[mid]}`)
            return mid
        }

        if (list[mid] > item) {
            high = mid - 1
        }

        if (list[mid] < item) {
            low = mid + 1
        }
        
    }

}

binarySearch(testArray, 3)