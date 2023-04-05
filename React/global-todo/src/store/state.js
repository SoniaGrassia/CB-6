import { tasksListData } from "../mocks/mock";

export const initialState = {
  tasksListData: tasksListData,
  isModalVisible: false,
  temporaryTodo: {
    id: null,
    todo: "",
    username: "",
    image: "",
  },
};
