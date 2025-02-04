import React from "react";
import { Body, Text, Container, Html, Head, Tailwind, Section } from "@react-email/components";

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
                <Text className="text-sm sm:text-md font-semibold leading-[24px] text-white text-center whitespace-nowrap" style={{ fontFamily: "Roboto, sans-serif" }}>
                  Discover Off-Campus Housing
                </Text>
              </div>

              {/* Text Frame */}
              <Text className="absolute top-[60px] left-[216px] text-sm sm:text-md font-normal leading-[24px] tracking-[0.02em] text-[#7D8187] max-w-[90%] whitespace-nowrap" style={{ fontFamily: "Roboto, sans-serif" }}>
                Discover off-campus housing.
              </Text>
              <Text className="absolute top-[60px] left-[410px] text-sm sm:text-md font-medium leading-[24px] tracking-[0.02em] text-primary underline decoration-solid decoration-skip-ink-none cursor-pointer max-w-[90%] whitespace-nowrap " style={{ fontFamily: "Roboto, sans-serif" }}>
                View in browser
              </Text>

              {/* Big Grey Frame */}
              <Section className="absolute flex w-[700px] h-[1518px] top-[115px] left-[25px] bg-[#F5F5FB] items-center justify-center">
                <Text className="absolute top-[60px] left-[280px] text-sm sm:text-md font-bold leading-[24px] tracking-[0.02em] text-[#232323] text-center max-w-[90%] whitespace-nowrap" style={{ fontFamily: "Roboto, sans-serif" }}>
                  PLEASE WELCOME
                </Text>
              </Section>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default OffCampusHousing;
