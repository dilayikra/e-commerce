import axiosInstance from "../../api/axios";
import { toast } from "react-toastify";

// --- ACTION Türlerim ---
export const SET_USER = 'SET_USER';
export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';


export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (lang) => ({ type: SET_LANGUAGE, payload: lang });


export const loginUser = (credentials, history) => (dispatch) => {
  return axiosInstance
    .post("/login", { 
      email: credentials.email, 
      password: credentials.password 
    })
    .then((res) => {
      const user = res.data;
      
      
      dispatch(setUser(user));

      
      axiosInstance.defaults.headers.common["Authorization"] = user.token;

      
      if (credentials.rememberMe) {
        localStorage.setItem("token", user.token);
      }

      toast.success(`Welcome back, ${user.name}!`);
      history.push("/"); 
    })
    .catch((err) => {
      console.error("Login Error:", err);
      const errorMessage = err.response?.data?.message || "Login failed.";
      toast.error(errorMessage);
    });
};


export const verifyToken = () => (dispatch) => {
  const token = localStorage.getItem("token");

  if (!token) return;

  
  axiosInstance.defaults.headers.common["Authorization"] = token;

  return axiosInstance
    .get("/verify")
    .then((res) => {
      const user = res.data;
      
      
      dispatch(setUser(user));

      
      localStorage.setItem("token", user.token);
      axiosInstance.defaults.headers.common["Authorization"] = user.token;
      
      console.log("Auto-login successful for:", user.name);
    })
    .catch((err) => {
      console.error("Token verification failed:", err);
      
      
      localStorage.removeItem("token");
      delete axiosInstance.defaults.headers.common["Authorization"];
    });
};


export const fetchRoles = () => (dispatch, getState) => {
  const { roles } = getState().client;
  if (roles && roles.length > 0) return;

  axiosInstance.get('/roles')
    .then(res => dispatch(setRoles(res.data)))
    .catch(err => console.error("Roles fetch error:", err));
};