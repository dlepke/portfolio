const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "/public")));

if (process.env.NODE_ENV === "production") {
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

app.get("/resume", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/resume.html"));
});

app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/projects.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/contact.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
