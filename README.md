# Unhandled Asynchronous Error in Node.js HTTP Server

This repository demonstrates a common error in Node.js where an asynchronous operation within an HTTP server throws an error, but the error isn't properly handled and sent back to the client.  The server logs the error to the console but returns a generic 500 error to the client, which isn't very informative.

## Bug

The `bug.js` file contains a Node.js HTTP server that simulates an asynchronous operation which can either succeed or fail randomly. When it fails, the error is logged to the console, but a generic 500 error is sent to the client instead of a detailed response.

## Solution

The `bugSolution.js` demonstrates the proper way to handle this type of error.  It uses a `try...catch` block around the `data()` function to catch any potential errors and send a more specific error response back to the client, including details about the error.