import { atom, selector } from 'recoil';
import axios from 'axios';

// Atom to store list of jobs
export const jobsState = atom({
  key: 'jobsState',
  default: [],
});

// Atom to manage the status of data fetching
export const jobFetchStatusState = atom({
  key: 'jobFetchStatusState',
  default: 'idle', // can be 'idle', 'loading', or 'error'
});

// Selector to fetch jobs from API
export const fetchJobsSelector = selector({
  key: 'fetchJobsSelector',
  get: async ({ get }) => {
    const fetchStatus = get(jobFetchStatusState);
    if (fetchStatus === 'loading') return get(jobsState);

    try {
      const response = await axios.get('https://67219f5898bbb4d93ca901a3.mockapi.io/task');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
});
