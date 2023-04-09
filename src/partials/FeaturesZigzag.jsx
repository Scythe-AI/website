import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative, Pagination, Navigation, EffectFade } from "swiper";
import "swiper/swiper-bundle.css";

import FeatImage02 from '../images/stage2.png';
import FeatImage03 from '../images/features-03-image-03.png';
import confusionMatrix from "../images/ModelImages/confusionMatrix.png"
import diamondseaborn from "../images/ModelImages/diamondseaborn.png"
import download from "../images/ModelImages/download.png"
import heatmaprocket from "../images/ModelImages/heatmaprocket.png"
import heatmaptop8 from "../images/ModelImages/heatmaptop8.png"
import precisionrecall from "../images/ModelImages/precision-recall.png"
import purpleredsuccess from "../images/ModelImages/purpleredsuccess.png"
import redgreenhistogram from "../images/ModelImages/redgreenhistogram.png"
import redpurplesuccesslabeled from "../images/ModelImages/squarefrontpageimage.png"
import rfcalibration from "../images/ModelImages/rfcalibration.png"
import RocCurve from "../images/ModelImages/RocCurve.png"

function FeaturesZigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Leveraging the power of ML</div>
            <h1 className="h2 mb-4">How Scythe AI Works</h1>
            <p className="text-xl text-gray-400">Scythe aims to expedite the sourcing process and signficantly shorten the due diligence process, allowing Private Equity and Venture Capital firms do what they do best - invest in and grow their portfolio companies.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
              <div class="swiper-pagination"></div>
              <Swiper
                grabCursor={true}
                effect={"creative"}
                navigation={true}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                  dynamicBullets: true
                }}
                style={{
                  "--swiper-pagination-color": "#694efd",
                  "--swiper-navigation-color": "#694efd",
                  "--swiper-pagination-bullet-inactive-color": "#f3ff33",
                }}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                modules={[EffectCreative, Pagination, Navigation]}
                className="mySwiper"
              >
                {/* <SwiperSlide><img className="max-w-full mx-auto md:max-w-none h-auto" src={ confusionMatrix }/></SwiperSlide> */}
                <SwiperSlide><img className="max-w-full mx-auto md:max-w-none h-auto" src={ redpurplesuccesslabeled } width="540" height="2505" alt="Features 02" /></SwiperSlide>
                <SwiperSlide><img className="max-w-full mx-auto md:max-w-none h-auto" src={ diamondseaborn } width="540" height="405" alt="Features 02" /></SwiperSlide>
                {/* <SwiperSlide><img className="max-w-full mx-auto md:max-w-none h-auto" src={ download } width="540" height="405" alt="Features 02" /></SwiperSlide> */}
                <SwiperSlide><img className="max-w-full mx-auto md:max-w-none h-auto" src={ heatmaprocket } width="540" height="405" alt="Features 02" /></SwiperSlide>
                {/* <SwiperSlide><img className="max-w-full mx-auto md:max-w-none h-auto" src={ heatmaptop8 } width="540" height="405" alt="Features 02" /></SwiperSlide> */}
                <SwiperSlide><img className="max-w-full mx-auto md:max-w-none h-auto" src={ precisionrecall } width="540" height="405" alt="Features 02" /></SwiperSlide>
                {/* <SwiperSlide><img className="max-w-full mx-auto md:max-w-none h-auto" src={ purpleredsuccess } width="540" height="405" alt="Features 02" /></SwiperSlide> */}
                {/* <SwiperSlide><img className="max-w-full mx-auto md:max-w-none h-auto" src={ redgreenhistogram } width="540" height="405" alt="Features 02" /></SwiperSlide> */}
                <SwiperSlide><img className="max-w-full mx-auto md:max-w-none h-auto" src={ rfcalibration } width="540" height="405" alt="Features 02" /></SwiperSlide>
                <SwiperSlide><img className="max-w-full mx-auto md:max-w-none h-auto" src={ RocCurve } width="540" height="405" alt="Features 02" /></SwiperSlide>
              
              </Swiper>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Stage 1.</div>
                  <h3 className="h3 mb-3">A Company Success and Deal Potential/Size Predictor</h3>
                  <p className="text-xl text-gray-400 mb-4">We’ve already made sig process on the first stage, having developed a model with an 85% success rate. This already outperforms Pitchbooks VC predictor released last week, which leads industry with 74%. We've already developed a model with:</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>85% success rate, outperforming Pitchbook's industry-leading VC Predictor by 11%</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>the potential for flexible input, essential for firm-tailoring</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>more room to grow: we've spent less than a month working with just one dataset</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width="540" height="405" alt="An Early Look at the Sourcing Engine." />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Stage 2.</div>
                  <h3 className="h3 mb-3">An NLP Search Engine</h3>
                  <p className="text-xl text-gray-400 mb-4">We aim to build off of our Stage 1 model, using layer analysis and the same tech in LLMS like GPT-4 to create an NLP sourcing engine with the ability to make impactful predictive observations. </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>A tool that will springboard the sourcing process</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Quickly assess state of your industry</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Understand why the model is making its choices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            {/* <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              {/* <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width="540" height="405" alt="Features 03" />
              </div> */}
              {/* Content */}
              {/* <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
                  <h3 className="h3 mb-3">Keep projects on schedule</h3>
                  <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul>
                </div>
              </div> */}
            {/* </div> */} 

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesZigzag;