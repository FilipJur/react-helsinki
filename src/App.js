// const Hello = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   );
// };

// const App = () => {
//   const name = "Filip";
//   const age = 21;

//   return (
//     <>
//       <h1>Greetings</h1>
//       <Hello name = "Filip" age = {12+12}/>
//       <Hello name = {name} age = {age}/>
//     </>
//   );
// };

// export default App;

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        Number of excersises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </>
  );
};
const Content = (props) => {
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <>
      <Part part1={part1} exercises1={exercises1} />
      <Part part2={part2} exercises2={exercises2} />
      <Part part3={part3} exercises3={exercises3} />
    </>
  );
};
const Part = (props) => {
  return (
    <>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2}
        {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </>
  );
};
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};
export default App;
