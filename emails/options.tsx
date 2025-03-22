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
            <Section className="max-w-[500px] w-full flex justify-center mx-auto">
              <div style={{ width: "500px", height: "1px", backgroundColor: "gray" }} />
              <Section className="max-w-[500px] w-full flex flex-row justify-start items-center ">
                <Text className="font-light text-[13px] m-[20px] text-center text-[#2E2F30] " style={{ fontFamily: "Gilroy, sans-serif" }}>
                  Skatepark
                </Text>
              </Section>
              <div style={{ width: "500px", height: "1px", backgroundColor: "gray" }} />
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default options;
