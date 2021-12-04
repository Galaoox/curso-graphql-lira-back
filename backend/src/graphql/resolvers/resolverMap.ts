import { IResolvers } from "@graphql-tools/utils";

// definen el comportamiento de los schemas
const resolvers: IResolvers = {
    Query: {
        hello() {
            return "Hello World";
        },
    },
};

export default resolvers;
