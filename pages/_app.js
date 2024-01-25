import { Layout } from '@/components';
import "@/styles/globals.scss";

//Every rendered page will be inside the Layout component
// Inside the Layout there will be the header.
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
