import axios from "../../axios.config";

const dataFetch = async (pageNo: Number, query: String) => {
  const data = await axios
    .get(`/flats?_page=${pageNo}&limit=10`, {
      params: {
        q: query
      }
    })
    .then(res => res.data)
    .catch(error => {
      throw new Error("Network Failure!!");
    });
  return data;
};

const deleteFlat = async (id: Number) => {
  const data = await axios
    .delete(`/flats/${id}`)
    .then(res => res)
    .catch(error => {
      throw new Error(error);
    });
  return data;
};

const addFlat = async (data: any) => {
  const response = await axios
    .post(`/flats`, data)
    .then(res => res)
    .catch(error => {
      throw new Error(error);
    });
  return response;
};

export { dataFetch, deleteFlat, addFlat };
