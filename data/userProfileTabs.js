import TabAddresses, { TabAddressesHover } from "../components/svg/userProfile/TabAddresses";
import TabFavourutes, { TabFavourutesHover } from "../components/svg/userProfile/TabFavourites";
import TabLogOut, { TabLogOutHover } from "../components/svg/userProfile/TabLogOut";
import TabReviews, { TabReviewsHover } from "../components/svg/userProfile/TabReviews";
import TabUserProfile, { TabUserProfileHover } from "../components/svg/userProfile/TabUserProfile";

export const tabs = [
    {
        name : 'User Profile',
        primSvg : <TabUserProfile/>,
        hoverSvg : <TabUserProfileHover/>
    },
    {
        name : 'Addresses',
        primSvg : <TabAddresses/>,
        hoverSvg : <TabAddressesHover/>
    },
    {
        name : 'Favourites',
        primSvg : <TabFavourutes/>,
        hoverSvg : <TabFavourutesHover/>
    },
    {
        name : 'Reviews',
        primSvg : <TabReviews/>,
        hoverSvg : <TabReviewsHover/>
    },
    {
        name : 'Log Out',
        primSvg : <TabLogOut/>,
        hoverSvg : <TabLogOutHover/>
    },
]