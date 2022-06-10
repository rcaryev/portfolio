import React from "react";
import MainLayout from "components/helpers/main-layout";
import Content from "components/helpers/content-layout";
import ContactsContent from "components/contact-page-content";
export default function Contact() {
  return (
    <MainLayout>
      <Content>
        <ContactsContent />
      </Content>
    </MainLayout>
  );
}
