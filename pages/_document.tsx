import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
import React from "react";

export default function Document() {
    return (
        <Html lang="en">
            <title>Muhammad Fiaz</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
            <meta name="application-name" content="Muhammad Fiaz" />

            <Head>
                {/*
				Author: Muhammad Fiaz
                 GitHub: Visit the GitHub repository at https://github.com/muhammad-fiaz/muhammad-fiaz.github.io/ for more details.
                 license: MIT License
                  */}

                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="theme-color" content="#000000" />
                <meta name="title" content="Muhammad Fiaz"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="revisit-after" content="1 days"/>
                <link rel="canonical" href="https://www.muhammadfiaz.dev" />
                <meta name="license" content="MIT License" />
                <meta httpEquiv="content-language" content="en-us" />

                <meta name="author" content="Muhammad Fiaz" />

                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="bingbot" content="index, follow" />

                <meta
                    name="description"
                    content="Welcome to Muhammad Fiaz's Documentation Website! Here, you can explore a development documentaion of information, including project explanations, development updates, and detailed documentation on various topics. Feel free to dive into the world of tech and innovation I've created. Happy exploring!"
                />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/favicon.jpg" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.ico" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.jpg" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="manifest" href="/manifest.json" />
                <meta property="og:title" content="Muhammad Fiaz" />
                <meta property="og:description" content="Welcome to Muhammad Fiaz's Documentation Website! Here, you can explore a development documentaion of information, including project explanations, development updates, and detailed documentation on various topics. Feel free to dive into the world of tech and innovation I've created. Happy exploring!" />
                <meta property="og:image" content="https://www.muhammadfiaz.com/img/fiaz-org.jpeg" />
                <meta property="og:url" content="https://www.muhammadfiaz.com" />
                <meta property="og:type" content="website" />
                <meta property="og:profile" content="https://github.com/muhammad-fiaz" />
                <meta property="og:site_name" content="Muhammad Fiaz" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@muhammadfiaz_" />
                <meta name="twitter:title" content="Muhammad Fiaz" />
                <meta name="twitter:description" content="Muhammad Fiaz - Designer, Developer, Full Stack. Passionate about programming, innovation, and shaping the future." />
                <meta name="twitter:image" content="https://www.muhammadfiaz.com/img/fiaz-org.jpeg" />
                <meta name="twitter:creator" content="@muhammadfiaz_" />
                <meta name="twitter:domain" content="https://www.muhammadfiaz.com" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Muhammad Fiaz",
          "url": "https://www.muhammadfiaz.dev",
          "sameAs": [
            "https://github.com/muhammad-fiaz",
            "https://www.linkedin.com/in/muhammad-fiaz-"
          ]
        }`
                    }}
                />

                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://muhammadfiaz.dev/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://muhammadfiaz.dev/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `,
                }} />


                {/*Edit this to your according to your website*/}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `
          {
            "@context": "https://schema.org/",
            "@type": "Person",
            "name": "Muhammad Fiaz",
            "url": "https://muhammadfiaz.dev",
            "image": "https://www.muhammadfiaz.com/img/fiaz-org.jpeg",
            "sameAs": [
              "https://github.com/muhammad-fiaz/",
              "https://muhammadfiaz.com",
              "https://www.linkedin.com/in/muhammad-fiaz-/"
            ]
          }
        `
                }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `
          {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.muhammadfiaz.dev/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Docs",
              "item": "https://www.muhammadfiaz.dev/docs"
            }]
          }
        `
                }} />
                {/*Edit this to your according to your website*/}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `
          {
            "@context": "https://schema.org",
            "@type": "ResearchProject",
            "name": "muhammadfiaz",
            "alternateName": "fiaz",
            "url": "https://www.muhammadfiaz.dev/",
            "logo": "https://www.muhammadfiaz.com/img/fiaz-org.jpeg",
            "sameAs": "https://www.linkedin.com/in/muhammad-fiaz-/"
          }
        `
                }} />



            </Head>

            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
