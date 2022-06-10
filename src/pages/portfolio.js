import Content from "components/helpers/content-layout";
import MainLayout from "components/helpers/main-layout";
import PortfolioContent from "components/portfolio-content/portfolio-content";
import React from "react";

function Portfolio(props) {
  return (
    <MainLayout>
      <Content>
        <PortfolioContent />
      </Content>
    </MainLayout>
  );
}

export default Portfolio;
