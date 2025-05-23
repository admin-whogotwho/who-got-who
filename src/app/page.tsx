"use client";

// src/app/page.tsx

import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ProductRow } from '../components/ProductRow';
import { SearchBar } from '../components/SearchBar';

const TAGLINES = [
  "Explore India's Trusted Digital Marketplace",
  "भारत का भरोसेमंद डिजिटल मार्केटप्लेस",
  "Découvrez la marketplace numérique de confiance en Inde",
  "India के Digital Marketplace में आपका स्वागत है",
  "भारत में डिजिटल प्रोडक्ट्स की खरीद-फरोख्त करें",
];

export default function Home() {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % TAGLINES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Buy & Sell Digital Products | Who Got Who - India&apos;s Digital Marketplace</title>
        <meta
          name="description"
          content="Explore, evaluate, and acquire online assets like Amazon storefronts, SaaS startups, Instagram accounts, and more on Who Got Who. Your trusted marketplace for digital business acquisitions in India."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Buy & Sell Digital Products | Who Got Who" />
        <meta property="og:description" content="Explore, evaluate, and acquire online assets like Amazon storefronts, SaaS startups, Instagram accounts, and more on Who Got Who. Your trusted marketplace for digital business acquisitions in India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.whogotwho.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Buy & Sell Digital Products | Who Got Who" />
        <meta name="twitter:description" content="Explore, evaluate, and acquire online assets like Amazon storefronts, SaaS startups, Instagram accounts, and more on Who Got Who. Your trusted marketplace for digital business acquisitions in India." />
        <link rel="canonical" href="https://www.whogotwho.com/" />
        <meta
          name="keywords"
          content="buy digital products, sell digital products, digital marketplace India, Amazon storefronts for sale, SaaS for sale, Instagram accounts for sale, YouTube channels for sale, mobile apps for sale, domains for sale, online business acquisition, Who Got Who, India digital market"
        />
      </Head>

      <section className="w-full relative">
        <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#f5f7fa] to-[#e2e8f0] py-20 md:py-32 flex flex-col justify-center items-center min-h-[600px] px-4 text-center">
          <p className="text-lg sm:text-xl font-medium text-muted-foreground mb-3">
            &quot;India&apos;s Digital Marketplace - Have You Checked Your Net Worth 2.0 on{' '}
            <span className="text-primary font-semibold">Who Got Who?</span>&quot;
          </p>
          <p className="text-base sm:text-lg text-muted-foreground mb-8">
            &quot;भारत का डिजिटल मार्केटप्लेस - क्या आपने{' '}
            <span className="text-primary font-semibold">Who Got Who</span> पर अपनी नेट वर्थ 2.0 चेक की?&quot;
          </p>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Buy & Sell Digital Products <br />
            <span className="text-primary">with Professional Assistance</span>
          </h1>

          <p className="mt-2 mb-10 text-lg sm:text-xl text-primary font-semibold min-h-[36px] transition-opacity duration-700">
            {TAGLINES[currentTaglineIndex]}
          </p>

          <div className="w-full max-w-2xl">
            <SearchBar />
          </div>

          <div className="absolute top-[-100px] left-[-100px] h-[300px] w-[300px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] bg-muted/30 rounded-full blur-2xl pointer-events-none" />
        </div>

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
      </section>
    </>
  );
}
