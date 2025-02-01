import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";
import { title } from "process";

export const metadata = {
    title: "キャリア",
};

type Props = {
    children: React.ReactNode;
};

export default function CareerLayout({ children }: Props) {
    return (
        <>
            <Hero title="Career" sub="キャリア" />
            <Sheet>{children}</Sheet>
        </>
    );
}