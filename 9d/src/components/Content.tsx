import { CoursePart } from '../types';

interface CourseInfoProps {
  course: CoursePart;
}

const CourseInfo = (props: CourseInfoProps) => {
  return (
    <>
      <p>
        <h3>{props.course.name} {props.course.exerciseCount}</h3>
      </p>
    </>
  );
}

interface ContentProps {
  course: CoursePart[];
}

const Content = (props: ContentProps) => {
  const coursePart: CoursePart[] = props.course;

  return (
    <>
      {coursePart.map(c => <CourseInfo course={c} />)}
    </>
  );
};

export default Content;