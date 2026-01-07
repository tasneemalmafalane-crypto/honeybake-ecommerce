import React from "react";

/* Material UI Icons */
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Contact() {
  // بيانات الفروع الموحدة
  const branches = [
    { city: "Istanbul", phone: "+90 212 555 0101", address: "Nişantaşı, Şişli" },
    { city: "Ankara", phone: "+90 312 444 0202", address: "Çankaya, Tunalı Hilmi" },
    { city: "Izmir", phone: "+90 232 333 0303", address: "Alsancak, Konak" },
    { city: "Hatay", phone: "+90 326 222 0404", address: "Antakya, Atatürk Cd." },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url(https://png.pngtree.com/thumb_back/fh260/background/20221111/pngtree-hand-drawn-confectionery-bakery-homemade-biscuits-image_1461993.jpg)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        padding: "80px 0",
        fontFamily: "'Dancing Script', cursive",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "rgba(252,249,234,0.96)",
          borderRadius: "50px",
          padding: "50px",
          boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "60px", color: "#b08d57", marginBottom: "15px" }}>
          Contact Honey Bake
        </h2>
        
        <p style={{ fontSize: "26px", color: "#6b5e4a", marginBottom: "40px" }}>
          We are here to sweeten your day! Reach out to our branches:
        </p>

        {/* عرض الفروع بشكل منظم */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "30px", 
          marginBottom: "40px" 
        }}>
          {branches.map((branch, index) => (
            <div key={index} style={{
              padding: "20px",
              borderRadius: "20px",
              border: "1px solid #dccbb1",
              backgroundColor: "rgba(255, 255, 255, 0.5)"
            }}>
              <h3 style={{ color: "#b08d57", fontSize: "28px", marginBottom: "10px" }}>
                📍 {branch.city}
              </h3>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "5px" }}>
                <PhoneIcon style={{ color: "#b08d57", fontSize: "20px" }} />
                <span style={{ fontSize: "20px", color: "#444" }}>{branch.phone}</span>
              </div>
              <p style={{ fontSize: "18px", color: "#888", margin: 0 }}>{branch.address}</p>
            </div>
          ))}
        </div>

        {/* البريد الإلكتروني الموحد */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px", marginBottom: "40px" }}>
          <EmailIcon style={{ color: "#b08d57", fontSize: "35px" }} />
          <span style={{ fontSize: "24px", color: "#444" }}>hello@honeybake.com</span>
        </div>

        <hr style={{ margin: "30px auto", width: "50%", border: "0.5px solid #dccbb1" }} />

        {/* روابط التواصل الاجتماعي */}
        <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
          <InstagramIcon 
            style={{ fontSize: "45px", color: "#C13584", cursor: "pointer" }} 
            onClick={() => window.open("https://instagram.com", "_blank")}
          />
          <FacebookIcon 
            style={{ fontSize: "45px", color: "#1877F2", cursor: "pointer" }} 
            onClick={() => window.open("https://facebook.com", "_blank")}
          />
        </div>

        <p style={{ marginTop: "30px", fontSize: "20px", color: "#b08d57" }}>
          All Branches Open Daily: 9:00 AM - 10:00 PM
        </p>
      </div>
    </div>
  );
}

export default Contact;