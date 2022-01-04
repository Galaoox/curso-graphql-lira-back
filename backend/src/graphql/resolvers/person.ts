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
    Male: {
        countries(parent: any) {
            console.log(parent);
            return data.countries.filter((country) =>
                parent.countries.includes(country._id)
            );
        },
    },
    Female: {
        countries(parent: any) {
            return data.countries.filter((country) =>
                parent.countries.includes(country._id)
            );
        },
    },
    Country: {
        people(parent: any) {
            return data.people.filter((person) =>
                parent.people.includes(person._id)
            );
        },
    },
};
