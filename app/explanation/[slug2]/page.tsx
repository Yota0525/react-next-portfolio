import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getExplanationDetail } from "@/app/_libs/microcms";
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

export async function generateMetadata ({ params, searchParams }: Props): Promise<Metadata> {
    const data = await getExplanationDetail(params.slug, {
        draftKey: searchParams.dk,
    });

    return {
        title: data.name,
        description: data.position,
        openGraph: {
            title: data.name,
            description: data.position,
            images: [data?.image?.url ?? ""],
        },
    }
}

export default async function Page({ params, searchParams }: Props) {

    const data = await getExplanationDetail(params.slug, {
        draftKey: searchParams.dk,
    }).catch(notFound);

    return (
        <>
            <Article data={data} />
            <div className={styles.footer}>
                <ButtonLink href="/explanation">一覧へ</ButtonLink>
            </div>
        </>
    )
}