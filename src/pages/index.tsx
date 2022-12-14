import React, { useState } from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import QUERY_COUNTRIES from './queryCountries.graphql';
import BasicModal from '../component/modal/basicModal';
import Spinner from '../component/spinner/Spinner';
import { Icon } from '@iconify/react';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [isCapital, setIsCapital] = useState('');
  const [isNative, setIsNative] = useState('');
  const [isName, setIsName] = useState('');
  const [isCurrency, setIsCurrency] = useState('');
  const [isNumber, setIsNumber] = useState();
  const { data, loading, error } = useQuery(QUERY_COUNTRIES);

  const onClickModalOn = (info : any) => {
    setIsActive(true);
    setIsNative(info?.native);
    setIsCapital(info?.capital);
    setIsNumber(info?.phone);
    setIsName(info?.name);
    setIsCurrency(info?.currency);
  };

  const onClickModalOff = () => {
    setIsActive(false);
  };
  
  if (error) {
    return <p>에러! 관리자에게 문의하세요!</p>;
  }

  // if all good return data
  return (
    <div className='wrapper'>
        <Head>
            <title>나라 정보 GraphQL</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>

        {loading && <Spinner />}
        <div className='nation'>
            {data && data.countries.map((country: any) => (
            <>
              <button className={country.name === 'South Korea' ? 'red is-open-btn' : 'is-open-btn'} key={country.code} onClick={()=>onClickModalOn(country)}>
                <p>{country.code === 'KR' ? country.native : country.code}</p>
                <span>{country.emoji}</span> 
                <p className='small'>{country.capital === 'Seoul' ? '서울' : country.capital}</p>
              </button>
          </>
        ))}
        </div>
        <BasicModal active={isActive} closeEvent={onClickModalOff}>
          <div className='modal-wrap'>
            <button className='modal-close-btn' onClick={onClickModalOff}>
              <Icon className="menu" icon="ci:close-big" />  
            </button>
            <div>
              <div className='flex-div'>
                <p>국가명:</p>
                <p>{isNative}</p>
                <p>{isName}</p>
              </div>
              <div className='flex-div'>
                <p>수도:</p>
                <p>{isCapital}</p>
              </div>
              <div className='flex-div'>
                <p>전화번호:</p>
                <p>{isNumber}</p>
              </div>
              <div className='flex-div'>
                <p>화폐 단위:</p>
                <p>{isCurrency}</p>
              </div>
            </div>
          </div>
        </BasicModal>
    </div>
  );
}