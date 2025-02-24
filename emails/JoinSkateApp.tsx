import React from "react";
import { Body, Container, Html, Img, Link, Section, Tailwind, Text, Head } from "@react-email/components";

export const JoinSkateApp = () => {
  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {},
            },
          },
        }}>
        <Head>
          <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap"></Link>
        </Head>
        <Body>
          <Container>
            <Section className="max-w-[600px] min-h-[104px] bg-[#FEC902] flex flex-row items-center justify-center">
              <div className="flex items-center space-x-3 gap-2">
                <Img src=" https://res.cloudinary.com/ds8slufsu/image/upload/v1740194795/react-email-images/qfkbgczfwospvernqdcj.png" alt="logo1" className="object-contain"></Img>
                <Text className=" font-extrabold leading-[28.94px] text-[20.43px] color-[#343131] " style={{ fontFamily: "Gilroy, sans-serif" }}>
                  SkateApp
                </Text>
              </div>
            </Section>
            <Section className="mx-auto relative flex items-center justify-center whitespace-nowrap ">
              <Text className="absolute pt-[34px] font-extrabold text-[42px] leading-[52px] text-center" style={{ fontFamily: "Poppins, sans-serif", WebkitTextStroke: "1px black", WebkitTextFillColor: "white" }}>
                JOIN SKATEAPP NOW!
              </Text>
              {/* Main Text Layer (Sits Above) */}
              <Text className="relative pt-[30px] font-extrabold text-[42px] leading-[52px] text-center text-[#343131]" style={{ fontFamily: "Poppins, sans-serif" }}>
                JOIN SKATEAPP NOW!
              </Text>
            </Section>
            <div style={{ width: "100%", maxWidth: "550px", position: "relative", margin: "35px auto 0 auto", borderTopWidth: "1px", borderTopStyle: "solid", borderColor: "rgba(21,19,19,0.21)", display: "block" }}></div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default JoinSkateApp;
