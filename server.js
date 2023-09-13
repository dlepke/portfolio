const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "/public")));

if (proccess.en.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https") {
      res.redirect(`https://${req.header("host")}${req.url}`);
    } else {
      next();
    }
  });
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/index.html"));
});

app.get("/pokemon", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/pokemon.html"));
});

app.get("/leetcode", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/leetcode.html"));
});

app.get("/machinelearning", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/machinelearning.html"));
});

app.get("/apps", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/apps.html"));
});

app.get("/timeline", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/timeline.html"));
});

app.get("/resume", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/resume.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/contact.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
