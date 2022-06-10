import Content from "components/helpers/content-layout";
import MainLayout from "components/helpers/main-layout";
import ServiceContent from "components/service-content/service-content";
import React from "react";

function Services(props) {
  return (
    <MainLayout>
      <Content>
        <ServiceContent />
      </Content>
    </MainLayout>
  );
}

export default Services;
