package main

import "log"

func main() {
	res := timeToBuyStock([]int{7, 1, 5, 3, 6, 4})
	log.Printf("Profit earned--->%d", res)
}

func timeToBuyStock(price []int) int {
	minPrice := price[0]
	maxProfit := 0

	for _, currPrice := range price {
		if currPrice < minPrice {
			minPrice = currPrice
		} else if maxProfit < (currPrice - minPrice) {
			maxProfit = currPrice - minPrice
		}

	}

	return maxProfit
}
