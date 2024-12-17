import { getCategoryDetail, getCareerList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import CareerList from "@/app/_components/CareerList";
import Pagination from "@/app/_components/Pagination";
import Category from "@/app/_components/Category";
import { CAREER_LIST_LIMIT } from "@/app/_constants";

type Props = {
    params: {
        id: string;
    };
};

export default async function Page({ params }: Props) {

    const category = await getCategoryDetail(params.id).catch(notFound);

    const { contents: career, totalCount } = await getCareerList({
        limit: CAREER_LIST_LIMIT,
        filters: `category[equals]${category.id}`,
    })

    return (
        <>
            <p>
                <Category category={category} />の一覧
            </p>
            <CareerList career={career} />
            <Pagination
                totalCount={totalCount}
                basePath={`/career/category/${category.id}`}
            />
        </>
    );
}