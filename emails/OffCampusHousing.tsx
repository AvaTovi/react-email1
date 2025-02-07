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
              <Section className="absolute flex w-[700px] h-[1518px] top-[115px] left-[25px] bg-[#F5F5FB] items-center justify-center overflow-hidden">
                <Text className="absolute top-[55px] left-[280px] text-sm sm:text-md font-bold leading-[24px] tracking-[0.02em] text-[#232323] text-center max-w-[90%] whitespace-nowrap" style={{ fontFamily: "Roboto, sans-serif" }}>
                  PLEASE WELCOME
                </Text>
                <Text className=" text-center items-center justify-center absolute  max-w-[90%] top-[95px] left-[100px] font-extrabold leading-[60px] text-[48px] text-[#232323] " style={{ fontFamily: "Roboto, sans-serif" }}>
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
              </Section>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default OffCampusHousing;
