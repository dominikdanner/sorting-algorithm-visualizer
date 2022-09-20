import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"

function AlgorithmVisualizer({ Component, pageProps }: AppProps) {
    return (
        <div className="font-quicksand">
            <Head>

                <title>Algorithm | Dominik Danner</title>
                <meta name="description" content="Algorithm Visualizer" />
                <link rel="icon" href="/src/public/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            </Head>

            {/* @ts-ignore */}
            <Component {...pageProps} />

        </div>
    )
}

export default AlgorithmVisualizer
