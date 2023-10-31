'use client'
import Posts from '@/app/[category]/page'
import api from '@/lib/notion/request'
import { Post } from '@/types/notion'
import { ExtendedRecordMap } from 'notion-types'
import React from 'react'
import { NotionRenderer } from 'react-notion-x'

const WorkRenderer = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
  return <NotionRenderer recordMap={recordMap} />
}

export default WorkRenderer
