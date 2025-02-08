import React from "react";
import { Body, Text, Container, Html, Head, Tailwind, Section, Img } from "@react-email/components";

function OffCampusHousing() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet" />
      </Head>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                primary: "#14A34A",
              },
            },
          },
        }}>
        <Body>
          <Container>
            {/* Entire Frame */}
            <div className="top-[3391px] left-[7372px] w-[736px] h-[2309px] rounded-[24px]">
              {/* Black Tab */}
              <div className="absolute flex justify-center items-center w-[736px] h-[38px] bg-[#141211] rounded-tl-[24px] rounded-tr-[24px]">
                <Text className=" text-sm sm:text-md font-medium leading-[24px] text-[#FFFFFF] text-center whitespace-nowrap" style={{ fontFamily: "Roboto, sans-serif" }}>
                  Discover Off-Campus Housing
                </Text>
              </div>

              {/* Text Frame */}
              <Text className="absolute top-[52px] left-[216px] text-sm sm:text-md font-normal leading-[24px] tracking-[0.02em] text-[#7D8187] max-w-[90%] whitespace-nowrap" style={{ fontFamily: "Roboto, sans-serif" }}>
                Discover off-campus housing.
              </Text>
              <Text className="absolute top-[52px] left-[410px] text-sm sm:text-md font-large leading-[24px] tracking-[0.02em] text-primary underline decoration-solid decoration-skip-ink-none cursor-pointer max-w-[90%] whitespace-nowrap " style={{ fontFamily: "Roboto, sans-serif" }}>
                View in browser
              </Text>

              {/* command overflow-hidden makes the border end at this frame and not the div frame */}
              {/* Big Grey Frame */}
              <Section className="absolute flex w-[700px] h-[1550px] top-[115px] left-[25px] bg-[#F5F5FB] items-center justify-center overflow-hidden">
                <Text className="absolute top-[45px] left-[295px] text-sm sm:text-md font-bold leading-[24px] tracking-[0.02em] text-[#232323] text-center max-w-[90%] whitespace-nowrap" style={{ fontFamily: "Roboto, sans-serif" }}>
                  PLEASE WELCOME
                </Text>
                <Text className=" text-center items-center justify-center absolute  max-w-[90%] top-[85px] left-[100px] font-extrabold leading-[60px] text-[48px] text-[#232323] " style={{ fontFamily: "Roboto, sans-serif" }}>
                  A New Way to Discover <br /> Off-Campus Housing
                </Text>
                {/* Img Section */}
                <Img className="absolute mx-auto top-[415px] left-[0px] gap-[12px] " src="https://res.cloudinary.com/ds8slufsu/image/upload/v1738727524/react-email-images/aiy8edxkogphiapltbgz.png" alt="img1" />
                <Img className="absolute mx-auto top-[415px] left-[440px] gap-[12px] " src="https://res.cloudinary.com/ds8slufsu/image/upload/v1738731917/react-email-images/meilxwo3cjus7mvctced.png" alt="img2" />
                <Img className="absolute mx-auto top-[675px] left-[0px] gap-[12px] " src="https://res.cloudinary.com/ds8slufsu/image/upload/v1738732254/react-email-images/v8tt8vp934kep5rxl2xd.png" alt="img3" />
                <Img className="absolute mx-auto top-[675px] left-[440px] gap-[12px] " src=" https://res.cloudinary.com/ds8slufsu/image/upload/v1738732531/react-email-images/alxvpaaygvautrkepq9n.png" alt="img4" />
                <Img className="absolute mx-auto top-[675px] left-[271px] gap-[7px] " src=" https://res.cloudinary.com/ds8slufsu/image/upload/v1738732674/react-email-images/q40iawkug6nmxrm7sm3c.png" alt="img5" />
                <Img className="absolute mx-auto top-[230px] left-[65px] " src=" https://res.cloudinary.com/ds8slufsu/image/upload/v1738732956/react-email-images/ahupdba3bvjujwsf9q6k.png" alt="phoneImg" />

                <Text className=" absolute top-[910px] left-[100px] text-xs max-w-[90%] leading-[26px] text-[18px] text-center whitespace-nowrap text-[#545558]  " style={{ fontFamily: "Inter, sans-serif" }}>
                  Introducing the ideal platform for college students to find and <br /> rent apartments near their campus without the hassle.
                </Text>
                <button
                  className="absolute top-[1020px] left-[270px] max-w-[90%] text-sm px-[24px] py-[16px] gap-[10px] border-none outline-none
                   bg-[#14A34A] shadow-[0px_8px_26px_0px_#14A34A40] rounded-[8px] leading-[26px] text-[16px] text-white font-semibold whitespace-nowrap text-center"
                  style={{ fontFamily: "Poppins, sans-serif" }}>
                  Start Exploring
                </button>
                {/* Inner frame */}
                <div className=" absolute flex justify-center w-[543px] h-[274px] top-[1160px] left-[75px] gap-[32px] ">
                  <div className=" font-black text-[40px] max-w-[90%] leading-[60px] whitespace-nowrap text-center absolute top-0 " style={{ fontFamily: "Roboto, sans-serif" }}>
                    Our Features
                  </div>
                  <div className=" absolute flex w-[543px] h-[180px] bottom-3 ">
                    <div className=" flex flex-col items-start justify-start w-[543px] h-[70px] ">
                      <div className=" flex flex-col items-start justify-start w-[250px] h-[60px]">
                        <div className=" max-w-[90%] font-extrabold text-[17px] leading-[28px] text-left whitespace-nowrap text-[#515558] top-0 absolute " style={{ fontFamily: "Roboto, sans-serif" }}>
                          Lease Property
                        </div>
                        <div className=" text-left font-normal text-[12px] leading-[17.16px] tracking-[0.1px] color-[#545558] whitespace-nowrap top-[40px] absolute " style={{ fontFamily: "Roboto, sans-serif" }}>
                          Lorem ipsum dolor sit amet, consectetur elit.
                          <br />
                          Vivamus in velit interdum, facilisis lectus quis.
                        </div>
                        <div className=" absolute flex flex-col items-start justify-start w-[250px] h-[70px] top-0 right-0">
                          <div className=" max-w-[90%] font-extrabold text-[17px] leading-[28px] text-left whitespace-nowrap text-[#515558] top-0 absolute " style={{ fontFamily: "Roboto, sans-serif" }}>
                            Shared Room
                          </div>
                          <div className=" text-left font-normal text-[12px] leading-[17.16px] tracking-[0.1px] color-[#a1a6a9] whitespace-nowrap top-[40px] absolute " style={{ fontFamily: "Roboto, sans-serif" }}>
                            Lorem ipsum dolor sit amet, consectetur elit.
                            <br />
                            Vivamus in velit interdum, facilisis lectus quis.
                          </div>
                        </div>
                        <div className=" flex flex-col items-start justify-start w-[543px] h-[70px] absolute bottom-0 left-0 ">
                          <div className="flex flex-col items-start justify-start w-[250px] h-[70px]">
                            <div className=" max-w-[90%] font-extrabold text-[17px] leading-[28px] text-left whitespace-nowrap text-[#515558] top-0 absolute " style={{ fontFamily: "Roboto, sans-serif" }}>
                              Sublease Property
                            </div>
                            <div className=" text-left font-normal text-[12px] leading-[17.16px] tracking-[0.1px] color-[#545558] whitespace-nowrap top-[40px] absolute " style={{ fontFamily: "Roboto, sans-serif" }}>
                              Lorem ipsum dolor sit amet, consectetur elit.
                              <br />
                              Vivamus in velit interdum, facilisis lectus quis.
                            </div>
                            <div className=" absolute flex flex-col items-start justify-start w-[250px] h-[70px] top-0 right-0">
                              <div className=" max-w-[90%] font-extrabold text-[17px] leading-[28px] text-left whitespace-nowrap text-[#515558] top-0 absolute " style={{ fontFamily: "Roboto, sans-serif" }}>
                                Move-in/Out Support
                              </div>
                              <div className=" text-left font-normal text-[12px] leading-[17.16px] tracking-[0.1px] color-[#a1a6a9] whitespace-nowrap top-[40px] absolute " style={{ fontFamily: "Roboto, sans-serif" }}>
                                Lorem ipsum dolor sit amet, consectetur elit.
                                <br />
                                Vivamus in velit interdum, facilisis lectus quis.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img className="absolute w-[1500px] h-[120px] left-[00px] max-w-[100%] bottom-0 opacity-30 brightness-150 contrast-125" src="https://res.cloudinary.com/ds8slufsu/image/upload/v1738990159/react-email-images/l0of0kpf8erffhpywur6.png" alt="city" />
              </Section>
              <Section className="absolute w-[598px] h-[378.52px] top-[1760px] left-[71px] " style={{ border: "2px solid black" }}>
                <div className=" absolute w-[422px] h-[241.79px] top-[52.72px] left-[88px] gap-[35px]  " style={{ border: "2px solid black" }}>
                  <div className=" text-center font-normal text-[18px] leading-[28px] tracking-[0%] color-[#343131] " style={{ fontFamily: "Roboto, sans-serif" }}>
                    I really hope you enjoy mycollegelease.com and look <br />
                    forward to discover Off-Campus Housing with us.
                    <br />
                    We will also really appreciate every list you make
                  </div>
                  <div className=" w-[344px] h-[122.79px] gap-[16px] absolute bottom-0 left-9 " style={{ border: "2px solid black" }}></div>
                </div>
              </Section>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default OffCampusHousing;
