import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

export const metadata = {
    title: "説明",
};

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children}: Props) {
    return (
        <>
            <Hero title="explanation" sub="説明" />
            <Sheet>{children}</Sheet>
        </>
    );
}