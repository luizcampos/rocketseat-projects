import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nlb31p0b2b01xogevk3dd9/master',
    cache: new InMemoryCache()
})