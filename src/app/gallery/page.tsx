'use client'

import { GalleryImageProps, GalleryImages } from '@/lib/gallery-images'
import Container from '@/components/Container'
import { cn } from '@/lib/utils'
import Image from 'next/image'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | ASTROV',
  description: 'Explore our gallery of illustrations, paintings, and drawings, created both by commission and for personal practice.',
}

export default function Gallery() {
  function ImagesList({ images }: { images: GalleryImageProps[] }) {
    return (
      /* Container */
      <div className="flex max-w-full flex-wrap items-center justify-center gap-4">
        {/* Images */}
        {images.map((image) => (
          <motion.div
            key={image.title}
            layoutId={image.title}
            onClick={() => setSelectedImage(image)}
            className={cn(
              'relative h-32 flex-auto basis-40 cursor-pointer overflow-hidden rounded-lg transition-all duration-500 sm:h-72 sm:basis-72 md:h-[28rem] md:basis-[34rem]',
              image.isPortrait && 'h-32 basis-32 sm:basis-72 md:basis-80',
            )}
          >
            <Image
              className="peer min-h-full object-cover transition-all duration-500 hover:scale-105 hover:brightness-75"
              src={image.path}
              width={1000}
              height={1000}
              alt={image.title}
            />
            <h3 className="absolute left-2 top-2 min-w-[7rem] rounded-full border border-white/25 px-4 py-2.5 text-center text-white opacity-0 backdrop-blur-xl transition-all duration-300 hover:opacity-100 peer-hover:opacity-100 sm:text-xl">
              {image.title}
            </h3>
          </motion.div>
        ))}
      </div>
    )
  }

  const [selectedImage, setSelectedImage] = useState<GalleryImageProps | null>()

  function closeModal() {
    setSelectedImage(null)
  }

  return (
    <section className="relative flex h-full w-full flex-col gap-5 overflow-hidden p-4 dark:bg-zinc-950">
      {/* Title */}
      <Container className="m-auto flex items-center justify-start">
        <h1 className="dark:text-astrov-50 font-alt text-7xl font-bold uppercase tracking-widest text-astrov-400 md:text-9xl">
          Gallery
        </h1>
      </Container>
      {/* Image List */}
      <ImagesList images={GalleryImages} />
      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed left-0 right-0 top-0 z-50 m-auto flex h-screen w-screen items-center justify-center bg-black/90 px-6 backdrop-blur-md"
            layoutId={selectedImage.path}
            onClick={closeModal}
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className={cn(
                'relative h-[30rem] w-[70rem] sm:h-fit',
                selectedImage.isPortrait && 'h-fit w-[30rem]',
              )}
            >
              {/* Model description */}
              <motion.div className="absolute bottom-0 left-0 m-2 flex h-fit w-fit flex-col gap-4 rounded-lg rounded-tr-lg bg-black/70 p-6 text-white backdrop-blur-lg">
                {/* Model title */}
                <h4 className="font-alt text-2xl font-bold">
                  {selectedImage.title}
                </h4>
                {/* Model caption */}
                <p className="max-w-md break-words text-base text-slate-300">
                  {selectedImage.description}
                </p>
              </motion.div>

              {/* Modal image  */}
              <Image
                src={selectedImage.path}
                width={1920}
                alt={`${selectedImage.title}, ${selectedImage.description}`}
                height={1000}
                className={cn(
                  'min-h-full rounded-lg object-cover',
                  selectedImage.position === 'left' && 'object-left',
                  selectedImage.position === 'right' && 'object-right',
                )}
              />
              {/* Close Button */}
              <motion.button
                className="absolute right-0 top-0 z-30 m-2 grid aspect-square place-content-center rounded-full bg-astrov-400 p-2 text-white transition-colors hover:bg-astrov-500"
                onClick={closeModal}
              >
                <X size={28} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
