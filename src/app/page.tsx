// Make sure this import is at the very top
import Head from 'next/head';
import { ProductRow } from "./components/ProductRow";

export default function Home() {
  return (
    <> {/* <--- START: This React Fragment wraps everything */}
      <Head>
        {/* Your Page Title - VERY IMPORTANT */}
        <title>Buy & Sell Digital Products | Who Got Who - India&apos;s Digital Marketplace</title>

        {/* Your Meta Description - Your "Ad" in Search Results */}
        <meta name="description" content="Explore, evaluate, and acquire online assets like Amazon storefronts, SaaS startups, Instagram accounts, and more on Who Got Who. Your trusted marketplace for digital business acquisitions in India." />

        {/* Essential for Mobile Responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags (for Social Media Sharing - Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Buy & Sell Digital Products | Who Got Who" />
        <meta property="og:description" content="Explore, evaluate, and acquire online assets like Amazon storefronts, SaaS startups, Instagram accounts, and more on Who Got Who. Your trusted marketplace for digital business acquisitions in India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.whogotwho.com/" /> {/* IMPORTANT: Replace with your actual website URL! */}
        {/* If you have a specific image for social shares, uncomment and update this line: */}
        {/* <meta property="og:image" content="https://www.whogotwho.com/images/whogotwho-social-share.jpg" /> */}

        {/* Twitter Card Tags (for Twitter Sharing) */}
        <meta name="twitter:card" content="summary_large_image" /> {/* Use 'summary_large_image' for a bigger preview */}
        <meta name="twitter:title" content="Buy & Sell Digital Products | Who Got Who" />
        <meta name="twitter:description" content="Explore, evaluate, and acquire online assets like Amazon storefronts, SaaS startups, Instagram accounts, and more on Who Got Who. Your trusted marketplace for digital business acquisitions in India." />
        {/* If you have a specific image for Twitter shares, uncomment and update this line: */}
        {/* <meta name="twitter:image" content="https://www.whogotwho.com/images/whogotwho-twitter-share.jpg" /> */}

        {/* Canonical Tag (Tells Search Engines the Preferred Version of This Page) */}
        <link rel="canonical" href="https://www.whogotwho.com/" /> {/* IMPORTANT: Replace with your actual website URL! */}

        {/* Meta Keywords (Optional - Less important for Google, but doesn't hurt) */}
        <meta name="keywords" content="buy digital products, sell digital products, digital marketplace India, Amazon storefronts for sale, SaaS for sale, Instagram accounts for sale, YouTube channels for sale, mobile apps for sale, domains for sale, online business acquisition, Who Got Who, India digital market" />

      </Head>

      <section className="w-full relative">
        {/* Your existing Hero Section and ProductRows go here */}
        {/* ... (the rest of your original Home.js code from before) ... */}

        {/* Hero Section */}
        <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#f5f7fa] to-[#e2e8f0] py-20 md:py-32 flex justify-center items-center min-h-[600px]">
          <div className="text-center max-w-4xl px-4 z-10  ">
            <div className="space-y-4 mb-6">
              <p className="text-lg sm:text-xl font-medium text-muted-foreground">
                &quot;India&apos;s Digital Marketplace - Have You Checked Your Net Worth 2.0 on{" "}
                <span className="text-primary font-semibold">Who Got Who?</span>&quot;
              </p>
              <p className="text-base sm:text-lg text-muted-foreground">
                &quot;भारत का डिजिटल मार्केटप्लेस - क्या आपने{" "}
                <span className="text-primary font-semibold">Who Got Who</span> पर अपनी नेट वर्थ 2.0 चेक की?&quot;
              </p>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
              Buy & Sell Digital Products <br />
              <span className="text-primary">with Professional Assistance</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              From Amazon storefronts to SaaS startups, Who Got Who is your trusted platform to safely explore, evaluate, and acquire online assets.
            </p>
          </div>
          {/* Design elements */}
          <div className="absolute top-[-100px] left-[-100px] h-[300px] w-[300px] bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] bg-muted/30 rounded-full blur-2xl" />
        </div>
{/*
<div className="max-w-7xl mx-auto px-4 md:px-8 mt-36 space-y-20">
  <ProductRow category="newest" />
  <ProductRow category="amazon" />
  <ProductRow category="instagram" />
  <ProductRow category="saas" />
  <ProductRow category="youtube" />
  <ProductRow category="mobileapps" />
  <ProductRow category="domains" />
  <ProductRow category="others" />
</div>
*/}

        </div>
      </section>
    </>
  );
}
