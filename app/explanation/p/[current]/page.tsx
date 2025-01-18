import { notFound } from "next/navigation";
import { getExplanationList } from "@/app/_libs/microcms";
import ExplanationList from "@/app/_components/ExplanationList";
import Pagination from "@/app/_components/Pagination";
import { EXPLANATION_LIST_LIMIT } from "@/app/_constants";

type Props = {
    params: {
        current: string;
    };
};

export default async function Page({ params }: Props) {

    const current = parseInt(params.current, 10);

    if (Number.isNaN(current) || current < 1) {
        notFound();
    }

    const { contents: explanation, totalCount } = await getExplanationList({
        limit: EXPLANATION_LIST_LIMIT,
        offset: EXPLANATION_LIST_LIMIT * (current - 1),
    });

    if (explanation.length === 0) {
        notFound();
    }

    return (
        <>
            <ExplanationList explanation={explanation} />
            <Pagination totalCount={totalCount} current={current} />
        </>
    );
}