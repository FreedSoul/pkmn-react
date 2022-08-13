import "../styles/globals.css"
import Layout from "../components/layout"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pokedex Next App</title>
        <meta
          name="description"
          content="pokedex next app, guide for playing pkmn rpg games"
        />
        <link rel="icon" href="/pokedex-icon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
