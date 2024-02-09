Useful informations to start the project and understand the code.

Commands:
npx create-node-app directly by terminal in Desktop REMOVING APP ROUTING
npm install graphql graphql-request moment react-multi-carousel sass html-react-parser hamburger-react
npm run dev

Header.jsx:
We use a Layout.jsx Wrapper to always have the Header component above each rendered page.

Services:
Fetch real data from GraphQl

Fetching posts:
Use a special Next.js way to fetch data directly, a new async function getStaticProps() with || (or) to handle no results from fetch. Then we can use this posts as props directly in the component.

slug.js:
Is a dynamic page which changes according to the page/slug used during fetching data.

Fetching posts with dynamic page generation:
Having a dynamic generation via slug.js we have to use another async function getStaticPaths() to specify what kind of article are we going to have. Research all possible slugs and then render.

getContentFragment():
Function to render properly the posts' content.

Git-repository creation:
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin ''
git push -u origin main

git remote remove origin
