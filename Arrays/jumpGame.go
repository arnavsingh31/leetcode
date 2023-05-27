package main

import (
	"log"
)

func main() {
	res := canJump([]int{2, 2, 1, 1, 4})
	// res := canJump([]int{3, 2, 1, 0, 4})
	log.Printf("can we reach end? --> %v", res)
}

func canJump(arr []int) bool {
	canReach := 0
	n := len(arr)

	for i := 0; i <= canReach; i++ {
		if i == n-1 {
			return true
		}
		canReach = max(canReach, i+arr[i])
		if canReach >= n-1 {
			return true
		}
	}
	return false
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
