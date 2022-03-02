import React from "react";

// reactstrap components
import {
  Card,
  //CardHeader,
  CardBody,
  //NavItem,
  //NavLink,
  //Nav,
  //TabContent,
  //TabPane,
  //Button,
  //Input,
  //InputGroupAddon,
  //InputGroupText,
  //InputGroup,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  //const [iconPills] = React.useState("1");
  //const [pills, setPills] = React.useState("1");
 // const [firstFocus, setFirstFocus] = React.useState(false);
  //const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are and what we are giving you?</h2>
                <h5 className="description">
                  Here we can write about the company. 
                  What they do and what they provide and their vision and their mission for their company future.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div>
              <Row>
            <Col className="ml-auto mr-auto" md="4">
          
              <Card>
                
                <CardBody>
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/bg3.jpg").default}
                ></img>
                  
                      <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                    
                   <Button>Click Here</Button>
                    
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="4">
          
              <Card>
                
                <CardBody>
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/bg3.jpg").default}
                ></img>
                  
                      <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                      <Button>Click Here</Button>
                   
                    
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="4">
          
              <Card>
                
                <CardBody>
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/bg3.jpg").default}
                ></img>
                      <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. 
                      </p>
                    
                      <Button>Click Here</Button>
                    
                </CardBody>
              </Card>
            </Col>
            </Row>
            <Row>
            <Col className="ml-auto mr-auto" md="4">
          
              <Card>
                
                <CardBody>
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/bg3.jpg").default}
                ></img>
                      <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. 
                      </p>
                      <Button>Click Here</Button>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="4">
              <Card>
                <CardBody>
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/bg3.jpg").default}
                ></img>
                      <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. 
                      </p>
                      <Button>Click Here</Button>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="4">
              <Card>
                <CardBody>
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/bg3.jpg").default}
                ></img>
                      <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. 
                      </p>
                      <Button>Click Here</Button>
                </CardBody>
              </Card>
            </Col>
            </Row>
            </div>
          </Container>
        </div>
       
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
