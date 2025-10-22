const homeRoute = (req, res) => {
  res.send("Hello World");
};

const rootRoute = (req, res) => {
  res.send("Hello");
};

module.exports = {
  homeRoute,
  rootRoute,
};
