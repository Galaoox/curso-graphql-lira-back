import "graphql-import-node";
import character from "./schemas/character.graphql";
import game from "./schemas/game.graphql";
import resolvers from "./resolvers/resolverMap";
import { mergeSchemas } from "@graphql-tools/schema";

export const schema = mergeSchemas({
    schemas: [character, game],
    resolvers,
});
