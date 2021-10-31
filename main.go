package main

import (
	"fmt"
	"os"

	"example.com/sha/shaimpl"
)

func main() {
	sha := shaimpl.Sha256{}

	var str string

	if len(os.Args) < 2 {
		str = ""
	} else {
		str = os.Args[1]
	}

	// calc the hash
	hash := sha.Hash(str)

	// print the byte array and hexstring
	fmt.Println(shaimpl.ToHexString(hash))
}
