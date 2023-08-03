import React from "react";

function Home() {
  const link = "https://henok.us";
  const target = "_blank";

  return (
    <div className="container" style={containerStyle}>
      <header style={headerStyle}>
        <h1>MERN Stack CRUD</h1>
      </header>
      <section style={sectionStyle}>
        <p>
          <strong>Front-end</strong>: React.js v17+ with RRDv6+
        </p>
        <p>
          <strong>Back-end</strong>: Node.js, Express.js
        </p>
        <p>
          <strong>Database</strong>: MongoDB Atlas with Mongoose ODM
        </p>
      </section>
      <footer style={footerStyle}>
        <p>
          <strong>Developed By</strong>: Aro Barath Chandru B
        </p>
        <p>
          <a href={link} target={target} style={linkStyle}>
            Visit cyber_bytezz.com
          </a>
        </p>
      </footer>
    </div>
  );
}

const containerStyle = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "2rem",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#86bcd1", // Background color for the container
  backgroundImage: "url('/path/to/your/background-image.jpg')", // Replace with the path to your background image
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const headerStyle = {
  textAlign: "center",
  backgroundColor: "#333",
  color: "#fff",
  padding: "1rem",
};

const sectionStyle = {
  margin: "2rem 0",
};

const footerStyle = {
  textAlign: "center",
  marginTop: "2rem",
};

const linkStyle = {
  color: "#007BFF",
  textDecoration: "none",
  fontWeight: "bold",
};

export default Home;
