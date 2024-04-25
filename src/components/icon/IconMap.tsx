import PairProgramming from './assets/PairProgramming';
import Payment from './assets/Payment';
import Task from './assets/Task';
import Chat from './assets/Chat';
import Posts from './assets/Posts';
import Dashboard from './assets/Dashboard';
import Email from './assets/Email';
import User from './assets/User';
import Github from './assets/Github';
import Instagram from './assets/Instagram';
import Moon from './assets/Moon';
import Sun from './assets/Sun';
import Next from './assets/Next';
import React from './assets/React';
import TailwindCSS from './assets/TailwindCSS';
import FramerMotion from './assets/FramerMotion';

export const iconMap = {
  home: Posts,
  dashboard: Dashboard,
  chat: Chat,
  email: Email,
  user: User,
  task: Task,
  pairProgramming: PairProgramming,
  payment: Payment,
  github: Github,
  instagram: Instagram,
  moon: Moon,
  sun: Sun,
  next: Next,
  react: React,
  tailwind: TailwindCSS,
  framerMotion: FramerMotion,
};

export type IconType = keyof typeof iconMap;
