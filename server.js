// Express web server
const express = require("express");
const mongodb = require("./data/database");
const app = express();

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(process.env.PORT || 3000, () => {
      console.log(
        "Database is listening and node Running at port " +
          (process.env.PORT || 3000)
      );
    });
  }
});
