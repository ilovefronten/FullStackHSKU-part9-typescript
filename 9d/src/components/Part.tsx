import { CourseInfoProps } from '../types';

/**
 * Helper function for exhaustive type checking
 */
const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part = (props: CourseInfoProps) => {
  const coursePart = props.course;

  switch (coursePart.kind) {
    case 'basic':
      return (
        <>
          <p>
            <b>{coursePart.name} {coursePart.exerciseCount}</b>
            <br />
            <i>{coursePart.description}</i>
          </p>
        </>
      );
    case 'group':
      return (
        <>
          <p>
            <b>{coursePart.name} {coursePart.exerciseCount}</b>
            <br />
            <span>project exercises {coursePart.groupProjectCount}</span>
          </p>
        </>
      );
    case 'background':
      return (
        <>
          <p>
            <b>{coursePart.name} {coursePart.exerciseCount}</b>
            <br />
            <i>{coursePart.description}</i>
            <br />
            <span>submit to: {coursePart.backgroundMaterial}</span>
          </p>
        </>
      );

    default:
      assertNever(coursePart);
      break;
  }


};

export default Part;