import { RefObject, useLayoutEffect, useReducer } from 'react';

interface Options<T extends HTMLElement = HTMLElement> {
  ref: RefObject<T>;
}

interface ResponsiveClassName {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

interface Action {
  type: keyof typeof responsiveClassNames;
  payload: (typeof responsiveClassNames)[keyof typeof responsiveClassNames];
}

interface State {
  className: string;
}

const responsiveClassNames: ResponsiveClassName = {
  '2xl': 'grid-cols-5 gap-6',
  //1536
  xl: 'grid-cols-4 gap-[23px]',
  // 1280
  lg: 'grid-cols-3 gap-4',
  //1024
  md: 'grid-cols-2 gap-6',
  //786
  sm: 'grid-cols-1 gap-6',
  //640
};

function getContainerWidth_returnClassName(width: number): {
  type: keyof ResponsiveClassName;
  payload: (typeof responsiveClassNames)[keyof typeof responsiveClassNames];
} {
  if (width >= 1620) {
    return { type: '2xl', payload: responsiveClassNames['2xl'] };
  } else if (width >= 1240) {
    return { type: 'xl', payload: responsiveClassNames['xl'] };
  } else if (width >= 1024) {
    return { type: 'lg', payload: responsiveClassNames['lg'] };
  } else if (width >= 730) {
    return { type: 'md', payload: responsiveClassNames['md'] };
  } else {
    return { type: 'sm', payload: responsiveClassNames['sm'] };
  }
}
const exhaustiveCheck = (param: never) => {
  throw new Error('정의되지 않은 반응형 사이즈가 들어왔음.!');
};

const reducer: React.Reducer<State, Action> = (state, action) => {
  if (!action) {
    throw new Error('액션이 없는디?');
  }
  const { className } = state;
  const { type, payload } = action;

  switch (type) {
    case '2xl':
      return { className: payload };
    case 'xl':
      return { className: payload };
    case 'lg':
      return { className: payload };
    case 'md':
      return { className: payload };
    case 'sm':
      return { className: payload };
    default:
      exhaustiveCheck(type);
      return { className };
  }
};

export function useResizeObserver({ ref }: Options) {
  const [state, dispatch] = useReducer(reducer, { className: '' });

  useLayoutEffect(() => {
    if (!ref.current) return;
    if (typeof window === 'undefined' || !('ResizeObserver' in window)) return;

    const observer = new ResizeObserver(([entry]) => {
      const { type, payload } = getContainerWidth_returnClassName(
        entry.borderBoxSize[0].inlineSize,
      );

      if (state.className !== payload) {
        dispatch({ payload, type });
      }
    });
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [state.className]);
  return state;
}
