import axios from "axios";

export default axios.create({
  baseURL: "https://api.mobygames.com/v1",
  params: {
    api_key: "moby_fjlQG9VZk1wWJ5hWZdTFPZLfSJe",
    limit: 20,
    offset: 30,
  },
});
