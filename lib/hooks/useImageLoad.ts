import React, { useEffect, useState } from 'react'

const useImageLoad = (images: string[]) => {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  useEffect(() => {
    const imagePromises = images.map(
      (src) =>
        new Promise((resolve, reject) => {
          const img = new Image()
          img.src = src
          img.onload = resolve
          img.onerror = () => {
            reject(src)
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
  }, [images])
  return imagesLoaded
}

export default useImageLoad
