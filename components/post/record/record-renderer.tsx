'use client'
import { ExtendedRecordMap } from 'notion-types'
import React from 'react'
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'
import { Collection } from 'react-notion-x/build/third-party/collection'
import dynamic from 'next/dynamic'
import 'prismjs/themes/prism-tomorrow.css'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { Post } from '@/types/notion'

const Code = dynamic(
  () => import('react-notion-x/build/third-party/code').then((m) => m.Code),
  { ssr: false },
)
const RecordRenderer = ({
  post,
  recordMap,
}: {
  post: Post
  recordMap: ExtendedRecordMap
}) => {
  const title = post.title
  const socialDescription = post.summary
  const socialImage = post.cover

  return (
    <>
      <Head>
        {socialDescription && (
          <>
            <meta name="description" content={socialDescription} />
            <meta property="og:description" content={socialDescription} />
            <meta name="twitter:description" content={socialDescription} />
          </>
        )}
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        {socialImage ? (
          <>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={socialImage} />
            <meta property="og:image" content={socialImage} />
          </>
        ) : (
          <meta name="twitter:card" content="summary" />
        )}
      </Head>
      <NotionRenderer
        darkMode={false}
        fullPage={false}
        recordMap={recordMap}
        components={{ Code: Code, nextImage: Image, nextLink: Link }}
      />
    </>
  )
}

export default RecordRenderer
