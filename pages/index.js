import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../src/componenet/Dynamic/meeting"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <DynamicComponentWithNoSSR />
    </>
  );
}
