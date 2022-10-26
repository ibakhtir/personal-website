import Head from "next/head"
import { ThemeProvider } from "styled-components"

import { GlobalStyle, theme } from "../styles"
import Layout from "../components/layout"

import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Vlad Bakhtir is a front-end developer specializing in building apps and websites."
        />
        <title>Vlad Bakhtir</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
