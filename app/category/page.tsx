"use client";
import React, { useState } from "react";
import Container from "../../components/container/page";
import ProductCard from "../../components/products/page";
import { Slider } from "antd";
import { Radio } from "antd";
import "./style.css";

function Index() {
  const [load1, setLoad1] = useState(1000);
  const [load2, setLoad2] = useState(10000000); 

  const convertToSliderValue = (value: any) =>
    Math.round((value - 1000000) / 90000);
  const convertToMillionValue = (value: any) => value * 500000 + 1000000;

  const onChange = (value:any) => {
    setLoad1(convertToMillionValue(value[0]));
    setLoad2(convertToMillionValue(value[1]));
  };

  const onChangeComplete = (value:any) => {
    setLoad1(convertToMillionValue(value[0]));
    setLoad2(convertToMillionValue(value[1]));
  };

  return (
    <div>
      <div className="mt-[24px]">
        <Container>
          <div className="flex gap-[48px] justify-between">
            <div className="w-[356px] h-[1467px] rounded-[10px] bg-[white] p-[40px]">
              <p className="flex gap-2 items-center mb-[20px]">
                <span className="font-bold text-[24px]">Price</span>
                <span className="text-[18px] ">(Sum)</span>
              </p>

              <div className="flex justify-between mb-[20px]">
                <div className="w-[136px]">
                  <p className="text-[#240E00CC] text-[18px]">...from</p>
                  <p className="w-full h-[54px] py-[14px] px-[28px] bg-[#F0F0F0] rounded-md text-[18px] text-[#240E00] font-medium">
                    {load1.toLocaleString()}
                  </p>
                </div>
                <div className="w-[136px]">
                  <p className="text-[#240E00CC] text-[18px]">...up to</p>
                  <p className="w-full h-[54px] py-[14px] px-[28px] bg-[#F0F0F0] rounded-md text-[18px] text-[#240E00] font-medium">
                    {load2.toLocaleString()}
                  </p>
                </div>
              </div>

              <Slider
                range
                step={1}
                defaultValue={[
                  convertToSliderValue(load1),
                  convertToSliderValue(load2),
                ]}
                tooltipVisible={false} // Disable tooltip
                onChange={onChange}
                onChangeComplete={onChangeComplete}
              />

              <div>
                <h2 className="font-bold text-[24px]">Brands</h2>
                <Radio.Group defaultValue="Samsung" className="flex flex-col gap-[7px] mt-[12px]">
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="Samsung">Samsung</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="Artel">Artel</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="Vivo">Vivo</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="Realmi">Realmi</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="Xiaomi">Xiaomi</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="Apple">Apple</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="Tecno">Tecno</Radio>
                </Radio.Group>
              </div>
              <div className="mt-[24px]">
                <h2 className="font-bold text-[24px]">Quick memory RAM</h2>
                <Radio.Group defaultValue="2" className="flex flex-col gap-[7px] mt-[12px]">
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="2">2 GB</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="3">3 GB</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="4">4 GB</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="6">6 GB</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="8">8 GB</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="12">12 GB</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="16">16 GB</Radio>
                </Radio.Group>
              </div>
              <div className="mt-[24px]">
                <h2 className="font-bold text-[24px]">Permanent memory ROM</h2>
                <Radio.Group defaultValue="32" className="flex flex-col gap-[7px] mt-[12px]">
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="32">32 GB</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="64">64 GB</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="128">128 GB</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="256">256 GB</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="512">512 GB</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="1024">1024 GB</Radio>
                </Radio.Group>
              </div>
              <div className="mt-[24px]">
                <h2 className="font-bold text-[24px]">Battery capacity</h2>
                <Radio.Group defaultValue="3000" className="flex flex-col gap-[7px] mt-[12px]">
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="3200">3200 mAh</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="3600">3600 mAh</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="4000">4000 mAh</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="4500">4500 mAh</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="5000">5000 mAh</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="6000">6000 mAh</Radio>
                  <Radio className="text-[18px] text-[#240E00CC] font-medium" value="7000">7000 mAh</Radio>
                </Radio.Group>
              </div>
            </div>

            <div className="w-full grid grid-cols-3 gap-[20px]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15].map((e, i) => (
                <ProductCard key={i} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Index;
