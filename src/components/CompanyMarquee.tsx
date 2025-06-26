"use client"

import Image from "next/image"

interface CompanyLogo {
  src: string
  alt: string
  name: string
}

export default function CompanyMarquee({ logos }: { logos: CompanyLogo[] }) {
  return (
    <>
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex">
          {logos.map(({ src, alt }, i) => (
            <Image
              src={src}
              alt={alt}
              width={75}
              height={75}
              className="mx-6"
              key={i}
            />
          ))}
        </div>

        <div className="animate-marquee2 absolute top-0 flex">
          {logos.map(({ src, alt }, i) => (
            <Image
              src={src}
              alt={alt}
              width={75}
              height={75}
              className="mx-6"
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  )
}
