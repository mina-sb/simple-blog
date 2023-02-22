import React, { useContext } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
  Table,
} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { AppContext } from "../AppContext";
import "./SignIn.css";

const SignIn = () => {
  const { showModal, showLogin } = useContext(AppContext);
  const [modal, setModal] = showModal;
  const [login, setLogin] = showLogin;

  const closeLogin = () => {
    setModal(true);
    setLogin(true);
  };
  return (
    <Container className="sign-up">
      <div className="d-flex justify-content-end mb-3">
        <i
          className="fa fa-times close-btn p-1 d-xs-none d-sm-none d-none d-md-block"
          onClick={closeLogin}
        ></i>
      </div>
      <Card className="sign-up-card">
        <CardHeader className="card-header d-sm-none d-xs-none d-md-block">
          <p className="header">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
        </CardHeader>
        <Container className="pb-2">
          <Row>
            <Col md={6}>
              <Container className="px-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="my-4">Welcome back!</h3>
                  <i className="fa fa-times close-btn-sm p-1 d-xs-block d-sm-block d-md-none"></i>
                </div>
                <Table bordered size="md" className="table">
                  <tr>
                    <td colSpan={2}>
                      <Form.Control
                        className="txt-input"
                        type="email"
                        placeholder="Email"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <div className="d-flex justify-content-between align-items-center pl-0">
                        <Form.Control
                          className="txt-input"
                          type="email"
                          placeholder="Password"
                        />
                        <i className="fa fa-eye txt-gray"></i>
                      </div>
                    </td>
                  </tr>
                </Table>
                <div className="d-none d-xs-none d-sm-block d-md-block">
                  <Button className="btn-block sign-up-btn create-btn">
                    Sign In
                  </Button>
                </div>

                <div className="d-flex justify-content-between align-items-center d-xs-block d-sm-none">
                  <Button className="create-btn sign-up-btn-sm">
                    {" "}
                    Sign In
                  </Button>
                  <p className="my-4 signIn">
                    <ins>or, Create Account</ins>
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="sign-up-btn mt-3 d-flex align-items-center justify-content-center"
                >
                  <img
                    className="icon"
                    src=" https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/120px-Facebook_f_logo_%282019%29.svg.png?20200820101156"
                  />{" "}
                  Sign up with Facebook"
                </Button>
                <Button
                  variant="outline"
                  className="sign-up-btn mt-2 d-flex align-items-center justify-content-center"
                >
                  <img
                    className="icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png?20221203181234"
                  />{" "}
                  Sign up with Google{" "}
                </Button>
                <p className="forget mt-4">Forgot Password?</p>
              </Container>
            </Col>
            <Col md={6} className="d-none d-md-block d-xs-none">
              <Container className="px-4">
                {" "}
                <div className="d-flex justify-content-end">
                  <p className="my-4 signIn">
                    Don’t have an account yet?{" "}
                    <span className="signIn-link"> Create new for free! </span>
                  </p>
                </div>
                <Image
                  className="p-4"
                  fluid
                  src="https://www.pngall.com/wp-content/uploads/8/Team-Work-PNG.png"
                />
              </Container>
            </Col>
          </Row>
        </Container>
      </Card>
    </Container>
  );
};

export default SignIn;
