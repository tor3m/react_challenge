import http from "../http-common";
import IPostData from "../types/IPostData";

const getAll = () => {
  return http.get("/posts");
};

const get = (id: string) => {
  return http.get(`/posts/${id}`);
};

const create = (data: IPostData) => {
  return http.post("/posts", data);
};

const update = (id: string, data: IPostData) => {
  return http.put(`/posts/${id}`, data);
};

const remove = (id: string) => {
  return http.delete(`/posts/${id}`);
};

const PostService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default PostService;