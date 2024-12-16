import { createClient } from 'microcms-js-sdk';
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSListContent,
} from "microcms-js-sdk";

export type Explanation = {
    name: string;
    position: string;
    profile: string;
    image: MicroCMSImage;
} & MicroCMSListContent;

export type Category = {
    name: string;
} & MicroCMSListContent;

export type Career = {
    title: string;
    description: string;
    content: string;
    thumbnail?: MicroCMSImage;
    category: Category;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error('MICROCMS_API_KEY is required');
}

if (!process.env.MICROCMS_API_KEY) {
    throw new Error('MICROCMS_API_KEY is required');
}

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

export const getExplanationList = async (queries?: MicroCMSQueries) => {
    const listData = await client
        .getList<Explanation>({
            endpoint: 'explanation',
            queries,
        });
    return listData;
}

export const getCareerList = async (queries?: MicroCMSQueries) => {
    const listData = await client
        .getList<Career>({
            endpoint: 'career',
            queries,
        });
    return listData;
}

export const getCareerDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<Career>({
        endpoint: "career",
        contentId,
        queries,
    });
    return detailData;
};