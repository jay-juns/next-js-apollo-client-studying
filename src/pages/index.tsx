import React, { useState } from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import QUERY_COUNTRIES from './queryCountries.graphql';
import BasicModal from '../component/modal/basicModal';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [nation, setNation] = useState('');
  const { data, loading, error } = useQuery(QUERY_COUNTRIES);

  const onClickModalOn = (name : string) => {
    setIsActive(true);
    setNation(name)
  };

  const onClickModalOff = () => {
    setIsActive(false);
  };
  
  if (error) {
    return <p>에러! 관리자에게 문의!</p>;
  }

  // if all good return data
  return (
    <div className='wrapper'>
        <Head>
            <title>나라 정보 GraphQL</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <h1>나라 정보</h1>
        {loading && <p>로딩중...</p>}
        <div className='nation'>
            {data && data.countries.map((country: any) => (
            <>
              <button className={country.name === 'South Korea' ? 'red is-open-btn' : 'is-open-btn'} key={country.code} onClick={()=>onClickModalOn(country.name)}>
                <p>{country.name === 'South Korea' ? '대한민국' : country.name}</p>
                <span>{country.emoji}</span> 
              </button>
          </>
        ))}
        </div>
        <BasicModal active={isActive} closeEvent={onClickModalOff}>
          <div>
            <button onClick={onClickModalOff}>닫기</button>
            <p>{nation === 'South Korea' ? '대한민국' : nation}</p>
          </div>
        </BasicModal>
    </div>
  );
}