import { IResolvers } from "@graphql-tools/utils";
import data from "../../data/data.json";
import { Db } from "mongodb";
// definen el comportamiento de los schemas
export const personResolver: IResolvers = {
    Query: {
        async getPerson(root: void, args: any) {
            return data.people.find((per: any) => per._id === args._id);
        },
    },
    Person: {
        __resolveType(obj: any) {
            return obj.age ? "Male" : "Female";
        },
    },
};
