import React, { RefObject, useEffect, useState } from 'react'

const useImageLoad = (comp: RefObject<HTMLDivElement>) => {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  useEffect(() => {
    if (comp.current) {
      const images = Array.from(comp.current.querySelectorAll('img'))
      const imagePromises = images.map(
        (image) =>
          new Promise((resolve, reject) => {
            const img = new Image()
            img.src = image.src
            img.onload = resolve
            img.onerror = () => {
              reject(image.src)
            }
          }),
      )

      Promise.all(imagePromises)
        .then(() => {
          setImagesLoaded(true)
        })
        .catch((error) => {
          console.error('Image loading failed', error)
        })
    }
  }, [comp])
  return imagesLoaded
}

export default useImageLoad
