import { useState } from 'react';

const DiaryForm = () => {

  const [date, setDate] = useState('');
  const [visibility, setVisibility] = useState('');
  const [weather, setWeather] = useState('');
  const [comment, setComment] = useState('');

  const addDiaryEntry = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(date);
    console.log(visibility);
    console.log(weather);
    console.log(comment);
    


  };

  return (
    <>
      <form onSubmit={addDiaryEntry}>
        <h2>Add new Entry</h2>
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