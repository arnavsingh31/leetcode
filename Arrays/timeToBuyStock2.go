package main

import "log"

func main() {
	// res := timeToBuyStock2([]int{1, 2, 3, 4, 5})
	res := timeToBuyStock2([]int{7, 1, 5, 3, 6, 4})
	log.Printf("Profit earned--->%d", res)
}

func timeToBuyStock2(prices []int) int {
	minPrice := prices[0]
	profit := 0

	for index, currPrice := range prices {
		if currPrice < minPrice {
			minPrice = currPrice
		} else if currPrice > minPrice {
			profit += (currPrice - minPrice)
			minPrice = prices[index]
		} else if currPrice == minPrice {
			continue
		}
	}

	return profit
}
