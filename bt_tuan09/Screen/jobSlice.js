//Redux_Toolkit

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
//   const response = await axios.get('https://67219f5898bbb4d93ca901a3.mockapi.io/task');
//   return response.data;
// });

// export const addJob = createAsyncThunk('jobs/addJob', async (title) => {
//   const response = await axios.post('https://67219f5898bbb4d93ca901a3.mockapi.io/task', { title });
//   return response.data;
// });

// export const editJob = createAsyncThunk('jobs/editJob', async ({ id, title }) => {
//   const response = await axios.put(`https://67219f5898bbb4d93ca901a3.mockapi.io/task/${id}`, { title });
//   return response.data;
// });

// const jobSlice = createSlice({
//   name: 'jobs',
//   initialState: {
//     list: [],
//     status: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchJobs.fulfilled, (state, action) => {
//         state.list = action.payload;
//         state.status = 'success';
//       })
//       .addCase(addJob.fulfilled, (state, action) => {
//         state.list.push(action.payload);
//       })
//       .addCase(editJob.fulfilled, (state, action) => {
//         const index = state.list.findIndex(job => job.id === action.payload.id);
//         if (index !== -1) state.list[index] = action.payload;
//       });
//   },
// });

// export default jobSlice.reducer;

//Redux_Saga
import { createSlice } from '@reduxjs/toolkit';

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    list: [],
    status: 'idle',
  },
  reducers: {
    fetchJobsRequest: (state) => {
      state.status = 'loading';
    },
    fetchJobsSuccess: (state, action) => {
      state.list = action.payload;
      state.status = 'succeeded';
    },
    fetchJobsFailure: (state) => {
      state.status = 'failed';
    },
    addJobRequest: (state, action) => {
      state.status = 'loading';
    },
    editJobRequest: (state, action) => {
      state.status = 'loading';
    },
  },
});

export const { fetchJobsRequest, fetchJobsSuccess, fetchJobsFailure, addJobRequest, editJobRequest } = jobsSlice.actions;
export default jobsSlice.reducer;

