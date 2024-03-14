// Import the Express module
const express = require('express')

// Create an instance of Express
const app = express()

// Define a function to add two numbers
const addTwoNumber = (n1, n2) => {
  // Return the sum of n1 and n2
  return n1 + n2
}

// Define a route to add two numbers
app.get("/addTwoNumber", (req, res) => {
  // Extract n1 and n2 from the query string
  const n1 = parseInt(req.query.n1)
  const n2 = parseInt(req.query.n2)

  // Add n1 and n2
  const result = addTwoNumber(n1, n2)

  // Send the result as a JSON response
  res.json({ statuscocde: 200, data: result })
})

// Define the root route to display a simple HTML page
app.get("/", (req, res) => {
  const n1 = "<html><body><H1>HELLO THERE </H1></body></html>"
  res.set('Content-Type', 'text/html')
  res.send(Buffer.from(n1))
})


// Define the port number
const port = 3040

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`hello i'm listening to port ${port}`)
})