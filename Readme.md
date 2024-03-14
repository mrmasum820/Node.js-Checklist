## What is Node.js?

Node.js is an open-source, cross-platform JavaScript runtime environment.

**open-source**: source code is publicly available for sharing and modification.

**cross-platform:** Available on Mac, Windows and Linux.

**runtime environment:** provides all necessary components in order to use and run a JavaScript program outside the browser.

### Why Node.js?

- Build end-to-end JavaScript applications.
- A number of major companies like linkedin, Netflix, PayPal have all migrated from other backend technologies to Node.js.
- Full stack development is one of the most sought out skill sets by companies.
- Huge community support.

### Checklist

1. Terms and concept to understand Node.js
2. Modules(user defined)
3. Built-in-modules
4. Node.js internals
5. npm - Node package manager
6. CLI tool
7. Misc

### ECMAScript

ECMA-262 is the language specification.

ECMAScript is the language that implements ECMA-262.

JavaScript is basically ECMAScript at its core but builds on top of that.

### Chromes v8 Engine

A JavaScript engine is a program that executes JavaScript code.

In 2008, Google created its own JavaScript engine called V8.

V8 is written in C++ and cab be used independently or can be embedded into other C++ programs.

That allows us to write our own C++ programs which can do everything that V8 can do and more.

Our C++ program can can run ECMAScript and additional features that we choose to incorporate.

For example, features that are available in C++ but not available with JavaScript.

### JavaScript Runtime

JavaScript runtime is an environment which provides all the necessary components in order to use and run a JavaScript program.

Every browser has a JavaScript Engine.

A JavaScript Engine is one component in the JavaScript Runtime.

### What can we build with Node.js?

- Traditional websites
- Backend services like APIs
- Real-time applications
- Streaming services
- CLI tools
- Multiplayer games

**Node.js allows us to build complex and powerful applications.**

**Summary:**

Node.js is an open-source, cross-platform JavaScript runtime environment.

It is not a language, It is not a framework.

Capable of executing JavaScript code outside a browser.

It can execute not only the standard ECMAScript language but also new features that are made available through C++ bindings using the V8 engine.

It consists of C++ files which form the core features and JavaScript files which expose common utilities and some of the C++ features for easier consumption.

### Executing JavaScript with Node

1. Node REPL
   1. Read
   2. Evaluate
   3. Print
   4. Loop
2. Executing code in JavaScript file in the command line.

### Browser vs Node.js

In the browser, most of the time what we are doing is interacting with the DOM, or other web platform APIs like cookies. We don’t have the document, window and all the other objects that are provided by the browser.

In the browser, we don’t have all the nice APIs that Node.js provides through its modules. For example the filesystem access functionality.

With Node.js, we control the environment.

With a browser, we are the mercy of what the users choose.

## Modules

A module is an encapsulated and reusable chunk of code that has its own context.

In Node.js, each file is treated as a separate module.

**Types of Modules:**

1. **Local Modules** - Modules that we create in our application.
2. **Built-in Modules** - Modules that Node.js ships with out of the box.
3. **Third party Modules** - Modules written by other developers that we can use in our application.

### 1. Local Modules(add.js)

In Node.js, each file is a module that is isolated by default.

To load a module into another file, we use the require function.

When index.js is executed, the code in the module is also executed.

If the file we are requiring is a JavaScript file, we can skip specifying the extension and node.js will infer it on our behalf.

### CommonJS Module

CommonJS is a standard that states how a module should be structured and shared.

Node.js adopted CommonJS when it started out and is what we will see in code bases.

Each file is treated as a module.

Variables, functions, classes etc. are not accessible to other files by default.

Explicitly tell the module system which parts of our code should be exported via module.exports or exports.

To import code into a file, use the require() function.

### ES Modules(main.mjs & math-esm.mjs)

ES Modules is the ECMAScript standard for modules.

It was introduces with ES2015.

Node.js 14 and above support ES Modules.

