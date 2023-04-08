import React from "react"
import Image, { StaticImageData } from "next/image"

interface CustomImageProps {
  size: string
  src: StaticImageData
  alt: string
  className?: string
}

const CustomImage = (props: CustomImageProps) => {
  const { size, src, alt, className = "" } = props

  return (
    <div className={`${className} w-fit rounded-2xl`}>
      <div className={`${size} relative`}>
        <Image
          draggable={false}
          src={src}
          alt={alt}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  )
}

export default CustomImage
