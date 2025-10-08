import { useState } from 'react';
import { NewDiary } from '../types';

type DiaryFormProps = {
  addDiary: (newDiary: NewDiary) => void;
  msg: string
}

type NoticeProps = {
  msg: string;
}

const errorStyle = {
  color: 'red',
  margin: '15px'
};

const Notice = ({ msg }: NoticeProps) => {

  return (
    <>
      <div style={errorStyle}>{msg}</div>
    </>
  );
};

const DiaryForm = ({ addDiary, msg }: DiaryFormProps) => {

  const [date, setDate] = useState<string>('');
  const [visibility, setVisibility] = useState<string>('');
  const [weather, setWeather] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const addDiaryEntry = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newDiary: NewDiary = {
      date,
      visibility,
      weather,
      comment,
    };
    addDiary(newDiary);


  };

  return (
    <>
      <form onSubmit={addDiaryEntry}>
        <h2>Add new Entry</h2>
        <Notice msg={msg} />
        <div>
          <label>
            date:
            <input
              name='date'
              value={date}
              onChange={({ target }) => setDate(target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            visibility:
            <input
              name='visibility'
              value={visibility}
              onChange={({ target }) => setVisibility(target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            weather:
            <input
              name='weather'
              value={weather}
              onChange={({ target }) => setWeather(target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            comment:
            <input
              name='comment'
              value={comment}
              onChange={({ target }) => setComment(target.value)}
            />
          </label>
        </div>
        <button type='submit'>add</button>
      </form>
    </>
  );

};

export default DiaryForm;