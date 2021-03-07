import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  FlexboxGrid,
  Button,
  Panel,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
} from "rsuite";
import { connect } from "./AuthSlice";
export default function Auth() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <FlexboxGrid justify="center">
      <FlexboxGrid.Item style={{ marginTop: 50 }} colspan={12}>
        <Panel header={<h3>Authentication</h3>} bordered>
          <Form fluid>
            <FormGroup>
              <ControlLabel>Email</ControlLabel>
              <FormControl name="tilte" value={email} onChange={setEmail} />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password</ControlLabel>
              <FormControl
                name="Description"
                value={password}
                onChange={setPassword}
              />
            </FormGroup>

            <FormGroup>
              <ButtonToolbar>
                <Button
                  appearance="primary"
                  onClick={() => {
                    if (email === "test@test.com" && password === "test") {
                      dispatch(connect());
                      setPassword("");
                      setEmail("");
                    } else {
                      alert("Wrong credentials");
                    }
                  }}
                >
                  Login
                </Button>
              </ButtonToolbar>
            </FormGroup>
          </Form>
        </Panel>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}
