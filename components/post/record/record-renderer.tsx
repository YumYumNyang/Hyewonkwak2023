'use client'
import React from 'react'
import { CodeBlock, ExtendedRecordMap } from 'notion-types'
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'
import { Collection } from 'react-notion-x/build/third-party/collection'
import dynamic from 'next/dynamic'
import 'prismjs/themes/prism-tomorrow.css'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { Post } from '@/types/notion'

interface CodeProps {
  block: CodeBlock
  defaultLanguage?: string | undefined
  className?: string | undefined
}

const Code = dynamic<CodeProps>(
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
  return (
    <NotionRenderer
      darkMode={false}
      fullPage={false}
      recordMap={recordMap}
      components={{ Code: Code, nextImage: Image, nextLink: Link }}
    />
  )
}

export default RecordRenderer
