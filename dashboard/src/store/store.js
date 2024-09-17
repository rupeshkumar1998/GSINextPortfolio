import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import forgotPasswordReducer from "./slices/forgotResetPasswordSlice";
// import skillReducer from "./slices/ZZZskillSlice";

import aboutReducer from "./slices/aboutSlice";
import awardRecognitionReducer from "./slices/awardRecognitionSlice";

// import projectReducer from "./slices/ZZZprojectSlice";
// import timelineReducer from "./slices/ZZZtimelineSlice";
// import softwareApplicationReducer from "./slices/softwareApplicationSlice";
import messageReducer from "./slices/messageSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    // skill: skillReducer,
    
    about: aboutReducer,
    awardRecognition: awardRecognitionReducer,

    // project: projectReducer,
    // timeline: timelineReducer,
    // softwareApplications: softwareApplicationReducer,
    messages: messageReducer,
  },
});
