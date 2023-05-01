package main

import "log"

func main() {
	var res, arrayLenWithUniqueElements = repeatedDeletionAlgorithm([]int{0, 0, 1, 1, 1, 2, 2, 3, 3, 4})
	log.Printf("Modified Array:------- %v, with array length: %d", res, arrayLenWithUniqueElements)
}

/*
	REPEATED DELETION ALGORITHM

	input:- [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
	output:- [0,1,2,3,4,2,2,3,3,4]
	IMPLEMENT USING IN-PLACE ARRAY OPERATION
*/
func repeatedDeletionAlgorithm(arr []int) ([]int, int) {
	writePointer := 1

	for readPointer := 1; readPointer < len(arr); readPointer++ {
		if arr[readPointer] != arr[readPointer-1] {
			arr[writePointer] = arr[readPointer]
			writePointer++
		}
	}

	return arr, writePointer
}
