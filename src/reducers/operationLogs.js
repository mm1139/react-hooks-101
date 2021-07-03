import { ADD_OPEATION_LOG, DELETE_OPEATION_LOGS } from '../actions';

const operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPEATION_LOG:
      const operationLog = {
        description: action.description,
        operateAt: action.operateAt,
      };
      return [operationLog, ...state];
    case DELETE_OPEATION_LOGS:
      return [];
    default:
      return state;
  }
};
export default operationLogs;
