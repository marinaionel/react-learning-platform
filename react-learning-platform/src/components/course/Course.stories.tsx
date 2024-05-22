import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Course from "./Course";

const meta = {
  component: Course,
  args: {
    id: 1,
    userProgress: 3,
    author: "John Smith",
    duration: "3 hours",
    likes: 263,
    name: "Intro to Investing",
    numberOfLessons: 8,
    authorAvatarUrl: "https://www.w3schools.com/howto/img_avatar.png",
    img: "https://www.usnews.com/object/image/0000016d-8dc8-dc08-a77f-8fcf81610000/191002-volatility-stock.jpg",
  },
} satisfies Meta<typeof Course>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
