import { getLocalStorage } from "../components/shared/local_storage";

const serverUrl = process.env.REACT_APP_SERVER_URL;
const appName=process.env.REACT_APP_NAME_LOCAL;
const digitalOceanPath = process.env.REACT_APP_DIGITAL_OCEAN;
// later on replace that with admin and remove test from path
const adminImagesPath = 'test/admin/';

const selectedLanguage =  getLocalStorage('i18nextLng');

export const Config = {
  //   endPointPath:endPointPath,
  //   projectName:appName,
  //   tableOrderLink:tableOrderLink,
  //   path:path,
    secretPass: "XkhZG4fW2t2W",
   language:"i18nextLng",
  serverApiUrl: serverUrl + "api/",
  BASE_URL : "https://yaksport.dk",
  userToken: appName+"user-token",


  // serverUrlImages: `https://ys-prod.fra1.digitaloceanspaces.com/test/admin/images/hotels/medium/`,
  serverUrlImages: "https://ys-prod.fra1.digitaloceanspaces.com/" + adminImagesPath + "images/hotels/medium/",
  hotelSportImage: digitalOceanPath + adminImagesPath +"images/hotels/medium/",
  hotelReferenceImage: digitalOceanPath + adminImagesPath +"test/admin/images/",
  sportImage: digitalOceanPath +  adminImagesPath +"images/sports/medium/",
  galleryImage: digitalOceanPath +  adminImagesPath +"images/galleries/medium/",
  messageFile: digitalOceanPath + adminImagesPath + `message/attachments/`,
  //   serverUrlCategoryImages: serverUrl + 'images/categories/',
  //   serverUrlProductImages: serverUrl + 'public/images/products/',
  //   serverUrlUserImages: serverUrl + 'public/images/users/',
  //   adminApiTokenName: 'admin-login-token',
  //   roleName: 'role',
  //   email: 'email',
  //   verificationCode: 'verifiactionCode',

  //   userApiTokenName: 'user-login-token',
  //   googleApiKey: 'AIzaSyD4BUDTEpTPIuhhJ2MyQ4AiQ0u3CyFlWOo',

  // Used in whole app
  distance_unit: "km",
  currency_symbol: "DKK",
  currency: "Kr.",
  searchFields: "searchField",
  //   appName: appName,

  pushTokenName: "device-push-token",

  // Here add langues and then add transaltion file for languages
  languages: [
    { shortName: "en", icon: "", longName: "English" },
    { shortName: "da", icon: "", longName: "Danish" },
  ],
  firstVisitDone: "firstVisitDone",

  defaultActivityImg: "../select-image.jpg",
  defaultImg: "select-image.jpg",
  getHotelImage: function (image) {
    // return image ? (this.serverUrlImages + image) : this.defaultImage;
    return "https://ugc.futurelearn.com/uploads/images/4d/c9/header_4dc9321b-f608-4196-9fb7-02f6c0029a5f.jpg";
  },

  vimeo: "https://player.vimeo.com/video/",
  youtube: "https://www.youtube.com/embed/",
  dailymotion: "http://www.dailymotion.com/embed/",
  googleMapApiKey: "AIzaSyCvR1vK8n16g2u44S-PYZvtvJ5w9n00big",

  fn_date_yyyy_mm_dd : function (inputDate, year = new Date().getFullYear()) {
    const dateWithYear = `${inputDate}, ${year}`;
    const parsedDate = new Date(dateWithYear);  
    const formattedYear = parsedDate.getFullYear();
    const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
    const day = String(parsedDate.getDate()).padStart(2, '0');

    return `${formattedYear}-${month}-${day}`;
  },

  fnMultilingualDate : function (dateString) {

    const date = this.fn_date_yyyy_mm_dd(dateString);
    const incomingDate = new Date(date);

    return incomingDate.toLocaleDateString(selectedLanguage, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
    
  },

  __COOKIE__CONSENT__: "__cookie__consent__"

};
export const KEYS = {
  lang: 'lang',
};

export const LANGUAGES_CODE = {
  English: 'en',
  Danish: 'da',
  German: 'de',
  Norwegian: 'no',
  Swedish:'sv'
};


const PAGE_URLS = {
  BASE_URL: "https://yaksport.dk/",  
};

export default PAGE_URLS;
