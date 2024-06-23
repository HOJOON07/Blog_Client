import { Icon } from '@/shared';
import { SocialInfoBox, UserInfoBox, UserInput } from '@/widgets/profiles';

export default function Page() {
  return (
    <main>
      <div className="max-w-[1100px] w-full mx-auto my-0">
        <div className="py-12 grid grid-cols-1">
          <p className="text-4xl font-bold mb-10">프로필</p>
          <form className="flex flex-col gap-7">
            <div className="flex items-center gap-4">
              {/* 유저 프로필 이미지 */}
              <div className="flex items-center justify-center w-20 h-20 rounded-full">
                <label
                  htmlFor="profile-user-image"
                  className="flex flex-col items-center justify-center w-full h-full border-solid border rounded-full cursor-pointer bg-zinc-900"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Icon name="user" color="text-zinc-400" size={4} />
                  </div>
                  <input
                    id="profile-user-image"
                    type="file"
                    className="hidden border-none outline-none"
                  />
                </label>
              </div>
              {/* 유저 이름, 한 줄 설명 */}
              <div>
                <p className="text-2xl font-semibold leading-8">김호준</p>
                <p>프론트엔드 개발자 김호준입니다.</p>
              </div>
            </div>
            <UserInfoBox
              placeholder="DevWorld ID"
              title="데브월드 이름"
              mutedText="DevWorld 에서 보여지는 이름입니다."
            />
            <UserInfoBox
              placeholder="포지션"
              title="포지션"
              mutedText="DevWorld 에서 보여지는 이름입니다."
            />
            <UserInfoBox
              placeholder="저는 프론트엔드 개발자 김호준입니다."
              title="한 줄 소개"
              mutedText="당신을 한 줄로 소개하는 내용을 적어주세요."
            />
            <UserInfoBox
              placeholder="Seoul"
              title="거주지"
              mutedText="거주지 정보를 입력해주세요."
            />
            <div className="flex flex-col gap-3">
              <p className="font-semibold">소셜 정보</p>
              <SocialInfoBox
                icon="github"
                placeholder="깃허브 주소를 알려주세요"
              />
              <SocialInfoBox
                icon="socialEmail"
                placeholder="이메일 주소를 알려주세요"
              />
              <SocialInfoBox
                icon="linkedin"
                placeholder="링크드인 주소를 알려주세요"
              />
              <SocialInfoBox
                icon="instagram"
                placeholder="인스타그램 주소를 알려주세요"
              />

              <SocialInfoBox
                icon="socialLink"
                placeholder="개인 홈페이지, 블로그, 다른 SNS 주소를 알려주세요"
              />
              <p className="text-sm text-muted-foreground">
                소셜 정보를 입력하면 프로필에 표시됩니다.
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
