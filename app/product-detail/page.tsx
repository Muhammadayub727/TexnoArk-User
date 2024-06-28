"use client"
import React, { useState } from "react";
import Container from "../../components/container/page";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./style.css";
import { Avatar, Button, Carousel, Tooltip } from "antd";
import Image from "next/image";
import Deliviry from "@/assets/deliviry.svg";
import Store from "@/assets/store.png";
import Clock from "@/assets/clock.png"
import { UserOutlined } from "@ant-design/icons";
import Swiper from '../../components/swiper/page'

function Product() {
  const images = [
    {
      original:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iPhone_14_Pro_Max.jpg",
      thumbnail:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iPhone_14_Pro_Max.jpg",
    },
    {
      original:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iPhone_14_Pro_Max.jpg",
      thumbnail:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iPhone_14_Pro_Max.jpg",
    },
    {
      original:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iPhone_14_Pro_Max.jpg",
      thumbnail:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iPhone_14_Pro_Max.jpg",
    },
    {
      original:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iPhone_14_Pro_Max.jpg",
      thumbnail:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iPhone_14_Pro_Max.jpg",
    },
    {
      original:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iPhone_14_Pro_Max.jpg",
      thumbnail:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iPhone_14_Pro_Max.jpg",
    },
  ];
  const [comments, setcommets] = useState("Telefon xususiyatlari");

  return (
    <>
      <div>
        <Container>
          <p className="flex gap-[10px] mt-[20px]">
            <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
              Bosh sahifa
            </span>
            <span className="block px-[18px] py-[6px] rounded bg-[#F5F5F5] text-[#240E0066] font-medium">
              Smartfonlar
            </span>
            <span className="block px-[18px] py-[6px] rounded bg-[white] font-medium">
              Apple iPhone 14 128Gb Gold
            </span>
          </p>
        </Container>
      </div>
      <div className="mt-[24px]">
        <Container>
          <div className="flex justify-between">
            <div className="w-[700px] bg-white rounded-md h-[560px]">
              <ImageGallery
                items={images}
                infinite={true}
                thumbnailPosition="left"
                showFullscreenButton={false}
                showPlayButton={false}
                autoPlay={true}
                showNav={false}
              />
            </div>
            <div className="w-[600px] bg-white h-[560px] p-[40px] rounded-md">
              <h3 className="text-[24px] font-bold mb-[26px]">
                {" "}
                Apple iPhone 14 128Gb Gold
              </h3>
              <div className="flex items-center gap-[12px]">
                <p className="text-[16px] text-[#240E00CC] font-medium mr-3">
                  Color:
                </p>
                <div className="w-[24px] h-[24px] bg-[#9747FF] rounded-full cursor-pointer"></div>
                <div className="w-[24px] h-[24px] bg-[#3472ED] rounded-full cursor-pointer"></div>
                <div className="w-[24px] h-[24px] bg-[#D55200] rounded-full cursor-pointer"></div>
                <div className="w-[24px] h-[24px] bg-[#DADADA] rounded-full cursor-pointer"></div>
                <div className="w-[24px] h-[24px] bg-[#FEDACB] rounded-full cursor-pointer"></div>
              </div>
              <p className="text-[16px] text-[#240E00CC] font-medium mr-3 mt-[42px] mb-[36px]">
                Price:{" "}
                <span className="text-[28px] font-bold text-[#240E00CC]">
                  14 699 999 so‘m
                </span>
              </p>
              <p className="mb-[8px] py-[16px] px-[32px] text-[16px] font-medium text-[#240E00CC] bg-[#F0F0F0] rounded-md">
                Oyiga 1 334 999 so‘mdan 12/oyga muddatli to ‘lov
              </p>
              <div className="flex justify-between mb-[40px]">
                <Button className="single_btn">Savatga qo ‘shish</Button>
                <Button className="single_btn2">Xarid qilish</Button>
              </div>

              <div className="flex flex-col gap-[20px]">
                <div className="flex items-center gap-[16px]">
                  <Image src={Deliviry} alt="Car Logo" />
                  <p className="text-[18px] font-medium text-[#240E00CC]">
                    Yetkazib berish O’zbekiston bo’ylab
                  </p>
                </div>
                <div className="flex items-center gap-[16px]">
                  <Image src={Store} alt="Car Logo" />
                  <p className="text-[18px] font-medium text-[#240E00CC]">
                    Do’kondi o’zidan olib ketishingiz mumkin
                  </p>
                </div>
                <div className="flex items-center gap-[16px]">
                  <Image src={Clock} alt="Car Logo" />
                  <p className="text-[18px] font-medium text-[#240E00CC]">
                    Tahminiy yetkazib berish 1 kundan 3 kungacha
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="flex gap-[30px] mt-[40px]">
            <button
              className={`${
                comments == "Telefon xususiyatlari"
                  ? "bg-[#FF6F14] text-white duration-300"
                  : "bg-white text-[black] duration-300"
              } py-[14px] px-[32px] rounded-[10px font-semibold rounded-[10px]`}
            >
              Telfon xususiyatlari
            </button>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="flex justify-between items-center">
            <div className="w-[820px] h-[542px]">
            
                <div className="py-[60px] px-[80px]">
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      Brend
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      Apple
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      CIM kartalar soni
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      2
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      O’lchamlari
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      16,3 dyum
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      Modeli
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                        Apple iPhone 14 128Gb Gold
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      Akumulyator hajmi
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      5200 amp
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      Yadrolar soni
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      8
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      Tezkor xotira RAM
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      12 GB
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      Ichki xotira ROM
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      128 GB
                    </p>
                  </div>
                  <div className="flex justify-between border-b-[3px] border-dashed pb-[11px] pt-[9px]">
                    <p className="w-[200px] text-[18px] font-medium text-[#240E00CC]">
                      Protsessori
                    </p>
                    <p className="w-[300px] text-[18px] font-medium text-[#240E00CC]">
                      IOS 17
                    </p>
                  </div>
                </div>
            </div>
            <div className="w-[520px] h-[542px] bg-red-500">
            {/* <Carousel arrows infinite={true} autoplay={true} className='rounded-lg overflow-hidden product-carousel mt-[40px]'>   
                  <div className='carousel'>
                      <Image src={Banner3} alt="Banner"/>
                  </div>
                  <div className='carousel'>
                      <Image src={Banner3} alt="Banner"/>
                  </div>
                  <div className='carousel'>
                      <Image src={Banner3} alt="Banner"/>
                  </div>    
            </Carousel> */}
            </div>
          </div>
        </Container>
      </div>
      <div className="mt-[120px]">
        <Container>
          <h1 className='font-bold text-[32px] mb-[24px]'>Aksiyadagi mahsulotlar</h1>
          <Swiper/>
        </Container>
      </div>
    </>
  );
}

export default Product;
