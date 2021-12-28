import { IResolvers } from "@graphql-tools/utils";
import data from "../../data/data.json";
import { Db } from "mongodb";
import { DEVELOPERS_COLLECTION } from "../../mongo/collections";
// definen el comportamiento de los schemas
const developer: IResolvers = {
    Query: {
        async getDevelopers(root: void, args: any, context: Db) {
            return await context
                .collection(DEVELOPERS_COLLECTION)
                .find()
                .toArray();
        },
    },
    Mutation: {
        async createDeveloper(root: void, args: any, context: Db, info: void) {
            try {
                await context
                    .collection(DEVELOPERS_COLLECTION)
                    .insertOne(args.developer);
                return "Developer created";
            } catch (error) {
                console.log(error);
                return "Failed to create developer";
            }
        },
    },
};

export default developer;
