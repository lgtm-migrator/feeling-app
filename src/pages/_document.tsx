import Document, { Html, Head, Main, NextScript } from "next/document"
import sprite from "svg-sprite-loader/runtime/sprite.build"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const spriteContent = sprite.stringify()

    return {
      spriteContent,
      ...initialProps,
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/32.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#caeaf8"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#caeaf8" />
          <meta
            name="description"
            content="The Feeling app - Your feelings are about to get a whole lot smarter"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
