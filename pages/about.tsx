import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About - umeyuki.net',
      }}
    >
      <h1>本ブログについて</h1>
      <ul className="list-disc pl-4 my-6">
        <li>趣味プロダクト開発日誌</li>
        <li className="mt-2">少し役立つ麻雀戦略</li>
        <li className="mt-2">渋谷1人暮らし</li>
      </ul>
    </Layout>
  );
};

export default About;
