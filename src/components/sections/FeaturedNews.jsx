import React, { useState, useRef } from 'react';
import news1 from '../../assets/garibook/news/news_1.webp';
import news2 from '../../assets/garibook/news/news_2.jpg';
import news3 from '../../assets/garibook/news/news_3.jpg';
import brandDhakapost from '../../assets/garibook/news/brand_dhakapost.png';
import brandDailystar from '../../assets/garibook/news/brand_dailystar.png';
import brandProthomalo from '../../assets/garibook/news/brand_prothomalo.png';
import rightArrow from '../../assets/garibook/right-arrow.png';

const NEWS_DATA = [
  {
    id: 1,
    title: 'ঢাকায় রাইড শেয়ারিং সেবা চালু করল গাড়িবুক',
    subText: 'বাংলাদেশে কার রেন্টালের পর এবার রাইড শেয়ারিং সেবা শুরু করলো গাড়িবুক (Garibook)। উত্তরা, বসুন্ধরা, বনানী, বারিধারা ও বারিধারা ডিওএইচএসসহ ঢাকার নির্বাচিত এলাকায় বাইক ও গাড়ি রাইড বুকিং করা যাচ্ছে।',
    date: '23 Sep 2024',
    image: news1,
    brandImage: brandDhakapost,
    url: 'https://www.dhakapost.com/economy/481012',
    delay: 150,
  },
  {
    id: 2,
    title: 'Garibook has expanded its transportation services with the launch of Garibook Ridesharing',
    subText: 'Offering both car and bike rides across key areas of Dhaka including Gulshan, Uttara, Bashundhara, Banani, Baridhara and Baridhara DOHS, along with other locations.',
    date: '23 Sep 2024',
    image: news2,
    brandImage: brandDailystar,
    url: 'https://garibook.com/newsrooms',
    delay: 300,
  },
  {
    id: 3,
    title: 'Garibook, a long-standing car rental service platform providing intercity transportation across Bangladesh',
    subText: 'Garibook has officially launched its new ride-sharing service, adding both car and bike rides to its existing services for seamless intra-city travel.',
    date: '23 Sep 2024',
    image: news3,
    brandImage: brandProthomalo,
    url: 'https://garibook.com/newsrooms',
    delay: 450,
  },
];

const FeaturedNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(NEWS_DATA.length - 1, prev + 1));
  };

  return (
    <section className="passenger-speak-wrapper bg-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Slider Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div
            className="section-header max-w-2xl"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            <h2 className="font-['Montserrat'] font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#121212] leading-tight tracking-tight">
              We Featured by Top news Platforms
            </h2>
          </div>

          {/* Slider Prev / Next Controls with Stem Arrow SVGs */}
          <div
            className="flex items-center gap-3"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous News"
              className="custom-slider-arrow w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-full border border-gray-200 bg-white hover:bg-[#121212] text-[#121212] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
            >
              <svg viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex === NEWS_DATA.length - 1}
              aria-label="Next News"
              className="custom-slider-arrow w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-full border border-gray-200 bg-white hover:bg-[#121212] text-[#121212] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
            >
              <svg viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </button>
          </div>
        </div>

        {/* 3 News Cards Grid with Animated Sliding & Hover Zoom */}
        <div
          ref={sliderRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8"
        >
          {NEWS_DATA.map((item) => (
            <div
              key={item.id}
              className="single-box-layout-one-wrap flex flex-col justify-between group cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={item.delay}
            >
              <div>
                {/* News Card Image Container with Hover Scale */}
                <div className="hover-animation-img overflow-hidden rounded-2xl sm:rounded-3xl h-[290px] sm:h-[325px] lg:h-[350px] w-full mb-5 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-2xl sm:rounded-3xl group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* News Metadata */}
                <span className="text-sm font-medium text-[#9d9d9d]">
                  {item.date}
                </span>

                {/* News Title */}
                <h3 className="sblo-title font-['Montserrat'] font-bold text-xl sm:text-2xl text-[#121212] group-hover:text-[#0e52ff] leading-snug mt-2 mb-3 line-clamp-2 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Subtext description */}
                <p className="text-base text-[#6b7280] leading-relaxed line-clamp-3 mb-6">
                  {item.subText}
                </p>
              </div>

              {/* Card Footer: Brand Logo & Read Article Link */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="news-brand-wrap h-8 flex items-center">
                  <img
                    src={item.brandImage}
                    alt="Publisher"
                    className="max-h-7 max-w-[140px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-read-more inline-flex items-center gap-2 font-semibold text-base text-[#0e52ff] group-hover:underline"
                >
                  <span>Read Article</span>
                  <img
                    src={rightArrow}
                    alt=""
                    className="w-4 h-4 object-contain group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
