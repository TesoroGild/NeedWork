"use client";
import UsersList from "@/app/users/page";
import { Button } from "@/ui/design-system/button/button";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "@/ui/components/container/container";
import { RiShutDownLine } from "react-icons/ri";
import { Navbar } from "@/ui/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
    </>
  );
}