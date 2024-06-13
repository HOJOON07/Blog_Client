import RecentArticles from '../ui/icon/RecentArticles';
import Chat from '../ui/icon/assets/Chat';
import ChevronRightArrow from '../ui/icon/assets/ChevronRightArrow';
import CircleProfile from '../ui/icon/assets/CircleProfile';
import Comments from '../ui/icon/assets/Comments';
import Dashboard from '../ui/icon/assets/Dashboard';
import Document from '../ui/icon/assets/Document';
import Dots from '../ui/icon/assets/Dots';
import Email from '../ui/icon/assets/Email';
import Folder from '../ui/icon/assets/Folder';
import FollowArticles from '../ui/icon/assets/FollowArticles';
import FramerMotion from '../ui/icon/assets/FramerMotion';
import Github from '../ui/icon/assets/Github';
import Globe from '../ui/icon/assets/Globe';
import Home from '../ui/icon/assets/Home';
import Instagram from '../ui/icon/assets/Instagram';
import Linkedin from '../ui/icon/assets/Linkedin';
import Moon from '../ui/icon/assets/Moon';
import Next from '../ui/icon/assets/Next';
import PairProgramming from '../ui/icon/assets/PairProgramming';
import Payment from '../ui/icon/assets/Payment';
import Plus from '../ui/icon/assets/Plus';
import Posts from '../ui/icon/assets/Posts';
import React from '../ui/icon/assets/React';
import Series from '../ui/icon/assets/Series';
import Storage from '../ui/icon/assets/Storage';
import Sun from '../ui/icon/assets/Sun';
import TailwindCSS from '../ui/icon/assets/TailwindCSS';
import Task from '../ui/icon/assets/Task';
import TrashBox from '../ui/icon/assets/TrashBox';
import TrendArticles from '../ui/icon/assets/TrendArticles';
import User from '../ui/icon/assets/User';
import WorkSpaceSidebarExpand from '../ui/icon/assets/WorkSpaceSidebarExpand';

export const iconMap = {
  post: Posts,
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
  workspaceSidebar: WorkSpaceSidebarExpand,
  circleProfile: CircleProfile,
  folder: Folder,
  rightArrow: ChevronRightArrow,
  document: Document,
  series: Series,
  trashbox: TrashBox,
  storage: Storage,
  plus: Plus,
  home: Home,
  globe: Globe,
  dots: Dots,
  comments: Comments,
  trending: TrendArticles,
  recent: RecentArticles,
  follow: FollowArticles,
};

export type IconList = keyof typeof iconMap;

export type GenericIconComponentProps = {
  name: IconList;
  size?: number;
  href?: string;
  color?: string;
  className?: string;
};
