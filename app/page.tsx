import styles from "./page.module.css";
import Image from "next/image";

import CareerList from "@/app/_components/CareerList";
import ButtonLink from "@/app/_components/ButtonLink";
import { Career } from "@/app/_libs/microcms";

const data: { contents:Career[] } = {
  contents: [
    {
      id: "1",
      title: "鳳徳ミニバスケットボールクラブ卒団",
      category: {
        name: "Lesson",
      },
      publishedAt: "2018/03/14",
      createdAt: "2018/03/14",
    },
    {
      id: "2",
      title: "京都市少年合唱団修了",
      category: {
        name: "Lesson",
      },
      publishedAt: "2021/03/14",
      createdAt: "2021/03/14",
    },
    {
      id: "3",
      title: "合唱団Youth入団",
      category: {
        name: "Lesson",
      },
      publishedAt: "2021/04/06",
      createdAt: "2021/04/06",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 2);

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
        <CareerList career={sliceData} />
        <div className={styles.careerLink}>
          <ButtonLink href="/career">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}