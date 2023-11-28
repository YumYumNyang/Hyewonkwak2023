'use client'
import Posts from '@/app/[category]/page'
import api from '@/lib/notion/request'
import { Post } from '@/types/notion'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { CodeBlock, ExtendedRecordMap } from 'notion-types'
import React from 'react'

import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'

interface CodeProps {
  block: CodeBlock
  defaultLanguage?: string | undefined
  className?: string | undefined
}

const Code = dynamic<CodeProps>(
  () => import('react-notion-x/build/third-party/code').then((m) => m.Code),
  { ssr: false },
)
const ArticleRenderer = ({
  post,
  recordMap,
}: {
  post: Post
  recordMap: ExtendedRecordMap
}) => {
  return (
    <NotionRenderer
      darkMode={false}
      fullPage={false}
      recordMap={recordMap}
      components={{ Code: Code, nextImage: Image, nextLink: Link }}
    />
  )
}

export default ArticleRenderer
