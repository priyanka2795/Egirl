import MessagesContent from '@components/messages';
import React from 'react';
import { GetServerSidePropsContext } from 'next';
import Layout from '@components/common/Layout';
export default function Explore() {


  return (
    <>
      {/* <div>
        <MessagesContent />
      </div> */}
      <Layout>
       <MessagesContent />
      </Layout>
    </>
  );
}

