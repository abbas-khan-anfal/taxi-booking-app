'use client';
import Image from 'next/image';
import React from 'react';
import Title from '../Title/Title';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

function OurReviews() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 py-20 px-10">
      <div className="flex flex-col justify-center gap-5 p-5">
        <Title text="What Clients Saying" size="lg" />
        <p className="text-md font-medium text-gray mb-10">
          Some of the review from our clients
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop
          className="w-full"
        >
          <SwiperSlide>
            <div>
              <p className="text-md italic mb-5">
                On-time, clean, smart, and comfortable Mercedes. Very friendly
                and professional driver. And a good price to top it all off!
              </p>
              <span className="text-base font-medium">Sara Smith</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className="text-md italic mb-5">
                Very reliable service! The driver was polite and the ride was smooth.
              </p>
              <span className="text-base font-medium">John Doe</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <p className="text-md italic mb-5">
                Excellent experience! On time, affordable, and professional.
              </p>
              <span className="text-base font-medium">Emily Rose</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        <Image
          src="/reviewbg.jpg"
          width={1000}
          height={1000}
          className="h-100 md:h-140 object-cover rounded-md"
          alt="Review background"
        />
      </div>

      {/* Swiper custom styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #000 !important; /* black */
          width: 12px !important;     /* bigger size */
          height: 12px !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }

      `}</style>
    </section>
  );
}

export default OurReviews;
