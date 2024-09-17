import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const awardRecognitionSlice = createSlice({
  name: "awardRecognition",
  initialState: {
    loading: false,
    awardRecognitions: [],
    error: null,
    message: null,
  },
  reducers: {
    getAllAwardRecognitionsRequest(state, action) {
      state.awardRecognitions = [];
      state.error = null;
      state.loading = true;
    },
    getAllAwardRecognitionsSuccess(state, action) {
      state.awardRecognitions = action.payload;
      state.error = null;
      state.loading = false;
    },
    getAllAwardRecognitionsFailed(state, action) {
      state.awardRecognitions = state.awardRecognitions;
      state.error = action.payload;
      state.loading = false;
    },
    addNewAwardRecognitionRequest(state, action) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    addNewAwardRecognitionSuccess(state, action) {
      state.error = null;
      state.loading = false;
      state.message = action.payload;
    },
    addNewAwardRecognitionFailed(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.message = null;
    },
    deleteAwardRecognitionRequest(state, action) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    deleteAwardRecognitionSuccess(state, action) {
      state.error = null;
      state.loading = false;
      state.message = action.payload;
    },
    deleteAwardRecognitionFailed(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.message = null;
    },
    updateAwardRecognitionRequest(state, action) {
      state.loading = true;
      state.error = null;
      state.message = null;
    },
    updateAwardRecognitionSuccess(state, action) {
      state.loading = false;
      state.message = action.payload;
      state.error = null;
    },
    updateAwardRecognitionFailed(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.message = null;
    },
    resetAwardRecognitionSlice(state, action) {
      state.error = null;
      state.awardRecognitions = state.awardRecognitions;
      state.message = null;
      state.loading = false;
    },
    clearAllErrors(state, action) {
      state.error = null;
      state.awardRecognitions = state.awardRecognitions;
    },
  },
});

export const getAllAwardRecognitions = () => async (dispatch) => {
  dispatch(awardRecognitionSlice.actions.getAllAwardRecognitionsRequest());
  try {
    const response = await axios.get(
      "http://localhost:4000/api/v1/awardRecognition/getall",
      { withCredentials: true }
    );
    dispatch(awardRecognitionSlice.actions.getAllAwardRecognitionsSuccess(response.data.awardRecognitions));
    dispatch(awardRecognitionSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(
      awardRecognitionSlice.actions.getAllAwardRecognitionsFailed(error.response.data.message)
    );
  }
};

export const addNewAwardRecognition = (data) => async (dispatch) => {
  dispatch(awardRecognitionSlice.actions.addNewAwardRecognitionRequest());
  try {
    const response = await axios.post(
      "http://localhost:4000/api/v1/awardRecognition/add",
      data,
      {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(response);
    console.log(response.data.message);
    dispatch(awardRecognitionSlice.actions.addNewAwardRecognitionSuccess(response.data.message));
    dispatch(awardRecognitionSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(awardRecognitionSlice.actions.addNewAwardRecognitionFailed(error.response.data.message));
  }
};

// export const updateAwardRecognition = (id, proficiency) => async (dispatch) => {
//   dispatch(awardRecognitionSlice.actions.updateAwardRecognitionRequest());
//   try {
//     const response = await axios.put(
//       `http://localhost:4000/api/v1/awardRecognition/update/${id}`,
//       { proficiency },
//       {
//         withCredentials: true,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//     dispatch(awardRecognitionSlice.actions.updateAwardRecognitionSuccess(response.data.message));
//     dispatch(awardRecognitionSlice.actions.clearAllErrors());
//   } catch (error) {
//     dispatch(awardRecognitionSlice.actions.updateAwardRecognitionFailed(error.response.data.message));
//   }
// };

export const updateAwardRecognition = ({ id, formData }) => async (dispatch) => {
    dispatch(awardRecognitionSlice.actions.updateAwardRecognitionRequest());
    try {
      const response = await axios.put(
        `http://localhost:4000/api/v1/awardRecognition/update/${id}`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" }, // Since you're sending formData
        }
      );
      dispatch(awardRecognitionSlice.actions.updateAwardRecognitionSuccess(response.data.message));
      dispatch(awardRecognitionSlice.actions.clearAllErrors());
    } catch (error) {
      dispatch(awardRecognitionSlice.actions.updateAwardRecognitionFailed(error.response.data.message));
    }
  };

  
  

export const deleteAwardRecognition = (id) => async (dispatch) => {
  dispatch(awardRecognitionSlice.actions.deleteAwardRecognitionRequest());
  try {
    const response = await axios.delete(
      `http://localhost:4000/api/v1/awardRecognition/delete/${id}`,
      {
        withCredentials: true,
      }
    );
    dispatch(awardRecognitionSlice.actions.deleteAwardRecognitionSuccess(response.data.message));
    dispatch(awardRecognitionSlice.actions.clearAllErrors());
  } catch (error) {
    dispatch(awardRecognitionSlice.actions.deleteAwardRecognitionFailed(error.response.data.message));
  }
};

export const clearAllAwardRecognitionErrors = () => (dispatch) => {
  dispatch(awardRecognitionSlice.actions.clearAllErrors());
};

export const resetAwardRecognitionSlice = () => (dispatch) => {
  dispatch(awardRecognitionSlice.actions.resetAwardRecognitionSlice());
};

export default awardRecognitionSlice.reducer;
