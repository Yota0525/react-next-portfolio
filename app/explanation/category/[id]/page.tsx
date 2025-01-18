import { getCategoryDetail, getExplanationList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import ExplanationList from "@/app/_components/ExplanationList";
import Pagination from "@/app/_components/Pagination";
import Category from "@/app/_components/Category";
import { EXPLANATION_LIST_LIMIT } from "@/app/_constants";

type Props = {
    params: {
        id: string;
    };
};

export default async function Page({ params }: Props) {

    const category = await getCategoryDetail(params.id).catch(notFound);

    const { contents: explanation, totalCount } = await getExplanationList({
        limit: EXPLANATION_LIST_LIMIT,
        filters: `category[equals]${category.id}`,
    })

    return (
        <>
            <p>
                <Category category={category} />の一覧
            </p>
            <ExplanationList explanation={explanation} />
            <Pagination
                totalCount={totalCount}
                basePath={`/explanation/category/${category.id}`}
            />
        </>
    );
}