Instead of module.exports, we use the export keyword.

The export can be default or named.

We import the exported variables or functions using the import keyword.

It is a default export, we can assign any name while importing.

It is a names export, the import name must be the same.

### Module Scope(batman.js & superman.js)

Each loaded module in Node.js is wrapped with an IIFE that provides private scoping of code.

IIFE allows us to repeat variables or function names without any conflicts.

### Module wrapper(iife.js)

Every module in node.js gets wrapped in an IIFE before being loaded.

IIFE helps keep top-level variables scoped to the module rather than the global object.

The IIFE that wraps every module contain 5 parameters which are pretty important for the functioning of a module.

```jsx
(function (exports, require, module, __filename, __dirname) {
  const superHero = "Batman";
  console.log(superHero);
});
```

### Module Caching(super-hero.js)

### Importing JSON(data.json)

JavaScript Object Notation

A data interchange format commonly used with web servers.

### 2. Built-in Modules

Modules that Node.js ships with

Also referred to as core modules.

Import the module before we can use it.

- path
- events
- fs
- stream
- http

### Path Module(built-in-path.js)

The path module provides utilities for working with file and directory paths.

### Callbacks

In JavaScript, functions are first class objects.

A function can be passed as an argument to a function.

A function can also be returned as values from other functions.

**Types of callbacks:**

**Synchronous callbacks:** A callback which is executed immediately is called a synchronous callback.

**Asynchronous callbacks:** A callback that is often used to continue or resume code execution after an asynchronous operation has completed.

Callbacks are used to delay the execution of a function until a particular time or event has occured.

In Node.js have an asynchronous nature to prevent blocking of execution.

Ex: reading data from a file, fetching data from a database or handling a network request.

### Events Module(built-in-events & pizza-shop.js)

The events module allows us to work with events in Node.js.

An event is an action or an occurrence that has happened in our application that we can respond to.

Using the events module, we can dispatch our own custom events and respond to those custom events in a non-blocking manner.

### Character Encoding

Character encoding dictates how to represent a number in a character set as binary data before it can be stored in a computer.

It dictates how many bits to use to represent the number.

Example of a character encoding system is UTF-8.

UTF-8 states that characters should be encoded in bytes (8 bits).

Eight 1s or 0s should be used to represent the code of any character in binary.

4 = 100 = 00000100

V = 86 = 01010110

Similar guidelines also exist on how images and videos should be encoded and stored in binary format.

### Streams

A stream is a sequence of data that is being moved from one point to another over time.

Ex: a stream of data over the internet being moved from one computer to another.

Ex: a stream of data being transferred from one file to another within the same computer.

Process streams of data in chunks as they arrive instead of waiting for the entire data to be available before processing.

Process streams of data in chunks as they arrive instead of waiting for the entire data to be available before processing.

Ex: watching a video on YouTube.

The data arrives in chunks and you watch in chunks while the rest of the data arrives over time.

Ex: transferring file contents from fileA to fileB.

The contents arrive in chunks and we transfer in chunks while the remaining contents arrive over time.

Prevents unnecessary data downloads and memory usage.

**Types of Streams:**

**Readable streams** form which data can be read.

**Writable streams** to which we can write data.

**Duplex streams** that are both readable and writeable.

**Transform streams** that can modify or transform the data as it is written and read.

Ex: Reading from a file as readable stream.

Ex: Writing to a file as writable stream.

Ex: Sockets as duplex stream.

Ex: File compression where we can write compressed data and read de-compressed data to and from a file as a transform stream.

### Buffers(buffer.js)

Ex: Streaming a video online.

If our internet connection is fast enough, the speed of the stream will be fast enough to instantly fill up the buffer and send it out for processing.

That will repeat till the stream is finished.

If our connection is slow, after processing the first chunk of data that arrived, the video player will display a loading spinner which indicates it is waiting for more data to arrive.

Once the buffer is filled up and the data is processed, the video player shows the video.

