/* eslint-disable no-undef */
import { renderHook } from "@testing-library/react-hooks";
import useToDoState from "../src/useToDoState.jsx";

describe("useInputState tests", () => {
    it("initial addTodo", () => {
      const { result } = renderHook(
        (initialProps) => useToDoState(initialProps),
        {initialProps: []}
      );
      const { todos, addTodo } = result.current;
      expect(addTodo).toBeDefined();
      expect(todos).toEqual([]);
    });

    it("addTodo", () => {
      const { result } = renderHook(
        (initialProps) => useToDoState(initialProps),
        {initialProps: [{active: false, task: 'test'}]}
      );
      const { todos, addTodo } = result.current;
      expect(addTodo).toBeDefined();
      expect(todos).toEqual([{active: false, task: 'test'}]);
    });

    it("deleteTodo", () => {
      const { result } = renderHook(() => useToDoState([{active: false, task: 'test1'}, {active: false, task: 'test2'}]));
      const { todos, deleteTodo } = result.current;
      expect(todos).toEqual([{active: false, task: 'test1'}, {active: false, task: 'test2'}]);
      deleteTodo(1);
      expect(result.current.todos).toEqual([{active: false, task: 'test1'}]);
    });

    it("deleteCompletedToDo", () => {
      const { result } = renderHook(() => useToDoState([{active: true, task: 'test1'}, {active: false, task: 'test2'}]));
      const { todos, deleteCompletedToDo } = result.current;
      expect(todos).toEqual([{active: true, task: 'test1'}, {active: false, task: 'test2'}]);
      deleteCompletedToDo();
      expect(result.current.todos).toEqual([{active: false, task: 'test2'}]);
    });

    it("activTodoTask", () => {
      const { result } = renderHook(() => useToDoState([{active: true, task: 'test1'}, {active: false, task: 'test2'}]));
      const { todos, activTodoTask } = result.current;
      expect(todos).toEqual([{active: true, task: 'test1'}, {active: false, task: 'test2'}]);
      activTodoTask(1);
      expect(result.current.todos).toEqual([{active: true, task: 'test1'}, {active: true, task: 'test2'}]);
    });
  });