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
        <NextScript />
          {/* Your provided text content here */}
          <div>
            <h1>About YT Thumbnail Downloader</h1>
            <p>
              YT (You Thumbnail) YouTube thumbnail downloader allows you to
              download YouTube thumbnails easily and fastly. It's an online
              tool, not need to install any app, entirely free for anyone to
              use.
            </p>
            <h2>Extract YouTube thumbnails online easily </h2>

              <p>The YouTube thumbnail downloader works like an extractor, when you put video links to the search box, 
              it extracts thumbnail images online immediately, no need to download video first.
               </p>

              <h2>Find and view HD thumbnails quickly</h2>
             <p>
            Only small and low-resolution thumbnails display on the youtube homepage, channel page, 
            and search results page. If you want to see HD thumbnails, you need to look in the page source code.
             But with the YT thumbnail downloader, you only need to know the video link to view HD thumbnails quickly.
             </p>

<h2>Get youtube video thumbnail image links</h2>

           <p>

                After entering the video link in the downloader, you will immediately get the video thumbnail. Click the picture link to see the thumbnail URL in the browser address bar.

               Save thumbnails to your device

             After grabbing the thumbnail with the video link, you can click the image to download and save the thumbnail.
        </p>
        <h1> How to get all size of YouTube thumbnails? </h1>
        <p>
        As we said before, a video can have up to 9 thumbnails of different sizes, and now I will tell you how to get all the thumbnails. Before start, you need to understand what's a video ID.

The YouTube video ID is a unique ID used to identify the video uploaded to YouTube. Youtube video ID is used to create a unique URL for displaying videos and can be used to embed Youtube videos on any website.
</p>
        
            {/* Add the rest of your text here */}
          </div>

          
        </body>
      </Html>
    );
  }
}

export default MyDocument;