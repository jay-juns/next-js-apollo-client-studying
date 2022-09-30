import Head from 'next/head';
import { useQuery } from '@apollo/client';

import QUERY_COUNTRIES from './queryCountries.graphql';

import styles from '../styles/Home.module.css';

export default function Home() {
  const { data, loading, error } = useQuery(QUERY_COUNTRIES);
  
  if (error) {
    return <p>에러! 관리자에게 문의!</p>;
  }

  // if all good return data
  return (
    <div className={styles.container}>
      <Head>
        <title>국가 GraphQL</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>국가</h1>
      
      {loading && <p>로딩중...</p>}
      <div>
        {data && data.countries.map((country: any) => (
          <div key={country.code}>{country.name}</div>
        ))}
      </div>
    </div>
  );
}