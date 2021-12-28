import "graphql-import-node";
import character from "./schemas/character.graphql";
import game from "./schemas/game.graphql";
import developer from "./schemas/developer.graphql";
import gameResolver from "./resolvers/game";
import characterResolver from "./resolvers/character";
import developerResolver from "./resolvers/developer";

import { makeExecutableSchema } from "@graphql-tools/schema";

export const schema = makeExecutableSchema({
    typeDefs: [character, game, developer],
    resolvers: [characterResolver, gameResolver, developerResolver],
});
