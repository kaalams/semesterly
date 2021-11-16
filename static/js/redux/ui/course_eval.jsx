import React, { useState } from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import { Input, Tag, Checkbox, Table } from "antd";

const { Search } = Input;

const plainOptions = ["H", "S", "EN", "N", "Q"];
const columns = [
  { title: "Course Number", dataIndex: "course_no", key: "course_no" },
  { title: "Course Name", dataIndex: "course_name", key: "course_name" },
  { title: "Areas", dataIndex: "areas", key: "areas" },
  { title: "Writing", dataIndex: "writing", key: "writing" },
  { title: "Credits", dataIndex: "credits", key: "credits" },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
    render: (rating) => {
      let color = "";
      if (rating >= 4.5) {
        color = "green";
      }
      if (rating >= 3.5 && rating < 4.5) {
        color = "yellow";
      }
      if (rating < 3.5) {
        color = "red";
      }
      return (
        <Tag color={color} key={rating}>
          {rating}
        </Tag>
      );
    },
  },
];
const data = [
  {
    key: 1,
    course_no: 1,
    course_name: "John Brown",
    areas: 32,
    writing: "New York No. 1 Lake Park",
    credits: 4,
    rating: 4.7,
    reviews:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
  {
    key: 2,
    course_no: 2,
    course_name: "Zac Wild",
    areas: 32,
    writing: "New York No. 1 Lake Park",
    credits: 4,
    rating: 3.4,
    reviews:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
  {
    key: 3,
    course_no: 3,
    course_name: "Dave Brown",
    areas: 32,
    writing: "New York No. 1 Lake Park",
    credits: 4,
    rating: 3.9,
    reviews:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
  {
    key: 4,
    course_no: 4,
    course_name: "John Brown",
    areas: 32,
    writing: "New York No. 1 Lake Park",
    credits: 4,
    rating: 4.2,
    reviews:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
];
const CourseEvalPage = () => {
  const location = useLocation();
  const { terms } = location.state;
  const [tableData, selectTableData] = useState(data);
  return (
    <div className="container">
      <Header />
      <div className="row align-items-start d-flex">
        <div className="align-self-center col d-flex ">
          {terms.terms.map((term, index) => (
            <Tag color="magenta" key={index}>
              {term}
            </Tag>
          ))}

          <Checkbox.Group options={plainOptions} defaultValue={["Apple"]} />
        </div>

        <div className="col">
          <Search
            placeholder="Search for Instructor/Course"
            allowClear
            style={{ width: 600 }}
            size="large"
            onChange={(e) => {
              if (e.target.value.length == 0) {
                selectTableData(data);
              } else {
                const currValue = e.target.value;
                console.log(currValue);
                const filteredData = tableData.filter((entry) =>
                  entry.course_name
                    .toLowerCase()
                    .includes(currValue.toLowerCase())
                );
                console.log(filteredData);
                selectTableData(filteredData);
              }
            }}
          />
        </div>
      </div>
      <div>
        <Table
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>{record.reviews}</p>
            ),
            rowExpandable: (record) => record.course_name !== "Not Expandable",
          }}
          dataSource={tableData}
        />
      </div>
    </div>
  );
};

export default CourseEvalPage;
