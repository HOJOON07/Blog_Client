import PairProgramming from './assets/PairProgramming';
import Payment from './assets/Payment';
import Task from './assets/Task';
import Chat from './assets/Chat';
import Posts from './assets/Posts';
import Dashboard from './assets/Dashboard';
import Email from './assets/Email';
import User from './assets/User';

export const iconMap = {
  home: Posts,
  dashboard: Dashboard,
  chat: Chat,
  email: Email,
  user: User,
  task: Task,
  pairProgramming: PairProgramming,
  payment: Payment,
};

export type IconType = keyof typeof iconMap;
