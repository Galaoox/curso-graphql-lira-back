import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { schema } from "./graphql/index";

const app = express();
app.use(cors());

async function startServer() {
    const server = new ApolloServer({
        schema,
        introspection: true,
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    });
    await server.start();
    server.applyMiddleware({ app });
}

startServer();

app.listen(5000, () => {
    console.log("Server running in: http://localhost:5000");
});
