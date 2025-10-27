const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

// Automatically load all route files from "routes" folder
const routesPath = path.join(__dirname, "routes");

fs.readdirSync(routesPath).forEach(file => {
  if (file.endsWith(".js")) {
    const routeName = file.replace(".js", "");
    const routeHandler = require(path.join(routesPath, file));
    app.get(`/${routeName}`, routeHandler); // map file to /routeName
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("API is running. Available routes: /hello, /math");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
