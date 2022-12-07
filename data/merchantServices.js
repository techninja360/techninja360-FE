import AvIcon, { AvIconSelected } from "../components/svg/merchantDetails/AvIcon";
import ComputerIcon, { ComputerIconSelected } from "../components/svg/merchantDetails/ComputerIcon";
import MobileIcon, { MobileIconSelected } from "../components/svg/merchantDetails/MobileIcon";
import NetworkIcon, { NetworkIconSelected } from "../components/svg/merchantDetails/NetworkIcon";
import PrinterIcon, { PrinterIconSelected } from "../components/svg/merchantDetails/PrinterIcon";
import SmartHomeIcon, { SmartHomeIconSelected } from "../components/svg/merchantDetails/SmartHomeIcon";

export const services = [
    {
        'mainCategory':'Computers',
        'icon':<ComputerIcon/>,
        'selectedIcon':<ComputerIconSelected/>,
        'subCategories':[
            {
                'subCategoryName':'Software Support',
                'subCategoryServices':['Computer Diagnosis','Computer Repair & Help','Slow Computer Fix/Computer Tune-up','Virus Removal','Email Support','No Boot','New Computer Setup','OS Upgrade/Reinstall','Browser Support','Software Uninstall/Reinstall','No Sound','Data Backup or Transfer','Computer Training','Printer Setup','Printer Troubleshooting','add A new Service (Subject to Approval)'],
            },
            {
                'subCategoryName':'Hardware Support',
                'subCategoryServices':['Desktop Harddrive Replacement','Laptop Harddrive Replacement','Desktop RAM Replacement','Laptop Keypad Replacement','Laptop Screen Replacement','Laptop Water Damage','No Boot - Harddrive Crashed',]
            }
        ],
        
    },
    {
        'mainCategory':'Printers',
        'icon':<PrinterIcon/>,
        'selectedIcon':<PrinterIconSelected/>,
        'subCategories':[
            {
                'subCategoryName':'',
                'subCategoryServices':['New Printer Setup','Wireless Printer Support','Printer Offline Fix','Printer Hardware Repair','add A new Service (Subject to Approval)']
            }
        ],
        
    },
    {
        'mainCategory':'Wifi and Network',
        'icon':<NetworkIcon/>,
        'selectedIcon':<NetworkIconSelected/>,
        'subCategories':[
            {
                'subCategoryName':'',
                'subCategoryServices':['New Wifi Connection Setup','Wifi & network support','Wifi Signal Extension','add A new Service (Subject to Approval)','abc']
            }
        ],
        
    },
    {
        'mainCategory':'Mobile Support',
        'icon':<MobileIcon/>,
        'selectedIcon':<MobileIconSelected/>,
        'subCategories':[
            {
                'subCategoryName':'Software Support',
                'subCategoryServices':['New Mobile/Tablet Device Setup','Mobile/Tablet Device Support','add A new Service (Subject to Approval)'],
            },
            {
                'subCategoryName':'Hardware Support',
                'subCategoryServices':['Screen Replacement','Water Damage','Sound Issue','Touch Screen Not Working','Mobile / Tablet Others','add A new Service (Subject to Approval)']
            }
        ],
        
    },
    {
        'mainCategory':'Smart Home',
        'icon':<SmartHomeIcon/>,
        'selectedIcon':<SmartHomeIconSelected/>,
        'subCategories':[
            {
                'subCategoryName':'Thermostats',
                'subCategoryServices':['Smart Thermostat Setup & Installation','Smart Thermostat Support','add A new Service (Subject to Approval)'],
            },
            {
                'subCategoryName':'Video Doorbells',
                'subCategoryServices':['Dorebell Replacementsss'],
            },
            {
                'subCategoryName':'Garage Doors',
                'subCategoryServices':[],
            },
            {
                'subCategoryName':'Cameras',
                'subCategoryServices':[],
            },
            {
                'subCategoryName':'Locks',
                'subCategoryServices':[],
            },
            {
                'subCategoryName':'Alarms',
                'subCategoryServices':[],
            }
        ],
        
    },
    {
        'mainCategory':'Audio/ Video & TV Mounting',
        'icon':<AvIcon/>,
        'selectedIcon':<AvIconSelected/>,
        'subCategories':[
            {
                'subCategoryName':'TV Mounting',
                'subCategoryServices':['TV  Mounting up to 32”','TV  Mounting up to 33” - 50”','TV  Mounting up to 51” - 60”','TV  Mounting more than 61”','TV Dismount or Remount'],
            },
            {
                'subCategoryName':'Audio & Video',
                'subCategoryServices':['Home Theater Hook-up & Setup','Surround Sound System Setup','Home Theater Tutorial','Universal Remote Setup','TV & Home Theater Support','Home Stereo Connectivity Support']
            }
        ],
        
    },
]