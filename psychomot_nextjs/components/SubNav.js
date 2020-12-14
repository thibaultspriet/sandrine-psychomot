import "../static/css/psychoBase.css"

export default function SubNav({route,slugRoute,subRoute }) {

    return (
        <div>
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
