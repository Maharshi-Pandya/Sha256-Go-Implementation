module server

go 1.17

replace sha => ../algo

require (
	github.com/gorilla/mux v1.8.0
	sha v0.0.0-00010101000000-000000000000
)
