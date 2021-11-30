import React, { useState } from "react";
//import "bootstrap/dist/css/bootstrap.min.css"; Loaders dont work
import { Link } from "react-router-dom";
import { Form, Input, Select, Button } from "antd";
import Header from "./new_header";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const availableTerms = [
  "Summer 2021",
  "Fall 2021",
  "Intersession 2022",
  "Spring 2022",
  "Summer 2022",
];
const { Option } = Select;
const children = [];
for (let i = 0; i < availableTerms.length; i++) {
  children.push(<Option key={availableTerms[i]}>{availableTerms[i]}</Option>);
}

const CourseSearchPage = () => {
  const [department, selectDepartment] = useState();
  const [terms, selectTerms] = useState([]);

  const onSelect = (value) => {
    selectTerms((prevState) => [...prevState, value]);
  };
  const onDeselect = (value) => {
    selectTerms(terms.filter((item) => item !== value));
  };
  const onClear = () => {
    selectTerms([]);
  };

  console.log(terms);
  return (
    <div className="container">
      <Header />
      <div
        className="border mx-auto"
        style={{ width: 600, margin: "auto", padding: 30 }}
      >
        <Form
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          // onValuesChange={onFormLayoutChange}
          size="default"
        >
          <Form.Item label="Term(s)">
            <Select
              mode="multiple"
              allowClear
              placeholder="multi-select"
              onSelect={onSelect}
              onDeselect={onDeselect}
              onClear={onClear}
            >
              {children}
            </Select>
          </Form.Item>
          <Form.Item label="Class Title">
            <Input placeholder="any part of title" />
          </Form.Item>

          <Form.Item label="Class No: ">
            <Input placeholder="e.g. AS.100.102 or partial like 100.1" />
          </Form.Item>

          <Form.Item label="Section: ">
            <Input />
          </Form.Item>

          <Form.Item label="Department">
            <Select>
              <Select.Option value="demo">Fall2021</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 14,
            }}
          >
            {terms.length > 0 && (
              <Link to="/course-evaluations" state={{ terms: { terms } }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Link>
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CourseSearchPage;
