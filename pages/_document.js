import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2596135861331646"
            crossorigin="anonymous"
          ></script>
        </Head>
        <body>
          {/* Your provided text content here */}
          <div>
            <h1>About YT Thumbnail Downloader</h1>
            <p>
              YT (You Thumbnail) YouTube thumbnail downloader allows you to
              download YouTube thumbnails easily and fastly. It's an online
              tool, not need to install any app, entirely free for anyone to
              use.
            </p>
            {/* Add the rest of your text here */}
          </div>

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;