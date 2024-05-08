import Chat from '../ui/icon/assets/Chat';
import Dashboard from '../ui/icon/assets/Dashboard';
import Email from '../ui/icon/assets/Email';
import FramerMotion from '../ui/icon/assets/FramerMotion';
import Github from '../ui/icon/assets/Github';
import Instagram from '../ui/icon/assets/Instagram';
import Linkedin from '../ui/icon/assets/Linkedin';
import Moon from '../ui/icon/assets/Moon';
import Next from '../ui/icon/assets/Next';
import PairProgramming from '../ui/icon/assets/PairProgramming';
import Payment from '../ui/icon/assets/Payment';
import Posts from '../ui/icon/assets/Posts';
import React from '../ui/icon/assets/React';
import Sun from '../ui/icon/assets/Sun';
import TailwindCSS from '../ui/icon/assets/TailwindCSS';
import Task from '../ui/icon/assets/Task';
import User from '../ui/icon/assets/User';

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
  linkedin: Linkedin,
};

export type IconType = keyof typeof iconMap;
