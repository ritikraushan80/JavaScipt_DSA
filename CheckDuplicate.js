const arr = [1, 3, 5, 6, 8, 8, 9]

function findDuplicate(arr, target) {
    let left = 0;
    let right = arr.length;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {

            if (arr[mid] === arr[mid - 1] || arr[mid] === arr[mid + 1]) {
                return true;
            } else {
                return false;
            }

        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}
const result = findDuplicate(arr, 8);
console.log(result);