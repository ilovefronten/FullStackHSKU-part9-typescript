interface Course {
  name: string,
  exerciseCount: number
}

interface ContentProp {
  course: Course
}

const Content = (props: ContentProp) => {
  return (
    <>
      <p>
      {props.course.name} {props.course.exerciseCount}
      </p>
    </>
  );
};

export default Content;