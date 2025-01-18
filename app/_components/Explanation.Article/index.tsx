import Link from "next/link";
import Image from "next/image";
import type { Explanation } from "@/app/_libs/microcms";
import Date from "../Date";
import Category from "../Category";
import styles from "./index.module.css";

type Props = {
  data: Explanation;
};

export default function Article({ data }: Props) {
  return (
    <main>
        <h1 className={styles.title}>{data.name}</h1>
        <p className={styles.description}>{data.position}</p>
        <div className={styles.meta}>
          <Link
            href={`/explanation/category/${data.category.id}`}
            className={styles.categoryLink}
          >
            <Category category={data.category} />
          </Link>
            <Date date={data.publishedAt ?? data.createdAt} />
        </div>
        {data.image && (
            <Image
                src={data.image.url}
                alt=""
                className={styles.thumbnail}
                width={data.image.width}
                height={data.image.height}
            />
        )}
        <div
            className={styles.content}
            dangerouslySetInnerHTML={{ 
                __html: data.profile
            }}
        />
    </main>
  )
}