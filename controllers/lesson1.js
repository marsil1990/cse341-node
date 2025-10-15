const marcosRoute = (req, res) => {
  res.send("Marcos Silvera");
};

const marcosHomeRoute = (req, res) => {
  res.send("Home - Marcos Silvera");
};

const marcosAnotherRoute = (req, res) => {
  res.send("Another - Marcos Silvera");
};
module.exports = {
  marcosRoute,
  marcosHomeRoute,
  marcosAnotherRoute,
};
