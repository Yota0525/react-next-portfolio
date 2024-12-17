import { notFound } from "next/navigation";
import { getCategoryDetail, getCareerList } from "@/app/_libs/microcms";
import CareerList from "@/app/_components/CareerList";
import Pagination from "@/app/_components/Pagination";
import { CAREER_LIST_LIMIT } from "@/app/_constants";

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

    const { contents: career, totalCount } = await getCareerList({
        filters: `category[equals]${category.id}`,
        limit: CAREER_LIST_LIMIT,
        offset: CAREER_LIST_LIMIT * (current - 1),
    });

    if (career.length === 0) {
        notFound();
    }

    return (
        <>
            <CareerList career={career} />
            <Pagination
                current={current}
                totalCount={totalCount}
                basePath={`/career/category/${category.id}`}
            />
        </>
    );
}