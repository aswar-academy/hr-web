import { Task } from "@/client";

interface State {
  title: Task.state;
  color: string;
}

export const states = [
  { title: Task.state.TODO, color: "red" },
  { title: Task.state.DOING, color: "yellow" },
  { title: Task.state.DONE, color: "green" },
];

export function getSelectedState(state: Task.state): State | undefined {
  return states.find((element) => {
    return element.title == state;
  });
}
