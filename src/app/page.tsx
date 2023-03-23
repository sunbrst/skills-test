"use client"; // this is a client component 👈🏽
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import App, { AppContext, AppProps } from "next/app";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      const client = new ApolloClient({
        uri: 'https://spacex-production.up.railway.app/graphql',
        cache: new InMemoryCache()
      });
      const { data } = await client.query({
        query: gql`
          query GetLaunches {
            launchesPast(limit: 100) {
              id
              mission_name
              launch_date_local
              launch_site {
                site_name_long
              }
              links {
                article_link
                video_link
                mission_patch
              }
              rocket {
                rocket_name
              }
            }
          }
        `
      });
      // const res = await fetch(
      //   "https://proton.api.atomicassets.io/atomicmarket/v1/sales"
      // );
      // const { data } = await res.json();
      setData(data);
    }
    fetchData();
  }, []);
  console.log(data);
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}

Home.getInitialProps = async (context: AppContext) => {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query GetLaunches {
        launchesPast(limit: 10) {
          id
          mission_name
          launch_date_local
          launch_site {
            site_name_long
          }
          links {
            article_link
            video_link
            mission_patch
          }
          rocket {
            rocket_name
          }
        }
      }
    `,
  });
  const ctx = await App.getInitialProps(context);
  return { ...ctx, data: data };
};
