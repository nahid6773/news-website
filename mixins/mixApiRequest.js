import axios from 'axios'

export default {
  data() {
    return {
      /* parameters related to DeleteConfirmComp */
      del_conf_title: undefined,
      del_conf_fire: 0,
      del_conf_cb: () => {},
      REQUEST_TIMEOUT: {
        SHORT: 10000,
        NORMAL: 20000,
        LONG: 30000,
        LONGER: 60000,
        MAX: 120000,
      },
    };
  },
  methods: {
    request(url, options = null) {
      let def_opt = {
        /* axios */
        url: url,
        withCredentials: false,
        /* custom */
        onSuccess: null,
        onError: null,
        headers: {},
        silence: false,
      };
      Object.keys(options).forEach((key) => {
        def_opt[key] = options[key];
      });
      // add token if exists
      //   if (localStorage.getItem("token")) {
      //     def_opt.headers["Authorization"] = `Bearer ${localStorage.getItem(
      //       "token"
      //     )}`;
      //   }
      axios
        .request(def_opt)
        .then((response) => {
            //console.log(response.data);
          if (Math.floor(response.status / 100) === 2) {
            //todo handle other response codes & auto retry
            if (def_opt.onSuccess !== null) {
              def_opt.onSuccess(response);
            }
          } // todo here why we dont care about other status codes?
          else {
            if (def_opt.onError !== null) {
              def_opt.onError();
            }
            this.$bvToast.toast(
              `response code ${response.status}` /*todo replace with dictionary*/,
              {
                title: `(${response.status})`,
                variant: "warning",
                solid: true,
              }
            );
          }
        })
        .catch((error) => {
          console.error(error);
          // special handling for status code 401, authorization error
          // also check for route (Home), when username and pw are wrong, api return 401, dont forward in this situation
          if (
            error.response &&
            String(error.response.status) === "401" &&
            this.$route.name !== "Home"
          ) {
            // redirect (not routing) to home (login) page
            let url = new URL(window.location.href);
            window.location.href = url.origin;
          } else {
            if (def_opt.onError !== null) {
              if (error.response) {
                def_opt.onError(error.response);
              } else {
                def_opt.onError();
              }
            }
            let error_title = "Error";
            let error_code = "n/a";
            if (error.response) {
              error_code = error.response.status;
              if (error.response.data) {
                console.error(error.response.data);
              }
            }
            if (!def_opt.silence) {
              this.$bvToast.toast(
                error.message /*todo replace with dictionary*/,
                {
                  title: `${error_title} (${error_code})`,
                  variant: "danger",
                  solid: true,
                }
              );
            }
          } // end of normal error handler
        }); // end of error body
    },
    // getRequestCancelToken() {
    //   return axios.CancelToken.source();
    // },
    requestToast(title, text, variant = "success", delay = 500) {
      this.$bvToast.toast(text, {
        title: title,
        variant: variant,
        solid: true,
        autoHideDelay: delay,
      });
    },
    objToFormData(o) {
      let fd = new FormData();
      Object.keys(o).forEach((key) => {
        if (o[key] instanceof Array) {
          o[key].forEach((item) => {
            fd.append(key, item);
          });
        } else {
          if (o[key] !== null) {
            fd.append(key, String(o[key]));
          }
        }
      });
      return fd;
    },
    confirmActionDialog(cb, title = undefined) {
      this.del_conf_cb = cb;
      this.del_conf_fire += 1;
      this.del_conf_title = title;
    },
  },
};
