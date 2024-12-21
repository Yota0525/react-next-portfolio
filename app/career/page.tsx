import { getCareerList } from "@/app/_libs/microcms";
import CareerList from "@/app/_components/CareerList";
import Pagination from "@/app/_components/Pagination";
import SearchField from "@/app/_components/SearchField";
import { CAREER_LIST_LIMIT } from "@/app/_constants";

export const revalidate = 60;

export default async function Page() {
    
    const { contents: career, totalCount } = await getCareerList({
        limit: CAREER_LIST_LIMIT,
    });

    return (
        <>
            <SearchField />
            <CareerList career={career} />
            <Pagination totalCount={totalCount} />
        </>
    );
}