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
    Mutation: {
        createCharacter(root: void, args: any) {
            args.character._id = String(data.characters.length + 1);
            data.characters.push(args.character);
            return "Character created";
        },
    },
    Character: {
        games(root: any, args: any, context: any, options: any) {
            return data.games.filter((games) => root.games.includes(games._id));
        },
    },
};

export default character;
