"use client"
import Carusel from '../components/carusel/page'
import { ArrowRightOutlined, BarChartOutlined, HeartOutlined, BuildOutlined } from "@ant-design/icons";
import Container from '../components/container/page'
import './globals.css'
import { Button } from 'antd';
import Image from 'next/image';
import Footer_Banner from '../assets/cute_safety.svg'
import Swiper from '../components/swiper/page'
import useCategoryStore from '@/store/categories/page';
import { useEffect } from 'react';

import Apple from "@/assets/apple.png"
import Huawei from "@/assets/huawei.png"
import Artel from "@/assets/Artel.png"




export default function Home() {
  //Datas
  const data = [
    { id: 1, name: "Smartfonlar",img:Apple},
    { id: 2, name: "Televizorlar"},
    { id: 3, name: "Muzlatkichlar"},
    { id: 4, name: "Konditsanerlar"},
    { id: 5, name: "Kir yuvish mashinasi" },
    { id: 6, name: "Barcha Mahsulotlar"},
  ];

  const dataAnimation = [
    {title: "Apple" , bg: "#fff" , img: Apple},
    {title: "Huawei" , bg: "#fff" , img: Huawei},
    {title:"Artel", bg: "#fff" , img:Artel },
    {title: "Apple" , bg: "#fff" , img: Apple},
    {title: "Huawei" , bg: "#fff" , img: Huawei},
    {title:"Artel", bg: "#fff" , img:Artel },
  ];

  const { categories, getCategories } = useCategoryStore();
  let arr = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    getCategories();
  });

  return (
    <>
      <div className="mt-[24px]">
        <Carusel />
      </div>

      <div className="mt-[60px]">
        <Container>
          <div className="flex items-center flex-wrap justify-between gap-[20px]">
            {data.map((item, i) => (
              <div
                key={item.id}
                className="flex items-center justify-between w-[440px] h-[120px] py-[45px] px-[59px] bg-white rounded-xl cursor-pointer card"
              >
                <BuildOutlined className="w-[60px] h-[60px] bg-[#FF800B1A] rounded-full p-[20px] text-[#D55200]" />
                <p>{item.name}</p>
                <ArrowRightOutlined />
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div className="mt-[64px]">
        <Container>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-[32px]">Popular Product</h1>
            <Button className="btn_all">
              All Product <ArrowRightOutlined />
            </Button>
          </div>

          <div className="mt-[24px]">
            <Swiper />
          </div>
        </Container>
      </div>

      <div className="mt-[64px]">
        <Container>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-[32px]">BestSellers</h1>
            <Button className="btn_all">
              All Product <ArrowRightOutlined />
            </Button>
          </div>

          <div className="mt-[24px]">
            <Swiper />
          </div>
        </Container>
      </div>

      <div className="mt-[64px]">
        <Container>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-[32px]">Promotional product</h1>
            <Button className="btn_all">
              All Product <ArrowRightOutlined />
            </Button>
          </div>

          <div className="mt-[24px]">
            <Swiper />
          </div>
        </Container>
      </div>

      <div className="mt-[64px]">
        <Container>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-[32px]">Brands</h1>
          </div>
          <div className="mt-[24px] grid grid-cols-6 gap-[20px]">
            {dataAnimation.map((item, index) => (
              <div key={index} className="flex items-center p-[20px] bg-white rounded-xl">
                <Image src={item.img} alt={item.title}  className='ml-[50px] w-[70px]' />
                
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div className="mt-[67px]">
        <Container>
          <div className="w-full p-[80px] bg-yellow-300 flex items-center justify-between rounded-md my-[67px]">
            <div>
              <p className="text-[18px] text-blue-500">Mahsulot yoqmadi - pulni qaytarib beramiz</p>
              <h2 className="text-[36px] text-blue-500 font-[900]">Kamchilik bormi yoki etkazib berishda mahsulot yoqmadimi?</h2>
            </div>
            <Image src={Footer_Banner} alt="img" width={240} height={240}/>
          </div>
        </Container>
      </div>
    </>
  );
}
