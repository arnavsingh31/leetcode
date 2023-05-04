package main

import "log"

func main() {

	moveZeroAlt([]int{0, 1, 0, 3, 12})
}

/*
[0,1,0,3,12]
*/
// with extra array:
func moveZeros(arr []int) {
	arrayLen := len(arr)
	resArray := make([]int, arrayLen)

	j := arrayLen - 1
	k := 0

	for i := 0; i < arrayLen; i++ {
		if arr[i] == 0 {
			resArray[j] = 0
			j--
		} else {
			resArray[k] = arr[i]
			k++
		}
	}

	log.Printf("res array------> %v", resArray)

}

// without extra array (in-place operations):

func moveZeroesSameArray(arr []int) {
	pos := 0

	for i := 0; i < len(arr); i++ {
		if arr[i] != 0 {
			arr[pos] = arr[i]
			pos++
		}
	}

	for i := pos; i < len(arr); i++ {
		arr[i] = 0
	}

	log.Printf("Modified array is----> %v", arr)
}

// alternative approach with single loop
/*
	[0,1,0,3,12]
*/
func moveZeroAlt(arr []int) {
	mostLeftZero := -1

	for i := 0; i < len(arr); i++ {
		if arr[i] == 0 {
			if mostLeftZero == -1 {
				mostLeftZero = i
			}
			continue
		}

		if mostLeftZero == -1 {
			continue
		}

		arr[mostLeftZero], arr[i] = arr[i], arr[mostLeftZero]
		mostLeftZero++
	}

	log.Printf("Modified Array---------> %v", arr)
}
