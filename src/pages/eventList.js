import { graphql } from "gatsby";
import * as React from "react";
import { FaCalendar, FaChevronDown, FaHeart } from 'react-icons/fa';
import ClintLogo from '../components/ClintLogo/ClintLogo';
import EventListHero from '../components/EventListHero/EventListHero';
import Layout from '../layout/layout';
export default function EventList({ data }) {

  return (
    <Layout>
      <EventListHero data={data} />
      <div className="container">
        <div className="md:flex items-center justify-between mt-14">
          <h2 className='text-[32px] leading-[48px] text-[#363848] font-semibold'>Upcoming Events</h2>
          <div className="flex gap-5 md:mt-0 mt-5">
            <div className='border px-4 py-2 rounded-full relative cursor-pointer'>
              <FaChevronDown className='cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-[#5F4BDB]' />
              <FaCalendar className='cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 text-[#5F4BDB]' />
              <select className='outline-none px-3 pr-7 appearance-none'>
                <option value="newest" className='cursor-pointer'>Newest</option>
                <option value="newest" className='cursor-pointer'>Newest</option>
                <option value="newest" className='cursor-pointer'>Newest</option>
                <option value="newest" className='cursor-pointer'>Newest</option>
              </select>
            </div>
            <div className='border px-3 py-2 rounded-full relative cursor-pointer'>
              <FaChevronDown className='cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-[#5F4BDB]' />
              <select className='outline-none px-3 pr-7 appearance-none'>
                <option value="newest" className='cursor-pointer'>Newest</option>
                <option value="newest" className='cursor-pointer'>Newest</option>
                <option value="newest" className='cursor-pointer'>Newest</option>
                <option value="newest" className='cursor-pointer'>Newest</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-12 gap-[46px]">
          <div className="">
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure><img className='w-full' src="/images/blog1.png" alt="Shoes" /></figure>
              <div className="card-body relative">
                <div className="flex items-end gap-[20px]">
                  <div className="blog-bg transition-all duration-500 rounded-[60px] text-center p-4 -mt-[16%]">
                    <h2 className='text-[34px] leading-[28px] font-bold text-[#FFF] my-2'>20</h2>
                    <p className='text-[18px] leading-[28px] font-semibold text-[#ffffff70] mb-[20px]'>NOV</p>
                    <div className="transition-all duration-700 flex items-center justify-center rounded-full w-14 h-14 cursor-pointer">
                      <FaHeart className='text-[24px] transition-all duration-700  cursor-pointer m-2' />
                    </div>
                  </div>
                  <div className="">
                    <p className='text-[#FE8D4D] text-[18px] leading-[24px] tracking-[2px]'>MOBILE APP</p>
                    <h2 className="card-title text-[20px] leading-[30px]">Global Android Programmer Meetup 2020</h2>
                  </div>
                </div>
                <p className='text-[16px] leading-[28px] font-normal'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure><img src="/images/blog2.png" alt="Shoes" /></figure>
              <div className="card-body relative">
                <div className="flex items-end gap-[20px]">
                  <div className="blog-bg transition-all duration-700 rounded-[60px] text-center p-4 -mt-[16%]">
                    <h2 className='text-[34px] leading-[28px] font-bold text-[#FFF] my-2'>15</h2>
                    <p className='text-[18px] leading-[28px] font-semibold text-[#ffffff70] mb-[20px]'>NOV</p>
                    <div className="bg-[#ffffff1c] flex items-center justify-center rounded-full w-14 h-14 cursor-pointer">
                      <FaHeart className='text-[24px] text-[#FFFFFF] cursor-pointer m-2' />
                    </div>
                  </div>
                  <div className="">
                    <p className='text-[#FE8D4D] text-[18px] leading-[24px] tracking-[2px]'>ART EXIBITHION</p>
                    <h2 className="card-title text-[20px] leading-[30px]">Paris Designer Meetup with Ziro Partner</h2>
                  </div>
                </div>
                <p className='text-[16px] leading-[28px] font-normal'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure><img src="/images/blog3.png" alt="Shoes" /></figure>
              <div className="card-body relative">
                <div className="flex items-end gap-[20px]">
                  <div className="blog-bg transition-all duration-700 rounded-[60px] text-center p-4 -mt-[16%]">
                    <h2 className='text-[34px] leading-[28px] font-bold text-[#FFF] my-2'>07</h2>
                    <p className='text-[18px] leading-[28px] font-semibold text-[#ffffff70] mb-[20px]'>NOV</p>
                    <div className="bg-[#ffffff1c] flex items-center justify-center rounded-full w-14 h-14 cursor-pointer">
                      <FaHeart className='text-[24px] text-[#FFFFFF] cursor-pointer m-2' />
                    </div>
                  </div>
                  <div className="">
                    <p className='text-[#FE8D4D] text-[18px] leading-[24px] tracking-[2px]'>ACCOUNTING</p>
                    <h2 className="card-title text-[20px] leading-[30px]">Bussiness Plan in Pandemic with Famous Native Speaker</h2>
                  </div>
                </div>
                <p className='text-[16px] leading-[28px] font-normal'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure><img className='w-full' src="/images/blog1.png" alt="Shoes" /></figure>
              <div className="card-body relative">
                <div className="flex items-end gap-[20px]">
                  <div className="blog-bg transition-all duration-500 rounded-[60px] text-center p-4 -mt-[16%]">
                    <h2 className='text-[34px] leading-[28px] font-bold text-[#FFF] my-2'>20</h2>
                    <p className='text-[18px] leading-[28px] font-semibold text-[#ffffff70] mb-[20px]'>NOV</p>
                    <div className="transition-all duration-700 flex items-center justify-center rounded-full w-14 h-14 cursor-pointer">
                      <FaHeart className='text-[24px] transition-all duration-700  cursor-pointer m-2' />
                    </div>
                  </div>
                  <div className="">
                    <p className='text-[#FE8D4D] text-[18px] leading-[24px] tracking-[2px]'>MOBILE APP</p>
                    <h2 className="card-title text-[20px] leading-[30px]">Global Android Programmer Meetup 2020</h2>
                  </div>
                </div>
                <p className='text-[16px] leading-[28px] font-normal'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure><img src="/images/blog2.png" alt="Shoes" /></figure>
              <div className="card-body relative">
                <div className="flex items-end gap-[20px]">
                  <div className="blog-bg transition-all duration-700 rounded-[60px] text-center p-4 -mt-[16%]">
                    <h2 className='text-[34px] leading-[28px] font-bold text-[#FFF] my-2'>15</h2>
                    <p className='text-[18px] leading-[28px] font-semibold text-[#ffffff70] mb-[20px]'>NOV</p>
                    <div className="bg-[#ffffff1c] flex items-center justify-center rounded-full w-14 h-14 cursor-pointer">
                      <FaHeart className='text-[24px] text-[#FFFFFF] cursor-pointer m-2' />
                    </div>
                  </div>
                  <div className="">
                    <p className='text-[#FE8D4D] text-[18px] leading-[24px] tracking-[2px]'>ART EXIBITHION</p>
                    <h2 className="card-title text-[20px] leading-[30px]">Paris Designer Meetup with Ziro Partner</h2>
                  </div>
                </div>
                <p className='text-[16px] leading-[28px] font-normal'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure><img src="/images/blog3.png" alt="Shoes" /></figure>
              <div className="card-body relative">
                <div className="flex items-end gap-[20px]">
                  <div className="blog-bg transition-all duration-700 rounded-[60px] text-center p-4 -mt-[16%]">
                    <h2 className='text-[34px] leading-[28px] font-bold text-[#FFF] my-2'>07</h2>
                    <p className='text-[18px] leading-[28px] font-semibold text-[#ffffff70] mb-[20px]'>NOV</p>
                    <div className="bg-[#ffffff1c] flex items-center justify-center rounded-full w-14 h-14 cursor-pointer">
                      <FaHeart className='text-[24px] text-[#FFFFFF] cursor-pointer m-2' />
                    </div>
                  </div>
                  <div className="">
                    <p className='text-[#FE8D4D] text-[18px] leading-[24px] tracking-[2px]'>ACCOUNTING</p>
                    <h2 className="card-title text-[20px] leading-[30px]">Bussiness Plan in Pandemic with Famous Native Speaker</h2>
                  </div>
                </div>
                <p className='text-[16px] leading-[28px] font-normal'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure><img className='w-full' src="/images/blog1.png" alt="Shoes" /></figure>
              <div className="card-body relative">
                <div className="flex items-end gap-[20px]">
                  <div className="blog-bg transition-all duration-500 rounded-[60px] text-center p-4 -mt-[16%]">
                    <h2 className='text-[34px] leading-[28px] font-bold text-[#FFF] my-2'>20</h2>
                    <p className='text-[18px] leading-[28px] font-semibold text-[#ffffff70] mb-[20px]'>NOV</p>
                    <div className="transition-all duration-700 flex items-center justify-center rounded-full w-14 h-14 cursor-pointer">
                      <FaHeart className='text-[24px] transition-all duration-700  cursor-pointer m-2' />
                    </div>
                  </div>
                  <div className="">
                    <p className='text-[#FE8D4D] text-[18px] leading-[24px] tracking-[2px]'>MOBILE APP</p>
                    <h2 className="card-title text-[20px] leading-[30px]">Global Android Programmer Meetup 2020</h2>
                  </div>
                </div>
                <p className='text-[16px] leading-[28px] font-normal'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure><img src="/images/blog2.png" alt="Shoes" /></figure>
              <div className="card-body relative">
                <div className="flex items-end gap-[20px]">
                  <div className="blog-bg transition-all duration-700 rounded-[60px] text-center p-4 -mt-[16%]">
                    <h2 className='text-[34px] leading-[28px] font-bold text-[#FFF] my-2'>15</h2>
                    <p className='text-[18px] leading-[28px] font-semibold text-[#ffffff70] mb-[20px]'>NOV</p>
                    <div className="bg-[#ffffff1c] flex items-center justify-center rounded-full w-14 h-14 cursor-pointer">
                      <FaHeart className='text-[24px] text-[#FFFFFF] cursor-pointer m-2' />
                    </div>
                  </div>
                  <div className="">
                    <p className='text-[#FE8D4D] text-[18px] leading-[24px] tracking-[2px]'>ART EXIBITHION</p>
                    <h2 className="card-title text-[20px] leading-[30px]">Paris Designer Meetup with Ziro Partner</h2>
                  </div>
                </div>
                <p className='text-[16px] leading-[28px] font-normal'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure><img src="/images/blog3.png" alt="Shoes" /></figure>
              <div className="card-body relative">
                <div className="flex items-end gap-[20px]">
                  <div className="blog-bg transition-all duration-700 rounded-[60px] text-center p-4 -mt-[16%]">
                    <h2 className='text-[34px] leading-[28px] font-bold text-[#FFF] my-2'>07</h2>
                    <p className='text-[18px] leading-[28px] font-semibold text-[#ffffff70] mb-[20px]'>NOV</p>
                    <div className="bg-[#ffffff1c] flex items-center justify-center rounded-full w-14 h-14 cursor-pointer">
                      <FaHeart className='text-[24px] text-[#FFFFFF] cursor-pointer m-2' />
                    </div>
                  </div>
                  <div className="">
                    <p className='text-[#FE8D4D] text-[18px] leading-[24px] tracking-[2px]'>ACCOUNTING</p>
                    <h2 className="card-title text-[20px] leading-[30px]">Bussiness Plan in Pandemic with Famous Native Speaker</h2>
                  </div>
                </div>
                <p className='text-[16px] leading-[28px] font-normal'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* pagination */}
        <div className="mt-[60px]">
          <div class="flex justify-center">
            <nav aria-label="Page navigation example">
              <ul class="list-style-none flex items-center">
                <li>
                  <a
                    class="relative block rounded-full bg-transparent py-1.5 px-3 text-[18px] leading-[27px] font-medium text-[#5F4BDB] transition-all duration-300 hover:bg-neutral-100"
                    href="#!"
                  >{'<< Previous'}</a>
                </li>
                <ul className='flex bg-[#ECDEFF] rounded-[61px] px-[28px] items-center'>
                  <li>
                    <a
                      class="relative flex items-center justify-center hover:rounded-full hover:bg-[#5F4BDB] hover:w-[62px] hover:h-[53px] py-1.5 px-3 text-[18px] leading-[27px] font-medium text-[#5F4BDB] hover:text-[#FFFFFF] transition-all duration-300"
                      href="#!"
                    >1</a
                    >
                  </li>
                  <li aria-current="page">
                    <a
                      class="relative flex items-center justify-center rounded-full bg-[#5F4BDB] w-[62px] h-[53px] py-1.5 px-3  text-[18px] leading-[27px] font-medium text-[#FFFFFF] transition-all duration-300"
                      href="#!"
                    >2
                      <span
                        class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
                      >(current)</span
                      >
                    </a>
                  </li>
                  <li>
                    <a
                      class="relative flex items-center justify-center hover:rounded-full hover:bg-[#5F4BDB] hover:w-[62px] hover:h-[53px] py-1.5 px-3 text-[18px] leading-[27px] font-medium text-[#5F4BDB] hover:text-[#FFFFFF] transition-all duration-300"
                      href="#!"
                    >3</a
                    >
                  </li>
                </ul>
                <li>
                  <a
                    class="relative block rounded-full bg-transparent py-1.5 px-3 text-[18px] leading-[27px] font-medium text-[#5F4BDB] transition-all duration-300 hover:bg-neutral-100"
                    href="#!"
                  >{'Next >>'}</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <ClintLogo />
      </div>
    </Layout>
  );
};


export const query = graphql`
query EventList {
EventListHero: allMarkdownRemark(
    sort: {id: DESC}
    filter: {frontmatter: {section: {in: "Event List Hero"}}}
  ) {
    nodes {
      frontmatter {
        id
        sliderItems {
          btn1
          btn2
          date
          details
          firstTitle
          hero
          id
          location
          name
          title
          value
        }
      }
    }
  }
}
`