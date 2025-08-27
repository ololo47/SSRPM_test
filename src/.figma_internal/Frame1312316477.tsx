import svgPaths from "./svg-bi8fjm9v1d";
import imgBaeminLogoKr from "figma:asset/21a6290701d935f6c8ff9bc017b523dfcbaeb83d.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2c7e4600} fill="var(--fill-0, #141414)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[9000px] shrink-0" data-name="Icon Button 📱">
      <Icon />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="box-border content-stretch flex items-start justify-start p-[2px] relative shrink-0" data-name="Wrapper">
      <IconButton />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-1/2 size-5 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1ded7000} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute bg-[#0f6155] right-0 rounded-md size-6 top-1/2 translate-y-[-50%]" data-name="Icon">
      <Icon1 />
    </div>
  );
}

function LeadingIcon() {
  return (
    <div className="h-6 relative shrink-0 w-5" data-name="Leading Icon">
      <Icon2 />
    </div>
  );
}

function NavItemAppSelection() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-2 h-11 items-center justify-center overflow-clip px-4 py-0 relative rounded-lg shrink-0" data-name=".Nav item📕/App Selection">
      <LeadingIcon />
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[16px] text-nowrap tracking-[-0.0288px]">
        <p className="leading-[18px] whitespace-pre">가게리뷰</p>
      </div>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Left side">
      <Wrapper />
      <NavItemAppSelection />
    </div>
  );
}

function ActionsDefault() {
  return <div className="content-stretch flex gap-2 items-center justify-start shrink-0" data-name="_Actions/default" />;
}

function GlobalNav() {
  return (
    <div className="box-border content-stretch flex h-[60px] items-center justify-start p-[8px] relative shrink-0 w-[390px]" data-name="📱Global nav">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.01)] border-solid inset-0 pointer-events-none" />
      <LeftSide />
      <div className="absolute bottom-0 h-0 left-0 right-0" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(0, 0, 0, 0.12)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 1">
            <line id="Divider" stroke="var(--stroke-0, black)" strokeOpacity="0.12" strokeWidth="0.5" x2="390" y1="0.75" y2="0.75" />
          </svg>
        </div>
      </div>
      <ActionsDefault />
    </div>
  );
}

function AssetsAppNavigation() {
  return (
    <div className="content-stretch flex gap-2.5 items-start justify-start relative shrink-0" data-name=".Assets / App Navigation 📱">
      <div className="font-['Inter_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#141414] text-[28px] text-nowrap tracking-[-0.168px]">
        <p className="leading-[30px] whitespace-pre">리뷰관리</p>
      </div>
    </div>
  );
}

function AssetsAppNavigation1() {
  return (
    <div className="content-stretch flex gap-2.5 items-start justify-start relative shrink-0" data-name=".Assets / App Navigation 📱">
      <div className="font-['Inter_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#757575] text-[28px] text-nowrap tracking-[-0.168px]">
        <p className="leading-[30px] whitespace-pre">리뷰리포트</p>
      </div>
    </div>
  );
}

function AssetsAppNavigation2() {
  return (
    <div className="content-stretch flex gap-2.5 items-start justify-start relative shrink-0" data-name=".Assets / App Navigation 📱">
      <div className="font-['Inter_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#757575] text-[28px] text-nowrap tracking-[-0.168px]">
        <p className="leading-[30px] whitespace-pre">설정</p>
      </div>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0 w-full" data-name="Wrapper">
      <AssetsAppNavigation />
      <AssetsAppNavigation1 />
      <AssetsAppNavigation2 />
    </div>
  );
}

function Assets() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 h-12 items-start justify-center px-0 py-2 relative shrink-0 w-[390px] z-[3]" data-name=".Assets">
      <Wrapper1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[-4px] size-5 top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26b97080} fill="var(--fill-0, #141414)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TrailingIcon() {
  return (
    <div className="h-5 relative shrink-0 w-4" data-name="Trailing Icon">
      <Icon5 />
    </div>
  );
}

function LeadingLabel() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-start px-0 py-[5px] relative shrink-0" data-name="Leading & Label">
      <TrailingIcon />
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#292929] text-[14px] text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">상세필터</p>
      </div>
    </div>
  );
}

function AllFilterButton() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-2 items-center justify-end px-4 py-1 relative rounded-lg shrink-0" data-name="All Filter Button 📱">
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-lg" />
      <LeadingLabel />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-5 top-1/2 translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1ec88700} fill="var(--fill-0, #141414)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TrailingIcon1() {
  return (
    <div className="h-5 relative shrink-0 w-4" data-name="Trailing Icon">
      <Icon6 />
    </div>
  );
}

function FilterButton() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-2 h-[38px] items-center justify-end px-4 py-2 relative rounded-lg shrink-0" data-name="Filter Button 📱">
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">날짜: 지난 14일</p>
      </div>
      <TrailingIcon1 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-0 size-5 top-1/2 translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1ec88700} fill="var(--fill-0, #141414)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TrailingIcon2() {
  return (
    <div className="h-5 relative shrink-0 w-4" data-name="Trailing Icon">
      <Icon7 />
    </div>
  );
}

