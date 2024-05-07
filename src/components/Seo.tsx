import Head from "next/head";

interface props{
    pageTitle: string,
    pageDescription: string
}

const SEO = ({ pageTitle, pageDescription } : props) => (
    <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        ...
    </Head>
);

export default SEO