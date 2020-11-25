const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const AuthRoute = require("./routes/auth");
const User = require("./models/User");
const items = require("./models/items");
const items2 = require("./models/items2");
const items3 = require("./models/items3");
const url = "mongodb+srv://deeb:D33bfinalpass@cluster0.fev6p.mongodb.net/User";

const app = express();

mongoose.connect(
  "mongodb+srv://deeb:D33bfinalpass@cluster0.fev6p.mongodb.net/User",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Database Connection Establishment!");
});

app.use("/", express.static("public"));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;
app.get("/", function (req, res, next) {
  res.send("Hello world");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/", AuthRoute);

app.get("/current", (req, res) => {
  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      items
        .find({})
        .then((data) => {
          res.json(data);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.post("/additem", (req, res) => {
  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      var budget = new items({
        title: req.body.title,
        value: req.body.value,
        color: req.body.color,
      });

      items
        .insertMany(budget)
        .then((data) => {
          res.json(data);
        })
        .catch((error) => {
          console.log(error);
        });
      res.redirect("./budget.html");
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/current2", (req, res) => {
    mongoose
      .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        items2
          .find({})
          .then((data) => {
            res.json(data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  app.post("/additem2", (req, res) => {
    mongoose
      .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        var budget2 = new items2({
          title: req.body.title,
          value: req.body.value,
          color: req.body.color,
        });
  
        items2
          .insertMany(budget2)
          .then((data) => {
            res.json(data);
          })
          .catch((error) => {
            console.log(error);
          });
        res.redirect("./budget.html");
      })
      .catch((error) => {
        console.log(error);
      });
  });
  app.get("/current3", (req, res) => {
    mongoose
      .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        items3
          .find({})
          .then((data) => {
            res.json(data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  app.post("/additem3", (req, res) => {
    mongoose
      .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        var budget3 = new items3({
          title: req.body.title,
          value: req.body.value,
          color: req.body.color,
        });
  
        items3
          .insertMany(budget3)
          .then((data) => {
            res.json(data);
          })
          .catch((error) => {
            console.log(error);
          });
        res.redirect("./budget.html");
      })
      .catch((error) => {
        console.log(error);
      });
  });
