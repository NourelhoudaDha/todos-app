import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodos, del, update, add } from "./todosSlice";
import {
  List,
  FlexboxGrid,
  Button,
  Panel,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
} from "rsuite";

export default function Todos() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  return (
    <FlexboxGrid justify="center">
      <FlexboxGrid.Item style={{ marginTop: 50 }} colspan={12}>
        <Panel header={<h3>Add Todo</h3>} bordered>
          <Form fluid>
            <FormGroup>
              <ControlLabel>Title</ControlLabel>
              <FormControl
                name="tilte"
                value={todoTitle}
                onChange={setTodoTitle}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Description</ControlLabel>
              <FormControl
                name="Description"
                value={todoDescription}
                onChange={setTodoDescription}
              />
            </FormGroup>

            <FormGroup>
              <ButtonToolbar>
                <Button
                  appearance="primary"
                  onClick={() => {
                    if (todoTitle && todoTitle) {
                      dispatch(
                        add({
                          title: todoTitle,
                          description: todoTitle,
                          id: Date.now().toString(),
                        })
                      );
                      setTodoTitle("");
                      setTodoDescription("");
                    } else {
                      alert("Please insert a title and a description");
                    }
                  }}
                >
                  Create
                </Button>
              </ButtonToolbar>
            </FormGroup>
          </Form>
        </Panel>
        <List style={{ marginTop: 50 }} bordered>
          {todos.map(({ title, id, description, status }, index) => (
            <List.Item bordered>
              <FlexboxGrid key={id}>
                <FlexboxGrid.Item colspan={18}>
                  <div>{`${title} :  ${description}`}</div>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  colspan={1}
                >
                  {status === "todo" && (
                    <Button
                      onClick={() =>
                        dispatch(update({ index, status: "done" }))
                      }
                      color="green"
                      appearance="ghost"
                    >
                      Done
                    </Button>
                  )}
                  {status === "done" && (
                    <Button
                      onClick={() =>
                        dispatch(update({ index, status: "todo" }))
                      }
                      color="green"
                      appearance="ghost"
                    >
                      Cancel
                    </Button>
                  )}
                  <Button
                    style={{ marginLeft: 8 }}
                    onClick={() => dispatch(del(index))}
                    color="red"
                    appearance="ghost"
                  >
                    Remove
                  </Button>
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </List.Item>
          ))}
        </List>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}
