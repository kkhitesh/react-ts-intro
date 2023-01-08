import { useState } from "react";

interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country: Country;
}

export enum Country {
  USA = "USA",
  UK = "UK",
  Canada = "Canada",
}

export const Person = (props: Props) => {
  const [name, setName] = useState<string>(props.name);
  const [age, setAge] = useState<number>(props.age);
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Age: {age}</h1>
      <h1>This person is {props.isMarried ? "is" : "is not"} Married</h1>
      {props.friends.map((friend: string) => {
        return <h1>{friend}</h1>;
      })}
      <h1>Country: {props.country}</h1>
    </div>
  );
};
