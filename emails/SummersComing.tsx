import React from "react";
import { Body, Container, Html, Img, Text, Head, Tailwind } from "@react-email/components";

export const SummersComing = () => {
  return (
    <Html>
      <Tailwind>
        <Head>
          <Body>
            <Container>
              <div className="max-w-[600px] flex justify-center relative">
                <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742157020/react-email-images/owvvmd8xfgiax32ryplh.png" alt="Big frame" className="w-full h-full object-cover" />
                <div className="absolute justify-center pt-[20px] items-center flex flex-row text-center">
                  <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742059963/react-email-images/bxve7zpqde3shxos0b0a.png" alt="icon1" className="mr-[5px] w-[25px]" />
                  <Text className="font-extrabold text-[16px] leading-[28px] text-[#FCFCFF]" style={{ fontFamily: "Gilroy, sans-serif" }}>
                    SkateApp
                  </Text>
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
