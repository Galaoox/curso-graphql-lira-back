import "graphql-import-node";
import character from "./schemas/character.graphql";
import game from "./schemas/game.graphql";
import gameResolver from "./resolvers/game";
import characterResolver from "./resolvers/character";

import { makeExecutableSchema } from "@graphql-tools/schema";

export const schema = makeExecutableSchema({
    typeDefs: [character, game],
    resolvers: [characterResolver, gameResolver],
});
