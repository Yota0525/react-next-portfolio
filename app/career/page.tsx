import { getCareerList } from "@/app/_libs/microcms";
import CareerList from "@/app/_components/CareerList";

export default async function Page() {
    const { contents: career } = await getCareerList();

    return <CareerList career={career} />;
}