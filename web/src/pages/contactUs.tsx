/** @format */

import React from "react";
import Content from "@scenes/contactUs/content";
import { FormContactUs } from "@scenes/contactUs/formContactUs";
import { CarouselContactUs } from "@scenes/contactUs/carousel";

export default function ContactUs() {
  return (
    <Content>
      <FormContactUs></FormContactUs>
      <CarouselContactUs></CarouselContactUs>
    </Content>
  );
}
