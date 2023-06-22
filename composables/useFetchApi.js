// const isLoding = ref(false);
// const config = useRuntimeConfig();
const request = async (
  url,
  method = "POST",
  body = {},
  isSendToken = false
) => {
  try {
    const options = {
      method: method,
      body: JSON.stringify(body),
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      initialCache: false,
      onRequestError({ request, opsions, error }) {
        console.log("error request");
      },
      onResponsError({ request, opsions, error }) {
        console.log("error Response");
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
