import { paramCase } from 'src/utils/change-case';
import axios, { endpoints } from 'src/utils/axios';

import { PostDetailsHomeView } from 'src/sections/post/view';

import { getContents } from 'src/_contents/2025-03-nox'

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Notice: Details',
};

type Props = {
  params: {
    title: string;
  };
};

export default function PostDetailsHomePage({ params }: Props) {
  const { title } = params;

  const contents = getContents

  return <PostDetailsHomeView contents={contents} />;
}
