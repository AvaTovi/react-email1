import { Body, Head, Html, Img, Link, Text } from "@react-email/components";
import * as React from "react";
//import Cloud from "./images/21.png";

export const FindHousingEmail = () => (
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
          width: "736px", height: "2856px", top: "3391px", left: "6336px", borderRadius: "24px",
        }}
      >
        <div
          //Reset password class
          style={{
            width: "736px", height: "38px", borderTopLeftRadius: "24px", borderTopRightRadius: "24px", backgroundColor: "black", display: "flex", alignItems: "center",
             justifyContent: "center", border: "2px solid black", boxSizing: "border-box",
          }}
        >
          <h1
            style={{
              width: "134px", height: "24px", borderTop: "7px", borderLeft: "301px", transform: "rotate(0deg)", color: "#FFFFFF", fontFamily: "Roboto, sans-serif",
              fontWeight: 600, fontSize: "14px", lineHeight: "24px", textAlign: "center", whiteSpace: "nowrap",
            }}
          >
            Reset Your Password
          </h1>
        </div>

        <div
          //Red frame
          style={{
            width: "736px", height: "640px", display: "flex", position: "relative", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "#FF5A60",
          }}
        >
          <div
            style={{
              //ARE YOU READY section
              width: "93px", height: "350px", top: "149px", left: "322px", transform: "rotate(0deg)", fontFamily: "Roboto, sans-serif", fontWeight: 700,
              fontSize: "12px", lineHeight: "24px", letterSpacing: "2%", alignItems: "center", textAlign: "center", whiteSpace: "nowrap", color: "#FFFFFF",
            }}
          >
            ARE YOU READY
          </div>

          <div
            style={{
              // FIND HOUSING NEAR YOUR CAMPUS section
              width: "510.63px", height: "132px", top: "183px", left: "113px", fontFamily: "Roboto, sans-serif",
              fontWeight: 700, fontSize: "48.63px", lineHeight: "66px", textAlign: "center", position: "absolute", color: "#FFFFFF",
            }}
          >
            FIND HOUSING NEAR YOUR CAMPUS
          </div>

          <div
            style={{
              //Introducing the ideal platform for college students to find and rent apartments near their campus without the hassle. section
              width: "537px", height: "52px", top: "328px", left: "100px", fontFamily: "inter, sans-serif", fontWeight: 400,
              fontSize: "18px", lineHeight: "26px", textAlign: "center", position: "absolute", color: "#FCFCFC",
            }}
          >
            Introducing the ideal platform for college students to find and{" "}
            <br /> rent apartments near their campus without the hassle.
          </div>
        </div>

        <div
          style={{
            //Text frame
            width: "620.07px", height: "66px", top: "726px", left: "58px", gap: "12.38px",
            display: "flex", alignItems: "center", justifyContent: "flex-start", position: "absolute", border: "2px solid black",
          }}
        >
          <div
            style={{
              //DISCOVER Section
              width: "256.08px", height: "66px", transform: "rotate(0deg)", fontFamily: "Gilroy, sans-serif", fontWeight: 800, fontSize: "51.78px",
              lineHeight: "65.77px", textAlign: "center", justifyContent: "center", color: "#515558",
            }}
          >
            DISCOVER
          </div>
        </div>

        <div
          style={{
            //long text section
            width: "554px", height: "84px", top: "816px", left: "91px",
            fontFamily: "Roboto, sans-serif", fontWeight: 300, fontSize: "18px", lineHeight: "28px", textAlign: "center",
            alignItems: "center", justifyContent: "center", display: "flex", position: "absolute", color: "#545558",
          }}
        >
          Good vibes spark good ideas. Mycollegeease through dozens of campus
          partners in North Carolina offers almost all students' needs to
          finding housing around campus.
        </div>

        <div
          style={{
            //frame
            width: "543px", height: "238px", top: "932px", left: "97px",
            gap: "32px", position: "absolute", justifyContent: "center", border: "2px solid black",
          }} 
        >
          <div
            style={{
              width: "543px", height: "24px", transform: "rotate(0deg)",
              fontFamily: "Roboto, sans-serif", fontWeight: 700, fontSize: "18px", lineHeight: "24px",
              letterSpacing: "2%", alignItems: "center", justifyContent: "center", display: "flex", color: "#515558",
            }}
          >
            Our Features
          </div>

          <div
            style={{
              //nested parent
              width: "543px", height: "70px", gap: "42px", border: "2px solid black",
            }} 
          >
            <div
            //top right frame
            style={{
                width: '250px', height: '70px', gap: '8px', border: '2px solid blue',
            }}
            >
            <div
              //Lease Property section
              style={{
                width: "250px", height: "28px", transform: "rotate(0deg)", fontFamily: "Roboto, sans-serif",
                fontWeight: 800, fontSize: "18px", lineHeight: "28px", color: "#515558",
              }}
            >
              Lease Property
            </div>
            <div
            //long text section
              style={{
                width: "250px", height: "34px", fontFamily: "Roboto, sans-serif",
                fontWeight: 400, fontSize: "12px", lineHeight: "17.16px", letterSpacing: "0.1px", color: "#545558",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur elit. Vivamus in velit
              interdum, facilisis lectus quis.
            </div>
            </div>
            <div
            //top right frame
            style={{
                width: '250px', height: '70px', gap: '8px', right: 0, display: 'flex', position: 'relative', flexDirection: 'column', border: '2px solid red',
            }}
            >
                <div
                //shared room section
                style={{
                    width: '250px', height: '28px', transform: 'rotate(0deg)', fontFamily: 'Roboto, sans-serif', fontWeight: 800, fontSize: '18px', lineHeight: '28px', whiteSpace: "nowrap", color: '#515558',
                }}
                >
                    Shared Room
                </div>
                <div
                //long text section
                style={{
                    width: '250px', height: '34px', fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '12px', lineHeight: '17.16px', letterSpacing: '0.1px', bottom: 0, position: 'absolute', color: '#545558',
                }}
                >
                Lorem ipsum dolor sit amet, consectetur elit.
                Vivamus in velit interdum, facilisis lectus quis.
                </div>
            </div>
          </div>
        </div>
      </div>
    </Body>
  </Html>
);

export default Email;