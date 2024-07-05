import axios from 'axios';

export const getGithubUserInfo = async (githubCode: string) => {
  try {
    const response = await axios.post(
      'http://localhost:5500/auth/callback/github',
      {
        code: githubCode,
      },
    );

    // 응답 상태 코드 검사
    return response.data.userInfo;
  } catch (error: any) {
    // 이곳에서 발생하는 에러는 주로 네트워크 에러 또는 서버 에러입니다.
    console.error('Error fetching GitHub user info:', error);
    // 에러를 재발생시켜 호출 측에서 처리할 수 있도록 합니다.
    throw new Error(
      'Failed to fetch GitHub user info due to an error: ' + error.message,
    );
  }
};

// redirect -> github name을 devworld default name으로 사용하려고 하는데 중복되어서 이미 누군가 사용하 수 있으니
// 서버에서 중복관련 로직을 작성하고 있다면 nextjs redirect를 해서 추가적인 프로필 수정을 할 수 있도록 해야함.
