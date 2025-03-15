import React from "react";
import { Body, Container, Html, Img, Link, Section, Tailwind, Text, Head } from "@react-email/components";
import { Button } from "@react-email/components";

export const ResetPassSA = () => {
  return (
    <Html>
      <Tailwind>
        <Head>
          <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap"></Link>
        </Head>
        <Body>
          <Container>
            <div className="flex flex-row justify-center items-center pt-[30px] ">
              <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742059963/react-email-images/bxve7zpqde3shxos0b0a.png" alt="icon1" className="w-[35px] h-[35px]"></Img>
              <Text className="font-extrabold text-[20.43px] leading-[28.94px] m-[10px] text-center text-[#343131]" style={{ fontFamily: "Gilroy, sans-serif" }}>
                SkateApp
              </Text>
            </div>
            <div className="pt-[40px] flex justify-center items-center">
              <div className=" w-full max-w-[600px] max-h-[10px] h-full absolute flex justify-center items-center bg-[#FD592F] rounded-tl-[8px] rounded-tr-[8px]" />
            </div>
            <div className="pt-[50px] flex justify-center items-center ">
              <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742063210/react-email-images/csdeibmo4yfwx1euclko.png" alt="big pic" />
            </div>

            <Section className="mx-auto w-full max-w-[600px] relative flex justify-center items-center whitespace-normal">
              <Text className="w-full text-[35px] leading-[38px] text-center" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 799 }}>
                Reset Your Password
              </Text>
              <Text className="w-full font-normal text-[20px] pt-[15px] leading-[30px] text-center text-[#4C4C4C]" style={{ fontFamily: "Poppins, sans-serif" }}>
                We received a request to reset the password for your account. <br />
                Please click the button below to create a new password.
              </Text>
            </Section>
            <Section className="w-full flex justify-center items-center pt-[30px]">
              <Button className=" bg-[#FD592F] text-white font-bold rounded-md flex justify-center items-center shadow-lg px-16 py-6 cursor-pointer" style={{ fontFamily: "Poppins, sans-serif", fontWeight: "800", fontSize: "15px", lineHeight: "26px", letterSpacing: "0%", borderRadius: "4px", boxShadow: "0px 6px 17px 0px #ECB8B863" }}>
                Reset My Password
              </Button>
            </Section>
            <Section className="mx-auto w-full max-w-[560px] relative flex flex-col justify-start items-stretch whitespace-normal">
              <Text className="w-full font-normal text-[20px] pt-[45px] leading-[22px] text-[#4C4C4C]" style={{ fontFamily: "Poppins, sans-serif" }}>
                <span className="font-normal text-gray-600 block">or copy and paste this URL into your browser</span>
                <span className="font-normal underline block leading-[40px] decoration-solid decoration-auto cursor-pointer text-blue-600">https://skateapp.net/request/reset_password/foo</span>
              </Text>
            </Section>
            <Section className="mx-auto w-full max-w-[600px] pt-[20px] flex flex-row items-start justify-start ">
              <Text className="font-extrabold text-[20px] leading-[26px] items-center text-[#343131] " style={{ fontFamily: "Gilroy, sans-serif" }}>
                Questions?
              </Text>
              <Text className="font-normal text-[20px] leading-[26px] items-center text-[#4C4C4C] " style={{ fontFamily: "Poppins, sans-serif" }}>
                Please let us know if we can assist you by replying to this email <br />
                or emailing help@skateappteam.com.
              </Text>
              <Text className="pt-[25px] text-[16px] leading-[30px] items-center">
                <span className="font-light text-[#4A4A45] block" style={{ fontFamily: "Poppins, sans-serif" }}>
                  If you didn’t request a password reset, we recommend you get in touch with our support team and secure your account.
                </span>
                <span className="font-extrabold text-red-400" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {" "}
                  Call us at +1(213)555-3893
                </span>
                <span className="font-light text-[#4A4A45]" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {" "}
                  or write to us at
                </span>
                <span className="font-extrabold text-red-400" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {" "}
                  help@skateappteam.com
                </span>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default ResetPassSA;
