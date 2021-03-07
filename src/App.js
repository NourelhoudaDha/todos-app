import React from "react";
import "rsuite/dist/styles/rsuite-dark.css";
import RootNavigator from "./navigation/RootNavigator";
import { useSelector, useDispatch } from "react-redux";
import { selectConnect, disconnect } from "./features/auth/AuthSlice";
import { Container, Navbar, Content, Nav } from "rsuite";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(selectConnect);
  return (
    <div className="main">
      <Container>
        <Navbar>
          <Navbar.Header style={{ paddingTop: 16, paddingLeft: 16 }}>
            TODO APP
          </Navbar.Header>
          {auth.connected === true && (
            <Navbar.Body>
              <Nav
                pullRight
                onClick={() => {
                  dispatch(disconnect());
                }}
              >
                <Nav.Item>Disconnect</Nav.Item>
              </Nav>
            </Navbar.Body>
          )}
        </Navbar>
        <Content>
          <RootNavigator />
        </Content>
      </Container>
    </div>
  );
}

export default App;
