import { Body, Head, Html, Img, Link, Text } from "@react-email/components";
//import * as React from "react";
import React from "react";

export const SkateAppEmail = () => (
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
          height: "38px",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid black",
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
            whiteSpace: "nowrap",
          }}
        >
          Reset Your Password
        </h1>
      </div>

      <Img
        src="https://s3-alpha-sig.figma.com/img/07d7/2cc3/02ed10a7ad52a0c4333be41a23448f40?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C65vI6GS3J0to8YSAy6UpMdUq4Q9WyRmxdbeCGHywud8aaLejIPguO0mUBDbmMA0c1tWDAZzc4rJSUOgfAUfjHhONXoOotTyHIZCdavHW8lZRjgIUUAb5ugl63seyKQrviYBtl~aLlsQJvOQhzEjOgMqcDdqgeKjO1HEqdW2r4~0zYPZHu5hzsSXlKMTqFl0mOgK30YnxXDWN9C37JLHeiwFNl7VGYtZGHqPsshSVBDeW5-Umz9kSkQ60ym9mx4R4VPybFHQ0yymhhBozo~yiAnKpkZaWeE7pa4ysU8TozNMhNyh9PUULzNIh5kN~3twVsZo5sOxiOmQNLXK-~vTjg__"
        alt="Password Reset"
        style={{
          width: "443px",
          height: "202.25px",
          position: "absolute",
          top: "113px",
          left: "146px",
        }}
      />

      <Text
        style={{
          width: "123px",
          height: "24px",
          position: "absolute",
          top: "403px",
          left: "307px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 700,
          fontSize: "12px",
          lineHeight: "24px",
          letterSpacing: "2%",
          color: "#0C3461",
          whiteSpace: "nowrap",
        }}
      >
        HELLO MARCO DAVIS
      </Text>

      <Text
        style={{
          width: "214px",
          height: "44px",
          position: "absolute",
          top: "433px",
          left: "258px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 799.9999,
          fontSize: "32.25px",
          lineHeight: "44px",
          color: "#343131",
          whiteSpace: "nowrap",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Don't be panic!
      </Text>

      <div
        style={{
          width: "500px",
          height: "48px",
          position: "absolute",
          top: "500px",
          left: "118px",
          transform: "rotate(0deg)",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "24px",
          letterSpacing: "2%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
          color: "#343131",
        }}
      >
        <div>
          We received a request to reset the password for your account. Please
          click
        </div>

        <div>the button below to create a new password.</div>
      </div>

      <div
        onClick={() =>
          (window.location.href =
            "https://mycollegelease.com/request/resetpassword/too")
        }
        style={{
          position: "absolute",
          width: "244px",
          height: "54px",
          top: "580px",
          left: "246px",
          backgroundColor: "#ED4944",
          borderRadius: "100px",
          padding: "14px 24px 14px 24px",
          gap: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "0px 8px 26px 0px #EC535B40",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "26px",
            color: "#FFFFFF",
            letterSpacing: "2%",
            textAlign: "center",
          }}
        >
          Reset My Password
        </div>
      </div>

      <Text
        style={{
          width: "500px",
          height: "24px",
          top: "674px",
          left: "118px",
          transform: "rotate(0deg)",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "24px",
          letterSpacing: "2%",
          alignItems: "center",
          position: "absolute",
          textAlign: "center",
        }}
      >
        Or use the link below to get started
      </Text>
      <div
        onClick={() =>
          (window.location.href =
            "https://mycollegelease.com/request/resetpassword/too")
        }
        style={{
          width: "500px",
          height: "24px",
          position: "absolute",
          top: "720px",
          left: "118px",
          transform: "rotate(0deg)",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "24px",
          letterSpacing: "2%",
          color: "#5378FC",
          textAlign: "center",
          cursor: "pointer",
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        https://mycollegelease.com/request/resetpassword/too
      </div>

      <div
        style={{
          width: "653px",
          height: "312px",
          position: "absolute",
          top: "783px",
          left: "42px",
          paddingTop: "24px",
          paddingRight: "24px",
          paddingBottom: "32px",
          paddingLeft: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "32px",
          boxSizing: "border-box",
          backgroundColor: "#F5F5FB",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          zIndex: "10",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "330.12px",
              transform: "rotate(0deg)",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              lineHeight: "24px",
              letterSpacing: "2%",
              textAlign: "center",
              color: "#190E64",
            }}
          >
            GET TROUBLE
          </div>

          <div
            style={{
              width: "100%",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "29.64px",
              lineHeight: "40.22px",
              textAlign: "center",
              color: "#343131",
            }}
          >
            Any Question?
          </div>
        </div>

        <div
          style={{
            width: "605px",
            transform: "rotate(0deg)",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "24px",
            letterSpacing: "2%",
            color: "#343131",
          }}
        >
          Please let us know if we can assist you by replying to this email or
          emailing help@mycollegelease.com.
          <span style={{ display: "block", marginTop: "20px" }}>
            If you didn't request a password reset, we recommend you get in
            touch with our support team to secure your account.
          </span>
          <span style={{ display: "block", marginTop: "5px" }}>
            <span style={{ color: "#ED4944" }}>Call us at +1(213)555-3893</span>{" "}
            or write to us at
            <span style={{ color: "#ED4944" }}> help@skateappteam.com</span>
          </span>
        </div>
      </div>

      <div
        style={{
          //frame
          width: "634px",
          height: "32px",
          position: "absolute",
          top: "1142px",
          left: "51px",
          gap: "10px",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: "1 1 172px",
            height: "24px",
            padding: "4px",
            gap: "10px",
            transform: "rotate(0deg)",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 700,
            fontSize: "12px",
            lineHeight: "24px",
            letterSpacing: "2%",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ display: "block", marginTop: "5px" }}>
            <span style={{ color: "#EC535B" }}> FOLLOW MYCOLLEGELEASE</span>
          </span>
        </div>

        <div
          style={{
            width: "1px",
            height: "24px",
            backgroundColor: "#D3D1D1",
          }}
        ></div>

        <div
          style={{
            flex: "1 1 172px",
            height: "24px",
            padding: "4px",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 700,
            fontSize: "12px",
            lineHeight: "24px",
            letterSpacing: "2%",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ display: "block", marginTop: "5px" }}>
            <span style={{ color: "#EC535B" }}> VISIT MYCOLLEGELEASE.COM</span>
          </span>
        </div>

        <div
          style={{
            width: "1px",
            height: "24px",
            backgroundColor: "#D3D1D1",
          }}
        ></div>

        <div
          style={{
            flex: "1 1 93px",
            height: "24px",
            padding: "4px",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 700,
            fontSize: "12px",
            lineHeight: "24px",
            letterSpacing: "2%",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ display: "block", marginTop: "5px" }}>
            <span style={{ color: "#EC535B" }}> VISIT OUR BLOG</span>
          </span>
        </div>

        <div
          style={{
            width: "1px",
            height: "24px",
            backgroundColor: "#D3D1D1",
          }}
        ></div>

        <div
          style={{
            flex: "1 1 83px",
            height: "24px",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 700,
            fontSize: "12px",
            lineHeight: "24px",
            letterSpacing: "2%",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ display: "block", marginTop: "5px" }}>
            <span style={{ color: "#EC535B" }}> UNSUBSCRIBE</span>
          </span>
        </div>

        <div
          style={{
            //frame
            width: "100%",
            height: "110px",
            gap: "12px",
            left: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              //text
              width: "106px",
              height: "24px",
              padding: "4px",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "24px",
              justifyContent: "center",
              alignItems: "center",
              whiteSpace: "nowrap",
              display: "flex",
              color: "#343131",
            }}
          >
            <span style={{ display: "block", marginTop: "25px" }}>
              Spread the word!
            </span>
          </div>

          <div
            style={{
              //img
              gap: "16px",
              width: "92px",
              height: "20px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" // Facebook logo
              alt="Facebook Logo"
              style={{
                width: "16px",
                height: "16px",
                top: "3.91px",
                left: "5.9px",
                color: "#FFFFFF",
              }}
            />
            <img
              src="https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebdd90aef8ef8c749e848_X-EverythingApp-Logo-Twitter.jpg"
              alt="Twitter X Logo"
              style={{
                width: "16px",
                height: "16px",
                top: "4.91px",
                left: "4.41px",
                color: "#FFFFFF",
              }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram Logo"
              style={{
                width: "16px",
                height: "16px",
                top: "5px",
                left: "5px",
                border: "2px",
                color: "#FFFFFF",
              }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "0",
          top: "1357px",
          width: "100%",
          height: "auto",
        }}
      >
        <div
          style={{
            width: "736px",
            height: "38px",
            transform: "rotate(-180deg)",
            borderTopLeftRadius: "24px",
            borderTopRightRadius: "24px",
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid black",
          }}
        ></div>
      </div>
    </Body>
  </Html>
);

export default SkateAppEmail;