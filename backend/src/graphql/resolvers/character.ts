import { IResolvers } from "@graphql-tools/utils";
import data from "../../data/data.json";
import { Db, ObjectId } from "mongodb";
import { ICharacter } from "../../interfaces/ICharacter";
import {
    CHARACTERS_COLLECTION,
    GAMES_COLLECTION,
} from "../../mongo/collections";

// definen el comportamiento de los schemas
const character: IResolvers = {
    Query: {
        async getCharacters(root: void, args: void, context: Db, info: void) {
            try {
                return await context
                    .collection(CHARACTERS_COLLECTION)
                    .find()
                    .toArray();
            } catch (error) {
                console.log(error);
            }
        },
        getCharacter(root: void, args: any, context: Db) {
            return context
                .collection(CHARACTERS_COLLECTION)
                .findOne({ _id: new ObjectId(args._id) });
        },
    },
    Mutation: {
        async createCharacter(root: void, args: any, context: Db, info: void) {
            try {
                const regexp = new RegExp(args.character.name, "i");
                const exist = await context
                    .collection(CHARACTERS_COLLECTION)
                    .findOne({ name: regexp });
                if (exist) {
                    throw new Error("Character alredy exist");
                }
                await context
                    .collection(CHARACTERS_COLLECTION)
                    .insertOne(args.character);
                return "Character created";
            } catch (error: any) {
                return error.message;
            }
        },
        async updateCharacter(
            root: void,
            { _id, character }: { _id: string; character: ICharacter },
            context: Db,
            info: void
        ) {
            try {
                const exist = await context
                    .collection(CHARACTERS_COLLECTION)
                    .findOne({ _id: new ObjectId(_id) });
                if (!exist) throw new Error("Character does not exist");
                await context.collection(CHARACTERS_COLLECTION).updateOne(
                    {
                        _id: new ObjectId(_id),
                    },
                    {
                        $set: character,
                    }
                );
                return "Character updated";
            } catch (error: any) {
                return error.message;
            }
        },
    },
    Character: {
        games(root: ICharacter, args: any, context: Db, options: any) {
            return context
                .collection(GAMES_COLLECTION)
                .find({
                    _id: {
                        $in: root.games.map((id: string) => new ObjectId(id)),
                    },
                })
                .toArray();
        },
    },
};

export default character;
