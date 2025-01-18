import { getExplanationList } from "@/app/_libs/microcms";
import { EXPLANATION_LIST_LIMIT } from "@/app/_constants";
import ExplanationList from "@/app/_components/ExplanationList";
import SearchField from "@/app/_components/SearchField";

type Props = {
    searchParams: {
        q?: string;
    };
};

export default async function Page({ searchParams }: Props) {
    const { contents: explanation } = await getExplanationList({
        limit: EXPLANATION_LIST_LIMIT,
        q: searchParams.q,
    });

    return (
        <>
            <SearchField />
            <ExplanationList explanation={explanation} />
        </>
    );
}