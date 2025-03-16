import React from "react";
import { Body, Container, Section, Html, Img, Text, Head, Tailwind } from "@react-email/components";

export const SummersComing = () => {
  return (
    <Html>
      <Tailwind>
        <Head>
          <Body>
            <Container>
              <div className="max-w-[600px] flex justify-center relative">
                <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742157020/react-email-images/owvvmd8xfgiax32ryplh.png" alt="Big frame" className="w-full object-cover" />
                <div className="absolute justify-center pt-[10px] items-center flex flex-row text-center">
                  <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742059963/react-email-images/bxve7zpqde3shxos0b0a.png" alt="icon1" className="mr-[5px] w-[25px]" />
                  <Text className="font-extrabold text-[16px] leading-[28px] text-[#FCFCFF]" style={{ fontFamily: "Gilroy, sans-serif" }}>
                    SkateApp
                  </Text>
                </div>
                <Section className="absolute flex justify-center pt-[50px]">
                  <Text className="text-[36px] pt-[130px] text-center text-[#FCFCFF]" style={{ fontFamily: "Gilroy, sans-serif", fontWeight: 750 }}>
                    SUMMER'S COMING
                  </Text>
                  <div style={{ width: "100%", maxWidth: "100px", position: "relative", margin: "25px auto 0 auto", borderTopWidth: "1px", borderTopStyle: "solid", borderColor: "white", display: "block" }}></div>
                  <Text className=" font-bold pt-[10px] text-[12px] text-center text-[#FCFCFF]" style={{ fontFamily: "Gilroy, sans-serif" }}>
                    PREPARE YOUR BOARD!
                  </Text>
                </Section>
              </div>
              <Text className="font-extrabold text-[24px] text-[#343131] pt-[40px] flex justify-center text-center" style={{ fontFamily: "Gilroy, sans-serif" }}>
                BEST EVENTS IN THIS MONTH
              </Text>
              <div className="w-full flex justify-center">
                <div className="w-full max-w-[575px] flex flex-row justify-center items-center pt-[50px]">
                  <div className="w-1/2 flex flex-col items-center">
                    <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742160178/react-email-images/way58xtnxipuhsen3p6a.png" alt="img1" className="max-w-[250px] w-full" />
                    <Text className="font-extrabold pt-[5px] text-[14px] leading-[24px] text-[#343131]" style={{ fontFamily: "Gilroy, sans-serif" }}>
                      The Board Series at Charlestown,
                      <br />
                      South Carolina
                    </Text>
                    <Text className="mt-[-5px] font-light text-[13px] leading-[24px]" style={{ fontFamily: "Gilroy, sans-serif" }}>
                      The Boardr Series is a national, all ages and
                      <br />
                      skills skateboarding contest series that is
                      <br />
                      designed to provide a fun and fulfilling
                      <br />
                      skateboarding experience for all participants.
                    </Text>
                  </div>
                  <div className="w-1/2 flex flex-col items-center">
                    <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742161941/react-email-images/d0wtwtjitalbdcmyax5p.png" alt="img2" className="max-w-[250px] w-full" />
                    <Text className="mt-[-5px] font-extrabold pt-[5px] text-[14px] leading-[24px] text-[#343131]" style={{ fontFamily: "Gilroy, sans-serif" }}>
                      The Board Series at Charlestown,
                      <br />
                      South Carolina
                    </Text>
                    <Text className="mt-[-8px] font-light text-[13px] leading-[24px]" style={{ fontFamily: "Gilroy, sans-serif" }}>
                      The Boardr Series is a national, all ages and
                      <br />
                      skills skateboarding contest series that is
                      <br />
                      designed to provide a fun and fulfilling
                      <br />
                      skateboarding experience for all participants.
                    </Text>
                  </div>
                </div>
              </div>
            </Container>
          </Body>
        </Head>
      </Tailwind>
    </Html>
  );
};

export default SummersComing;
