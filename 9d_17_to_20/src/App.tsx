import { useState, useEffect } from 'react';
import axios from 'axios';
import { NonSensitiveDiary } from './types/index';
import DiaryForm from './components/DiaryForm';

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

  useEffect(() => {
    axios.get<NonSensitiveDiary[]>('http://localhost:3000/api/diaries')
      .then(res => {
        console.log(res.data);
        setDiaries(res.data);
      })
      .catch(err => console.error(err));

  }, []);


  return (
    <>
      <DiaryForm />
      <h2>Diary Entries</h2>
      {diaries.map(d =>
        (<DiaryEntry diary={d} key={d.id} />))
      }
    </>
  );
}

export default App;
