import { makeAutoObservable } from "mobx";
import { Task } from "../components/week9b/types";

class TodoStore {
  todos: Task[] = [
    {
      id: "3432",
      text: "sdfsd",
      isDone: false
    }
  ];

  constructor() {
    makeAutoObservable(this)
  }

  addTask(task: Task) {
    if(task) this.todos.push(task)
  }

  removeTask(id: string) {
    this.todos = this.todos.filter((item: Task) => item.id !== id)
  }

  completeTask(id: string) {
    this.todos = this.todos.map((item:Task) => (item.id === id ? {...item, isDone: !item.isDone} : item))
  }
}

export default new TodoStore()