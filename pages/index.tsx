import Head from 'next/head';
import { useQuery } from '@apollo/client';
import QUERY_COUNTRIES from './queryCountries.graphql';

export default function Home() {
  const { data, loading, error } = useQuery(QUERY_COUNTRIES);
  
  if (error) {
    return <p>에러! 관리자에게 문의!</p>;
  }

  // if all good return data
  return (
    <div className='wrapper'>
      <Head>
        <title>국가 GraphQL</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>국가</h1>
      
      {loading && <p>로딩중...</p>}
      <div className='nation'>
        {data && data.countries.map((country: any) => (
          <div key={country.code}>
           <p>{country.name}</p>
           <span>{country.emoji}</span> 
          </div>
        ))}
      </div>
    </div>
  );
}