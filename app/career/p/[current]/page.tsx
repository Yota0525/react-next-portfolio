import { notFound } from "next/navigation";
import { getCareerList } from "@/app/_libs/microcms";
import CareerList from "@/app/_components/CareerList";
import Pagination from "@/app/_components/Pagination";
import { CAREER_LIST_LIMIT } from "@/app/_constants";

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

    const { contents: career, totalCount } = await getCareerList({
        limit: CAREER_LIST_LIMIT,
        offset: CAREER_LIST_LIMIT * (current - 1),
    });

    if (career.length === 0) {
        notFound();
    }

    return (
        <>
            <CareerList career={career} />
            <Pagination totalCount={totalCount} current={current} />
        </>
    );
}