import { gql } from 'graphql-request';
import { GraphQLClient } from 'graphql-request';

// Delay the fetching in order to not exceed the 5 req/s


// New endpoint
const graphQLClient = new GraphQLClient(process.env.HYGRAPH_DEV_ENDPOINT);

export const getPosts = async () => {

  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
    `;
  const result = await graphQLClient.request(query)
  return result.postsConnection.edges;
};

// Getting information on a specific article vis slug
export const getPostDetails = async (slug) => {

  const query = gql`
    query GetPostDetail($slug: String!) {
        post(where: {slug: $slug}){
            author {
                bio
                name
                id
                photo {
                    url
                }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
                url
            }
            categories {
                name
                slug
            }
            content{
                raw
            }
            comments {
              id
              name
              email
              comment
            }
        }
    }
    `;
  const result = await graphQLClient.request(query, { slug })
  return result.post;
};

export const getRecentPosts = async () => {

  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await graphQLClient.request(query)
  return result.posts;
};

export const getSimilarPosts = async (categories, slug) => {

  // Not the current post (via slug) but some with some same categories
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await graphQLClient.request(query, { categories, slug })
  return result.posts;
};

export const getCategories = async () => {

  const query = gql`
    query GetCategories {
        categories {
          name
          slug
        }
    }
  `;
  const result = await graphQLClient.request(query)
  return result.categories;
};

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await graphQLClient.request(query, { slug })

  return result.postsConnection.edges;
};


// Http request to our own Next.js backend
// Use api.js to send comments to Hygraph
export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Parsing
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug) => {

  const query = gql`
      query GetComments($slug:String!) {
        comments(where: {post: {slug:$slug}}){
          name
          createdAt
          comment
        }
      }
    `;

  const result = await graphQLClient.request(query);

  return result.comments;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

  const result = await graphQLClient.request(query);

  return result.posts;
};


