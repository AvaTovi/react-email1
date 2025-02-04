import React from "react";
import { Body, Text, Container, Html, Head, Tailwind } from "@react-email/components";

function OffCampusHousing() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet" />
      </Head>
      <Tailwind>
        <Body>
          <Container>
            {/* Entire Frame */}
            <div className="top-[3391px] left-[7372px] w-[736px] h-[2309px] rounded-[24px]">
              {/* Black Tab */}
              <div className="absolute flex justify-center items-center w-[736px] h-[38px] bg-[#141211] rounded-tl-[24px] rounded-tr-[24px]">
                <Text className=" justify-center items-center top-[7px] left-[273px] transform rotate-0 font-600 text-[14px] leading-[24px] text-[#FFFFFF]" style={{ fontFamily: "Roboto, sans-serif" }}>
                  Discover Off-Campus Housing
                </Text>
              </div>
              {/* Text Frame */}
              <Text className="absolute top-[60px] left-[216px] transform rotate-0 text-[14px] font-normal leading-[24px] tracking-[0.02em] text-[#7D8187]" style={{ fontFamily: "Roboto, sans-serif" }}>
                Discover off-campus housing.
              </Text>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default OffCampusHousing;
