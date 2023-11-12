'use client'
import Posts from '@/app/[category]/page'
import api from '@/lib/notion/request'
import { Post } from '@/types/notion'
import { ExtendedRecordMap } from 'notion-types'
import React from 'react'
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'

const ArticleRenderer = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
  return <NotionRenderer recordMap={recordMap} />
}

export default ArticleRenderer
