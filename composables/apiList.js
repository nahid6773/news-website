let BaseUrl = "http://newspodium.sakku-khatam.ir";
let LocalUrl = "http://localhost:1876";
let CurrencyUrl = "http://23.227.196.200:81/Currency";

export default {
  GetCurrency: `${CurrencyUrl}/LastUpdateCurrency`,
  GetCurrencyById: `${CurrencyUrl}`,
  TodayNews: `${BaseUrl}/News/TodayNews`,
  NewsByDate: `${BaseUrl}/NewsByDate`,
  LatestNews: `${LocalUrl}/News/LatestNews`,
  NewsHeadline: `${LocalUrl}/News/newsHeadline`,
  NewsByKey: `${BaseUrl}/News/newsByKey`,
};
