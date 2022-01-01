# Sha256-Go-Implementation

A full stack application developed using [ReactJs](https://reactjs.org/) in frontend and Go in backend, which computes the `sha256` hash of the text which user provides as an input.


## How it looks

![sha256](./docs/App.png)


## How to develop

Clone this repo and navigate to the directory

```shell
$ git clone https://github.com/Maharshi-Pandya/Sha256-Go-Implementation
$ cd Sha256-Go-Implementation
```

After that, navigate to the `server` directory, install dependencies, build the Go files and run the binary created.

```shell
$ cd server
$ go get -u ./...
$ go build
$ ./server
```

Then in a new terminal window, navigate to the `front-end` directory, install the dependencies and run the React App.

```shell
$ cd front-end
$ npm install
$ npm start
```

With this, the app will spin up at [http://localhost:3000/](http://localhost:3000/) and you are ready to develop!


<hr>


## How Sha256 works

The algorithm starts with initializing 8 Hash "values", `H0..H7` which will be our final hash after the algorithm reaches the end.

Those `H0..H7`, initially are the first 32 bits of the fractional part of the square roots of the first 8 prime numbers `2..19`. Too much eh?

Next, we define an array `K0..K64` which contains `ints` which are the first 32 bits of the cube roots of the first 64 prime numbers `2..311`. Hmm, you still reading? Nice.

- Pre-processing
    - We begin with the original message (which is a `string`) and convert it to a `byte` slice.
    - After that, we append a `1` to the message. Actually we append `0x80` = `128` to the message to append the `1`.
    - Sha256 requires us to divide the message in 512-bit chunks. We do this by making a `Nx16` Message Array consisting of N 512-bit blocks. We store 16 32-bit (total 512 bits) `ints` inside each block `N`.
    - Then, at last we append a 64-bit integer, which is the length of the original message in bits.

- Hashing Algorithm
    - Here, for each chunk of 512-bits, we create a Message Schedule array `W0..W64` for scrambling.
    - We copy the first 16 words of Message Array into the Message Schedule Array `W0..W6`.
    - Then we extend the 16 words into remaining 48 words by bit manipulation operations.
    - We then initialise 8 working variables `a..h` that will modify the hash values further.
    - The next 64 iterations, changes and swaps and rotates the working variables `a..h`
    - Finally we add those into the values `H0..H7` thus getting the final sha256 hash.
 

Optionally, you can run the Sha256 hashing algorithm in the terminal itself. Navigate to the `algo` directory and run:

```shell
$ go run main.go "<any-message-goes-here>"
```

to get the sha256 hash of the message entered, as the below image shows :D

![ShaTerminal](./docs/ShaTerminal.png)