import React from 'react';
import Head from 'next/head';

type LayoutProps = {
    children: React.ReactNode;
}

const DefaultLayout = ({ children } : LayoutProps ) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>국가 정보 보기</title>
            </Head>
            <div>
                {children}
            </div>
        </>
    )
}

export default DefaultLayout;