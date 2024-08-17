import { ADD_TASK, EDIT_TASK, TOGGLE_TASK, FILTER_TASKS } from './actions';

const initialState = {
  tasks: [],
  filter: 'all', // 'done', 'notDone'
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), description: action.payload, isDone: false }],
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => 
          task.id === action.payload.id ? { ...task, ...action.payload.updatedTask } : task
        ),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case FILTER_TASKS:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
