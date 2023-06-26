// const isLoding = ref(false);
// const config = useRuntimeConfig();
const request = async (
  url,
  method = "POST",
  params = {},
  body = null,
  isSendToken = false
) => {
  try {
    const options = {
      method: method,
      params: params,
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
      initialCache: false,
      onRequestError({ request, opsions, error }) {
        console.log("error request", request);
      },
      onResponsError({ respons, opsions, error }) {
        console.log("error Response", respons);
      },
    };
    const { data, pending, error, refresh } = await useFetch(
      // config.publice.BASE_URL + url,
      url,
      options
    );
    if (error.value) {
      console.log(error.value);
    }
    if (data) {
      console.log(data,"respons OK");
    }
    return {
      data,
      pending,
      error,
      refresh,
    };
  } catch (err) {
    console.log(err);
  }
};
export default request;