function FilterButton1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-2 h-[38px] items-center justify-end px-4 py-2 relative rounded-lg shrink-0" data-name="Filter Button 📱">
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">브랜드/지점: 전체</p>
      </div>
      <TrailingIcon2 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-0 size-5 top-1/2 translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1ec88700} fill="var(--fill-0, #141414)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TrailingIcon3() {
  return (
    <div className="h-5 relative shrink-0 w-4" data-name="Trailing Icon">
      <Icon8 />
    </div>
  );
}

function FilterButton2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-2 h-[38px] items-center justify-end px-4 py-2 relative rounded-lg shrink-0" data-name="Filter Button 📱">
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">채널: 전체</p>
      </div>
      <TrailingIcon3 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-0 size-5 top-1/2 translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1ec88700} fill="var(--fill-0, #141414)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TrailingIcon4() {
  return (
    <div className="h-5 relative shrink-0 w-4" data-name="Trailing Icon">
      <Icon9 />
    </div>
  );
}

function FilterButton3() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex gap-2 h-[38px] items-center justify-end px-4 py-2 relative rounded-lg shrink-0" data-name="Filter Button 📱">
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">별점: 전체</p>
      </div>
      <TrailingIcon4 />
    </div>
  );
}

function MobileAppNavFilters() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0" data-name=".Mobile / App nav / Filters">
      <AllFilterButton />
      <FilterButton />
      <FilterButton1 />
      <FilterButton2 />
      <FilterButton3 />
    </div>
  );
}

function MobileActionItems() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name=".Mobile / Action Items">
      <MobileAppNavFilters />
    </div>
  );
}

function SecondRow() {
  return (
    <div className="content-stretch flex gap-2.5 items-start justify-start relative shrink-0 z-[2]" data-name="Second Row">
      <MobileActionItems />
    </div>
  );
}

function PillTab() {
  return (
    <div className="bg-[rgba(28,105,232,0.08)] h-9 relative rounded-[900px] shrink-0" data-name="Pill tab 📱">
      <div className="box-border content-stretch flex gap-1 h-9 items-center justify-center overflow-clip px-3 py-0 relative">
        <div className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#1c69e8] text-[14px] text-nowrap tracking-[-0.0126px]">
          <p className="leading-[16px] whitespace-pre">전체</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#3c83ef] border-solid inset-0 pointer-events-none rounded-[900px]" />
    </div>
  );
}

function PillTab1() {
  return (
    <div className="bg-[rgba(153,153,153,0.1)] box-border content-stretch flex gap-1 h-9 items-center justify-center px-3 py-0 relative rounded-[900px] shrink-0" data-name="Pill tab 📱">
      <div className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">답변없음</p>
      </div>
    </div>
  );
}

function PillTab2() {
  return (
    <div className="bg-[rgba(153,153,153,0.1)] box-border content-stretch flex gap-1 h-9 items-center justify-center px-3 py-0 relative rounded-[900px] shrink-0" data-name="Pill tab 📱">
      <div className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">답변완료</p>
      </div>
    </div>
  );
}

function PillTab3() {
  return (
    <div className="bg-[rgba(153,153,153,0.1)] box-border content-stretch flex gap-1 h-9 items-center justify-center px-3 py-0 relative rounded-[900px] shrink-0" data-name="Pill tab 📱">
      <div className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">곧 만료될 리뷰</p>
      </div>
    </div>
  );
}

function PillTab4() {
  return (
    <div className="bg-[rgba(153,153,153,0.1)] box-border content-stretch flex gap-1 h-9 items-center justify-center px-3 py-0 relative rounded-[900px] shrink-0" data-name="Pill tab 📱">
      <div className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">전송실패 리뷰</p>
      </div>
    </div>
  );
}

function PillTabBar() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0" data-name="Pill tab bar 📱">
      <PillTab />
      <PillTab1 />
      <PillTab2 />
      <PillTab3 />
      <PillTab4 />
    </div>
  );
}

function PageNav() {
  return (
    <div className="content-stretch flex gap-9 h-12 items-center justify-start relative shrink-0 w-full z-[1]" data-name="Page nav">
      <PillTabBar />
    </div>
  );
}

function AppPageNav() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="📱App+page nav">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 isolate items-start justify-start p-[20px] relative w-full">
          <Assets />
          <SecondRow />
          <PageNav />
        </div>
      </div>
    </div>
  );
}

