import { Body, Head, Html, Img, Link, Text } from "@react-email/components";
import * as React from "react";
//import Cloud from "./images/21.png";

export const FindHousingEmail = () => {
  const [buttonColor, setButtonColor] = React.useState("#FF5A60");

  return (
    <Html>
      <Head>
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap"
        ></Link>
      </Head>
      <Body>
        <div
          style={{
            width: "736px",
            height: "2856px",
            top: "3391px",
            left: "6336px",
            borderRadius: "24px",
          }}
        >
          <div
            //Reset password class
            style={{
              width: "736px",
              height: "38px",
              borderTopLeftRadius: "24px",
              borderTopRightRadius: "24px",
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid black",
              boxSizing: "border-box",
            }}
          >
            <h1
              style={{
                width: "134px",
                height: "24px",
                borderTop: "7px",
                borderLeft: "301px",
                transform: "rotate(0deg)",
                color: "#FFFFFF",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "24px",
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              Reset Your Password
            </h1>
          </div>

          <div
            //Red frame
            style={{
              width: "736px",
              height: "640px",
              display: "flex",
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#FF5A60",
            }}
          >
            <div
              style={{
                //ARE YOU READY section
                width: "93px",
                height: "350px",
                top: "149px",
                left: "322px",
                transform: "rotate(0deg)",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                lineHeight: "24px",
                letterSpacing: "2%",
                alignItems: "center",
                textAlign: "center",
                whiteSpace: "nowrap",
                color: "#FFFFFF",
              }}
            >
              ARE YOU READY
            </div>

            <div
              style={{
                // FIND HOUSING NEAR YOUR CAMPUS section
                width: "510.63px",
                height: "132px",
                top: "183px",
                left: "113px",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 700,
                fontSize: "48.63px",
                lineHeight: "66px",
                textAlign: "center",
                position: "absolute",
                color: "#FFFFFF",
              }}
            >
              FIND HOUSING NEAR YOUR CAMPUS
            </div>

            <div
              style={{
                //Introducing the ideal platform for college students to find and rent apartments near their campus without the hassle. section
                width: "537px",
                height: "52px",
                top: "328px",
                left: "100px",
                fontFamily: "inter, sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "26px",
                textAlign: "center",
                position: "absolute",
                color: "#FCFCFC",
              }}
            >
              Introducing the ideal platform for college students to find and{" "}
              <br /> rent apartments near their campus without the hassle.
            </div>
          </div>

          <div
            style={{
              //Text frame
              width: "620.07px",
              height: "66px",
              top: "726px",
              left: "58px",
              gap: "12.38px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              position: "absolute",
            }}
          >
            <div
              style={{
                //DISCOVER Section
                width: "256.08px",
                height: "65px",
                transform: "rotate(0deg)",
                fontFamily: "Gilroy, sans-serif",
                fontWeight: 799,
                fontSize: "51.78px",
                lineHeight: "65.77px",
                textAlign: "center",
                color: "#515558",
              }}
            >
              DISCOVER
            </div>
            <div
              //whats section
              style={{
                width: "120.12px",
                height: "54px",
                marginLeft: "20px",
                transform: "rotate(0deg)",
                fontFamily: "Roboto,sans-serif",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "42.45px",
                lineHeight: "53.92px",
                textAlign: "center",
                fontStretch: "condensed",
                color: "#515558",
              }}
            >
              Whats
            </div>
            <div
              //style section
              style={{
                width: "219.12px",
                height: "65px",
                transform: "rotate(0deg)",
                fontFamily: "Gilroy, sans-serif",
                fontWeight: 799,
                fontSize: "51.78px",
                lineHeight: "65.77px",
                textAlign: "center",
                color: "#515558",
              }}
            >
              COMING
            </div>
          </div>

          <div
            style={{
              //long text section
              width: "554px",
              height: "84px",
              top: "816px",
              left: "91px",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: "28px",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              position: "absolute",
              color: "#545558",
            }}
          >
            Good vibes spark good ideas. Mycollegeease through dozens of campus
            partners in North Carolina offers almost all students' needs to
            finding housing around campus.
          </div>

          <div
            style={{
              //frame
              width: "543px",
              height: "238px",
              top: "932px",
              left: "97px",
              gap: "32px",
              position: "absolute",
              justifyContent: "center",
            }}
          >
            <div
              //our features section
              style={{
                width: "543px",
                height: "24px",
                transform: "rotate(0deg)",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "24px",
                letterSpacing: "2%",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                marginBottom: "20px",
                color: "#515558",
              }}
            >
              Our Features
            </div>

            <div
              style={{
                //nested parent
                width: "543px",
                height: "70px",
                gap: "42px",
                display: "flex",
              }}
            >
              <div
                //top right frame
                style={{
                  width: "250px",
                  height: "70px",
                  gap: "8px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  //Lease Property section
                  style={{
                    width: "250px",
                    height: "28px",
                    transform: "rotate(0deg)",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 800,
                    fontSize: "18px",
                    lineHeight: "28px",
                    color: "#515558",
                  }}
                >
                  Lease Property
                </div>
                <div
                  //long text section
                  style={{
                    width: "250px",
                    height: "34px",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "17.16px",
                    letterSpacing: "0.1px",
                    color: "#545558",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur elit. Vivamus in velit
                  interdum, facilisis lectus quis.
                </div>
              </div>
              <div
                //top right frame
                style={{
                  width: "250px",
                  height: "70px",
                  gap: "8px",
                  right: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  //shared room section
                  style={{
                    width: "250px",
                    height: "28px",
                    transform: "rotate(0deg)",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 800,
                    fontSize: "18px",
                    lineHeight: "28px",
                    whiteSpace: "nowrap",
                    color: "#515558",
                  }}
                >
                  Shared Room
                </div>
                <div
                  //long text segiction
                  style={{
                    width: "250px",
                    height: "34px",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "17.16px",
                    letterSpacing: "0.1px",
                    bottom: 0,
                    color: "#545558",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur elit. Vivamus in velit
                  interdum, facilisis lectus quis.
                </div>
              </div>
            </div>

            <div
              //frame for bottom
              style={{
                width: "543px",
                height: "140px",
                flexDirection: "column",
                gap: "8px",
                display: "flex",
                position: "relative",
              }}
            >
              <div
                //bottom left frame
                style={{
                  width: "250px",
                  height: "70px",
                  gap: "8px",
                  position: "absolute",
                  bottom: 20,
                  left: "0",
                }}
              >
                <div
                  //sublease property section
                  style={{
                    width: "250px",
                    height: "28px",
                    transform: "rotate(0deg)",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 800,
                    fontSize: "18px",
                    lineHeight: "28px",
                    color: "#515558",
                  }}
                >
                  Sublease Property
                </div>
                <div
                  //long text section
                  style={{
                    width: "250px",
                    height: "34px",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "17.16px",
                    letterSpacing: "0.1px",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    color: "#545558",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur elit. Vivamus in velit
                  interdum, facilisis lectus quis.
                </div>
              </div>

              <div
                //bottom right frame
                style={{
                  width: "250px",
                  height: "68px",
                  gap: "8px",
                  bottom: 20,
                  right: 0,
                  position: "absolute",
                }}
              >
                <div
                  //Move-in/Out Support section
                  style={{
                    width: "250px",
                    height: "26px",
                    transform: "rotate(0deg)",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 800,
                    fontSize: "16 px",
                    lineHeight: "26px",
                    color: "#515558",
                  }}
                >
                  Move-in/Out Support
                </div>
                <div
                  //long text section
                  style={{
                    width: "250px",
                    height: "34px",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "17.16px",
                    letterSpacing: "0.1px",
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    color: "#545558",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur elit. Vivamus in velit
                  interdum, facilisis lectus quis.
                </div>
              </div>
            </div>
          </div>

          <div
            //parent frame
            style={{
              width: "343px",
              height: "130px",
              top: "1242px",
              left: "197px",
              gap: "24px",
              position: "absolute",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              //top child frame
              style={{
                width: "343px",
                height: "54px",
                gap: "4px",
              }}
            >
              <div
                //Be the first to know when new feature lands section
                style={{
                  width: "343px",
                  height: "26px",
                  transform: "rotate(0deg)",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "26px",
                  letterSpacing: "2%",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#515558",
                }}
              >
                Be the first to know when new feature lands.
              </div>
              <div
                //Enter your email address here section
                style={{
                  width: "343px",
                  height: "24px",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "24px",
                  letterSpacing: "0.1px",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#545558",
                }}
              >
                Enter your email address here
              </div>
            </div>
            <div
              //bottom frame child
              style={{
                width: "310px",
                height: "38px",
                borderRadius: "36px",
                border: "1px solid #CBD5E1",
                padding: "8px 8px 8px 24px",
                gap: "16px",
                bottom: 0,
                position: "absolute",
                alignItems: "center",
                display: "flex",
                color: "#CBD5E1",
              }}
            >
              <div
                //search bar frame
                style={{
                  width: "195px",
                  height: "22px",
                  gap: "8px",
                }}
              >
                <div
                  //input your email section
                  style={{
                    width: "106px",
                    height: "22px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "22px",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#94A3B8",
                  }}
                >
                  Input your email
                </div>
              </div>

              <div
                //red sub button
                style={{
                  fontVariant: "contained",
                  backgroundColor: buttonColor,
                  fontSize: "medium",
                  width: "120px",
                  height: "30px",
                  borderRadius: "24px",
                  padding: "8px",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </Body>
    </Html>
  );
};
export default FindHousingEmail;
