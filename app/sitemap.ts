import { MetadataRoute } from "next";
import { getAllCategoryList, getAllCareerList } from "./_libs/microcms";

const buildUrl = (path?: string) => `https://localhost:3000${path ?? ""}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const careerContents = await getAllCareerList();
    const categoryContents = await getAllCategoryList();

    const careerUrls: MetadataRoute.Sitemap = careerContents.map((content) => ({
        url: buildUrl(`/career/${content.id}`),
        lastModified: content.revisedAt,
    }));
    const categoryUrls: MetadataRoute.Sitemap = categoryContents.map((content) => ({
        url: buildUrl(`/category/${content.id}`),
        lastModified: content.revisedAt,
    }));

    const now = new Date();

    return [
        {
            url: buildUrl(),
            lastModified: now,
        },
        {
            url: buildUrl("/explanation"),
            lastModified: now,
        },
        {
            url: buildUrl("/contact"),
            lastModified: now,
        },
        {
            url: buildUrl("/career"),
            lastModified: now,
        },
        ...careerUrls,
        ...categoryUrls,
    ];
}