package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/", HomeHandler).Methods("GET")
	r.HandleFunc("/calc", CalcSha).Methods("POST")

	log.Fatal(http.ListenAndServe(":5000", r))
}
