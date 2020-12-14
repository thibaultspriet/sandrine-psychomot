import Head from "next/head";


export default function SubNav({route,slugRoute,subRoute }) {

    return (
        <div>
            <Head>
                <link rel="stylesheet" href="/static/css/psychoBase.css" />
            </Head>
            <nav id="subNav">
                <ul id="subNavList">
                    <li><a href={"/"+slugRoute}>{route}</a></li>
                    <li>/</li>
                    <li id="lastItem">
                        <a href="#">{subRoute}</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
