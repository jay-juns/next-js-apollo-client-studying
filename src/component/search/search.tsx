import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const COUNTRIES_SEARCH_QUERY = gql`
    query GetCountries($code: String) {
        countries(filter: {code: { eq: $code }}) {
            name
            code
            emojiU
        }
    }
`;

const Search = () => {
    const [searchFilter, setSearchFilter] = useState('');
    const [executeSearch, { data }] = useLazyQuery(
        COUNTRIES_SEARCH_QUERY
    );

    return (
        <>
            <div className='search-bar'>
                <span>검색하기</span>
                <input
                    type="text"
                    onChange={(e) => setSearchFilter(e.target.value)}
                />
                <button
                    onClick={() =>
                        executeSearch({
                            variables: { 
                                code: searchFilter.toUpperCase()
                            }
                        })
                    }
                >
                    확인
                </button>
            </div>
            <div>
                {data && data.countries.map((countrie: any, index: number) => (
                    <div key={index} style={{display:'flex',alignItems:'center',color: 'blue'}}>
                        <p style={{color: 'red',marginRight: '15px'}}>{countrie.name}</p>
                        <span style={{fontSize: '12px'}}>{countrie.code}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Search