# Notes during the Development
- Use HTTP request/response cycle in the Express context.

- Four main HTTP actions will be used:
  - GET: The GET method retrieves data about a resource.
  - POST: The POST method (usually) creates a new resource.
  - PUT: The PUT method updates the existing data of a resource.
  - DELETE: The DELETE method deletes a specified resource.

- Five less frequently used actions: HEAD, CONNECT, TRACE, OPTIONS, and PATCH.

- Handle HTTP requests:
  - In the main entry point 'app.js', specified the router that will match the HTTP request URL paths, within the router, the incoming HTTP request is matched against it's HTTP action and URL path. If matched, the callback function will be executed.
  - Take HTTP GET action for example.
  ```javascript 
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  ```
  When there is a GET request, and matching with URL "/", the function in second argument will be executed, and the response (res in short) will be "index" Handlebars in views' folder with the data as "{title: 'Express'}", i.e. the data for the title is 'Express'.

- Use NPM (Node Package Manager), find, and manage the libraries. 
