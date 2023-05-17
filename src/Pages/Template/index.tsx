import React from "react";
import { Header } from "../../components/Header";

interface props {
  children: React.ReactNode;
}

export const Template = ({ children }: props) => {
  return (
    <>
      <Header />
      <section className="w-full h-screen bg-red-500 flex justify-center items-center">{children}</section>
    </>
  );
};
