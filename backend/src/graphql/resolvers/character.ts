import { IResolvers } from "@graphql-tools/utils";
import data from "../../data/data.json";

// definen el comportamiento de los schemas
const character: IResolvers = {
    Query: {
        getCharacters() {
            return data.characters;
        },
        getCharacter(root: void, args: any) {
            return data.characters.find(
                (character: any) => character._id === args._id
            );
        },
    },
};

export default character;
