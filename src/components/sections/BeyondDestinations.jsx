import React from 'react';
import blog1 from '../../assets/garibook/blogs/blog_1.webp';
import blog2 from '../../assets/garibook/blogs/blog_2.webp';
import blog3 from '../../assets/garibook/blogs/blog_3.webp';

const BLOG_DATA = [
  {
    id: 1,
    title: 'রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহুরে পরিবহন ব্যবস্থা',
    subTitle: 'রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহুরে পরিবহন ব্যবস্থা। দৈনন্দিন যাতায়াত এখন আরও দ্রুত ও স্বাচ্ছন্দ্যময়।',
    date: '15 Sep 2024',
    image: blog1,
    url: 'https://garibook.com/blogs/রাইড-শেয়ারিংয়ে-বদলে-যাচ্ছে-বাংলাদেশের-শহুরে-পরিবহন-ব্যবস্থা',
    delay: 150,
  },
  {
    id: 2,
    title: 'সিলেটের দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা',
    subTitle: 'সিলেটের আকর্ষণীয় দর্শনীয় স্থান, ঐতিহাসিক স্থাপনা, চা বাগান এবং ঐতিহ্যবাহী খাবারের বিস্তারিত গাইড।',
    date: '20 Sep 2024',
    image: blog2,
    url: 'https://garibook.com/blogs/সিলেটের-দর্শনীয়-স্থান-সমূহ-খাবার-ও-থাকার-ব্যবস্থা',
    delay: 300,
  },
  {
    id: 3,
    title: 'নওগাঁর দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা',
    subTitle: 'নওগাঁ জেলা প্রত্নতাত্ত্বিক নিদর্শন, পাহাড়পুর বৌদ্ধবিহার, ধর্মীয় স্থাপনা ও প্রাকৃতিক সৌন্দর্যের অনন্য সংমিশ্রণ।',
    date: '20 Sep 2024',
    image: blog3,
    url: 'https://garibook.com/blogs/নওগাঁর-দর্শনীয়-স্থান-সমূহ-খাবার-ও-থাকার-ব্যবস্থা',
    delay: 450,
  },
];

const BeyondDestinations = () => {
  return (
    <section className="blog-section-wrapper section-padding-ptb-70 bg-white py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with AOS Slide-up */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="200"
        >
          <div className="section-header max-w-2xl">
            <h2 className="font-['Montserrat'] font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#121212] leading-tight tracking-tight">
              Beyond Destinations
            </h2>
            <p className="text-base sm:text-lg text-[#6b7280] leading-relaxed mt-2 font-medium">
              Discover travel hacks, guides, and inspirations for your next intercity trip with Garibook.
            </p>
          </div>

          <div>
            <a
              href="https://garibook.com/blogs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-lg sm:text-xl text-[#0e52ff] hover:text-[#0038c4] transition-colors group cursor-pointer"
            >
              <span className="btn-label">Show All Blogs</span>
              <svg
                viewBox="0 0 448 512"
                className="w-5 h-5 fill-current group-hover:translate-x-1.5 transition-transform duration-300"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </a>
          </div>
        </div>

        {/* 3 Blog Cards with Scroll Sliding Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {BLOG_DATA.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="layout-three-box-item group flex flex-col justify-between cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={item.delay}
            >
              <div>
                {/* Blog Image with Hover Zoom */}
                <div className="lthbi-image overflow-hidden rounded-2xl sm:rounded-3xl h-[280px] sm:h-[313px] w-full mb-4 shadow-sm bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-2xl sm:rounded-3xl group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Blog Content */}
                <div className="lthbi-text mt-2">
                  <span className="date_time text-sm font-medium text-[#9d9d9d] block mb-2">
                    {item.date}
                  </span>
                  <h3 className="font-['Montserrat'] font-bold text-xl sm:text-[22px] text-[#121212] group-hover:text-[#0e52ff] leading-snug mb-2 line-clamp-2 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-base text-[#6b7280] leading-relaxed line-clamp-2">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondDestinations;
