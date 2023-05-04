package main

import "log"

func main() {
	resArray, count := removeElement([]int{3, 2, 2, 1, 5, 6, 7, 3, 3, 3, 3}, 3)

	log.Printf("modified array---> %v, Unequal no. count-----> %d", resArray, count)
}

func removeElement(arr []int, val int) ([]int, int) {
	pos := 0
	equalCount := 0
	for i := 0; i < len(arr); i++ {
		if arr[i] == val {
			equalCount++
			continue
		}

		arr[pos], arr[i] = arr[i], arr[pos]
		pos++
	}

	return arr, len(arr) - equalCount
}
