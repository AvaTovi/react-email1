import React from "react";
import { Body, Container, Section, Html, Img, Text, Head, Tailwind } from "@react-email/components";

export const options = () => {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Body>
          <Container className="max-w-[600px] mx-auto">
            {/* Logo + Title */}
            <div className="w-full justify-center pt-[10px] items-center flex flex-row text-center">
              <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742059963/react-email-images/bxve7zpqde3shxos0b0a.png" alt="icon1" className="mr-[10px] w-[35px]" />
              <Text className="font-extrabold text-[18px] leading-[28px] text-[black]" style={{ fontFamily: "Gilroy, sans-serif" }}>
                SkateApp
              </Text>
            </div>
            <Section className="max-w-[500px] w-full flex pt-[30px] justify-center mx-auto">
              <div className="w-[500px] h-[1px] bg-gray-500 mx-auto" />
              <div className="max-w-[500px] w-full flex flex-row justify-start items-center">
                {["Skatepark", "Street Spot", "DIY", "In progress", "Dead Spot"].map((item, index) => (
                  <Text key={index} className="font-light text-[14px] m-[20px] text-center text-[#2E2F30]" style={{ fontFamily: "Gilroy, sans-serif" }}>
                    {item}
                  </Text>
                ))}
              </div>
              <div className="w-[500px] h-[1px] bg-gray-500 mx-auto" />
              <div className="max-w-[500px] w-full relative flex justify-center pt-[50px]">
                <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742664337/react-email-images/fyk6ktfzbk3efhovttz9.png" alt="Big frame1" className="w-full object-cover" />
                <div className="absolute flex flex-row justify-center items-center">
                  <Text className="font-light text-[24px] text-center text-[#FCFCFF]" style={{ fontFamily: "Gilroy, sans-serif" }}>
                    CICHANO SKATEPARK
                  </Text>
                </div>
              </div>
              <div className="max-w-[500px] w-full relative pt-[25px]">
                <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742664503/react-email-images/czdm06rsl3vxkpgnpwtj.png" alt="Big frame2" className="w-full object-cover" />
              </div>
              <div className="max-w-[500px] w-full relative pt-[25px]">
                <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742664719/react-email-images/scd9pfrfjarq5pmbsws7.png" alt="Big frame3" className="w-full object-cover" />
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default options;
