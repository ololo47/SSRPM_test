import svgPaths from "./svg-noo6dyfs3t";

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
      <div className="font-['Inter_Display:Medium',_'Noto_Sans_KR:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#141414] text-[28px] text-nowrap tracking-[-0.168px]">
        <p className="leading-[30px] whitespace-pre">리뷰관리</p>
      </div>
    </div>
  );
}

function AssetsAppNavigation1() {
  return (
    <div className="content-stretch flex gap-2.5 items-start justify-start relative shrink-0" data-name=".Assets / App Navigation 📱">
      <div className="font-['Inter_Display:Medium',_'Noto_Sans_KR:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#757575] text-[28px] text-nowrap tracking-[-0.168px]">
        <p className="leading-[30px] whitespace-pre">리뷰리포트</p>
      </div>
    </div>
  );
}

function AssetsAppNavigation2() {
  return (
    <div className="content-stretch flex gap-2.5 items-start justify-start relative shrink-0" data-name=".Assets / App Navigation 📱">
      <div className="font-['Inter_Display:Medium',_'Noto_Sans_KR:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#757575] text-[28px] text-nowrap tracking-[-0.168px]">
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

function TabBar() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0" data-name="Tab Bar">
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
      <TabBar />
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

function ReviewContainer() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Review Container">
      <div className="relative size-full">
        <div className="size-full" />
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

function Icon15() {
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

function Icon16() {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="Icon">
      <Icon15 />
    </div>
  );
}

function Frame630263073() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-start justify-start p-[4px] relative shrink-0">
      <Icon16 />
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

export default function App() {
  return (
    <div className="bg-[#ffffff] content-stretch flex flex-col items-start justify-start relative size-full" data-name="App">
      <GlobalNav />
      <AppPageNav />
      <ReviewContainer />
      <Footer />
    </div>
  );
}