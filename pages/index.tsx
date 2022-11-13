import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      {posts.map((post) => (
        <article key={post.slug} className="mt-12">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
            <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
              <h1 className="mb-2 text-xl">{post.title}</h1>
              <p className="mb-3">{post.description}</p>
            </a>
          </Link>
        </article>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'date',
    'description',
    'slug',
    'title',
    'content',
  ]);
  return {
    props: { posts },
  };
};

export default Index;
