import { createSlice } from "@reduxjs/toolkit";

interface EducationState {
    selectedCourse: boolean;
    courseId: number;
    finishTest: boolean;
    userLevel: "новичок" | "опытный";
}

const initialState: EducationState = {
    selectedCourse: false,
    courseId: 0,
    finishTest: false,
    userLevel: "новичок",
};

const educationSlice = createSlice({
    name: "education",
    initialState,
    reducers: {
        setSelectedCourse(state, action) {
            state.selectedCourse = action.payload;
        },
        setdCourseId(state, action) {
            state.courseId = action.payload;
        },
        setFinishTest(state, action) {
            state.finishTest = action.payload;
        },
        setUserLevel(state, action) {
            state.userLevel = action.payload;
        },
       
    },
});

export const { setSelectedCourse, setdCourseId, setFinishTest, setUserLevel } = educationSlice.actions;
export default educationSlice.reducer;