While the video is playing, more data will continue to arrive and wait in the buffer.

Binary data, character sets and encoding < = > Buffers?

### Pipes

### Asynchronous JavaScript

JavaScript is a synchronous, blocking, single-threaded language.

**Synchronous:**

If we have two functions which log messages to the console, code executes top down, with only one line executing at any given time.

```jsx
function A() {
  console.log("A");
}

function B() {
  console.log("B");
}

A();
B(); //Logs A and then B
```

**Blocking:**

No matter how long a previous process takes, the subsequent processes won’t kick off until the former is completed.

Web app runs in a browser and it executes an intensive chunk of code without returning control to the browser, the browser can appear to be frozen.

**Single-threaded:**

A thread is simply a process that our JavaScript program can use to run a task.

Each thread can only do one task at a time.

JavaScript has just the one thread called the main thread for executing any code.

```jsx
let response = fetchDataFromDB("endpoint");
displayDataFromDB(response);
```

fetchDataFromDB(’endpoint’) could take 1 second or even more.

During that time, we can’t run any further code.

JavaScript, if it simply proceeds to the next line without waiting, we have an error because data is not what we expect it to be.

**Asynchronous:**

Just JavaScript is not enough.

We need new pieces which are outside of JavaScript to help us write asynchronous code.

For front-end, this is where web browsers come into play. For back-end, this is where Node.js comes into play.

Web browsers and Node.js define functions and APIs that allow us to register functions that should not be executed synchronously, and should instead be invoked asynchronously when some kind of event occurs.

For example, that could be the passage of time(setTimeout or setInterval), the user’s interaction with the mouse (addEventListener), data being read from a file system or the arrival of data over the network(callbacks, promises, async-await)

We can let our code do several things at the same time without stopping or blocking our main thread.

### fs Module(built-in-fs.js & build-in-fs-promises.js)

The file system (fs) module allows us to work with the file system on our computer.

### HTTP Module

Computers connected to the internet are called clients and servers.

Clients are internet-connected devices such as computers or mobile phones along with web-accessing software available on those devices such as a web browser.

Servers on the other hand are computers that store web pages, sites or apps.

### HTTP

Hypertext Transfer Protocol

A protocol that defines a format for clients and servers to speak to each other.

The client send an HTTP request and the server responds with and HTTP response.

### HTTP and Node

We can create a web server using Node.js.

Node.js has access to operating system functionality like networking.

Node has an event loop to run tasks asynchronously and is perfect for creating web servers that can simultaneously handle large volumes of requests.

The node server we create should still respect the HTTP format.

The HTTP module allows creation of web servers that can transfer data over HTTP.

### Web Framework

A framework simply abstracts the lower level code allowing us to focus on the requirements than the code itself.

For example, Angular, React, Vue are all framework / libraries that help us build user interfaces without having to rely on the lower level DOM API in JavaScript.

There are framework to build web or mobile applications without having to rely on the HTTP module in node.js.

Ex: Express, nest, koa

They build on top of the HTTP module making it easier for us to implement all the features.

## libuv

libuv is a cross platform open source library written in C language.

handles asynchronous non-blocking operations in Node.js.

**Thread pool**

**Event loop**

### Network I/O

https.request is a network input/output operation and not a CPU bound operation.

It does not use the thread pool.

Libuv instead delegates the work to the operation system kernel and whenever possible, it will poll the kernel and see if the request has completed.

### Libuv and Async Methods summary

In Node.js, async methods are handled by libuv.

They are handled in two different ways.

1. Native async mechanism
2. Thread pool

Whenever possible, Libuv will use native async mechanisms in the OS so as to avoid blocking the main thread.

Since this is part of the kernel, there is different mechanism for each OS. We have epoll for Linux, Kqueue for MacOS and IO completion Port on Windows.

Relying on native async mechanisms makes Node scalable as the only limitation is the operating system kernel.

Example of this type is a network I/O operation.

