import axios from 'axios';
import { Diary, NewDiary } from '../types';

export const baseUrl = 'http://localhost:3000/api/diaries';

export const createNewDiary = (object: NewDiary) => {
  return axios
    .post<Diary>(baseUrl, object)
    .then(res => res.data);
};