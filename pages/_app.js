import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Download high-quality thumbnails from YouTube videos."
        canonical="https://your-website-url.com"
        openGraph={{
          url: "https://your-website-url.com",
          title: "Youtube Thumbnail Downloader",
          description: "Download high-quality thumbnails from YouTube videos.",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

// The text you want to add
const AdditionalText = () => {
  return (
    <div>
      <h1>About YT Thumbnail Downloader</h1>
      <p>
        YT (You Thumbnail) YouTube thumbnail downloader allows you to download YouTube thumbnails easily and fastly. It's an online tool, not need to install any app, entirely free for anyone to use.
        {/* Add the rest of your text here */}
      </p>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <MyApp />
      <AdditionalText /> {/* Add this line to include the text */}
    </div>
  );
};


export default MyApp;
