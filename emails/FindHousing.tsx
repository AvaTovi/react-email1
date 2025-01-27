import { Body, Head, Html, Img, Link, Text } from "@react-email/components";
import React from "react";

export const FindHousingEmail = () => {
  const [buttonColor, setButtonColor] = React.useState("#FF5A60");

  return (
    <Html>
      <Head>
        <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap"></Link>
      </Head>
      <Body>
        <div style={{ width: "736px", height: "2856px", top: "3391px", left: "6336px", borderRadius: "24px" }}>
          {/* Parent Frame: Main Container */}

          {/* Header Section */}
          <div style={{ width: "736px", height: "38px", borderTopLeftRadius: "24px", borderTopRightRadius: "24px", backgroundColor: "black", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid black", boxSizing: "border-box" }}>
            {/* Text: Reset Your Password */}
            <h1 style={{ width: "134px", height: "24px", borderTop: "7px", borderLeft: "301px", transform: "rotate(0deg)", color: "#FFFFFF", fontFamily: "Roboto, sans-serif", fontWeight: 600, fontSize: "14px", lineHeight: "24px", textAlign: "center", whiteSpace: "nowrap" }}>Reset Your Password</h1>
          </div>

          {/* Main Banner Section */}
          <div style={{ width: "736px", height: "640px", display: "flex", position: "relative", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "#FF5A60" }}>
            {/* Text: Are You Ready */}
            <div style={{ width: "93px", height: "350px", top: "149px", left: "322px", transform: "rotate(0deg)", fontFamily: "Roboto, sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "24px", letterSpacing: "2%", alignItems: "center", textAlign: "center", whiteSpace: "nowrap", color: "#FFFFFF" }}>ARE YOU READY</div>

            {/* Text: Find Housing Near Your Campus */}
            <div style={{ width: "510.63px", height: "132px", top: "183px", left: "113px", fontFamily: "Roboto, sans-serif", fontWeight: 700, fontSize: "48.63px", lineHeight: "66px", textAlign: "center", position: "absolute", color: "#FFFFFF" }}>FIND HOUSING NEAR YOUR CAMPUS</div>

            {/* Text: Description */}
            <div style={{ width: "537px", height: "52px", top: "328px", left: "100px", fontFamily: "inter, sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "26px", textAlign: "center", position: "absolute", color: "#FCFCFC" }}>
              Introducing the ideal platform for college students to find and <br /> rent apartments near their campus without the hassle.
            </div>
          </div>

          {/* Section: Discover What's Coming */}
          <div style={{ width: "620.07px", height: "66px", top: "726px", left: "58px", gap: "12.38px", display: "flex", alignItems: "center", justifyContent: "flex-start", position: "absolute" }}>
            <div style={{ width: "256.08px", height: "65px", transform: "rotate(0deg)", fontFamily: "Gilroy, sans-serif", fontWeight: 799, fontSize: "51.78px", lineHeight: "65.77px", textAlign: "center", color: "#515558" }}>DISCOVER</div>
            <div style={{ width: "120.12px", height: "54px", marginLeft: "20px", transform: "rotate(0deg)", fontFamily: "Roboto,sans-serif", fontWeight: 300, fontStyle: "italic", fontSize: "42.45px", lineHeight: "53.92px", textAlign: "center", fontStretch: "condensed", color: "#515558" }}>Whats</div>
            <div style={{ width: "219.12px", height: "65px", transform: "rotate(0deg)", fontFamily: "Gilroy, sans-serif", fontWeight: 799, fontSize: "51.78px", lineHeight: "65.77px", textAlign: "center", color: "#515558" }}>COMING</div>
          </div>

          {/* Section: Description */}
          <div style={{ width: "554px", height: "84px", top: "816px", left: "91px", fontFamily: "Roboto, sans-serif", fontWeight: 300, fontSize: "18px", lineHeight: "28px", textAlign: "center", alignItems: "center", justifyContent: "center", display: "flex", position: "absolute", color: "#545558" }}>Good vibes spark good ideas. Mycollegeease through dozens of campus partners in North Carolina offers almost all students' needs to finding housing around campus.</div>

          {/* Section: Our Features */}
          <div style={{ width: "543px", height: "238px", top: "932px", left: "97px", gap: "32px", position: "absolute", justifyContent: "center" }}>
            <div style={{ width: "543px", height: "24px", transform: "rotate(0deg)", fontFamily: "Roboto, sans-serif", fontWeight: 700, fontSize: "18px", lineHeight: "24px", letterSpacing: "2%", alignItems: "center", justifyContent: "center", display: "flex", marginBottom: "20px", color: "#515558" }}>Our Features</div>

            {/* Feature List */}
            <div style={{ width: "543px", height: "70px", gap: "42px", display: "flex" }}>
              {/* Feature 1 */}
              <div style={{ width: "250px", height: "70px", gap: "8px", display: "flex", flexDirection: "column" }}>
                <div style={{ width: "250px", height: "28px", transform: "rotate(0deg)", fontFamily: "Roboto, sans-serif", fontWeight: 800, fontSize: "18px", lineHeight: "28px", color: "#515558" }}>Lease Property</div>
                <div style={{ width: "250px", height: "34px", fontFamily: "Roboto, sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "17.16px", letterSpacing: "0.1px", color: "#545558" }}>Lorem ipsum dolor sit amet, consectetur elit. Vivamus in velit interdum, facilisis lectus quis.</div>
              </div>
              {/* Feature 2 */}
              <div style={{ width: "250px", height: "70px", gap: "8px", right: 0, display: "flex", flexDirection: "column" }}>
                <div style={{ width: "250px", height: "28px", transform: "rotate(0deg)", fontFamily: "Roboto, sans-serif", fontWeight: 800, fontSize: "18px", lineHeight: "28px", whiteSpace: "nowrap", color: "#515558" }}>Shared Room</div>
                <div style={{ width: "250px", height: "34px", fontFamily: "Roboto, sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "17.16px", letterSpacing: "0.1px", bottom: 0, color: "#545558" }}>Lorem ipsum dolor sit amet, consectetur elit. Vivamus in velit interdum, facilisis lectus quis.</div>
              </div>
            </div>

            {/* Additional Features */}
            <div style={{ width: "543px", height: "140px", flexDirection: "column", gap: "8px", display: "flex", position: "relative" }}>
              {/* Feature 3 */}
              <div style={{ width: "250px", height: "70px", gap: "8px", position: "absolute", bottom: 20, left: "0" }}>
                <div style={{ width: "250px", height: "28px", transform: "rotate(0deg)", fontFamily: "Roboto, sans-serif", fontWeight: 800, fontSize: "18px", lineHeight: "28px", color: "#515558" }}>Sublease Property</div>
                <div style={{ width: "250px", height: "34px", fontFamily: "Roboto, sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "17.16px", letterSpacing: "0.1px", position: "absolute", bottom: 0, left: 0, color: "#545558" }}>Lorem ipsum dolor sit amet, consectetur elit. Vivamus in velit interdum, facilisis lectus quis.</div>
              </div>

              {/* Feature 4 */}
              <div style={{ width: "250px", height: "68px", gap: "8px", bottom: 20, right: 0, position: "absolute" }}>
                <div style={{ width: "250px", height: "26px", transform: "rotate(0deg)", fontFamily: "Roboto, sans-serif", fontWeight: 800, fontSize: "16px", lineHeight: "26px", color: "#515558" }}>Move-in/Out Support</div>
                <div style={{ width: "250px", height: "34px", fontFamily: "Roboto, sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "17.16px", letterSpacing: "0.1px", bottom: 0, right: 0, position: "absolute", color: "#545558" }}>Lorem ipsum dolor sit amet, consectetur elit. Vivamus in velit interdum, facilisis lectus quis.</div>
              </div>
            </div>
          </div>

          {/* Subscription Section */}
          <div style={{ width: "343px", height: "130px", top: "1242px", left: "197px", gap: "24px", position: "absolute", alignItems: "center", textAlign: "center" }}>
            {/* Subscription Text */}
            <div style={{ width: "343px", height: "54px", gap: "4px" }}>
              <div style={{ width: "343px", height: "26px", transform: "rotate(0deg)", fontFamily: "Roboto, sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "26px", letterSpacing: "2%", alignItems: "center", justifyContent: "center", color: "#515558" }}>Be the first to know when new feature lands.</div>
              <div style={{ width: "343px", height: "24px", fontFamily: "Roboto, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "24px", letterSpacing: "0.1px", alignItems: "center", justifyContent: "center", color: "#545558" }}>Enter your email address here</div>
            </div>
            {/* Subscription Input and Button */}
            <div style={{ width: "310px", height: "38px", borderRadius: "36px", border: "1px solid #CBD5E1", padding: "8px 8px 8px 24px", gap: "16px", bottom: 0, position: "absolute", alignItems: "center", display: "flex", color: "#CBD5E1" }}>
              <div style={{ width: "195px", height: "22px", gap: "8px" }}>
                <div style={{ width: "106px", height: "22px", fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "22px", justifyContent: "center", alignItems: "center", color: "#94A3B8" }}>Input your email</div>
              </div>
              <div style={{ fontVariant: "contained", backgroundColor: buttonColor, fontSize: "medium", width: "120px", height: "30px", borderRadius: "24px", padding: "8px", color: "white", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", boxShadow: "0px 8px 26px 0px #EC535B40" }}>Subscribe</div>
            </div>
          </div>

          {/* Explore Section */}
          <div style={{ width: "538.75px", height: "66px", top: "1433px", left: "99px", gap: "8px", display: "flex", alignItems: "center", justifyContent: "flex-start", position: "absolute" }}>
            <div style={{ width: "240px", height: "60px", transform: "rotate(0deg)", fontFamily: "Gilroy, sans-serif", fontWeight: 799.99991, fontSize: "49px", lineHeight: "65.77px", textAlign: "center", color: "#515558" }}>EXPLORE</div>
            <div style={{ width: "131px", height: "54px", transform: "rotate(0deg)", fontFamily: "Roboto, sans-serif", fontWeight: 0.0000000001, fontStyle: "italic", fontSize: "40.45px", lineHeight: "53.92px", margin: "0", textAlign: "center", fontStretch: "ultra-condensed", color: "#515558" }}>Special</div>
            <div style={{ width: "240px", height: "60px", transform: "rotate(0deg)", fontFamily: "Gilroy, sans-serif", fontWeight: 799.99991, fontSize: "49px", lineHeight: "65.77px", textAlign: "center", color: "#515558" }}>ORDER</div>
          </div>

          {/* Image Gallery Section */}
          <div style={{ width: "610px", height: "307px", top: "1559px", left: "63px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", position: "absolute", display: "flex", overflow: "hidden" }}>
            <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1737965694/react-email-images/ooldhnssnnbxvopwbj0d.png" alt="House1" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }} />
            <div style={{ width: "95px", height: "40px", top: "10px", left: "10px", position: "absolute", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF" }}>
              <div style={{ fontFamily: "fontFamily, sans-serif", fontWeight: 540, fontSize: "0.875rem", lineHeight: "25.15px", letterSpacing: "0.13px", color: "#000000DE", textAlign: "center" }}>Apartment</div>
            </div>
          </div>
          <div style={{ width: "298.84px", height: "257.76px", top: "1878.24px", left: "63px", borderBottomLeftRadius: "10px", position: "absolute", display: "flex" }}>
            <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1737966699/react-email-images/t5dvkx0mdii2c1guexjp.png" alt="House2" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }} />
            <div style={{ bottom: "10px", left: "10px", position: "absolute", borderRadius: "10px", padding: "10px", gap: "10px", display: "flex", backgroundColor: "#FFFFFF" }}>
              <div style={{ fontFamily: "fontFamily, sans-serif", fontWeight: 540, fontSize: "0.875rem", lineHeight: "25.15px", letterSpacing: "0.13px", color: "#000000DE", textAlign: "center" }}>House</div>
            </div>
          </div>
          <div style={{ width: "298.84px", height: "257.76px", top: "1878.24px", left: "374.16px", borderBottomRightRadius: "10px", position: "absolute", display: "flex" }}>
            <Img src="https://res.cloudinary.com/ds8slufsu/image/upload/v1737968063/react-email-images/ztdjcmo0rgljcqzq8rqt.png" alt="House3" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }} />
            <div style={{ bottom: "10px", right: "10px", position: "absolute", borderRadius: "10px", padding: "10px", gap: "10px", display: "flex", backgroundColor: "#FFFFFF" }}>
              <div style={{ fontFamily: "fontFamily, sans-serif", fontWeight: 540, fontSize: "0.875rem", lineHeight: "25.15px", letterSpacing: "0.13px", color: "#000000DE", textAlign: "center" }}>Room</div>
            </div>
          </div>

          {/* Button: Explore More */}
          <div style={{ width: "120px", height: "30px", top: "2190px", left: "285px", borderRadius: "100px", padding: "14px 24px", gap: "10px", display: "flex", position: "absolute", justifyContent: "center", alignItems: "center", textAlign: "center", cursor: "pointer", backgroundColor: buttonColor, boxShadow: "0px 8px 26px 0px #EC535B40" }}>
            <div style={{ width: "106px", height: "26px", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "26px", color: "#FFFFFF" }}>Explore More</div>
          </div>

          {/* parent frame Section */}
          <div style={{ width: "716px", height: "327px", top: "2273px", left: "10px", position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#F5F5FB" }}>
            {/*Child Frame*/}
            <div style={{ width: "565px", height: "204px", top: "2335px", left: "86px", gap: "42px", display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column" }}>
              {/*Text frame*/}
              <div style={{ width: "468px", height: "108px", position: "absolute", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }}>
                <div style={{ width: "327px", height: "32px" }}>
                  {/*Have Questions? Get In Contact section*/}
                  <div style={{ width: "327px", height: "32px", fontFamily: "YourFontFamily, sans-serif", fontWeight: 549, fontSize: "1.25rem", lineHeight: "32px", letterSpacing: "0.15px", textAlign: "center" }}>Have Questions? Get In Touch</div>
                </div>
                <div style={{ width: "468px", height: "52px", bottom: 0, position: "absolute" }}>
                  {/*Long text Section*/}
                  <div style={{ width: "468px", height: "52px", fontFamily: "YourFontFamily, sans-serif", fontWeight: "regular", fontSize: "16px", lineHeight: "26px", letterSpacing: "0.17px", textAlign: "center", color: "#94A3B8" }}>A great platform to find and lease your envisioned property without any agent and commissions</div>
                </div>
              </div>
              {/*contact us button frame*/}
              <div style={{ width: "210px", height: "30px", bottom: 60, borderRadius: "100px", padding: "14px 24px", gap: "10px", display: "flex", position: "absolute", justifyContent: "center", alignItems: "center", textAlign: "center", cursor: "pointer", backgroundColor: buttonColor, boxShadow: "0px 8px 26px 0px #EC535B40" }}>
                {/*Contact us text*/}
                <div style={{ width: "91px", height: "26px", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "26px", color: "#FFFFFF" }}>Contact Us</div>
              </div>
            </div>
          </div>
          {/*last frame*/}
          <div style={{ width: "634px", height: "123px", top: "2660px", left: "51px", gap: "33px", justifyContent: "center", display: "flex", alignItems: "flex-start", position: "absolute" }}>
            {/*text frame*/}
            <div style={{ width: "634px", height: "32px", gap: "10px", display: "flex", position: "absolute", flexWrap: "nowrap", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              {/* FOLLOW MYCOLLEGELEASE section */}
              <div style={{ flex: "0 0 158px", height: "24px", fontFamily: "Roboto, sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "24px", letterSpacing: "2%", whiteSpace: "nowrap", boxSizing: "border-box" }}>
                <span style={{ display: "block", marginTop: 0 }}>
                  <span style={{ color: "#EC535B" }}>FOLLOW MYCOLLEGELEASE</span>
                </span>
              </div>
              <div style={{ width: "1px", height: "24px", backgroundColor: "#D3D1D1" }}></div>
              {/* VISIT MYCOLLEGELEASE.COM section */}
              <div style={{ flex: "0 0 172px", height: "24px", fontFamily: "Roboto, sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "24px", letterSpacing: "2%", whiteSpace: "nowrap", boxSizing: "border-box" }}>
                <span style={{ display: "block", marginTop: 0 }}>
                  <span style={{ color: "#EC535B" }}>VISIT MYCOLLEGELEASE.COM</span>
                </span>
              </div>
              <div style={{ width: "1px", height: "24px", backgroundColor: "#D3D1D1" }}></div>
              {/*visit our blog section*/}
              <div style={{ flex: "0 0 93px", height: "24px", transform: "rotate(0deg)", fontFamily: "Roboto, sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "24px", letterSpacing: "2%", whiteSpace: "nowrap", boxSizing: "border-box" }}>
                <span style={{ display: "block", marginTop: 0 }}>
                  <span style={{ color: "#EC535B" }}>VISIT OUR BLOG</span>
                </span>
              </div>
              <div style={{ width: "1px", height: "24px", backgroundColor: "#D3D1D1" }}></div>
              {/*Unsubscribe*/}
              <div style={{ flex: "0 0 83px", height: "24px", transform: "rotate(0deg)", fontFamily: "Roboto, sans-serif", fontWeight: 700, fontSize: "12px", lineHeight: "24px", letterSpacing: "2%" }}>
                <span style={{ display: "block", marginTop: 0 }}>
                  <span style={{ color: "#EC535B" }}>UNSUBSCRIBE</span>
                </span>
              </div>
            </div>
            {/*final frame*/}
            <div style={{ width: "488px", height: "58px", gap: "12px", display: "flex", position: "absolute", bottom: 0, flexDirection: "column" }}>
              {/*inner frame*/}
              <div style={{ width: "488px", height: "26px", gap: "10px", textAlign: "center", position: "absolute", display: "flex", top: 0, justifyContent: "center", alignItems: "center" }}>
                {/*text in frame*/}
                <div style={{ fontFamily: "Roboto, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "24px", whiteSpace: "nowrap", color: "#343131" }}>Spread the word!</div>
              </div>
              {/*icon frame*/}
              <div style={{ width: "92px", height: "20px", gap: "16px", position: "absolute", left: "40%", bottom: 0, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0" }}>
                {/*icons*/}
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo" style={{ width: "18px", height: "20px", color: "#FFFFFF" }} />
                <img src="https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebdd90aef8ef8c749e848_X-EverythingApp-Logo-Twitter.jpg" alt="X Logo" style={{ width: "18px", height: "20px", color: "#FFFFFF" }} />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram Logo" style={{ width: "18px", height: "20px", border: "2px", color: "#FFFFFF" }} />
              </div>
            </div>
          </div>
          {/*bottom black line*/}
          <div style={{ width: "100%", height: "auto", top: "2856px", bottom: 0, position: "absolute" }}>
            {/*border*/}
            <div style={{ width: "736px", height: "38px", transform: "rotate(-180deg)", borderTopLeftRadius: "24px", borderTopRightRadius: "24px", backgroundColor: "black", display: "flex", alignItems: "center", justifyContent: "center" }}></div>
          </div>
        </div>
      </Body>
    </Html>
  );
};
export default FindHousingEmail;
