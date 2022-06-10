import React from "react";
import Content from "../components/helpers/content-layout";
import MainLayout from "components/helpers/main-layout";
import HomePage from "components/home-page-content/home-page-content";

export default function Home() {
  return (
    <MainLayout title="Home" keywords="about me, portfolio">
      <Content>
        <HomePage />
      </Content>
    </MainLayout>
  );
}
