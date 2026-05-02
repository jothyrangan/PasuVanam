import Head from "next/head";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const SEOHead = ({
    title,
    description = SITE_TAGLINE,
    image = "/images/logo.png"
}) => {
    const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - ${SITE_TAGLINE}`;

    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />

            {/* Open Graph */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={SITE_NAME} />
            {image && <meta property="og:image" content={image} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}
        </Head>
    );
};
