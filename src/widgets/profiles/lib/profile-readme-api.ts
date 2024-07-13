import instance from '@/shared/api/axios-instance-interceptor';
import { TElement } from '@udecode/plate-common';

interface ProfileReadeMeEditApiParams {
  userId: number;
  readme: TElement[];
}

export const ProfileReadeMeEditApi = async ({
  userId,
  readme,
}: ProfileReadeMeEditApiParams) => {
  try {
    const response = await instance.patch(`/users/readme/${userId}`, {
      readme,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const ProfileReadMeGetApi = async () => {
  try {
    const { data } = await instance.get('/users/readme');
    return data;
  } catch (err) {
    throw err;
  }
};
