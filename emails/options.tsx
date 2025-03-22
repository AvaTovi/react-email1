import React from "react";
import { Body, Container, Section, Html, Img, Text, Head, Tailwind } from "@react-email/components";

export const options = () => {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Body>
          <Container className="max-w-[600px] mx-auto">
            <div className="w-full justify-center pt-[10px] items-center flex flex-row text-center">
              <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742059963/react-email-images/bxve7zpqde3shxos0b0a.png" alt="icon1" className="mr-[5px] w-[30px]" />
              <Text className="font-extrabold text-[17px] leading-[28px] text-[black]" style={{ fontFamily: "Gilroy, sans-serif" }}>
                SkateApp
              </Text>
            </div>
            <Section className="max-w-[500px] w-full flex pt-[30px] justify-center mx-auto">
              <div style={{ width: "500px", height: "1px", backgroundColor: "gray" }} />
              <div className="max-w-[500px] w-full flex flex-row justify-start items-center ">
                <Text className="font-light text-[13px] m-[20px] text-center cursor-pointer text-[#2E2F30] " style={{ fontFamily: "Gilroy, sans-serif" }}>
                  Skatepark
                </Text>
                <Text className="font-light text-[13px] m-[20px] text-center cursor-pointer text-[#2E2F30] " style={{ fontFamily: "Gilroy, sans-serif" }}>
                  Street Spot
                </Text>
                <Text className="font-light text-[13px] m-[20px] text-center cursor-pointer text-[#2E2F30] " style={{ fontFamily: "Gilroy, sans-serif" }}>
                  DIY
                </Text>
                <Text className="font-light text-[13px] m-[20px] text-center cursor-pointer text-[#2E2F30] " style={{ fontFamily: "Gilroy, sans-serif" }}>
                  In progress
                </Text>
                <Text className="font-light text-[13px] m-[20px] text-center cursor-pointer text-[#2E2F30] " style={{ fontFamily: "Gilroy, sans-serif" }}>
                  Dead Spot
                </Text>
              </div>
              <div style={{ width: "500px", height: "1px", backgroundColor: "gray" }} />
              <div className="max-w-[500px] w-full relative ">
                <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742664337/react-email-images/fyk6ktfzbk3efhovttz9.png" alt="Big frame1" className="w-full object-cover pt-[50px]" />
              </div>
              <div className="max-w-[500px] w-full relative ">
                <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742664503/react-email-images/czdm06rsl3vxkpgnpwtj.png" alt="Big frame2" className="w-full object-cover pt-[25px]" />
              </div>
              <div className="max-w-[500px] w-full relative ">
                <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742664719/react-email-images/scd9pfrfjarq5pmbsws7.png" alt="Big frame3" className="w-full object-cover pt-[25px]" />
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default options;
