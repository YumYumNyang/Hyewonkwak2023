import gsap from 'gsap'
import React, { useMemo } from 'react'

const useGsapContext = (scope: React.RefObject<HTMLDivElement>) => {
  const ctx = useMemo(() => gsap.context(() => {}, scope), [scope])
  return ctx
}

export default useGsapContext