function StarBorderPurple500() {
  return (
    <div className="relative shrink-0 size-3" data-name="star_border_purple500">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="star_border_purple500">
          <path d={svgPaths.pd96d200} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StarRatings() {
  return (
    <div className="bg-[rgba(218,37,47,0.08)] relative rounded-lg shrink-0 size-[34px]" data-name=".starRatings">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative size-[34px]">
        <StarBorderPurple500 />
        <div className="css-7q7x82 flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-center text-nowrap tracking-[-0.7px]">
          <p className="leading-[16px] whitespace-pre">1</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#da252f] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function StatusBadge1() {
  return (
    <div className="bg-[rgba(26,26,26,0.08)] box-border content-stretch flex gap-1.5 items-center justify-center overflow-clip p-[6px] relative rounded-md shrink-0" data-name="Status Badge 📱">
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">12일 남음</p>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2dd3c500} fill="var(--fill-0, #141414)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-lg shrink-0" data-name="Icon Button 📱">
      <Icon16 />
    </div>
  );
}

function Frame630266645() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-end relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-neutral-600 text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">8월 22일</p>
      </div>
      <StatusBadge1 />
      <IconButton2 />
    </div>
  );
}

function Frame1312316475() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <StarRatings />
      <Frame630266645 />
    </div>
  );
}

function Frame630265278() {
  return (
    <div className="content-stretch flex gap-0.5 items-start justify-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-neutral-600 text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">곱창의전설 - 외길곱창_하남점</p>
      </div>
    </div>
  );
}

function Middle() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Middle">
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-neutral-600 text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">김**</p>
      </div>
      <Frame630265278 />
    </div>
  );
}

function Coupang() {
  return (
    <div className="relative shrink-0 size-8" data-name="Coupang">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Coupang">
          <rect fill="white" height="32" width="32" />
          <g id="Vector">
            <path d={svgPaths.p208c1b00} fill="#E5603E" />
            <path d={svgPaths.p22bc5700} fill="#F5B940" />
            <path d={svgPaths.p1d996780} fill="#8B5530" />
            <path d={svgPaths.p19ac2b80} fill="#9FCD5B" />
            <path d={svgPaths.p2973f70} fill="#8B5530" />
            <path d={svgPaths.p97cd480} fill="#5AB1D9" />
            <path d={svgPaths.p514bfc0} fill="#8B5530" />
            <path d={svgPaths.p1a29d500} fill="#8B5530" />
            <path d={svgPaths.p39727800} fill="#8B5530" />
            <path d={svgPaths.p3d05b780} fill="#8B5530" />
            <path d={svgPaths.p3b68efe0} fill="#8B5530" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="relative rounded-lg shrink-0 w-8" data-name="🖥️ Thumbnail">
      <div className="content-stretch flex items-start justify-start overflow-clip relative w-8">
        <Coupang />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pc389a80} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1312316467() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
      <Icon17 />
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">사진 2장</p>
      </div>
    </div>
  );
}

function Frame1312316468() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-1 items-center justify-center p-[8px] relative rounded-lg shrink-0">
      <Frame1312316467 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pcf1b670} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1312316470() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
      <Icon18 />
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">53,000원 · 3개</p>
      </div>
    </div>
  );
}

function Frame1312316469() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-1 items-center justify-center p-[8px] relative rounded-lg shrink-0">
      <Frame1312316470 />
    </div>
  );
}

function Frame1312316476() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0 w-full">
      <Thumbnail />
      <Frame1312316468 />
      <Frame1312316469 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1db6aa00} fill="url(#paint0_linear_1_23322)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_23322" x1="1.33333" x2="14.6667" y1="8" y2="8">
            <stop stopColor="#B4139C" />
            <stop offset="1" stopColor="#1258D2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame1312316471() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-1 items-center justify-start pb-0 pt-2 px-2 relative w-full">
          <Icon19 />
          <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium from-[#b4139c] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap to-[#1258d2] tracking-[-0.0126px]" style={{ WebkitTextFillColor: "transparent" }}>
            <p className="leading-[16px] whitespace-pre">맞춤 추천답글</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputText() {
  return (
    <div className="content-stretch flex items-start justify-start overflow-clip relative shrink-0 w-full" data-name="✏️ Input Text">
      <div className="basis-0 font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-neutral-600 tracking-[-0.0288px]">
        <p className="mb-0">{`고객님, 소중한 피드백 진심으로 감사드립니다. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`음식의 양과 멕시코 현지 맛에 만족하셨다니 정말 기쁩니다. 하지만, 타코 고기의 질감과 살사소스의 위생 문제로 불편을 드려 죄송합니다. 고객님의 말씀을 바탕으로 해당 문제를 즉각적으로 개선 조치할 예정입니다. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>고객님의 만족이 우리의 최우선 과제이며, 앞으로 더 나은 서비스로 보답하겠습니다. 🙏</p>
      </div>
    </div>
  );
}

function InputWrapper() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input Wrapper">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[8px] relative w-full">
          <InputText />
        </div>
      </div>
    </div>
  );
}

function TextArea() {
  return (
    <div className="bg-[#ffffff] content-stretch flex flex-col items-center justify-start relative rounded-lg shrink-0 w-full z-[3]" data-name="✏️ Text Area">
      <InputWrapper />
    </div>
  );
}

