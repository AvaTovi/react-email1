import React from "react";
import { Body, Container, Section, Html, Img, Link, Tailwind, Text } from "@react-email/components";

function OffCampusHousing() {
  return (
    <Html>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container className="max-w-[736px] mx-auto bg-white rounded-[24px] p-4">
            <Section className="bg-[#141211] w-full h-[38px] rounded-[24px]"></Section>
            <Text className="text-lg font-bold">Welcome to Off-Campus Housing</Text>
            <Text>Explore comfortable and affordable off-campus housing options near you.</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default OffCampusHousing;
