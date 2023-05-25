package main

import "log"

func main() {
	res := majorityElement([]int{2, 2, 2, 1, 1, 1, 2})
	log.Printf("majority element------>%d", res)
}

// element occuring more than floor of (n/2) is callled majority element where n is the size of an array.
func majorityElement(arr []int) int {
	hashMap := make(map[int]int)
	majorElement := 0
	majorVal := 0

	for i := 0; i < len(arr); i++ {
		_, ok := hashMap[arr[i]]
		if ok {
			hashMap[arr[i]] += 1
		} else {
			hashMap[arr[i]] = 1
		}
	}

	for key, currValue := range hashMap {
		if majorElement == 0 {
			majorElement = key
			majorVal = currValue
		} else {
			if majorVal < currValue {
				majorElement = key
				majorVal = currValue
			}
		}
	}

	return majorElement
}
