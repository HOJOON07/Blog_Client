import Icon from '@/components/ui/Icon';

export default function Search() {
  return (
    <div className="w-[706px] mx-auto border-[1px] rounded-full border-cyan-500/50 px-5 lg:w-[620px]">
      <div className="flex items-center relative">
        <p className="font-[Gluten-Semi] text-cyan-500 text-[2.3rem] pt-[6px] mr-3">
          H
        </p>
        <div className="text-2xl w-[480px]">
          <input
            type="text"
            className="outline-none w-full bg-transparent dark:bg-transparent"
            placeholder="검색어를 입력해 주세요"
          />
        </div>
        <div className="absolute right-0 flex items-center gap-3">
          <Icon name="search" />
          <Icon name="mic" />
          <Icon name="keyboard" />
        </div>
      </div>
    </div>
  );
}
