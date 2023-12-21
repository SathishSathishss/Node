const {gql}=require('apollo-server');

const typeDefs= gql `
type STUDENT {
    id:ID!
    name:String!
    jobtitle:String!
}

type Query {
    students:[STUDENT]
}

`;


module.exports=typeDefs;