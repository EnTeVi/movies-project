import {Outlet} from "react-router-dom";

import {Footer, Header, Search, SiteBar} from "../../components";

const MailLayout = () => {
    return (
        <div>
            <Header/>
            <Search/>
            <SiteBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MailLayout};