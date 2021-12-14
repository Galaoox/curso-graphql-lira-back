import { IResolvers } from "@graphql-tools/utils";

// definen el comportamiento de los schemas
const resolvers: IResolvers = {
    Query: {
        hello() {
            return "Hello World";
        },
        getCharacters() {
            return [
                {
                    id: 1,
                    name: "Link",
                    race: "Hylian",
                },
                {
                    id: 2,
                    name: "Zelda",
                    race: "Hylian",
                },
            ];
        },
    },
};

export default resolvers;
