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
              <div className="w-full flex justify-center pt-[40px]">
                <div className="max-w-[575px] w-full flex justify-center items-center">
                  <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742163449/react-email-images/wgtjsvlbbcck8vkfvo39.png" alt="frame2" className="w-full object-cover" />
                </div>
              </div>
              <Section className="w-full pt-[20px] flex items-center mt-[-15px] ml-[10px] relative">
                <Text className="max-w-[550px] font-extrabold text-[16px]  text-[#343131] " style={{ fontFamily: "Gilroy, sans-serif" }}>
                  Skateboarding is like vertigo if you don't vent it
                </Text>
                <Text className="font-light text-[13.70px] leading-[25px] text-[#4A4A45]" style={{ fontFamily: "Gilroy, sans-serif" }}>
                  The Boardr Series is a national, all ages and skills skateboarding contest series that is designed
                  <br />
                  to provide a fun and fulfilling skateboarding experience for all participants.
                </Text>
                <div style={{ width: "100%", maxWidth: "600px", position: "relative", margin: "60px auto 0 auto", borderTopWidth: "1px", borderTopStyle: "solid", borderColor: "rgba(21,19,19,0.21)", display: "block" }}></div>
              </Section>
              <div className="w-full flex flex-col pt-[60px] ">
                <div className="max-w-[550px] w-full flex justify-start ">
                  <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742165176/react-email-images/njs4a6016weynmd6xuex.png" alt="phone" className="ml-9" />
                  <Section className="w-1/2 flex flex-col items-center">
                    <Text className="font-extrabold text-[24px] pl-[70px] leading-[38px] text-[#343131] whitespace-nowrap" style={{ fontFamily: "Gilory, sans-serif" }}>
                      CREATE AND EXPLORE
                      <br /> SKATEBOARD EVENTS
                    </Text>
                    <Text className="font-light text-[15px] leading-[24px] pl-[70px] pt-[30px] text-[#2E2F30] " style={{ fontFamily: "Gilroy, sans-serif" }}>
                      Explore thousands of skate events around
                      <br />
                      you. Create your own events and share them
                      <br />
                      with the community and skaters around you.
                    </Text>
                    <Text className="font-extrabold leading-[30px] pt-[10px] pl-[70px]" style={{ fontFamily: "Gilroy, sans-serif" }}>
                      <span className="text-[#FFC453] text-[16px]">Download SkateApp &</span>
                      <br /> <span className="text-[#343131] text-[14px]">Find hidden gems wherever you shred.</span>
                    </Text>
                    <div className=" flex flex-row justify-center items-center ">
                      <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742073455/react-email-images/m8irf4aw1bfnmrlaavw3.png" alt="apple1" className="w-100 h-auto mr-[-9px] cursor-pointer"></Img>
                      <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742074247/react-email-images/zqssh04t7eiawzcuagix.png" alt="GooglePlay1" className="w-100 h-auto ml-[-9px] cursor-pointer"></Img>
                    </div>
                  </Section>
                </div>
              </div>
              <div style={{ width: "100%", maxWidth: "600px", position: "relative", margin: "60px auto 0 auto", borderTopWidth: "1px", borderTopStyle: "solid", borderColor: "rgba(21,19,19,0.21)", display: "block" }}></div>
              <Text className="font-extrabold text-[15px] pb-[30px] m-[10px] leading-[27px] pt-[30px]" style={{ fontFamily: "Gilroy, sans-serif" }}>
                <span className="text-[#343131] ">Know anyone who might be looking for skate meets?</span> <span className="text-orange-500 underline cursor-pointer">CLICK HERE</span>
                <br />
                <span className="text-[#343131]">to forward this email to up to 5 friends at once.</span>
              </Text>
              <div className="w-[600px] h-[130px] bg-[#696969] flex flex-row justify-start p-[20px]">
                <div className="w-full max-w-[600px] pt-[10px] flex flex-row justify-start">
                  <div className="flex ml-[20px] mr-[50px] flex-col">
                    <Text className="text-white" style={{ fontFamily: "Gilroy, sans-serif" }}>
                      <span className="font-light text-[14px]">Visit us online at&nbsp;</span>
                      <span className="font-extrabold text-[16px] underline cursor-pointer">SkateApp.net</span>
                    </Text>
                    <div className="flex pt-[10px] flex-row items-center gap-3">
                      <Img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo" className="w-[24px] h-[25px] cursor-pointer" />
                      <Img src="https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebdd90aef8ef8c749e848_X-EverythingApp-Logo-Twitter.jpg" alt="X Logo" className="w-[24px] h-[25px] cursor-pointer" />
                      <Img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram Logo" className="w-[24px] h-[25px] border-2 cursor-pointer" />
                    </div>
                  </div>

                  <div className="flex ml-[70px] flex-col">
                    <Text className="leading-[20px] pt-[5px] text-end" style={{ fontFamily: "Poppins, sans-serif" }}>
                      <span className="font-extrabold text-[18px] text-[#FFC453]">Get it Now</span>
                      <br />
                      <span className="font-normal text-[10px] text-white leading-[13px]">Available On Google Play</span>
                      <br />
                      <span className="font-normal text-[10px] text-white leading-[13px]">and App Store</span>
                      <br />
                      <span className="font-normal text-[10px] leading-[13px] text-white">www.skateapp.com</span>
                    </Text>
                  </div>
                  <div className="flex pt-[20px] flex-row">
                    <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742341827/react-email-images/knwyxoyijmwrvcj2okva.png" alt="bar" className="m-[10px] mt-[5px] h-[80px] w-[4px]"></Img>
                    <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1742341461/react-email-images/jxu95mskuxffzcrwwgww.png" alt="QR code" className="w-[70px] pt-[5px] h-[80px]"></Img>
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
