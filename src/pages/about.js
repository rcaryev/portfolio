import MainLayout from "components/helpers/main-layout";
import React from "react";
import { useRouter } from "next/router";
import Content from "components/helpers/content-layout";
import AboutContent from "components/about-content/about-content";
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}
export default function About() {
  const query = useRouter();
  return (
    <MainLayout>
      <Content>
        <AboutContent />
      </Content>
    </MainLayout>
  );
}
