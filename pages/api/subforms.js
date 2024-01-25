import { GraphQLClient, gql } from 'graphql-request';

// Next.js creates and exports a function named handler that returns a JSON object.

const graphqlAPI = process.env.HYGRAPH_DEV_ENDPOINT

export default async function subforms(req, res) {
    const { name, email } = req.body;

    const mutation = gql`
    mutation CreateSubForm($name: String!, $email: String!) {
      createSubForm(data: {name: $name, email: $email}) { id }
    }`; // Correct

    const graphQLClient = new GraphQLClient((graphqlAPI), {
        headers: {
            Authorization: `Bearer ${process.env.HYGRAPH_DEV_AUTH_TOKEN}`,
        },
        method: 'POST',
    });

    const result = await graphQLClient.request(mutation, req.body)
    console.log(result)
    return res.status(200).send(result);
}