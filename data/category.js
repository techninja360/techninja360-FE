import CategoryAV, { CategoryAVHover } from "../components/svg/home/CategoryAV";
import CategoryAVLight from "../components/svg/home/CategoryAVLight";
import CategoryComputers, { CategoryComputersHover } from "../components/svg/home/CategoryComputers";
import CategoryComputersLight from "../components/svg/home/CategoryComputersLight";
import CategoryMobile, { CategoryMobileHover } from "../components/svg/home/CategoryMobile";
import CategoryMobileLight from "../components/svg/home/CategoryMobileLight";
import CategoryPrinters, { CategoryPrintersHover } from "../components/svg/home/CategoryPrinters";
import CategoriesPrintersLight from "../components/svg/home/CategoryPrintersLight";
import CategorySmartHome, { CategorySmartHomeHover } from "../components/svg/home/CategorySmartHome";
import CategorySmartHomeLight from "../components/svg/home/CategorySmartHomeLight";
import CategoryWifi, { CategoryWifiHover } from "../components/svg/home/CategoryWifi";
import CategoryWifiLight from "../components/svg/home/CategoryWifiLight";


export const categories = [
    {
        name : 'Computers',
        primSvg : <CategoryComputers/>,
        secSvg : <CategoryComputersLight/>,
        hoverSvg : <CategoryComputersHover/>
    },
    {
        name : 'Printers',
        primSvg : <CategoryPrinters/>,
        secSvg : <CategoriesPrintersLight/>,
        hoverSvg : <CategoryPrintersHover/>
    },
    {
        name : 'Wifi and Network',
        primSvg : <CategoryWifi/>,
        secSvg : <CategoryWifiLight/>,
        hoverSvg : <CategoryWifiHover/>
    },
    {
        name : 'Mobiles and Tablets',
        primSvg : <CategoryMobile/>,
        secSvg : <CategoryMobileLight/>,
        hoverSvg : <CategoryMobileHover/>
    },
    {
        name : 'Smart Home',
        primSvg : <CategorySmartHome/>,
        secSvg : <CategorySmartHomeLight/>,
        hoverSvg : <CategorySmartHomeHover/>
    },
    {
        name : 'Audio/Video & TV Mounting',
        primSvg : <CategoryAV/>,
        secSvg : <CategoryAVLight/>,
        hoverSvg : <CategoryAVHover/>
    },
]