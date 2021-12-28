import { IResolvers } from "@graphql-tools/utils";
import { Db, ObjectId } from "mongodb";
import {
    GAMES_COLLECTION,
    DEVELOPERS_COLLECTION,
} from "../../mongo/collections";
// definen el comportamiento de los schemas
const game: IResolvers = {
    Query: {
        async getGames(root: void, args: void, context: Db, info) {
            return await context.collection(GAMES_COLLECTION).find().toArray();
        },
    },
    Mutation: {
        async createGame(root: void, args: any, context: Db, info: void) {
            try {
                await context.collection(GAMES_COLLECTION).insertOne(args.game);
                return "Game created";
            } catch (error) {
                console.log(error);
                return "Failed to create game";
            }
        },
    },
    Game: {
        async developers(root: any, args: any, context: Db, options: any) {
            console.log(root);
            return await context
                .collection(DEVELOPERS_COLLECTION)
                .find({
                    _id: {
                        $in: root.developers.map(
                            (id: string) => new ObjectId(id)
                        ),
                    },
                })
                .toArray();
        },
    },
};

export default game;
