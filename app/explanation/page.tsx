import { profile } from "console";
import { url } from "inspector";
import Image from "next/image";
import styles from "./page.module.css";

const data = {
    contents: [
        {
            id: "1",
            image: {
                url: "/Phoenix_Red.JPG",
                width: 240,
                height: 240 
            },
            name: "鳳徳ミニバスケットボールクラブフェニックス",
            position: "スポーツクラブ",
            profile: "鳳徳フェニックスは、京都市北区の鳳徳小学校をホームとするクラブチームです。年長幼児〜6年生までの子供たちが、いろいろな学校からチームに入ってます。練習は主に、火、木（隔週）、金、土、日と、レベルに合わせて練習しています。",
        },
        {
            id: "2",
            image: {
                url: "/KCJCC_61.JPG",
                width: 240,
                height: 240 
            },
            name: "京都市少年合唱団",
            position: "音楽団体",
            profile: "昭和33年に公立初の少年合唱団として創立。京都市内の小学4年生から中学3年生まで総勢200名超の団員が集い、3つの縦割グループや選抜組「響」などグループ活動も充実。更なる成長・飛躍をめざし、新たな取組にも積極果敢に挑戦し、活動の幅を広げています。",
        },
        {
            id: "3",
            image: {
                url: "/Youth_Stage.jpeg",
                width: 240,
                height: 240 
            },
            name: "合唱団Youth",
            position: "音楽団体",
            profile: "合唱団Youthは、京都市少年合唱団OBの高校生・大学生で、構成されています。OB会合唱団をはじめ、他の合唱団とも交流をしたりして、練習しています。多くの方に歌で希望と癒しを届けられるように日々活動しています。",
        },
    ],
};

export default function Page() {
    return (
        <div className={styles.container}>
            {data.contents.length === 0 ? (
                <p className={styles.empty}>記事がありません</p>
            ) : (
                <ul>
                    {data.contents.map((explanation) => (
                        <li key={explanation.id} className={styles.list}>
                            <Image
                                src={explanation.image.url}
                                alt=""
                                width={explanation.image.width}
                                height={explanation.image.height}
                                className={styles.image}
                            />
                            <dl>
                                <dt className={styles.name}>{explanation.name}</dt>
                                <dd className={styles.position}>{explanation.position}</dd>
                                <dd className={styles.profile}>{explanation.profile}</dd>
                            </dl>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}