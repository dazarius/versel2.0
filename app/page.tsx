import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Story time!',
    },
    {
      action: 'link',
      label: 'Link to Google',
      target: 'https://www.google.com',
    },
    {
      label: 'Redirect to pictures',
      action: 'post_redirect',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/ipfs/QmTauNfnxQxVKFPvGAsG7LK5AXnMTgAUuPESiixvNubdeH`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a boat story',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'frame powered by dazarius',
  description: 'LFG',
  openGraph: {
    title: 'fsdavsgvdas< + 1',
    description: 'LFG',
    images: ['${NEXT_PUBLIC_URL}/ipfs/QmTauNfnxQxVKFPvGAsG7LK5AXnMTgAUuPESiixvNubdeH`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>dazay.xyz</h1>
    </>
  );
}
