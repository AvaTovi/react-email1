import React from "react";
import { Body, Container, Html, Img, Link, Section, Tailwind, Text, Head } from "@react-email/components";
import { Button } from "@react-email/components";

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
            <Section className="mx-auto relative flex items-center justify-center whitespace-normal ">
              <Text className="absolute pt-[34px] font-extrabold text-[42px] leading-[52px] text-center" style={{ fontFamily: "Poppins, sans-serif", WebkitTextStroke: "1px black", WebkitTextFillColor: "white" }}>
                JOIN SKATEAPP NOW!
              </Text>
              {/* Main Text Layer (Sits Above) */}
              <Text className="relative pt-[30px] font-extrabold text-[42px] leading-[52px] text-center text-[#343131]" style={{ fontFamily: "Poppins, sans-serif" }}>
                JOIN SKATEAPP NOW!
              </Text>
            </Section>
            <div style={{ width: "100%", maxWidth: "560px", position: "relative", margin: "35px auto 0 auto", borderTopWidth: "1px", borderTopStyle: "solid", borderColor: "rgba(21,19,19,0.21)", display: "block" }}></div>
            <Section className="mx-auto w-full max-w-[560px] relative flex flex-col justify-start items-start  whitespace-normal ">
              <Text className=" w-full font-normal text-[17px] pt-[10px] leading-[24px] text-[#4C4C4C] " style={{ fontFamily: "Poppins, sans-serif" }}>
                Hello Alanturing,
              </Text>
              <Text className="w-full text-[17px] leading-[22px] pt-[10px] text-[#4C4C4C]" style={{ fontFamily: "Poppins, sans-serif" }}>
                <span className="font-bold">Jovias</span> was very excited to know that you have something in common <br />
                in skateboarding, he has invited you to the SkateApp team.
              </Text>
              <Text className="font-normal text-[17px] leading-[22px] text-[#4C4C4C] " style={{ fontFamily: "Poppins, sans-serif" }}>
                With over 5 milion skateboarders around the world who have joined us, <br />
                We are honored and wish you can be part of our journey.
              </Text>
            </Section>
            <div className="flex flex-row pt-[50px] w-full justify-center items-center gap-4">
              <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1740453185/react-email-images/kmzvsesy0fpm1dtbrypu.png" alt="icon1" className=" p-1"></Img>
              <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1740453774/react-email-images/zsmkvh2qskajgvmesbzy.png" alt="arrow" className="p-1"></Img>
              <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1740454193/react-email-images/tne6nb71skyxsc47hi9n.png" alt="logo2" className="pt-1"></Img>
            </div>
            <Section className="w-full flex justify-center pt-[70px]">
              <Button className="bg-[#FD592F] text-white font-bold rounded-md shadow-lg px-7 py-4 cursor-pointer" style={{ fontFamily: "Poppins, sans-serif", fontWeight: "700", letterSpacing: "0%", borderRadius: "4px", boxShadow: "0px 6px 17px 0px #ECB8B863" }}>
                JOIN SKATEAPP
              </Button>
            </Section>
            <Section className="mx-auto w-full max-w-[560px] relative flex flex-col justify-start items-stretch whitespace-normal">
              <Text className="w-full font-normal text-[18px] pt-[45px] leading-[22px] text-[#4C4C4C]" style={{ fontFamily: "Poppins, sans-serif" }}>
                <span className="font-normal text-gray-600 block">or copy and paste this URL into your browser:</span>
                <span className="font-normal underline block mt-2 decoration-solid decoration-auto text-blue-600">https://skateapp.net/joint/invite/foo</span>
              </Text>
            </Section>
            <div style={{ width: "100%", maxWidth: "560px", position: "relative", margin: "50px auto 0 auto", borderTopWidth: "1px", borderTopStyle: "solid", borderColor: "rgba(21,19,19,0.21)", display: "block" }}></div>
            {/* Image Section */}
            <div className="relative flex justify-center">
              <div className="relative pt-[65px] flex justify-center">
                <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1740976919/react-email-images/pni8mnfagxvds6a4qiqt.png" alt="img1" className="absolute" />
                <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1740977258/react-email-images/m4tgtykjcsasmswc34x6.png" alt="img2" className="absolute pt-[125px]" />
                <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1740977712/react-email-images/g8vdaouwlarenixebpcj.png" alt="img3" className="absolute pt-[170px]" />
              </div>
              {/* Positioned Image Below */}
              <div className="flex justify-start">
                <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1740979868/react-email-images/dwtm1oscdpqvvv0voknj.png" alt="img4" className="absolute pt-[510px] m-[-20px]" />
              </div>
            </div>
            {/* Ensuring Section Appears Below the Div Section */}
            <Section className="w-full max-w-[600px] h-auto min-h-[262px] mt-[715px] bg-[#343131] mx-auto flex items-start justify-center">
              <Text className="absolute pt-[16px] font-extrabold text-[40px] leading-[52px] text-center" style={{ fontFamily: "Poppins, sans-serif", WebkitTextStroke: "1px yellow", WebkitTextFillColor: "#343131" }}>
                THE NEW WAY TO SKATE
              </Text>
              <Text className="relative pt-[10px] font-extrabold text-[40px] leading-[52px] text-center text-[#FCFCFF]" style={{ fontFamily: "Poppins, sans-serif" }}>
                THE NEW WAY TO SKATE
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default JoinSkateApp;
