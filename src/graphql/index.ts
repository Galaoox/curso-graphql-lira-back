import "graphql-import-node";
import character from "./schemas/character.graphql";
import game from "./schemas/game.graphql";
import developer from "./schemas/developer.graphql";
import person from "./schemas/person.graphql";
import gameResolver from "./resolvers/game";
import characterResolver from "./resolvers/character";
import developerResolver from "./resolvers/developer";
import { personResolver } from "./resolvers/person";

import { makeExecutableSchema } from "@graphql-tools/schema";

export const schema = makeExecutableSchema({
    typeDefs: [character, game, developer, person],
    resolvers: [
        characterResolver,
        gameResolver,
        developerResolver,
        personResolver,
    ],
});
