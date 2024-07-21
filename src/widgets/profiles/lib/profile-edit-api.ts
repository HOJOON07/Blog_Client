import instance from '@/shared/api/axios-instance-interceptor';
export interface ProfileEditType {
  devName?: string;
  position?: string;
  bio?: string;
  location?: string;
  github?: string;
  email?: string;
  linkedin?: string;
  instagram?: string;
  socialEtc?: string;
}

interface ProfileEditApiParams {
  userId: number;
  profileEditData: ProfileEditType;
}

export const ProfileEditApi = async ({
  userId,
  profileEditData,
}: ProfileEditApiParams) => {
  try {
    const response = await instance.patch(
      `/users/edit/${userId}`,
      profileEditData,
    );

    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
};
