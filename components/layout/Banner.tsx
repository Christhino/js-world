"use client";

import Image from "next/image"
import Link from "next/link"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
// Import Swiper styles
import 'swiper/css';
import image from '@/app/image/Photo2.png'
export default function Section1() {

    // SwiperCore.use([Autoplay])

    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition: "right"
    }

  return (
    <section className="py-20 mx-5 mt-16 px-5" style={bg} >
        <div className="mx-auto max-w-screen-xl w-full">
          

            <Swiper>
                <SwiperSlide>{ Slide() }</SwiperSlide>
                <SwiperSlide>{ Slide() }</SwiperSlide>
                <SwiperSlide>{ Slide() }</SwiperSlide>
                <SwiperSlide>{ Slide() }</SwiperSlide>
                <SwiperSlide>{ Slide() }</SwiperSlide>

            </Swiper>

            
        </div>
    </section>
  )
}

function Slide(){
    return (
        <div className="grid md:grid-cols-2">
           
            <div className="info flex justify-center flex-col">
                <div className="title">
                    <Link href={"/"} className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</Link>
                </div>
                <p className="text-gray-500 py-3">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
            </div>
            <div className="image">
                <Link href={"/"}>
                   <Image src={image} width={650} height={678} quality={97} alt="Feature img" />
                </Link>
            </div>
        </div>
    )
}