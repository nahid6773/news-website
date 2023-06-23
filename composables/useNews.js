export const useNewsList = () => {
  const { data, pending, error, execute } = useAsyncData("news", () =>
    $fetch(`News/NewsByDate`, {
      method: "GET",
      baseURL: "http://newspodium.sakku-khatam.ir",
      params: {
        NewsAgencyId: 20,
        Page: 1,
        date: "2023 05 18",
      },
    })
  );
  onMounted(() => {
    if (!unref(data)) {
      execute();
    }
  });
  let news = data._rawValue?.collection.map((res) => {
    return {
      title: res.titlePage,
      subtitle: res.newsAgencyName,
      text: res.lead,
    };
  });
  return { news, pending };
};
