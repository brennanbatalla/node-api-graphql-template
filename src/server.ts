import {ApolloServer} from "apollo-server";
import typeDefs from "./typeDefs/index"
import resolvers from "./resolvers/index";
import {init} from "./configs/sequalize";

const server = new ApolloServer({typeDefs, resolvers});


server.listen()
    .then(async ({url}) => {
        console.log(`Server ready at ${url}.`);
        await init();
    });
