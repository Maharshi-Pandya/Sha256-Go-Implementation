package main

import (
	"encoding/json"
	"net/http"
	"sha/shaimpl"
)

// structs to be used for json responses
type Msg struct {
	Message string `json:"message"`
}

type Shash struct {
	ByteStr string   `json:"bytestr"`
	Hash    [32]byte `json:"hash"`
}

// home
func HomeHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	// just a sample message
	m := Msg{
		Message: "You wanna calculate sha256 hash? Here you are!",
	}

	// return json response
	w.WriteHeader(http.StatusOK)
	err := json.NewEncoder(w).Encode(m)
	HandleError(w, err)
}

// get the input from the request body and calculate its hash
func CalcSha(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	// decode the json from body
	var m Msg
	err := json.NewDecoder(r.Body).Decode(&m)
	HandleError(w, err)

	// init a sha256 struct to calculate
	sha := shaimpl.Sha256{}

	// returns [32]byte
	hash := sha.Hash(m.Message)
	bytestring := shaimpl.ToHexString(hash)

	// response to send
	resp := Shash{
		ByteStr: bytestring,
		Hash:    hash,
	}

	// return the response as json
	w.WriteHeader(http.StatusOK)
	err = json.NewEncoder(w).Encode(resp)
	HandleError(w, err)
}

// simplistic error handling
func HandleError(w http.ResponseWriter, err error) {
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
}
