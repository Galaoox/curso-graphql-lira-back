import { IResolvers } from "@graphql-tools/utils";
import data from "../../data/data.json";
// definen el comportamiento de los schemas
const game: IResolvers = {
    Query: {
        gameHello() {
            return "Hello World";
        },
    },
};

export default game;
