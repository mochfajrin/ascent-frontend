import api from "../api";

const fetchingTrasactionData = async (token) => {
  const res = await api.get("/transaction", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data.transactions;
};

const fetchingFilterTransactionData = async ({ filter, query, token }) => {
  let res;

  if (filter && query) {
    res = await api.get(
      `/transaction?search=${query}&paymentStatus=${filter}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } else {
    res = await api.get(
      `/transaction?${filter ? `paymentStatus=${filter}` : `search=${query}`}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  return res.data.transactions;
};

export { fetchingTrasactionData, fetchingFilterTransactionData };
