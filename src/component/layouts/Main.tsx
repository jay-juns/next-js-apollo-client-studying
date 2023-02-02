import React from 'react';
import Head from 'next/head';

type LayoutProps = {
    children: React.ReactNode;
}

const MainLayout = ({ children } : LayoutProps ) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>국가 정보 보기</title>
            </Head>
            <div className='main-layout'>
                {children}
            </div>
        </>
    )
}

export default MainLayout;