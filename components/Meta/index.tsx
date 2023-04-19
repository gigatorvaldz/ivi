import React from 'react';
import Head from 'next/head';

interface IMeta {
  title: string;
  description: string;
}

const Meta: React.FC<IMeta> = ({ title, description }) => {
  return (
    <Head>
      <title>{`IVI - ${title}`}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default Meta;
