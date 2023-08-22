"use client";

import Image from "next/image"
import Link from "next/link"
// Import Swiper React components
import { Swiper, SwiperSlide   } from 'swiper/react';
import SwiperCore from 'swiper';
// Import Swiper styles
import 'swiper/css';
import image from '@/app/image/Photo2.png'
import image2 from '@/app/image/Photo3.png'
import image3 from '@/app/image/Photo1.png'
export default function Section1() {
  
  return (
    <section className="py-20 mx-5 mt-16 px-5"  >
        <div className="mx-auto max-w-screen-xl w-full">
          

            <Swiper>
                <SwiperSlide>{ Slide() }</SwiperSlide>
                <SwiperSlide>{ Slide2() }</SwiperSlide>
                <SwiperSlide>{ Slide3() }</SwiperSlide>
            </Swiper>

            
        </div>
    </section>
  )
}

function Slide(){
    return (
        <div className="grid md:grid-cols-2 " id="Accueil">
           
            <div className="info flex justify-center flex-col">
                <div className="title">
                    <Link href={"/"} className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">Une Créa illustrant les cinq types de BESC et le slogan</Link>
                </div>
                <p className="text-gray-500 py-3">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
            </div>
            <div className="image">
                <Link href={"/"}>
                   <Image src={image}  quality={97} alt="Feature img"  style={{ borderRadius:" 50px" }} />
                </Link>
            </div>
        </div>
    )
}
function Slide2(){
    return (
        <div className="grid md:grid-cols-2">
           
            <div className="info flex justify-center flex-col">
                <div className="title">
                    <Link href={"/"} className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">Une Créa jls world et TUDOR</Link>
                </div>
                <p className="text-gray-500 py-3">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
            </div>
            <div className="image">
                <Link href={"/"}>
                   <Image src={image2}  quality={97} alt="Feature img"  style={{ borderRadius:" 50px" }} />
                </Link>
            </div>
        </div>
    )
}
function Slide3(){
    return (
        <div className="grid md:grid-cols-2">
           
            <div className="info flex justify-center flex-col">
                <div className="title">
                    <Link href={"/"} className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">Une Créa pour chaque type de BESC</Link>
                </div>
                <p className="text-gray-500 py-3">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
            </div>
            <div className="image">
                <Link href={"/"}>
                   <Image src={image3} quality={97} alt="Feature img"  style={{ borderRadius:" 50px" }} />
                </Link>
            </div>
        </div>
    )
}