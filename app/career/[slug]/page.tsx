import { notFound } from "next/navigation";
import { getCareerDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";

type Props = {
    params: {
        slug: string;
    };
    searchParams: {
        dk?: string;
    }
};

export const revalidate = 60;

export default async function Page({ params, searchParams }: Props) {

    const data = await getCareerDetail(params.slug, {
        draftKey: searchParams.dk,
    }).catch(notFound);

    return (
        <>
            <Article data={data} />
            <div className={styles.footer}>
                <ButtonLink href="/career">一覧へ</ButtonLink>
            </div>
        </>
    )
}