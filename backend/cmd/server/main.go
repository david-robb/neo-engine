package main

import (
	"david-robbins.com/neo-sim-backend/internal/handlers"
	"david-robbins.com/neo-sim-backend/internal/middleware"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	api := router.Group("/api/v1")
	{
		api.GET("/bodies", handlers.GetBodies)
	}

	router.Use(middleware.CORS())

	router.Run(":8080")
}
