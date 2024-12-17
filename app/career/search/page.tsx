import { getCareerList } from "@/app/_libs/microcms";
import { CAREER_LIST_LIMIT } from "@/app/_constants";
import CareerList from "@/app/_components/CareerList";
import SearchField from "@/app/_components/SearchField";

type Props = {
    searchParams: {
        q?: string;
    };
};

export default async function Page({ searchParams }: Props) {
    const { contents: career } = await getCareerList({
        limit: CAREER_LIST_LIMIT,
        q: searchParams.q,
    });

    return (
        <>
            <SearchField />
            <CareerList career={career} />
        </>
    );
}