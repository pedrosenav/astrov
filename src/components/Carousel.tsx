'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

function SlideGradient() {
  return (
    <div className="from-astrov-600/80 to-astrov-500/20 absolute z-10 min-h-[54rem] w-full overflow-hidden bg-gradient-to-r sm:to-transparent "></div>
  )
}

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="min-h-[54rem] w-full"
    >
      <SwiperSlide className="relative min-h-[54rem]">
        <SlideGradient />
        <div className="min-h-[54rem] bg-[url('../assets/images/carousel/mobile/1.jpg')] bg-right sm:bg-[url('../assets/images/carousel/1.jpg')]"></div>
      </SwiperSlide>

      <SwiperSlide className="relative min-h-[54rem]">
        <SlideGradient />
        <div className="min-h-[54rem] bg-[url('../assets/images/carousel/mobile/2.jpg')] bg-top sm:bg-[url('../assets/images/carousel/2.jpeg')]"></div>
      </SwiperSlide>

      <SwiperSlide className="relative min-h-[54rem]">
        <SlideGradient />
        <div className="min-h-[54rem] bg-[url('../assets/images/carousel/mobile/3.jpg')] bg-top sm:bg-[url('../assets/images/carousel/3.jpeg')]"></div>
      </SwiperSlide>

      <SwiperSlide className="relative min-h-[54rem]">
        <SlideGradient />
        <div className="min-h-[54rem] bg-[url('../assets/images/carousel/4.jpeg')] bg-center"></div>
      </SwiperSlide>

      <SwiperSlide className="relative min-h-[54rem]">
        <SlideGradient />
        <div className="min-h-[54rem] bg-[url('../assets/images/carousel/mobile/5.jpg')] bg-top sm:bg-[url('../assets/images/carousel/5.jpeg')] sm:bg-left-top"></div>
      </SwiperSlide>
    </Swiper>
  )
}
