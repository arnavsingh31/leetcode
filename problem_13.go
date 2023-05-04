package main

import "log"

func main() {
	res := sortArrayByParity2([]int{3, 1, 2, 5, 4})

	log.Printf("Modified Array-------> %v", res)
}

// [3, 1, 2, 5, 4]
func sortArrayByParity(arr []int) []int {
	odd_pos := -1

	for i := 0; i < len(arr); i++ {
		if arr[i]%2 != 0 {
			if odd_pos == -1 {
				odd_pos = i
			}
			continue
		}

		if odd_pos == -1 {
			continue
		}

		arr[odd_pos], arr[i] = arr[i], arr[odd_pos]
		odd_pos++
	}

	return arr
}

func sortArrayByParity2(nums []int) []int {
	evenIndex := 0
	for i := range nums {
		if nums[i]%2 == 0 {
			nums[i], nums[evenIndex] = nums[evenIndex], nums[i]
			evenIndex++
		}
	}

	return nums
}
