import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Course from "./Course";
import { CourseResponse } from "../../models/CourseResponse";
import { MemoryRouter } from "react-router-dom";

describe("Course Component", () => {
  const props: CourseResponse = {
    id: 0,
    img: "test-image.jpg",
    name: "Test Course",
    author: "John Doe",
    duration: "2h 30m",
    likes: 123,
    numberOfLessons: 10,
    authorAvatarUrl: "test-avatar.jpg",
    userProgress: 0,
  };

  it("renders the course name", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Course {...props} />
      </MemoryRouter>
    );
    expect(getByText("Test Course")).toBeInTheDocument();
  });

  it("renders the author name", () => {
    const { getByText } = render(
      <MemoryRouter>
        {" "}
        <Course {...props} />{" "}
      </MemoryRouter>
    );
    expect(getByText(/by John Doe/i)).toBeInTheDocument();
  });

  it("renders the avatar image", () => {
    const { getByAltText } = render(
      <MemoryRouter>
        {" "}
        <Course {...props} />{" "}
      </MemoryRouter>
    );
    const avatar = getByAltText("Test Course");
    expect(avatar).toHaveAttribute("src", "test-avatar.jpg");
  });

  it("renders the course image", () => {
    const { getByTitle } = render(
      <MemoryRouter>
        {" "}
        <Course {...props} />{" "}
      </MemoryRouter>
    );
    const image = getByTitle("Test Course");
    expect(image).toHaveAttribute("src", "test-image.jpg");
  });

  it("renders the number of lessons", () => {
    const { getByText } = render(
      <MemoryRouter>
        {" "}
        <Course {...props} />{" "}
      </MemoryRouter>
    );
    expect(getByText("10 lessons")).toBeInTheDocument();
  });

  it("renders the duration", () => {
    const { getByText } = render(
      <MemoryRouter>
        {" "}
        <Course {...props} />{" "}
      </MemoryRouter>
    );
    expect(getByText("2h 30m")).toBeInTheDocument();
  });

  it("renders the number of likes", () => {
    const { getByText } = render(
      <MemoryRouter>
        {" "}
        <Course {...props} />{" "}
      </MemoryRouter>
    );
    expect(getByText("123")).toBeInTheDocument();
  });

  it("renders the AccessTimeIcon", () => {
    const { container } = render(
      <MemoryRouter>
        {" "}
        <Course {...props} />{" "}
      </MemoryRouter>
    );
    expect(
      container.querySelector('svg[data-testid="AccessTimeIcon"]')
    ).toBeInTheDocument();
  });

  it("renders the ThumbUpIcon", () => {
    const { container } = render(
      <MemoryRouter>
        {" "}
        <Course {...props} />{" "}
      </MemoryRouter>
    );
    expect(
      container.querySelector('svg[data-testid="ThumbUpIcon"]')
    ).toBeInTheDocument();
  });
});
