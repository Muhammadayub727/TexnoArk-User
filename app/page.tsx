"use client"
import Carusel from '../components/carusel/page'
import { ArrowRightOutlined, BarChartOutlined, HeartOutlined, BuildOutlined } from "@ant-design/icons";
import Container from '../components/container/page'
import './globals.css'
import { Button } from 'antd';
import Image from 'next/image';
import Footer_Banner from '../assets/Footer_Banner.png'
import Swiper from '../components/swiper/page'
import useCategoryStore from '@/store/categories/page';
import { useEffect } from 'react';

export default function Home() {
  //Datas
  const data = [
    { id: 1, name: "Smartfonlar" },
    { id: 2, name: "Televizorlar" },
    { id: 3, name: "Muzlatkichlar" },
    { id: 4, name: "Kir yuvish mashinasi" },
    { id: 5, name: "Smartfonlar" },
    { id: 6, name: "Kir yuvish mashinasi" },
  ];

  const { categories, getCategories } = useCategoryStore();
  let arr = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    getCategories();
  }, []);

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
              Hammasi <ArrowRightOutlined />
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
            <h1 className="font-bold text-[32px]">Bestsellers</h1>
            <Button className="btn_all">
              Hammasi <ArrowRightOutlined />
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
              Hammasi <ArrowRightOutlined />
            </Button>
          </div>

          <div className="mt-[24px]">
            <Swiper />
          </div>
        </Container>
      </div>

      <div className="mt-[67px]">
        <Container>
          <div>
            <Image src={Footer_Banner} alt="Banner" />
          </div>
        </Container>
      </div>
    </>
  );
}
