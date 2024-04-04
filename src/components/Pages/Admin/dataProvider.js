import { stringify } from "query-string";
import { fetchUtils } from "react-admin";

const getOptions = () => {
  let options = {};
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("user");
  options.headers.set("Authorization", `Bearer ${token}`);
  return options;
};

export const dataProvider = {
  remote: async (resource, params, method) => {
    const { filter } = params;
    const apiUrl = `http://localhost:8080/`;
    let url = `${apiUrl}/${resource}`;
    let options = getOptions();
    if (method === "GET") {
      const query = {
        filter: JSON.stringify(filter),
      };
      url = `${apiUrl}/${resource}?${stringify(query)}`;
      options = {
        ...options,
        method,
      };
    } else {
      options = {
        ...options,
        method,
        body: JSON.stringify(params.data),
      };
    }
    const res = await fetchUtils.fetchJson(url, options);
    let { json: data } = res;
    return { data };
  },

  create: async (resource, params) => {
    const apiUrl = `http://localhost:8080/`;
    let url = `${apiUrl}/${resource}`;
    let options = getOptions();
    options = {
      ...options,
      method: "POST",
      body: JSON.stringify(params.data),
    };

    return { data: { id: 124, msg: "helloooo" } };

    // const res = await fetchUtils.fetchJson(url, options)
    // let { json: data } = res
    // return { data }
  },

  update: async (resource, params) => {
    const apiUrl = `http://localhost:8080/`;
    let url = `${apiUrl}/${resource}`;
    let options = getOptions();
    options = {
      ...options,
      method: "PATCH",
      body: JSON.stringify(params.data),
    };

    const res = await fetchUtils.fetchJson(url, options);
    let { json: data } = res;
    return { data };
  },

  getList: async (resource, params) => {
    const { filter } = params;
    const { where } = filter;
   
    const apiUrl = `http://localhost:8080/`;

    const query = {
      filter: JSON.stringify(filter),
    };

    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const options = getOptions();
    const res = await fetchUtils.fetchJson(url, options);

    const { json = {} } = res;

    const data = {
      data: json,
      total: json.length,
    };

    return data;
  },
};
