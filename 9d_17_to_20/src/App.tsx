import { useState, useEffect } from 'react';
import axios from 'axios';
import { NewDiary, NonSensitiveDiary } from './types/index';
import DiaryForm from './components/DiaryForm';
import { baseUrl, createNewDiary } from './services/diaryService';

type DiaryEntryProps = {
  diary: NonSensitiveDiary;
}

const DiaryEntry = ({ diary }: DiaryEntryProps) => {
  return (
    <>
      <div>
        <h3>{diary.date}</h3>
        <span>visibility: {diary.visibility}</span>
        <br />
        <span>weather: {diary.weather}</span>
      </div>
    </>
  );
};

function App() {
  const [diaries, setDiaries] = useState<NonSensitiveDiary[]>([]);
  const [msg, setMsg] = useState<string>('');

  useEffect(() => {
    axios.get<NonSensitiveDiary[]>(baseUrl)
      .then(res => {
        console.log(res.data);
        setDiaries(res.data);
      })
      .catch(err => console.error(err));

  }, []);

  // Add new diary
  const addDiary = (newDiary: NewDiary) => {
    console.log(newDiary);
    createNewDiary(newDiary)
      .then(({ id, weather, visibility, date }) => {
        const newNonSensitiveDiary: NonSensitiveDiary = {
          id,
          weather,
          visibility,
          date
        };
        //! 更好的更新方法，防止异步下拿到的还是日记的旧值
        setDiaries(prev => prev.concat(newNonSensitiveDiary));
        setMsg('');
      })
      .catch(err => {
        if (axios.isAxiosError(err)) {
          console.log(err.status);
          console.log(err.response);
          //! 防止返回的data为空
          const message = err.response?.data as string ?? 'Unknown error';
          setMsg(message);
        } else {
          console.log('Unknown error:');
          console.log(err);
        }
      });
  };


  return (
    <>
      <DiaryForm addDiary={addDiary} msg={msg} />
      <h2>Diary Entries</h2>
      {diaries.map(d =>
        (<DiaryEntry diary={d} key={d.id} />))
      }
    </>
  );
}

export default App;
