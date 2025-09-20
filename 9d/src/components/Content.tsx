import { CoursePart } from '../types';
import Part from './Part';

interface ContentProps {
  course: CoursePart[];
}

const Content = (props: ContentProps) => {
  const coursePart: CoursePart[] = props.course;

  return (
    <>
      {coursePart.map(c => <Part course={c} key={c.name}/>)}
    </>
  );
};

export default Content;