package handlers

import (
	"net/http"

	"david-robbins.com/neo-sim-backend/internal/services"
	"github.com/gin-gonic/gin"
)

func GetBodies(c *gin.Context) {
	body := services.FetchData()

	c.JSON(http.StatusOK, body)
}
