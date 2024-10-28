import Image from "next/image";
import Link from "next/link";
import aboutStyles from "../../styles/about.module.css";
import aboutJourneyStyles from "../../styles/about-journey.module.css";
import Tooltip from "../../components/Tooltip";
import Button from "../../components/Button";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function Page() {
  return (
    <main>
      <Breadcrumbs>
        <Link href="/about">About</Link>
        <span>My Journey, Values &amp; Perspectives</span>
      </Breadcrumbs>

      

    </main>
  );
}