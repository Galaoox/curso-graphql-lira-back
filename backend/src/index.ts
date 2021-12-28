import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { schema } from "./graphql/index";
import MongoLib from "./mongo";
import config from "./config";

const app = express();
app.use(cors());

async function startServer() {
    const server = new ApolloServer({
        schema,
        introspection: true,
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
        context: async () => new MongoLib().connect(),
    });
    await server.start();
    server.applyMiddleware({ app });
}

startServer();

app.listen(config.port, () => {
    console.log("Server running in: http://localhost:" + config.port);
});
