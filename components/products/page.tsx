import {
  // ArrowRightOutlined,
  BarChartOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button } from "antd";
import Image from "next/image";
import React from "react";
import Product from "../../assets/product.png";
import "./style.css";
import Link from "next/link";

function page() {
  return (
    <Link href={'/product-detail'}>
      <div className="w-[295px] h-[470px] pt-[50px] pb-[36px] px-[30px] bg-white rounded-xl justify-between ml-[20px]">
        <Image
          src={Product}
          alt="IMG"
          className="w-[150px] h-[160px] mx-auto"
        />
        <p className="mt-[36px] text-[16px] mb-[16px] font-bold">
          Iphone 14 Pro Max
        </p>
        <h4 className="font-bold text-[18px] ">7 893 000 som</h4>
        <p className="text-[#1EB91E] mt-[11px] mb-[19px] bg-[#1EB91E14] inline-block py-2 px-4 rounded-lg">
          1 045 000 somdan/12 oy
        </p>
        <div className="flex items-center gap-[10px]">
          <Link href={"/cart"}>
            <Button className="btn_product">
              Savat<ShoppingCartOutlined />
            </Button>
          </Link>
          <Badge>
            <Avatar
              shape="square"
              size="large"
              className="bg-[#F0F0F0] cursor-pointer"
            >
              <HeartOutlined className="text-[20px] text-[black]" />
            </Avatar>
          </Badge>
          <Badge>
            <Avatar
              shape="square"
              size="large"
              className="bg-[#F0F0F0] cursor-pointer"
            >
              <BarChartOutlined className="text-[20px] text-[black]" />
            </Avatar>
          </Badge>
        </div>
      </div>
    </Link>
  );
}

export default page;
