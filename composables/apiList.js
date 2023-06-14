let BaseUrl = "http://newspodium.sakku-khatam.ir";
let LocalUrl = "http://localhost:1876";
let News = "News";

export default {
  TodayNews: `${BaseUrl}/${News}/TodayNews`,
  NewsByDate: `${BaseUrl}/NewsByDate`,
  LatestNews: `${LocalUrl}/${News}/LatestNews`,
  NewsHeadline: `${LocalUrl}/${News}/newsHeadline`,
  NewsByKey: `${BaseUrl}/${News}/newsByKey`,
};
