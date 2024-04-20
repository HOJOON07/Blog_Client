import { RefObject, useEffect, useReducer } from 'react';

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
  '2xl': 'grid-cols-4',
  //1536
  xl: 'grid-cols-3',
  // 1280
  lg: 'grid-cols-3',
  //1024
  md: 'grid-cols-3',
  //786
  sm: 'grid-cols-2',
  //640
};

const reducer: React.Reducer<State, Action> = (state, action) => {
  if (!action) {
    throw new Error('디스패치 함수에 액션이 정의되지 않았습니다??');
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
      return { className };
  }
};
function getContainerWidth_returnClassName(width: number): {
  type: keyof ResponsiveClassName;
  payload: string;
} {
  if (width >= 1536) {
    return { type: '2xl', payload: responsiveClassNames['2xl'] };
  } else if (width >= 1280) {
    return { type: 'xl', payload: responsiveClassNames['xl'] };
  } else if (width >= 1024) {
    return { type: 'lg', payload: responsiveClassNames['lg'] };
  } else if (width >= 786) {
    return { type: 'md', payload: responsiveClassNames['md'] };
  } else {
    return { type: 'sm', payload: responsiveClassNames['sm'] };
  }
}

export function useResizeObserver({ ref }: Options) {
  const [state, dispatch] = useReducer(reducer, { className: '' });

  console.log(state);

  useEffect(() => {
    if (!ref.current) return;
    if (typeof window === 'undefined' || !('ResizeObserver' in window)) return;

    const observer = new ResizeObserver(([entry]) => {
      const { type, payload } = getContainerWidth_returnClassName(
        entry.borderBoxSize[0].inlineSize,
      );
      dispatch({ payload, type });
      console.log(entry.borderBoxSize[0].inlineSize);
    });
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);
  return state;
}