function TextArea1() {
  return (
    <div className="content-stretch flex flex-col gap-2 isolate items-start justify-start min-w-[232px] relative shrink-0 w-full" data-name="🖥 Text Area">
      <TextArea />
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute right-0 size-5 top-1/2 translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1ec645c0} fill="var(--fill-0, #141414)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingIcon1() {
  return (
    <div className="h-5 relative shrink-0 w-4" data-name="Leading Icon">
      <Icon22 />
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-[rgba(0,0,0,0)] grow h-9 min-h-px min-w-px relative rounded-lg shrink-0" data-name="Button 📱">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-center px-4 py-0 relative w-full">
          <LeadingIcon1 />
          <div className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-nowrap tracking-[-0.0126px]">
            <p className="leading-[16px] whitespace-pre">예약등록</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute right-0 size-5 top-1/2 translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2ac84300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingIcon2() {
  return (
    <div className="h-5 relative shrink-0 w-4" data-name="Leading Icon">
      <Icon23 />
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-[#141414] grow h-9 min-h-px min-w-px relative rounded-lg shrink-0" data-name="Button 📱">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-center px-4 py-0 relative w-full">
          <LeadingIcon2 />
          <div className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-nowrap tracking-[-0.0126px]">
            <p className="leading-[16px] whitespace-pre">즉시등록</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReplyControlsDt() {
  return (
    <div className="relative shrink-0 w-full" data-name=".replyControls/DT">
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex gap-1 items-center justify-end pb-2 pt-0 px-2 relative w-full">
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Frame1312316465() {
  return (
    <div className="bg-[#ffffff] relative rounded-2xl shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#b4139c] border-solid inset-0 pointer-events-none rounded-2xl" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-[8px] relative w-full">
          <Frame1312316471 />
          <TextArea1 />
          <ReplyControlsDt />
        </div>
      </div>
    </div>
  );
}

function ReviewCard() {
  return (
    <div className="bg-neutral-100 relative rounded-2xl shrink-0 w-full" data-name="review card">
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-[8px] relative w-full">
          <Frame1312316475 />
          <Middle />
          <div className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#000000] text-[16px] tracking-[-0.0288px]" style={{ width: "min-content" }}>
            <p className="leading-[22px]">음식의 양과 소스의 맛은 정말 멕시코 현지의 느낌이 나요. 하지만 타코의 고기가 너무 질겨서 씹는 게 힘들었습니다. 고무를 씹는 것 같은 느낌이었어요. 그리고 살사소스에서 짧은 머리카락이 나와서 정말 놀랐습니다...</p>
          </div>
          <Frame1312316476 />
          <Frame1312316465 />
        </div>
      </div>
    </div>
  );
}

function StarBorderPurple501() {
  return (
    <div className="relative shrink-0 size-3" data-name="star_border_purple500">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="star_border_purple500">
          <path d={svgPaths.pd96d200} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StarRatings1() {
  return (
    <div className="bg-[rgba(218,37,47,0.08)] relative rounded-lg shrink-0 size-[34px]" data-name=".starRatings">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative size-[34px]">
        <StarBorderPurple501 />
        <div className="css-7q7x82 flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-center text-nowrap tracking-[-0.7px]">
          <p className="leading-[16px] whitespace-pre">1</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#da252f] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function StatusBadge2() {
  return (
    <div className="bg-[rgba(26,26,26,0.08)] box-border content-stretch flex gap-1.5 items-center justify-center overflow-clip p-[6px] relative rounded-md shrink-0" data-name="Status Badge 📱">
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">12일 남음</p>
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2dd3c500} fill="var(--fill-0, #141414)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton3() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-lg shrink-0" data-name="Icon Button 📱">
      <Icon25 />
    </div>
  );
}

function Frame630266646() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-end relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-neutral-600 text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">8월 22일</p>
      </div>
      <StatusBadge2 />
      <IconButton3 />
    </div>
  );
}

function Frame1312316453() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <StarRatings1 />
      <Frame630266646 />
    </div>
  );
}

function Frame630265279() {
  return (
    <div className="content-stretch flex gap-0.5 items-start justify-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-neutral-600 text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">곱창의전설 - 외길곱창_하남점</p>
      </div>
    </div>
  );
}

function Middle1() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Middle">
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-neutral-600 text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">김**</p>
      </div>
      <Frame630265279 />
    </div>
  );
}

function Baemin() {
  return (
    <div className="bg-[#3ac5c9] overflow-clip relative shrink-0 size-8" data-name="Baemin">
      <div className="absolute bg-center bg-cover bg-no-repeat inset-[31.82%_14.78%_31.36%_15%]" data-name="Baemin Logo KR" style={{ backgroundImage: `url('${imgBaeminLogoKr}')` }} />
    </div>
  );
}

function Thumbnail1() {
  return (
    <div className="relative rounded-lg shrink-0 w-8" data-name="🖥️ Thumbnail">
      <div className="content-stretch flex items-start justify-start overflow-clip relative w-8">
        <Baemin />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pc389a80} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1312316472() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
      <Icon26 />
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">사진 2장</p>
      </div>
    </div>
  );
}

function Frame1312316473() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-1 items-center justify-center p-[8px] relative rounded-lg shrink-0">
      <Frame1312316472 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pcf1b670} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1312316478() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
      <Icon27 />
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">53,000원 · 3개</p>
      </div>
    </div>
  );
}

