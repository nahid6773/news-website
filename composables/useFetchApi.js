// var myHeaders = new Headers();
// myHeaders.append("accept", "text/plain");
// myHeaders.append("Content-Type", "application/json");

export const request = (url, options = null) => {
  //   let requestOptions = {
  //     url: url,
  //     onSuccess: null,
  //     onError: null,
  //     headers: {
  //       accept: "text/plain",
  //       "Content-Type": "application/json",
  //     },
  //   };
  fetch(url, {
    method:options,
    headers: {
      accept: "text/plain",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log(res);
  });
};
