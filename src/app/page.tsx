"use client"; // this is a client component 👈🏽
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import App, { AppContext, AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Table } from "antd"

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const [data, setData] = useState<any[]>([])


  const columns = [
    {
      title: 'Mission Name',
      dataIndex: 'mission_name',
      key: 'mission_name',
    },
    {
      title: 'Launch Date',
      dataIndex: 'launch_date_local',
      key: 'launch_date_local',
    }
  ];


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
      setData(data["launchesPast"]);
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
       <Table columns={columns} dataSource={data} />
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