function Frame1312316479() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-1 items-center justify-center p-[8px] relative rounded-lg shrink-0">
      <Frame1312316478 />
    </div>
  );
}

function Frame1312316474() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0 w-full">
      <Thumbnail1 />
      <Frame1312316473 />
      <Frame1312316479 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1db6aa00} fill="url(#paint0_linear_1_23322)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_23322" x1="1.33333" x2="14.6667" y1="8" y2="8">
            <stop stopColor="#B4139C" />
            <stop offset="1" stopColor="#1258D2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame1312316480() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
      <Icon28 />
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium from-[#b4139c] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap to-[#1258d2] tracking-[-0.0126px]" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="leading-[16px] whitespace-pre">맞춤 추천답글</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-9 relative rounded-lg shrink-0" data-name="Button 📱">
      <div className="box-border content-stretch flex gap-2 h-9 items-center justify-center overflow-clip px-4 py-0 relative">
        <div className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-nowrap tracking-[-0.0126px]">
          <p className="leading-[16px] whitespace-pre">지금 생성 하기</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function Frame1312316466() {
  return (
    <div className="bg-[#ffffff] relative rounded-xl shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#b4139c] border-solid inset-0 pointer-events-none rounded-xl" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[12px] relative w-full">
          <Frame1312316480 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function ReviewCard1() {
  return (
    <div className="bg-neutral-100 relative rounded-2xl shrink-0 w-full" data-name="review card">
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-[8px] relative w-full">
          <Frame1312316453 />
          <Middle1 />
          <div className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[#000000] text-[16px] tracking-[-0.0288px]" style={{ width: "min-content" }}>
            <p className="mb-0">평이 좋아 시켰는데 너무 실망했습니다 1.7인분이</p>
            <p className="mb-0">같이 온 사이드가 포함인건지 일단 곱창양이 너무</p>
            <p className="mb-0">적고 당면이 거의 다였습니다 맛은 멸치가루? 맛이</p>
            <p className="mb-0">나서 별로였고 주먹밥도 마요네즈가 너무 많고 좀</p>
            <p>비린내나서 얼마 못먹고 버렸어요 부추빼고 그닥..</p>
          </div>
          <Frame1312316474 />
          <Frame1312316466 />
        </div>
      </div>
    </div>
  );
}

function StarBorderPurple502() {
  return (
    <div className="relative shrink-0 size-3" data-name="star_border_purple500">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="star_border_purple500">
          <path d={svgPaths.pd96d200} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StarRatings2() {
  return (
    <div className="bg-[rgba(26,26,26,0.08)] relative rounded-lg shrink-0 size-[34px]" data-name=".starRatings">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative size-[34px]">
        <StarBorderPurple502 />
        <div className="css-7q7x82 flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-center text-nowrap tracking-[-0.7px]">
          <p className="leading-[16px] whitespace-pre">5</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(143,143,143,0.09)] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function StatusBadge3() {
  return (
    <div className="bg-[rgba(26,26,26,0.08)] box-border content-stretch flex gap-1.5 items-center justify-center overflow-clip p-[6px] relative rounded-md shrink-0" data-name="Status Badge 📱">
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">12일 남음</p>
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2dd3c500} fill="var(--fill-0, #141414)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton4() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-lg shrink-0" data-name="Icon Button 📱">
      <Icon31 />
    </div>
  );
}

function Frame630266647() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-end relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-neutral-600 text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">8월 22일</p>
      </div>
      <StatusBadge3 />
      <IconButton4 />
    </div>
  );
}

function Frame1312316481() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <StarRatings2 />
      <Frame630266647 />
    </div>
  );
}

function Frame630265280() {
  return (
    <div className="content-stretch flex gap-0.5 items-start justify-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-neutral-600 text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">곱창의전설 - 외길곱창_하남점</p>
      </div>
    </div>
  );
}

function Middle2() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Middle">
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-neutral-600 text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">존**</p>
      </div>
      <Frame630265280 />
    </div>
  );
}

function Coupang1() {
  return (
    <div className="relative shrink-0 size-8" data-name="Coupang">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Coupang">
          <rect fill="white" height="32" width="32" />
          <g id="Vector">
            <path d={svgPaths.p208c1b00} fill="#E5603E" />
            <path d={svgPaths.p22bc5700} fill="#F5B940" />
            <path d={svgPaths.p1d996780} fill="#8B5530" />
            <path d={svgPaths.p19ac2b80} fill="#9FCD5B" />
            <path d={svgPaths.p2973f70} fill="#8B5530" />
            <path d={svgPaths.p97cd480} fill="#5AB1D9" />
            <path d={svgPaths.p514bfc0} fill="#8B5530" />
            <path d={svgPaths.p1a29d500} fill="#8B5530" />
            <path d={svgPaths.p39727800} fill="#8B5530" />
            <path d={svgPaths.p3d05b780} fill="#8B5530" />
            <path d={svgPaths.p3b68efe0} fill="#8B5530" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Thumbnail2() {
  return (
    <div className="relative rounded-lg shrink-0 w-8" data-name="🖥️ Thumbnail">
      <div className="content-stretch flex items-start justify-start overflow-clip relative w-8">
        <Coupang1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pcf1b670} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1312316482() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
      <Icon32 />
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">53,000원 · 3개</p>
      </div>
    </div>
  );
}

function Frame1312316483() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-1 items-center justify-center p-[8px] relative rounded-lg shrink-0">
      <Frame1312316482 />
    </div>
  );
}

