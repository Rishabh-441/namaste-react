import React, {lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"
import { jsx } from "react/jsx-runtime";
import Header from "./components/Header";
import Body from "./components/Body";
import ResturantCard from "./components/ResturantCard";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import About from "./components/About";
import '../index.css';


const restaurantList = [ 
    {
      "info": {
        "id": "204036",
        "name": "Punjabi Dhaba- P.D.",
        "cloudinaryImageId": "cszzqdlhjchojjrq6rmx",
        "locality": "Dehradun Road",
        "areaName": "Bus Stand",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Tandoor",
          "Snacks"
        ],
        "avgRating": 4.5,
        "parentId": "162241",
        "avgRatingString": "4.5",
        "totalRatingsString": "44K+",
        "sla": {
          "deliveryTime": 52,
          "lastMileTravel": 12,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "12.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-15 23:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/roorkee/punjabi-dhaba-p-d-dehradun-road-bus-stand-rest204036",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "395878",
        "name": "Hotel Prakash & Restaurant",
        "cloudinaryImageId": "hnuhnz1xgxvlzadfhpvs",
        "locality": "Civil Line",
        "areaName": "Roorkee Talkies",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Tandoor",
          "Chaat",
          "Chinese",
          "Desserts"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "247268",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 40,
          "lastMileTravel": 11.6,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "11.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-15 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/roorkee/hotel-prakash-and-restaurant-civil-line-roorkee-talkies-rest395878",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "116544",
        "name": "Mohit Dhaba",
        "cloudinaryImageId": "dxbrxqa7qj9kghhxttx6",
        "locality": "Ram Nagar Chowk",
        "areaName": "Ram Nagar Chowk",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "North Indian"
        ],
        "avgRating": 4.2,
        "parentId": "137883",
        "avgRatingString": "4.2",
        "totalRatingsString": "16K+",
        "sla": {
          "deliveryTime": 43,
          "lastMileTravel": 11.5,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "11.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-15 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/roorkee/mohit-dhaba-ram-nagar-chowk-rest116544",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "115753",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/e7f79aca-0388-44ae-ba44-44cc7c72d096_115753.jpg",
        "locality": "Civil Lines",
        "areaName": "Roorkee",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.3,
        "parentId": "721",
        "avgRatingString": "4.3",
        "totalRatingsString": "3.3K+",
        "sla": {
          "deliveryTime": 54,
          "lastMileTravel": 12.2,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "12.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-15 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹189"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/roorkee/pizza-hut-civil-lines-roorkee-rest115753",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "451291",
        "name": "P.D Combo Kitchen",
        "cloudinaryImageId": "o7wj7u3nxoljyjdb0ddh",
        "locality": "Civil Lines",
        "areaName": "Bus Stand",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "North Indian",
          "Indian"
        ],
        "avgRating": 4.5,
        "parentId": "314013",
        "avgRatingString": "4.5",
        "totalRatingsString": "2.1K+",
        "sla": {
          "deliveryTime": 52,
          "lastMileTravel": 12,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "12.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-15 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/roorkee/p-d-combo-kitchen-civil-lines-bus-stand-rest451291",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "117150",
        "name": "Tanishas Royal Hyderabadi Biryani",
        "cloudinaryImageId": "gmg9kyenjqypnmmmdqxk",
        "locality": "Civil Lines",
        "areaName": "Roorkee Talkies",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Tandoor",
          "Chinese"
        ],
        "avgRating": 4.3,
        "parentId": "201004",
        "avgRatingString": "4.3",
        "totalRatingsString": "5.8K+",
        "sla": {
          "deliveryTime": 47,
          "lastMileTravel": 11.6,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "11.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-15 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/roorkee/tanishas-royal-hyderabadi-biryani-civil-lines-roorkee-talkies-rest117150",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "403832",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/d08dc977-5e85-46df-8142-feb32cd9873b_403832.JPG",
        "locality": "Nehru Nagar",
        "areaName": "Roorkee",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "Rolls & Wraps"
        ],
        "avgRating": 4.5,
        "parentId": "547",
        "avgRatingString": "4.5",
        "totalRatingsString": "2.2K+",
        "sla": {
          "deliveryTime": 41,
          "lastMileTravel": 10.3,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "10.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-15 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/roorkee/kfc-nehru-nagar-roorkee-rest403832",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "779038",
        "name": "The Belgian Waffle Co.",
        "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
        "locality": "KHANJARPUR ROAD",
        "areaName": "Roorkee",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Waffle",
          "Desserts",
          "Ice Cream"
        ],
        "avgRating": 4.8,
        "veg": true,
        "parentId": "2233",
        "avgRatingString": "4.8",
        "totalRatingsString": "298",
        "sla": {
          "deliveryTime": 59,
          "lastMileTravel": 12.3,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "12.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-15 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/roorkee/the-belgian-waffle-co-khanjarpur-road-roorkee-rest779038",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "117123",
        "name": "Milk Bar",
        "cloudinaryImageId": "s2fvlgmbjpx2fuyjtwj1",
        "locality": "Civil Lines",
        "areaName": "Roorkee Talkies",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "North Indian",
          "Sweets",
          "Chinese",
          "Italian",
          "South Indian",
          "Bakery"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "136175",
        "avgRatingString": "4.2",
        "totalRatingsString": "5.6K+",
        "sla": {
          "deliveryTime": 60,
          "lastMileTravel": 11.6,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "11.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-15 20:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/roorkee/milk-bar-civil-lines-roorkee-talkies-rest117123",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "395875",
        "name": "Prakash Sweets",
        "cloudinaryImageId": "qgturk074a3o9kwicocb",
        "locality": "Civil Lines",
        "areaName": "Roorkee Talkies",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Sweets",
          "Bakery",
          "Snacks"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "160530",
        "avgRatingString": "4.6",
        "totalRatingsString": "3.1K+",
        "sla": {
          "deliveryTime": 43,
          "lastMileTravel": 11.6,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "11.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-15 21:31:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/roorkee/prakash-sweets-civil-lines-roorkee-talkies-rest395875",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "116439",
        "name": "Olive",
        "cloudinaryImageId": "dath2zjdv0pwkkza8z6t",
        "locality": "Civil Line",
        "areaName": "Vishal Mega Mart Chowk",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Continental",
          "Chinese"
        ],
        "avgRating": 4.4,
        "parentId": "151394",
        "avgRatingString": "4.4",
        "totalRatingsString": "6.8K+",
        "sla": {
          "deliveryTime": 57,
          "lastMileTravel": 12.3,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "12.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-15 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹89"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/roorkee/olive-civil-line-vishal-mega-mart-chowk-rest116439",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "635891",
        "name": "Hangries",
        "cloudinaryImageId": "ilctgurmk1glazbmvidw",
        "locality": "Jadugar Road",
        "areaName": "IIT_Roorkee",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Chinese",
          "Fast Food",
          "Burgers",
          "Beverages"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "93241",
        "avgRatingString": "4.3",
        "totalRatingsString": "324",
        "sla": {
          "deliveryTime": 48,
          "lastMileTravel": 11.6,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "11.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-15 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/roorkee/hangries-jadugar-road-iit-roorkee-rest635891",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "117228",
        "name": "Tamarind Restaurant",
        "cloudinaryImageId": "gi1pheodflvxbfuwz9fn",
        "locality": "Civil Lines",
        "areaName": "Prem Mandir Road",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Italian",
          "Mexican",
          "Tandoor",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "200373",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.9K+",
        "sla": {
          "deliveryTime": 54,
          "lastMileTravel": 11.9,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "11.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-15 23:15:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/roorkee/tamarind-restaurant-civil-lines-prem-mandir-road-rest117228",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "370161",
        "name": "Olive Kitchen",
        "cloudinaryImageId": "if52rmqw32vcywtbsln2",
        "locality": "Civil Lines",
        "areaName": "Vishal Mega Mart Chowk",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Italian",
          "Pizzas",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "6822",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.4K+",
        "sla": {
          "deliveryTime": 53,
          "lastMileTravel": 12.3,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "12.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-15 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/roorkee/olive-kitchen-civil-lines-vishal-mega-mart-chowk-rest370161",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "365418",
        "name": "Baap Of Rolls",
        "cloudinaryImageId": "qzsyuqvwgfj4n5daujir",
        "locality": "Civil Line",
        "areaName": "IIT_Roorkee",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Snacks",
          "Beverages",
          "Rolls & Wraps",
          "Momos"
        ],
        "avgRating": 4.5,
        "parentId": "14310",
        "avgRatingString": "4.5",
        "totalRatingsString": "5.7K+",
        "sla": {
          "deliveryTime": 39,
          "lastMileTravel": 11.6,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "11.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-16 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹79"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/roorkee/baap-of-rolls-civil-line-iit-roorkee-rest365418",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "435827",
        "name": "Roms Pizza",
        "cloudinaryImageId": "zduqmnkrwfjht4tljzye",
        "locality": "Ganesh Pur",
        "areaName": "Malviya Chowk",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "12143",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.1K+",
        "sla": {
          "deliveryTime": 46,
          "lastMileTravel": 9.8,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "9.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-15 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/roorkee/roms-pizza-ganesh-pur-malviya-chowk-rest435827",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "660597",
        "name": "Five Star Janta",
        "cloudinaryImageId": "e96e0b4f54a3e08824600e728e4a0331",
        "locality": "Dehardun Road",
        "areaName": "IIT_Roorkee",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "South Indian",
          "Bakery"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "15743",
        "avgRatingString": "4.4",
        "totalRatingsString": "1.0K+",
        "sla": {
          "deliveryTime": 42,
          "lastMileTravel": 9.7,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "9.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-15 22:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/roorkee/five-star-janta-dehardun-road-iit-roorkee-rest660597",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "436248",
        "name": "The Burger Company",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/30/1727f6ff-489d-4832-9b7f-b8e41842006e_436248.jpg",
        "locality": "Andar Hadood Nagar",
        "areaName": "Roorkee Talkies",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Fast Food",
          "Snacks",
          "Italian",
          "Beverages"
        ],
        "avgRating": 4.1,
        "parentId": "206007",
        "avgRatingString": "4.1",
        "totalRatingsString": "415",
        "sla": {
          "deliveryTime": 44,
          "lastMileTravel": 11.6,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "11.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-15 22:50:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/roorkee/the-burger-company-andar-hadood-nagar-roorkee-talkies-rest436248",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "861511",
        "name": "Pastas By Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/7f372d1f-269d-448c-8248-1cabe77b5035_861511.jpg",
        "locality": "Civil Lines",
        "areaName": "Roorkee",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pastas"
        ],
        "avgRating": 4,
        "parentId": "306806",
        "avgRatingString": "4.0",
        "totalRatingsString": "30",
        "sla": {
          "deliveryTime": 58,
          "lastMileTravel": 12.2,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "12.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-15 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹125"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/roorkee/pastas-by-pizza-hut-civil-lines-roorkee-rest861511",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "215512",
        "name": "Desi Tadka",
        "cloudinaryImageId": "mfbw1tek9b6sevrf8qjt",
        "locality": "Civil Lines",
        "areaName": "Haridwar Road, Civil Lines",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Tandoor",
          "Italian",
          "Beverages",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "393990",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.2K+",
        "sla": {
          "deliveryTime": 67,
          "lastMileTravel": 12,
          "serviceability": "SERVICEABLE",
          "slaString": "65-70 mins",
          "lastMileTravelString": "12.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-09-15 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/city/roorkee/desi-tadka-civil-lines-haridwar-road-civil-lines-rest215512",
        "type": "WEBLINK"
      }
    }
  ];
const Grocery = lazy(() => import("./components/Grocery.js"));
const AppLayout = () => {
    return (
        <div className="app">
            {/* Header */}
            <Header/>
            {/* Body */}
            <Outlet/>
            {/* Footer */}
        </div>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <ErrorPage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);