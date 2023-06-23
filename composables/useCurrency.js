export const useCurrency = () => {
  const config = useRuntimeConfig();
  const loading = ref(false);

  const getCurrency = async () => {
    const { data, pending } = await useFetchApi(
      "http://23.227.196.200:81/Currency/LastUpdateCurrency",
      "POST"
    );
    return {data, pending}
  };

  const getCurrencyById = async () => {
    const { data, pending } = await useFetchApi(
      "http://23.227.196.200:81/Currency",
      "POST",
      {
        typeCurrency: 1,
        start: 0,
        end: 10
      }
    );
    return {data, pending}
  };

  return {
    getCurrency,
    getCurrencyById
  };
};