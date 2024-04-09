import { configureStore } from "@reduxjs/toolkit";
import mainCourseSlice from "./slices/mainCourseSlice";
import verticalMenuSlice from "./slices/verticalMenuSlice";
import lessonSlice from "./slices/lessonSlice";


export const makeStore = () => {
    return  configureStore({
        reducer: {
            mainCourse: mainCourseSlice,
            verticalMenu: verticalMenuSlice,
            lessonSlice: lessonSlice,
        },
        devTools: true,
    });
}


export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']