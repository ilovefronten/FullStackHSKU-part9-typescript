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
              type='date'
              name='date'
              value={date}
              onChange={({ target }) => setDate(target.value)}
            />
          </label>
        </div>
        <div>
          visibility:
          <label>
            <input
              type='radio'
              name='visibility'
              value='great'
              onChange={({ target }) => setVisibility(target.value)}
            />
            great
          </label>
          <label>
            <input
              type='radio'
              name='visibility'
              value='good'
              onChange={({ target }) => setVisibility(target.value)}
            />
            good
          </label>
          <label>
            <input
              type='radio'
              name='visibility'
              value='ok'
              onChange={({ target }) => setVisibility(target.value)}
            />
            ok
          </label>
          <label>
            <input
              type='radio'
              name='visibility'
              value='poor'
              onChange={({ target }) => setVisibility(target.value)}
            />
            poor
          </label>
        </div>
        <div>
          weather:
          <label>
            <input
              type='radio'
              name='weather'
              value='sunny'
              onChange={({ target }) => setWeather(target.value)}
            />
            sunny
          </label>
          <label>
            <input
              type='radio'
              name='weather'
              value='cloudy'
              onChange={({ target }) => setWeather(target.value)}
            />
            cloudy
          </label>
          <label>
            <input
              type='radio'
              name='weather'
              value='rainy'
              onChange={({ target }) => setWeather(target.value)}
            />
            rainy
          </label>
          <label>
            <input
              type='radio'
              name='weather'
              value='stormy'
              onChange={({ target }) => setWeather(target.value)}
            />
            stormy
          </label>
          <label>
            <input
              type='radio'
              name='weather'
              value='windy'
              onChange={({ target }) => setWeather(target.value)}
            />
            windy
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