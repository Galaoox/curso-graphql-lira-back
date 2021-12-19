import { IResolvers } from "@graphql-tools/utils";
import data from "../../data/data.json";
// definen el comportamiento de los schemas
const game: IResolvers = {
    Query: {
        gameHello() {
            return "Hello World";
        },
    },
    Character: {
        games(root: any, args: any, context: any, options: any) {
            return data.games.filter((games) => root.games.includes(games._id));
        },
    },
};

export default game;
