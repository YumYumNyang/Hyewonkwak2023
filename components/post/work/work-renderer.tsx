'use client'
import Posts from '@/app/[category]/page'
import api from '@/lib/notion/request'
import { Post } from '@/types/notion'
import { ExtendedRecordMap } from 'notion-types'
import React from 'react'
import 'react-notion-x/src/styles.css'
import { Code } from 'react-notion-x/build/third-party/code'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { NotionRenderer } from 'react-notion-x'

const WorkRenderer = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
  return (
    <NotionRenderer
      recordMap={recordMap}
      components={{
        Code,
        Collection,
      }}
    />
  )
}

export default WorkRenderer
