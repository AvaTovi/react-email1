import React from "react";
import { Body, Container, Html, Img, Link, Section, Tailwind, Text, Head } from "@react-email/components";
import { Button } from "@react-email/components";

export const ResetPassSA = () => {
  return (
    <Html>
      <Tailwind>
        <Head>
          <Body>
            <Container>
              <div className="flex flex-row justify-center items-center pt-[30px] ">
                <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742059963/react-email-images/bxve7zpqde3shxos0b0a.png" alt="icon1" className="w-[35px] h-[35px]"></Img>
                <Text className="font-extrabold text-[20.43px] leading-[28.94px] m-[10px] text-center text-[#343131]" style={{ fontFamily: "Gilroy, sans-serif" }}>
                  SkateApp
                </Text>
              </div>
              <Section className="pt-[30px] justify-center align-items">
                <div className=" max-w-[550px] max-h-[10px] w-full h-full absolute flex justify-center items-center bg-[#FD592F] rounded-tl-[8px] rounded-tr-[8px]" />
              </Section>
            </Container>
          </Body>
        </Head>
      </Tailwind>
    </Html>
  );
};
export default ResetPassSA;
