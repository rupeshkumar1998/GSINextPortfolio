import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const aboutSlice = createSlice({
  name: "about",
  initialState: {
    loading: false,
    abouts: [],
    error: null,
    message: null,
  },
  reducers: {
    getAllAboutsRequest(state, action) {
      state.abouts = [];
      state.error = null;
      state.loading = true;
    },
    getAllAboutsSuccess(state, action) {
      state.abouts = action.payload;
      state.error = null;
      state.loading = false;
    },
    getAllAboutsFailed(state, action) {
      state.abouts = state.abouts;
      state.error = action.payload;
      state.loading = false;
    },
    addNewAboutRequest(state, action) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    addNewAboutSuccess(state, action) {
      state.error = null;
      state.loading = false;
      state.message = action.payload;
    },
    addNewAboutFailed(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.message = null;
    },
    deleteAboutRequest(state, action) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    deleteAboutSuccess(state, action) {
      state.error = null;
      state.loading = false;
      state.message = action.payload;
    },
    deleteAboutFailed(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.message = null;
    },
    updateAboutRequest(state, action) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    updateAboutSuccess(state, action) {
      state.loading = false;
      state.message = action.payload;
      state.error = null;
    },
    updateAboutFailed(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.message = null;
    },
    resetAboutSlice(state, action) {
      state.error = null;
      state.abouts = state.abouts;
      state.message = null;
      state.loading = false;
    },
    clearAllErrors(state, action) {
      state.error = null;
      state.abouts = state.abouts;
    },
  },
});

export const getAllAbouts = () => async (dispatch) => {
  dispatch(aboutSlice.actions.getAllAboutsRequest());
  try {
    const response = await axios.get(
      "http://localhost:4000/api/v1/about/getall",
      { withCredentials: true }
    );
    dispatch(aboutSlice.actions.getAllAboutsSuccess(response.data.abouts));
    dispatch(aboutSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(
      aboutSlice.actions.getAllAboutsFailed(error.response.data.message)
    );
  }
};

export const addNewAbout = (data) => async (dispatch) => {
  dispatch(aboutSlice.actions.addNewAboutRequest());
  try {
    const response = await axios.post(
      "http://localhost:4000/api/v1/about/add",
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(response);
    console.log(response.data.message);
    dispatch(aboutSlice.actions.addNewAboutSuccess(response.data.message));
    dispatch(aboutSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(aboutSlice.actions.addNewAboutFailed(error.response.data.message));
  }
};

// export const updateAbout = (id, proficiency) => async (dispatch) => {
//   dispatch(aboutSlice.actions.updateAboutRequest());
//   try {
//     const response = await axios.put(
//       `http://localhost:4000/api/v1/about/update/${id}`,
//       { proficiency },
//       {
//         withCredentials: true,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//     dispatch(aboutSlice.actions.updateAboutSuccess(response.data.message));
//     dispatch(aboutSlice.actions.clearAllErrors());
//   } catch (error) {
//     dispatch(aboutSlice.actions.updateAboutFailed(error.response.data.message));
//   }
// };

export const updateAbout = ({ id, formData }) => async (dispatch) => {
    dispatch(aboutSlice.actions.updateAboutRequest());
    try {
      const response = await axios.put(
        `http://localhost:4000/api/v1/about/update/${id}`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" }, // Since you're sending formData
        }
      );
      dispatch(aboutSlice.actions.updateAboutSuccess(response.data.message));
      dispatch(aboutSlice.actions.clearAllErrors());
    } catch (error) {
      dispatch(aboutSlice.actions.updateAboutFailed(error.response.data.message));
    }
  };

  
  

export const deleteAbout = (id) => async (dispatch) => {
  dispatch(aboutSlice.actions.deleteAboutRequest());
  try {
    const response = await axios.delete(
      `http://localhost:4000/api/v1/about/delete/${id}`,
      {
        withCredentials: true,
      }
    );
    dispatch(aboutSlice.actions.deleteAboutSuccess(response.data.message));
    dispatch(aboutSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(aboutSlice.actions.deleteAboutFailed(error.response.data.message));
  }
};

export const clearAllAboutErrors = () => (dispatch) => {
  dispatch(aboutSlice.actions.clearAllErrors());
};

export const resetAboutSlice = () => (dispatch) => {
  dispatch(aboutSlice.actions.resetAboutSlice());
};

export default aboutSlice.reducer;
