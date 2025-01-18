import { notFound } from "next/navigation";
import { getCategoryDetail, getExplanationList } from "@/app/_libs/microcms";
import ExplanationList from "@/app/_components/ExplanationList";
import Pagination from "@/app/_components/Pagination";
import { EXPLANATION_LIST_LIMIT } from "@/app/_constants";

type Props = {
    params: {
        id: string;
        current: string;
    };
};

export default async function Page({ params }: Props) {
    
    const current = parseInt(params.current, 10);

    if (Number.isNaN(current) || current < 1) {
        notFound();
    }

    const category = await getCategoryDetail(params.id).catch(notFound);

    const { contents: explanation, totalCount } = await getExplanationList({
        filters: `category[equals]${category.id}`,
        limit: EXPLANATION_LIST_LIMIT,
        offset: EXPLANATION_LIST_LIMIT * (current - 1),
    });

    if (explanation.length === 0) {
        notFound();
    }

    return (
        <>
            <ExplanationList explanation={explanation} />
            <Pagination
                current={current}
                totalCount={totalCount}
                basePath={`/explanation/category/${category.id}`}
            />
        </>
    );
}