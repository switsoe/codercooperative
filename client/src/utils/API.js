import axios from "axios";

export default {
  googleSignin: function() {
    return axios.get("/auth/google");
  },
  currentUser: function() {
    return axios.get("/api/current_user");
  },
  logout: function() {
    return axios.get("/api/logout");
  }
};