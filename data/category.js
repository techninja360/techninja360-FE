import CategoryAV from "../components/svg/home/CategoryAV";
import CategoryAVLight from "../components/svg/home/CategoryAVLight";
import CategoryComputers from "../components/svg/home/CategoryComputers";
import CategoryComputersLight from "../components/svg/home/CategoryComputersLight";
import CategoryMobile from "../components/svg/home/CategoryMobile";
import CategoryMobileLight from "../components/svg/home/CategoryMobileLight";
import CategoryPrinters from "../components/svg/home/CategoryPrinters";
import CategoriesPrintersLight from "../components/svg/home/CategoryPrintersLight";
import CategorySmartHome from "../components/svg/home/CategorySmartHome";
import CategorySmartHomeLight from "../components/svg/home/CategorySmartHomeLight";
import CategoryWifi from "../components/svg/home/CategoryWifi";
import CategoryWifiLight from "../components/svg/home/CategoryWifiLight";


export const categories = [
    {
        name : 'Computers',
        primSvg : <CategoryComputers/>,
        secSvg : <CategoryComputersLight/>
    },
    {
        name : 'Printers',
        primSvg : <CategoryPrinters/>,
        secSvg : <CategoriesPrintersLight/>
    },
    {
        name : 'Wifi and Network',
        primSvg : <CategoryWifi/>,
        secSvg : <CategoryWifiLight/>
    },
    {
        name : 'Mobiles and Tablets',
        primSvg : <CategoryMobile/>,
        secSvg : <CategoryMobileLight/>
    },
    {
        name : 'Smart Home',
        primSvg : <CategorySmartHome/>,
        secSvg : <CategorySmartHomeLight/>
    },
    {
        name : 'Audio/Video & TV Mounting',
        primSvg : <CategoryAV/>,
        secSvg : <CategoryAVLight/>
    },
]