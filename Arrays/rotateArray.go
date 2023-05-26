package main

import "log"

func main() {
	rotateArray([]int{1, 2, 3, 4, 5, 6, 7}, 4)
}

func rotateArray(arr []int, k int) {
	// updating value of k in case k > length of array
	k = k % len(arr)
	//first we reverse entire array
	reverse(arr, 0, len(arr)-1)
	log.Printf("reversed array---> %v", arr)
	// second we reverse array upto k-1 terms
	reverse(arr, 0, k-1)
	log.Printf("array after reversing k-1 terms---> %v", arr)
	// lastly we reverse array from k to len(arr)-1 terms
	reverse(arr, k, len(arr)-1)
	log.Printf("final array---> %v", arr)
}

func reverse(arr []int, start, end int) {
	for start < end {
		arr[start], arr[end] = arr[end], arr[start]
		start++
		end--
	}
}
