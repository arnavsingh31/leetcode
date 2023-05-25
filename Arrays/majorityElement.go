package main

import "log"

func main() {
	res := majorityElement([]int{2, 2, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3})
	log.Printf("majority element------>%d", res)
}

// element occuring more than floor of (n/2) is callled majority element where n is the size of an array.
func majorityElement(arr []int) int {
	hashMap := make(map[int]int)
	majorElement := 0
	majorVal := 0

	for _, val := range arr {
		hashMap[val] += 1
	}

	for key, currValue := range hashMap {
		if majorVal < currValue {
			majorElement = key
			majorVal = currValue
		}

	}

	return majorElement
}
