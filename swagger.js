import swaggerAutogen from "swagger-autogen";

const outputFile = "swagger.json";
const endPointsFiles = ["./routes/index.js"];

const doc = {
  info: {
    title: "API - Contacts ",
    description: "This API allow us to get, create, and delete contacts",
  },
  host: "localhost:3000",
  schemes: ["http", "https"],
};

swaggerAutogen()(outputFile, endPointsFiles, doc);
