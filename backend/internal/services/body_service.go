package services

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	"david-robbins.com/neo-sim-backend/internal/models"
)

func FetchData() *models.Body {
	resp, err := http.Get("")
	if err != nil {
		fmt.Println("Error during request: ", err)

		return nil
	}
	defer resp.Body.Close()

	bodyBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("error reading response body: ", err)

		return nil
	}

	bodyStr := string(bodyBytes)

	var body models.Body
	err = json.Unmarshal(bodyBytes, &body)

	if err != nil {
		fmt.Println("Error unmarshalling ", err, bodyStr)
	}

	return &body
}

// func toDate(str string) *time.Time {
// 	layout := "2006-01-02"

// 	t, err := time.Parse(layout, str)
// 	if err != nil {
// 		fmt.Println("Error parsing date:", err)
// 		return nil
// 	}

// 	return &t
// }
