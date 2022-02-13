import Document, { Head, Html, Main, NextScript } from "next/document"

export default class MyDocument extends Document{
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Open+Sans:wght@300;400;500;600;800&family=Poppins:wght@400;600&family=Roboto+Condensed:wght@300;400;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}