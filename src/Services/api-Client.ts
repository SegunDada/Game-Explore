import axios from "axios";

export default axios.create({
  baseURL: " https://api.mobygames.com/v1",
  params: {
    api_key: "moby_Z512XOnrBjMeuwKYDNTrKTa5yGE",
  },
});
