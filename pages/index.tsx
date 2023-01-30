import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Text, Spacer } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <>
      <Text h2>Mox knock-off Medium - It works</Text>
      <Spacer y={1} />
      <Text size="$lg">
        MoxMedium allows you to share articles with my little website.
      </Text>
    </>
  );
};

export default Home;
