import styles from "./page.module.css";
import Image from "next/image";
import { getCareerList } from "@/app/_libs/microcms";
import { TOP_CAREER_LIMIT } from "@/app/_constants";
import CareerList from "@/app/_components/CareerList";
import ButtonLink from "@/app/_components/ButtonLink";

export default async function Home() {

  const data = await getCareerList({
    limit: TOP_CAREER_LIMIT,
  });

  return (
    <>  
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>ITの力で生活を豊かに</h1>
          <p className={styles.description}>私はSEになるため勉強している専門一回生です。</p>
        </div>
        <Image
          className={styles.bgimg}
          src="/Blue_Cross.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.career}>
        <h2 className={styles.careerTitle}>Career</h2>
        <CareerList career={data.contents} />
        <div className={styles.careerLink}>
          <ButtonLink href="/career">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}