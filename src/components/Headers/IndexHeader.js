
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function IndexHeader() {

  function mint() {
      console.log("Thentic");
  }

  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Thentic API DEMO</h1>

              <Button
                className="btn-round"
                color="danger"
                onClick = {() => mint()}
              >
                <i className="nc-icon nc-spaceship"></i> Mint
              </Button>

              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
        
      </div>
    </>
  );
}

export default IndexHeader;
