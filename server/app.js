const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// node serves the files for our built React application
app.use(express.static(path.resolve(__dirname, '../client/build')));

// handles GET requests to the /api route
app.get("/api", (req,res) => {
    res.json({ message: "Hello from the server!" });
});

// All other GET requests not handled before will return our React app
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})