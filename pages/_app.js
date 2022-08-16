import "../styles/globals.css"
import Layout from "../components/layout"
import Head from "next/head"
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const theme = extendTheme({
  colors,
  // fonts: {
  //   heading: `'Open Sans', sans-serif`,
  //   body: `'Raleway', sans-serif`,
  // },
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
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
      </ChakraProvider>
    </>
  )
}

export default MyApp
