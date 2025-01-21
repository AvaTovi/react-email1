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
              //coming section
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

          <div
            //frame
            style={{
              width: "538.75px",
              height: "66px",
              top: "1433px",
              left: "99px",
              gap: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              position: "absolute",
            }}
          >
            <div
              //EXPLORE section
              style={{
                width: "240px",
                height: "60px",
                transform: "rotate(0deg)",
                fontFamily: "Gilroy, sans-serif",
                fontWeight: 799.99991,
                fontSize: "49px",
                lineHeight: "65.77px",
                textAlign: "center",
                color: "#515558",
              }}
            >
              EXPLORE
            </div>
            <div
              //special section
              style={{
                width: "131px",
                height: "54px",
                transform: "rotate(0deg)",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 0.0000000001,
                fontStyle: "italic",
                fontSize: "40.45px",
                lineHeight: "53.92px",
                margin: "0",
                textAlign: "center",
                fontStretch: "ultra-condensed",
                color: "#515558",
              }}
            >
              Special
            </div>
            <div
              //order section
              style={{
                width: "240px",
                height: "60px",
                transform: "rotate(0deg)",
                fontFamily: "Gilroy, sans-serif",
                fontWeight: 799.99991,
                fontSize: "49px",
                lineHeight: "65.77px",
                textAlign: "center",
                color: "#515558",
              }}
            >
              ORDER
            </div>
          </div>

          <div
            style={{
              //img1 frame
              width: "610px",
              height: "307px",
              top: "1559px",
              left: "63px",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              position: "absolute",
              display: "flex",
              border: "2px solid black",
            }}
          >
            <img
            //src="gu4vWesmJR9obgA6h8bdVDpZQxLC9RBliPNOOhhZV55DZl6wdE1zNPi7zVg3BEvEV8HFNUZkpTORZ0ADWtvliVhpEVLg6Pzn1bSplVGytj6gX8XMEPig7DDrTAVxOm7ETwzq9OzFLGgqTN7Dscq4rm0pBdC4wQ5sb1Y5rzgipN1tqrW3l6WdPMmBjsU5FpfxuYXMbg__"
            //alt="Image description"
            //style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            //img2 frame
            style={{
              width: "298.84px",
              height: "257.76px",
              top: "1878.24px",
              left: "63px",
              borderBottomLeftRadius: "10px",
              position: "absolute",
              display: "flex",
              border: "2px solid black",
            }}
          >
            <img></img>
          </div>
          <div
            //img3 frame
            style={{
              width: "298.84px",
              height: "257.76px",
              top: "1878.24px",
              left: "374.16px",
              borderBottomRightRadius: "10px",
              position: "absolute",
              display: "flex",
              border: "2px solid black",
            }}
          >
            <img></img>
          </div>

          <div
            //button
            style={{
              width: "120px",
              height: "35px",
              top: "2190px",
              left: "285px",
              borderRadius: "100px",
              padding: "14px 24px",
              gap: "10px",
              display: "flex",
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: buttonColor,
              border: "black",
            }}
          >
            <div
              //inside button
              style={{
                width: "106px",
                height: "26px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "26px",
                color: "#FFFFFF",
              }}
            >
              Explore More
            </div>
          </div>
          <div
            //parent frame
            style={{
              width: "716px",
              height: "327px",
              top: "2273px",
              left: "10px",
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F5F5FB",
              border: "2px solid black",
            }}
          >
            <div
              //child frame
              style={{
                width: "565px",
                height: "204px",
                top: "2335px",
                left: "86px",
                gap: "42px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "column",
                border: "2px solid black",
              }}
            >
              <div
                //third child frame
                style={{
                  width: "468px",
                  height: "108px",
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  border: "2px solid black",
                }}
              >
                <div
                  //Have Question? Get In Touch frame section
                  style={{
                    width: "327px",
                    height: "32px",
                  }}
                >
                  <div
                    //Have Questions? Get In Touch text section
                    style={{
                      width: "327px",
                      height: "32px",
                      fontFamily: "YourFontFamily, sans-serif",
                      fontWeight: 500,
                      fontSize: "1.25rem",
                      lineHeight: "32px",
                      letterSpacing: "0.15px",
                      textAlign: "center",
                    }}
                  >
                    Have Questions? Get In Touch
                  </div>
                </div>
                <div
                  //other frame
                  style={{
                    width: "468px",
                    height: "52px",
                    bottom: 0,
                    position: "absolute",
                  }}
                >
                  <div
                    //text section
                    style={{
                      width: "468px",
                      height: "52px",
                      fontFamily: "YourFontFamily, sans-serif",
                      fontWeight: "regular",
                      fontSize: "16px",
                      lineHeight: "26px",
                      letterSpacing: "0.17px",
                      textAlign: "center",
                      color: "#94A3B8",
                    }}
                  >
                    A great platform to find and lease your envisioned property
                    without any agent and commisions
                  </div>
                </div>
                <div
                  //button frame
                  style={{}}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Body>
    </Html>
  );
};
export default FindHousingEmail;