function Frame1312316484() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0 w-full">
      <Thumbnail2 />
      <Frame1312316483 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1db6aa00} fill="url(#paint0_linear_1_23322)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_23322" x1="1.33333" x2="14.6667" y1="8" y2="8">
            <stop stopColor="#B4139C" />
            <stop offset="1" stopColor="#1258D2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame1312316485() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
      <Icon33 />
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium from-[#b4139c] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap to-[#1258d2] tracking-[-0.0126px]" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="leading-[16px] whitespace-pre">맞춤 추천답글</p>
      </div>
    </div>
  );
}

function InputText1() {
  return (
    <div className="content-stretch flex items-start justify-start overflow-clip relative shrink-0 w-full" data-name="✏️ Input Text">
      <div className="basis-0 font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-neutral-600 tracking-[-0.0288px]">
        <p className="mb-0">{`고객님, 소중한 피드백 진심으로 감사드립니다. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>고객님의 만족이 우리의 최우선 과제이며, 앞으로 더 나은 서비스로 보답하겠습니다. 🙏</p>
      </div>
    </div>
  );
}

function Icon36() {
  return (
    <div className="absolute right-0 size-5 top-1/2 translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1ec645c0} fill="var(--fill-0, #141414)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingIcon4() {
  return (
    <div className="h-5 relative shrink-0 w-4" data-name="Leading Icon">
      <Icon36 />
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 bg-[rgba(0,0,0,0)] grow h-9 min-h-px min-w-px relative rounded-lg shrink-0" data-name="Button 📱">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-center px-4 py-0 relative w-full">
          <LeadingIcon4 />
          <div className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-nowrap tracking-[-0.0126px]">
            <p className="leading-[16px] whitespace-pre">예약등록</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function Icon37() {
  return (
    <div className="absolute right-0 size-5 top-1/2 translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2ac84300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingIcon5() {
  return (
    <div className="h-5 relative shrink-0 w-4" data-name="Leading Icon">
      <Icon37 />
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 bg-[#141414] grow h-9 min-h-px min-w-px relative rounded-lg shrink-0" data-name="Button 📱">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-center px-4 py-0 relative w-full">
          <LeadingIcon5 />
          <div className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-nowrap tracking-[-0.0126px]">
            <p className="leading-[16px] whitespace-pre">즉시등록</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReplyControlsDt1() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-end relative shrink-0 w-full" data-name=".replyControls/DT">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Frame1312316486() {
  return (
    <div className="bg-[#ffffff] relative rounded-xl shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#b4139c] border-solid inset-0 pointer-events-none rounded-xl" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[12px] relative w-full">
          <Frame1312316485 />
          <InputText1 />
          <ReplyControlsDt1 />
        </div>
      </div>
    </div>
  );
}

function ReviewCard2() {
  return (
    <div className="bg-neutral-100 relative rounded-2xl shrink-0 w-full" data-name="review card">
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-[8px] relative w-full">
          <Frame1312316481 />
          <Middle2 />
          <div className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#000000] text-[16px] tracking-[-0.0288px]" style={{ width: "min-content" }}>
            <p className="leading-[22px]">존마탱</p>
          </div>
          <Frame1312316484 />
          <Frame1312316486 />
        </div>
      </div>
    </div>
  );
}

function StarBorderPurple503() {
  return (
    <div className="relative shrink-0 size-3" data-name="star_border_purple500">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="star_border_purple500">
          <path d={svgPaths.pd96d200} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StarRatings3() {
  return (
    <div className="bg-[rgba(218,37,47,0.08)] relative rounded-lg shrink-0 size-[34px]" data-name=".starRatings">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative size-[34px]">
        <StarBorderPurple503 />
        <div className="css-7q7x82 flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-center text-nowrap tracking-[-0.7px]">
          <p className="leading-[16px] whitespace-pre">1</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#da252f] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function StatusBadge4() {
  return (
    <div className="bg-[rgba(26,26,26,0.08)] box-border content-stretch flex gap-1.5 items-center justify-center overflow-clip p-[6px] relative rounded-md shrink-0" data-name="Status Badge 📱">
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#3d3d3d] text-[14px] text-center text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">12일 남음</p>
      </div>
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2dd3c500} fill="var(--fill-0, #141414)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton5() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-lg shrink-0" data-name="Icon Button 📱">
      <Icon39 />
    </div>
  );
}

function Frame630266648() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-end relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-neutral-600 text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">8월 22일</p>
      </div>
      <StatusBadge4 />
      <IconButton5 />
    </div>
  );
}

function Frame1312316487() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <StarRatings3 />
      <Frame630266648 />
    </div>
  );
}

function Frame630265281() {
  return (
    <div className="content-stretch flex gap-0.5 items-start justify-start relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-neutral-600 text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">곱창의전설 - 외길곱창_하남점</p>
      </div>
    </div>
  );
}

function Middle3() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0" data-name="Middle">
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-neutral-600 text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">김**</p>
      </div>
      <Frame630265281 />
    </div>
  );
}

function Coupang2() {
  return (
    <div className="relative shrink-0 size-8" data-name="Coupang">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Coupang">
          <rect fill="white" height="32" width="32" />
          <g id="Vector">
            <path d={svgPaths.p208c1b00} fill="#E5603E" />
            <path d={svgPaths.p22bc5700} fill="#F5B940" />
            <path d={svgPaths.p1d996780} fill="#8B5530" />
            <path d={svgPaths.p19ac2b80} fill="#9FCD5B" />
            <path d={svgPaths.p2973f70} fill="#8B5530" />
            <path d={svgPaths.p97cd480} fill="#5AB1D9" />
            <path d={svgPaths.p514bfc0} fill="#8B5530" />
            <path d={svgPaths.p1a29d500} fill="#8B5530" />
            <path d={svgPaths.p39727800} fill="#8B5530" />
            <path d={svgPaths.p3d05b780} fill="#8B5530" />
            <path d={svgPaths.p3b68efe0} fill="#8B5530" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Thumbnail3() {
  return (
    <div className="relative rounded-lg shrink-0 w-8" data-name="🖥️ Thumbnail">
      <div className="content-stretch flex items-start justify-start overflow-clip relative w-8">
        <Coupang2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pc389a80} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1312316488() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
      <Icon40 />
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">사진 2장</p>
      </div>
    </div>
  );
}

function Frame1312316489() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-1 items-center justify-center p-[8px] relative rounded-lg shrink-0">
      <Frame1312316488 />
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pcf1b670} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1312316490() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
      <Icon41 />
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-nowrap tracking-[-0.0126px]">
        <p className="leading-[16px] whitespace-pre">53,000원 · 3개</p>
      </div>
    </div>
  );
}

function Frame1312316491() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-1 items-center justify-center p-[8px] relative rounded-lg shrink-0">
      <Frame1312316490 />
    </div>
  );
}

function Frame1312316492() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0 w-full">
      <Thumbnail3 />
      <Frame1312316489 />
      <Frame1312316491 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1db6aa00} fill="url(#paint0_linear_1_23322)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_23322" x1="1.33333" x2="14.6667" y1="8" y2="8">
            <stop stopColor="#B4139C" />
            <stop offset="1" stopColor="#1258D2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame1312316493() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
      <Icon42 />
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium from-[#b4139c] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap to-[#1258d2] tracking-[-0.0126px]" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="leading-[16px] whitespace-pre">맞춤 추천답글</p>
      </div>
    </div>
  );
}

function InputText2() {
  return (
    <div className="content-stretch flex items-start justify-start overflow-clip relative shrink-0 w-full" data-name="✏️ Input Text">
      <div className="basis-0 font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal grow leading-[22px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-neutral-600 tracking-[-0.0288px]">
        <p className="mb-0">{`고객님, 소중한 피드백 진심으로 감사드립니다. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`음식의 양과 멕시코 현지 맛에 만족하셨다니 정말 기쁩니다. 하지만, 타코 고기의 질감과 살사소스의 위생 문제로 불편을 드려 죄송합니다. 고객님의 말씀을 바탕으로 해당 문제를 즉각적으로 개선 조치할 예정입니다. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>고객님의 만족이 우리의 최우선 과제이며, 앞으로 더 나은 서비스로 보답하겠습니다. 🙏</p>
      </div>
    </div>
  );
}

function Icon45() {
  return (
    <div className="absolute right-0 size-5 top-1/2 translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1ec645c0} fill="var(--fill-0, #141414)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingIcon6() {
  return (
    <div className="h-5 relative shrink-0 w-4" data-name="Leading Icon">
      <Icon45 />
    </div>
  );
}

function Button5() {
  return (
    <div className="basis-0 bg-[rgba(0,0,0,0)] grow h-9 min-h-px min-w-px relative rounded-lg shrink-0" data-name="Button 📱">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-center px-4 py-0 relative w-full">
          <LeadingIcon6 />
          <div className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#141414] text-[14px] text-nowrap tracking-[-0.0126px]">
            <p className="leading-[16px] whitespace-pre">예약등록</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d6d6] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function Icon46() {
  return (
    <div className="absolute right-0 size-5 top-1/2 translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2ac84300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeadingIcon7() {
  return (
    <div className="h-5 relative shrink-0 w-4" data-name="Leading Icon">
      <Icon46 />
    </div>
  );
}

function Button6() {
  return (
    <div className="basis-0 bg-[#141414] grow h-9 min-h-px min-w-px relative rounded-lg shrink-0" data-name="Button 📱">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-center px-4 py-0 relative w-full">
          <LeadingIcon7 />
          <div className="font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-nowrap tracking-[-0.0126px]">
            <p className="leading-[16px] whitespace-pre">즉시등록</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReplyControlsDt2() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-end relative shrink-0 w-full" data-name=".replyControls/DT">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Frame1312316494() {
  return (
    <div className="bg-[#ffffff] relative rounded-xl shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#b4139c] border-solid inset-0 pointer-events-none rounded-xl" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[12px] relative w-full">
          <Frame1312316493 />
          <InputText2 />
          <ReplyControlsDt2 />
        </div>
      </div>
    </div>
  );
}

function ReviewCard3() {
  return (
    <div className="bg-neutral-100 relative rounded-2xl shrink-0 w-full" data-name="review card">
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-[8px] relative w-full">
          <Frame1312316487 />
          <Middle3 />
          <div className="font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#000000] text-[16px] tracking-[-0.0288px]" style={{ width: "min-content" }}>
            <p className="leading-[22px]">음식의 양이랑 소스맛은 정말 멕시코 현지 맛이긴해요. 근데 타코에 있는 고기가 질김이 심합니다. 고무 씹는거 같아요. 그리고 결정적으로 살사소스에서 짧은 수염같은 머리카락들이 나왔어요...</p>
          </div>
          <Frame1312316492 />
          <Frame1312316494 />
        </div>
      </div>
    </div>
  );
}

function Frame1312316477() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-5 py-0 relative size-full">
          <ReviewCard />
          <ReviewCard1 />
          <ReviewCard2 />
          <ReviewCard3 />
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-6" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home">
          <path clipRule="evenodd" d={svgPaths.p2e3d3200} fill="var(--fill-0, #141414)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame630263071() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-center p-[4px] relative shrink-0">
      <Home />
    </div>
  );
}

function BottomBarIcons() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex items-center justify-center px-3 py-0.5 relative rounded-xl shrink-0" data-name="Bottom Bar / Icons 📱">
      <Frame630263071 />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-6" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.p300c9200} fill="var(--fill-0, #141414)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame630263070() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-start justify-start p-[4px] relative shrink-0">
      <Search />
    </div>
  );
}

function BottomBarIcons1() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex items-center justify-center px-3 py-0.5 relative rounded-xl shrink-0" data-name="Bottom Bar / Icons 📱">
      <Frame630263070 />
    </div>
  );
}

function Apps() {
  return (
    <div className="relative shrink-0 size-6" data-name="apps">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="apps">
          <path d={svgPaths.p3e8b1540} fill="var(--fill-0, #141414)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame630263072() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-start justify-start p-[4px] relative shrink-0">
      <Apps />
    </div>
  );
}

function BottomBarIcons2() {
  return (
    <div className="bg-[rgba(0,0,0,0.08)] box-border content-stretch flex items-center justify-center px-3 py-0.5 relative rounded-xl shrink-0" data-name="Bottom Bar / Icons 📱">
      <Frame630263072 />
    </div>
  );
}

function Icon47() {
  return (
    <div className="absolute inset-[10%_10%_10%_15%]" data-name="Icon">
      <div className="absolute bottom-0 left-[-0.01%] right-[-6.65%] top-[-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
          <g id="Icon">
            <rect fill="var(--fill-0, #DA252F)" height="7.2" id="Bounds" rx="3.6" width="7.2" x="11.9974" y="0.800049" />
            <g id="Subtract">
              <path d={svgPaths.p2aba8080} fill="var(--fill-0, #141414)" />
              <path d={svgPaths.p63e5400} fill="var(--fill-0, #141414)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon48() {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="Icon">
      <Icon47 />
    </div>
  );
}

function Frame630263073() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-start justify-start p-[4px] relative shrink-0">
      <Icon48 />
    </div>
  );
}

function BottomBarIcons3() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex items-center justify-center px-3 py-0.5 relative rounded-xl shrink-0" data-name="Bottom Bar / Icons 📱">
      <Frame630263073 />
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-6" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="User">
          <path d={svgPaths.p1d184bc0} fill="var(--fill-0, #141414)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame630263074() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-start justify-start p-[4px] relative shrink-0">
      <User />
    </div>
  );
}

function BottomBarIcons4() {
  return (
    <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex items-center justify-center px-3 py-0.5 relative rounded-xl shrink-0" data-name="Bottom Bar / Icons 📱">
      <Frame630263074 />
    </div>
  );
}

function BottomBar() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Bottom Bar 📱">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-3 items-center justify-center px-8 py-3 relative w-full">
          <BottomBarIcons />
          <BottomBarIcons1 />
          <BottomBarIcons2 />
          <BottomBarIcons3 />
          <BottomBarIcons4 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#ffffff] content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Footer">
      <BottomBar />
    </div>
  );
}

export default function Frame1312316495() {
  return (
    <div className="bg-[#ffffff] content-stretch flex flex-col items-start justify-start relative size-full">
      <GlobalNav />
      <AppPageNav />
      <Frame1312316477 />
      <Footer />
    </div>
  );
}