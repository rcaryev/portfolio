import { useRouter } from "next/router";
import React from "react";
import ContentLayout from "./page-name";

export default function Content({ children }) {
  const query = useRouter();
  let page;
  if (query.pathname === "/") page = "home";
  else page = query.pathname.slice(1);

  return (
    <div className="min-h-screen overflow-auto w-[80%]  absolute right-0  bg-zinc-600/50 ">
      <div className=" container mx-auto w-5/6">
        <ContentLayout page={page} />
        {children}
      </div>
    </div>
  );
}