If there is no native async support and the task is file I/O or CPU intensive, libuv uses the thread pool to avoid blocking the main thread.

Although the thread poll preserves asynchronicity with respect to Node’s main thread, it can still become a bottleneck if all threads are busy.

### Event Loop

It is a C program and is part of libuv.

A design pattern that orchestrates or co-ordinates the execution of synchronous and asynchronous code in Node.js.

**5 queues in Event loop(timer, i/o queue, check queue, close queue, microtask queue)**

### Event Loop - execution order

User written synchronous JavaScript code takes priority over async code that the runtime would like to execute.

Only after the call stack is empty, the event loop comes into the picture.

1. Any callbacks in the micro task queues are executed. First, tasks in the nextTick queue and only then tasks in the promise queue.
2. All callbacks within the timer queue are executed.
3. Callbacks in the micro task queues if present are executed. Again, first tasks in the nextTick queue and then tasks in the promise queue.
4. All callbacks within the I/O queue are executed.
5. Callbacks in the micro task queues if present are executed. nextTick queue followed by Promise queue.
6. All callbacks in the check are executed.
7. Callbacks in the micro task queues if present are executed. Again, first tasks in the nextTick queue and then tasks in the promise queue.
8. All callbacks in the close queue are executed.
9. For one final time in the same loop, the micro task queues are executed. nextTick queue followed by promise queue.

If there are more callbacks to be processed, the loop is kept alive for one more run and the same steps are repeated.

On the other hand, if all callbacks are executed and there is no more code to process, the event loop exists.

**Callback functions are executed only when the call stack is empty. The normal flow of execution fill not be interrupted to run a callback function.**

**setTimeout and setInterval callbacks are given first priority.**

**Timer callbacks are executed before I/O callbacks even if both are ready at the exact same time.**

### 1. Microtask Queues

All user written synchronous JavaScript code takes priority over async code that the runtime would like to eventually execute.

**process.nextTick()**

Use of process.nextTick is discouraged as it can cause the rest of the event loop to starve.

If we endlessly call process.nextTick. the control will never make it past the microtask queue.

**Two main reason to use process.nextTick**

1. To allow users to handle errors, cleanup any then unneeded resources, or perhaps try the request again before the event loop continues.
2. To allow a callback to run after the call stack has unwound but before the event loop continues.

### 2. Timer Queue

Callbacks in the microtask queues are executed before callbacks in the timer queue.

Timer queue callbacks are executed in FIFO(First In First Out) order.

### 3. I/O Queue

Most of the async methods from the built-in modules queue the callback function in the I/O queue.

fs.readFile()

Callbacks in the microtask queues are executed before callbacks in the I/O queue.

When running setTimeout with delay 0ms and an I/O async method, the order of execution can never be guaranteed.

I/O queue callbacks are executed after Microtask queues callbacks and timer queue callbacks.

### 4. Check Queue

I/O events are polled and callback functions are added to the I/O queue only after the I/O is complete.

Check queue callbacks are executed after Microtask queues callbacks, Timer queue callbacks and I/O queue callbacks are executed.

When running setTimeout with delay 0ms and setImmediate method, the order of execution can never be guaranteed.

### 5. Close Queue

Close queue callbacks are executed after all other queues callbacks in a given iteration of the event loop.

### Event Loop Summary

The event loop is a C program that orchestrates or co-ordinates the execution of synchronous and asynchronous code in Node.js

It co-ordinates the execution of callbacks in six different queues.

They are nextTick, Promise, timer, I/O, Check and Close queues.

We use process.nextTick() method to queue into the nextTick queue.

We resolve or reject a Promise to queue into the Promise queue.

We use setTimeout or setInterval to queue into the timer queue.

Execute an async method to queue into the I/O queue.

Use setImmediate function to queue into the check queue and finally.

Attach close event listeners to queue into the close queue.

The order of execution follows the same order listed here.

nextTick and Promise queues are executed in between each queue and also in between each callback execution in the timer and check queues.
