import React from "react";
function Home() {
  return (
    <div>
      <div className="row">
        <div
          className="bg-image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')",
            height: "100vh",
            width: "100%",
          }}
        >
          <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
            <div className="h-100">
              
              <div
                style={{
                  fontWeight: "normal",
                  fontFamily: "cursive",
                  color: "white",
                  fontSize: "20px",
                  marginTop: "20px",
                  display: "inherit",
                  marginLeft: "200px",
                }}
                className="paragraph"
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;