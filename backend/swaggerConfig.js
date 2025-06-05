import swaggerJSDOC from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API Documentation",
      version: "1.0.0",
      description: "A simple API documentation using Swagger",
    },

    servers: [{ url: "http://localhost:5000" }],
  },

  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDOC(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default swaggerDocs;
