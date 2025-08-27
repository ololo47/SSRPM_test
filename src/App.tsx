import svgPaths from "./imports/svg-noo6dyfs3t";
import newSvgPaths from "./imports/svg-nck3nu8x76";
import replyCardSvgPaths from "./imports/svg-2lzujosf1p";
import imgBaeminLogoKr from "figma:asset/21a6290701d935f6c8ff9bc017b523dfcbaeb83d.png";
import React, { useState, useEffect, useRef } from "react";

function Icon() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2c7e4600} fill="currentColor" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-transparent flex items-center justify-center overflow-clip p-2 relative rounded-full shrink-0" data-name="Icon Button 📱">
      <Icon />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="flex items-start justify-start p-0.5 relative shrink-0" data-name="Wrapper">
      <IconButton />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-1/2 size-5 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1ded7000} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute bg-chart-2 right-0 rounded-md size-6 top-1/2 translate-y-[-50%]" data-name="Icon">
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
    <div className="bg-transparent flex gap-2 h-11 items-center justify-center overflow-clip px-4 py-0 relative rounded-lg shrink-0" data-name=".Nav item📕/App Selection">
      <LeadingIcon />
      <h4 className="text-foreground">가게리뷰</h4>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="basis-0 flex grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Left side">
      <Wrapper />
      <NavItemAppSelection />
    </div>
  );
}

function ActionsDefault() {
  return <div className="flex gap-2 items-center justify-start shrink-0" data-name="_Actions/default" />;
}

function GlobalNav() {
  return (
    <div className="flex h-[60px] items-center justify-start p-2 relative shrink-0 w-[390px] bg-background border-b border-border" data-name="📱Global nav">
      <LeftSide />
      <ActionsDefault />
    </div>
  );
}

function AssetsAppNavigation({ text, isActive }: { text: string; isActive: boolean }) {
  return (
    <div className="flex gap-2.5 items-start justify-start relative shrink-0" data-name=".Assets / App Navigation 📱">
      <h1 className={`${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
        {text}
      </h1>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="flex gap-4 items-center justify-start relative shrink-0 w-full" data-name="Wrapper">
      <AssetsAppNavigation text="리뷰관리" isActive={true} />
      <AssetsAppNavigation text="리뷰리포트" isActive={false} />
      <AssetsAppNavigation text="설정" isActive={false} />
    </div>
  );
}

function Assets() {
  return (
    <div className="flex flex-col gap-3 h-12 items-start justify-center px-0 py-2 relative shrink-0 w-[390px] z-[3]" data-name=".Assets">
      <Wrapper1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[-4px] size-5 top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26b97080} fill="currentColor" id="Vector" />
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
    <div className="flex gap-2 items-center justify-start px-0 py-1.5 relative shrink-0" data-name="Leading & Label">
      <TrailingIcon />
      <label className="text-muted-foreground">상세필터</label>
    </div>
  );
}

function AllFilterButton() {
  return (
    <div className="bg-transparent flex gap-2 items-center justify-end px-4 py-1 relative rounded-lg shrink-0 border border-border" data-name="All Filter Button 📱">
      <LeadingLabel />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-5 top-1/2 translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1ec88700} fill="currentColor" id="Vector" />
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

function FilterButton({ label }: { label: string }) {
  return (
    <div className="bg-transparent flex gap-2 h-[38px] items-center justify-end px-4 py-2 relative rounded-lg shrink-0 border border-border" data-name="Filter Button 📱">
      <label className="text-foreground">{label}</label>
      <TrailingIcon1 />
    </div>
  );
}

function MobileAppNavFilters() {
  return (
    <div className="overflow-x-auto scrollbar-hide" data-name=".Mobile / App nav / Filters">
      <div className="flex gap-2 items-start justify-start relative shrink-0 min-w-max">
        <AllFilterButton />
        <FilterButton label="날짜: 지난 14일" />
        <FilterButton label="브랜드/지점: 전체" />
        <FilterButton label="채널: 전체" />
        <FilterButton label="별점: 전체" />
      </div>
    </div>
  );
}

function MobileActionItems() {
  return (
    <div className="flex gap-2 items-center justify-start relative shrink-0" data-name=".Mobile / Action Items">
      <MobileAppNavFilters />
    </div>
  );
}

function SecondRow() {
  return (
    <div className="overflow-x-auto scrollbar-hide z-[2]" data-name="Second Row">
      <div className="flex gap-2.5 items-start justify-start relative shrink-0 min-w-max">
        <MobileActionItems />
      </div>
    </div>
  );
}

function PillTab({ text, isActive, onClick }: { text: string; isActive: boolean; onClick: () => void }) {
  if (isActive) {
    return (
      <div className="bg-primary/8 h-9 relative rounded-full shrink-0 cursor-pointer border border-primary" data-name="Pill tab 📱" onClick={onClick}>
        <div className="flex gap-1 h-9 items-center justify-center overflow-clip px-3 py-0 relative">
          <label className="text-primary cursor-pointer">{text}</label>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-muted/10 flex gap-1 h-9 items-center justify-center px-3 py-0 relative rounded-full shrink-0 cursor-pointer" data-name="Pill tab 📱" onClick={onClick}>
      <label className="text-foreground cursor-pointer">{text}</label>
    </div>
  );
}

function TabBar({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  const tabs = ["전체", "답변없음", "답변완료", "곧 만료될 리뷰", "전송실패 리뷰"];
  
  return (
    <div className="overflow-x-auto scrollbar-hide" data-name="Tab Bar">
      <div className="flex gap-2 items-start justify-start relative shrink-0 min-w-max">
        {tabs.map((tab) => (
          <PillTab 
            key={tab}
            text={tab} 
            isActive={activeTab === tab} 
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>
    </div>
  );
}

function PageNav({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  return (
    <div className="flex gap-9 h-12 items-center justify-start relative shrink-0 w-full z-[1]" data-name="Page nav">
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

function AppPageNav({ activeTab, setActiveTab, isScrolled }: { 
  activeTab: string; 
  setActiveTab: (tab: string) => void;
  isScrolled: boolean;
}) {
  return (
    <div 
      className={`bg-background relative shrink-0 w-full sticky top-[60px] z-40 transition-all duration-300 ${
        isScrolled ? 'shadow-[0px_2px_8px_rgba(0,0,0,0.08)]' : ''
      }`} 
      data-name="📱App+page nav"
    >
      <div className="relative size-full">
        <div className={`flex flex-col gap-1 isolate items-start justify-start relative w-full transition-all duration-300 ${
          isScrolled ? 'p-3 pb-2' : 'p-5'
        }`}>
          <div className={`transition-all duration-300 overflow-hidden ${
            isScrolled ? 'h-0 opacity-0' : 'h-auto opacity-100'
          }`}>
            <Assets />
          </div>
          <div className={`transition-all duration-300 overflow-hidden ${
            isScrolled ? 'h-0 opacity-0' : 'h-auto opacity-100'
          }`}>
            <SecondRow />
          </div>
          <PageNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </div>
  );
}

// Updated Review Card Components with new icons
function StarBorderPurple500() {
  return (
    <div className="relative shrink-0 size-3" data-name="star_border_purple500">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="star_border_purple500">
          <path d={newSvgPaths.pd96d200} fill="currentColor" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StarRatings({ rating, ratingType }: { rating: number; ratingType: 'low' | 'high' }) {
  const bgColor = ratingType === 'low' ? 'bg-destructive/8' : 'bg-foreground/8';
  const borderColor = ratingType === 'low' ? 'border-destructive' : 'border-muted';
  
  return (
    <div className={`${bgColor} relative rounded-lg shrink-0 size-[34px] ${borderColor} border-2`} data-name=".starRatings">
      <div className="flex items-center justify-center overflow-clip p-2 relative size-[34px]">
        <StarBorderPurple500 />
        <span className="text-foreground text-sm ml-1">{rating}</span>
      </div>
    </div>
  );
}

function StatusBadge({ text }: { text: string }) {
  return (
    <div className="bg-foreground/8 flex gap-1.5 items-center justify-center overflow-clip p-1.5 relative rounded-md shrink-0" data-name="Status Badge 📱">
      <label className="text-foreground/60">{text}</label>
    </div>
  );
}

function OptionsIcon() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={newSvgPaths.p2dd3c500} fill="currentColor" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButtonOptions() {
  return (
    <div className="bg-transparent flex items-center justify-center overflow-clip p-2 relative rounded-lg shrink-0" data-name="Icon Button 📱">
      <OptionsIcon />
    </div>
  );
}

function DateAndOptions({ date, statusText }: { date: string; statusText: string }) {
  return (
    <div className="flex gap-1.5 items-center justify-end relative shrink-0 text-[15px]" data-name="Date and options">
      <span className="text-muted-foreground text-sm text-[14px]">{date}</span>
      <StatusBadge text={statusText} />
      <IconButtonOptions />
    </div>
  );
}

function Ratings({ rating, date, statusText }: { rating: number; date: string; statusText: string }) {
  const ratingType = rating <= 2 ? 'low' : 'high';
  
  return (
    <div className="flex items-start justify-between relative shrink-0 w-full" data-name="Ratings">
      <StarRatings rating={rating} ratingType={ratingType} />
      <DateAndOptions date={date} statusText={statusText} />
    </div>
  );
}

function RestaurantInfo({ restaurantName }: { restaurantName: string }) {
  return (
    <div className="flex gap-0.5 items-start justify-start relative shrink-0" data-name="Restaurant info">
      <label className="text-muted-foreground">{restaurantName}</label>
    </div>
  );
}

function Middle({ customerName, restaurantName }: { customerName: string; restaurantName: string }) {
  return (
    <div className="flex gap-1.5 items-center justify-start relative shrink-0" data-name="Middle">
      <label className="text-muted-foreground">{customerName}</label>
      <RestaurantInfo restaurantName={restaurantName} />
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
            <path d={newSvgPaths.p208c1b00} fill="#E5603E" />
            <path d={newSvgPaths.p22bc5700} fill="#F5B940" />
            <path d={newSvgPaths.p1d996780} fill="#8B5530" />
            <path d={newSvgPaths.p19ac2b80} fill="#9FCD5B" />
            <path d={newSvgPaths.p2973f70} fill="#8B5530" />
            <path d={newSvgPaths.p97cd480} fill="#5AB1D9" />
            <path d={newSvgPaths.p514bfc0} fill="#8B5530" />
            <path d={newSvgPaths.p1a29d500} fill="#8B5530" />
            <path d={newSvgPaths.p39727800} fill="#8B5530" />
            <path d={newSvgPaths.p3d05b780} fill="#8B5530" />
            <path d={newSvgPaths.p3b68efe0} fill="#8B5530" />
          </g>
        </g>
      </svg>
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

function Thumbnail({ channel }: { channel: 'coupang' | 'baemin' }) {
  return (
    <div className="relative rounded-lg shrink-0 w-8 border border-border/10" data-name="🖥️ Thumbnail">
      <div className="flex items-start justify-start overflow-clip relative w-8">
        {channel === 'coupang' ? <Coupang /> : <Baemin />}
      </div>
    </div>
  );
}

function PhotoIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={newSvgPaths.pc389a80} fill="currentColor" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Photos({ count }: { count: number }) {
  return (
    <div className="flex gap-1 items-center justify-start relative shrink-0" data-name="Photos">
      <PhotoIcon />
      <label className="text-foreground">사진 {count}장</label>
    </div>
  );
}

function ReviewActions({ photoCount }: { photoCount: number }) {
  return (
    <div className="bg-background flex gap-1 items-center justify-center p-2 relative rounded-lg shrink-0" data-name="Review actions">
      <Photos count={photoCount} />
    </div>
  );
}

function PriceIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={newSvgPaths.pcf1b670} fill="currentColor" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PriceDetails({ price, quantity }: { price: string; quantity: string }) {
  return (
    <div className="flex gap-1 items-center justify-start relative shrink-0" data-name="Price details">
      <PriceIcon />
      <label className="text-foreground">{price} · {quantity}</label>
    </div>
  );
}

function PriceAndQuantity({ price, quantity }: { price: string; quantity: string }) {
  return (
    <div className="bg-background flex gap-1 items-center justify-center p-2 relative rounded-lg shrink-0" data-name="Price and quantity">
      <PriceDetails price={price} quantity={quantity} />
    </div>
  );
}

function ReviewDetails({ channel, photoCount, price, quantity }: { 
  channel: 'coupang' | 'baemin'; 
  photoCount: number; 
  price: string; 
  quantity: string; 
}) {
  return (
    <div className="flex gap-1 items-center justify-start relative shrink-0 w-full" data-name="Review details">
      <Thumbnail channel={channel} />
      <ReviewActions photoCount={photoCount} />
      <PriceAndQuantity price={price} quantity={quantity} />
    </div>
  );
}

function RecommendationIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={replyCardSvgPaths.p1db6aa00} fill="url(#paint0_linear_1_23322)" id="Vector" />
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

function ClockIcon() {
  return (
    <div className="absolute right-0 size-5 top-1/2 translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={replyCardSvgPaths.p1ec645c0} fill="currentColor" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SendIcon() {
  return (
    <div className="absolute right-0 size-5 top-1/2 translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={replyCardSvgPaths.p2ac84300} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M15 5L5 15M5 5l10 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ReplyButton({ text, isPrimary }: { text: string; isPrimary: boolean }) {
  const buttonClass = isPrimary 
    ? "basis-0 bg-secondary grow h-9 min-h-px min-w-px relative rounded-lg shrink-0"
    : "basis-0 bg-transparent grow h-9 min-h-px min-w-px relative rounded-lg shrink-0 border border-border";
  
  const textColor = isPrimary ? "text-secondary-foreground" : "text-foreground";

  return (
    <div className={buttonClass} data-name="Button 📱">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="flex gap-2 h-9 items-center justify-center px-4 py-0 relative w-full">
          <div className="h-5 relative shrink-0 w-4">
            {isPrimary ? <SendIcon /> : <ClockIcon />}
          </div>
          <button className={`${textColor} bg-transparent border-none cursor-pointer`}>
            {text}
          </button>
        </div>
      </div>
    </div>
  );
}

// Interactive Text Area with Pressed State and Editing
function InteractiveTextArea({ 
  text, 
  isPressed, 
  onPress, 
  onClose 
}: { 
  text: string; 
  isPressed: boolean; 
  onPress: () => void; 
  onClose: () => void; 
}) {
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [editableText, setEditableText] = useState(text);
  const [isEditing, setIsEditing] = useState(false);
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handlePress = () => {
    onPress();
    setShowFloatingButton(true);
    setIsEditing(true);
  };

  const handleCloseFloatingButton = () => {
    setShowFloatingButton(false);
    setIsEditing(false);
    onClose();
  };

  const adjustTextAreaHeight = () => {
    const textarea = textAreaRef.current;
    if (textarea) {
      // Reset height to auto to get the correct scrollHeight
      textarea.style.height = 'auto';
      // Set height to scrollHeight to fit content
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditableText(e.target.value);
    adjustTextAreaHeight();
  };

  const handleBlur = () => {
    // Reset to original if empty
    if (!editableText.trim()) {
      setEditableText(text);
    }
  };

  // Handle clicks outside the text area
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        // Clicked outside - remove focus state
        setIsEditing(false);
        setShowFloatingButton(false);
        onClose();
      }
    };

    if (isPressed) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPressed, onClose]);

  React.useEffect(() => {
    if (isEditing) {
      adjustTextAreaHeight();
    }
  }, [isEditing]);

  const baseClasses = "bg-background flex flex-col items-center justify-start relative rounded-lg shrink-0 w-full z-[3]";
  const pressedClasses = isPressed 
    ? "shadow-[0px_0px_0px_2px_#ffffff,0px_0px_0px_4px_#000000]" 
    : "";

  return (
    <div ref={containerRef} className="flex flex-col gap-2 isolate items-start justify-start min-w-[232px] relative shrink-0 w-full" data-name="🖥 Text Area">
      <div className={`${baseClasses} ${pressedClasses}`} data-name="✏️ Text Area">
        <div className="relative shrink-0 w-full" data-name="Input Wrapper">
          <div className="relative size-full">
            <div className="flex flex-col items-start justify-start p-2 relative w-full">
              <div 
                className="flex items-start justify-start overflow-clip relative shrink-0 w-full cursor-text" 
                data-name="✏️ Input Text"
                onClick={!isEditing ? handlePress : undefined}
              >
                {isEditing ? (
                  <textarea
                    ref={textAreaRef}
                    className="basis-0 grow min-h-[40px] min-w-px text-foreground p-2 rounded-lg bg-transparent resize-none outline-none w-full overflow-hidden"
                    value={editableText}
                    onChange={handleTextChange}
                    onBlur={handleBlur}
                    autoFocus
                    placeholder="답글을 입력하세요..."
                    style={{ height: 'auto' }}
                  />
                ) : (
                  <p 
                    className="basis-0 grow min-h-px min-w-px text-muted-foreground p-2 rounded-lg break-words"
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {editableText}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Action Button */}
      {isPressed && showFloatingButton && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-start justify-start rounded-lg shadow-lg z-10" data-name="Split Button 📱">
          <div className="bg-primary flex gap-2 h-9 items-center justify-center px-4 py-0 relative rounded-l-lg shrink-0" data-name="Button">
            <button className="text-primary-foreground bg-transparent border-none cursor-pointer text-sm font-medium">
              맞춤 답글 추가 생성
            </button>
          </div>
          <div className="bg-primary h-9 w-[1px] shrink-0 opacity-20" />
          <div 
            className="bg-primary flex items-center justify-center h-9 w-9 relative rounded-r-lg shrink-0 cursor-pointer hover:bg-primary/90 transition-colors" 
            data-name="Icon Button"
            onClick={handleCloseFloatingButton}
          >
            <svg className="size-4" fill="none" viewBox="0 0 16 16">
              <path 
                d="M12 4L4 12M4 4l8 8" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

interface ReviewCardData {
  rating: number;
  date: string;
  statusText: string;
  customerName: string;
  restaurantName: string;
  reviewText: string;
  channel: 'coupang' | 'baemin';
  photoCount: number;
  price: string;
  quantity: string;
  replyType: 'full' | 'generate' | 'simple';
  replyText?: string;
}

function DetailedReviewCard({ review, cardIndex }: { review: ReviewCardData; cardIndex: number }) {
  const [isTextAreaPressed, setIsTextAreaPressed] = useState(false);

  const handleTextAreaPress = () => {
    setIsTextAreaPressed(true);
  };

  const handleTextAreaClose = () => {
    setIsTextAreaPressed(false);
  };

  return (
    <div className="bg-foreground/10 relative rounded-xl shrink-0 w-full" data-name="review card">
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="flex flex-col gap-2 items-start justify-center p-2 relative w-full">
          <Ratings rating={review.rating} date={review.date} statusText={review.statusText} />
          <Middle customerName={review.customerName} restaurantName={review.restaurantName} />
          <p className="text-foreground w-full">
            {review.reviewText}
          </p>
          <ReviewDetails channel={review.channel} photoCount={review.photoCount} price={review.price} quantity={review.quantity} />
          
          {/* Reply Section */}
          {review.replyType === 'full' && review.replyText && (
            <div className="bg-background relative rounded-xl shrink-0 w-full border border-primary" data-name="Reply card">
              <div className="relative size-full">
                <div className="flex flex-col items-start justify-start p-2 relative w-full">
                  <div className="relative shrink-0 w-full" data-name="Reply header">
                    <div className="flex flex-row items-center relative size-full">
                      <div className="flex gap-1 items-center justify-start pb-0 pt-2 px-2 relative w-full">
                        <RecommendationIcon />
                        <h4 className="bg-gradient-to-r from-[#b4139c] to-[#1258d2] bg-clip-text text-transparent">
                          맞춤 추천답글
                        </h4>
                      </div>
                    </div>
                  </div>
                  <InteractiveTextArea 
                    text={review.replyText}
                    isPressed={isTextAreaPressed}
                    onPress={handleTextAreaPress}
                    onClose={handleTextAreaClose}
                  />
                  <div className="relative shrink-0 w-full" data-name=".replyControls/DT">
                    <div className="flex flex-row items-center justify-end relative size-full">
                      <div className="flex gap-1 items-center justify-end pb-2 pt-0 px-2 relative w-full">
                        <ReplyButton text="예약등록" isPrimary={false} />
                        <ReplyButton text="즉시등록" isPrimary={true} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {review.replyType === 'generate' && (
            <div className="bg-background relative rounded-xl shrink-0 w-full border border-primary">
              <div className="flex flex-row items-center relative size-full">
                <div className="flex items-center justify-between p-3 relative w-full">
                  <div className="flex gap-1 items-center justify-start relative shrink-0">
                    <RecommendationIcon />
                    <h4 className="bg-gradient-to-r from-[#b4139c] to-[#1258d2] bg-clip-text text-transparent">
                      맞춤 추천답글
                    </h4>
                  </div>
                  <div className="bg-transparent h-9 relative rounded-lg shrink-0 border border-border" data-name="Button 📱">
                    <div className="flex gap-2 h-9 items-center justify-center overflow-clip px-4 py-0 relative">
                      <button className="text-foreground bg-transparent border-none cursor-pointer">
                        지금 생성 하기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {review.replyType === 'simple' && review.replyText && (
            <div className="bg-background relative rounded-xl shrink-0 w-full border border-primary">
              <div className="relative size-full">
                <div className="flex flex-col items-start justify-start p-2 relative w-full">
                  <div className="relative shrink-0 w-full" data-name="Reply header">
                    <div className="flex flex-row items-center relative size-full">
                      <div className="flex gap-1 items-center justify-start pb-0 pt-2 px-2 relative w-full">
                        <RecommendationIcon />
                        <h4 className="bg-gradient-to-r from-[#b4139c] to-[#1258d2] bg-clip-text text-transparent">
                          맞춤 추천답글
                        </h4>
                      </div>
                    </div>
                  </div>
                  <InteractiveTextArea 
                    text={review.replyText}
                    isPressed={isTextAreaPressed}
                    onPress={handleTextAreaPress}
                    onClose={handleTextAreaClose}
                  />
                  <div className="relative shrink-0 w-full" data-name=".replyControls/DT">
                    <div className="flex flex-row items-center justify-end relative size-full">
                      <div className="flex gap-1 items-center justify-end pb-2 pt-0 px-2 relative w-full">
                        <ReplyButton text="예약등록" isPrimary={false} />
                        <ReplyButton text="즉시등록" isPrimary={true} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ReviewContainer({ activeTab, onScroll }: { activeTab: string; onScroll: (event: Event) => void }) {
  const sampleReviews: ReviewCardData[] = [
    {
      rating: 1,
      date: "8월 22일",
      statusText: "12일 남음",
      customerName: "김**",
      restaurantName: "곱창의전설 - 외길곱창_하남점",
      reviewText: "음식의 양과 소스의 맛은 정말 멕시코 현지의 느낌이 나요. 하지만 타코의 고기가 너무 질겨서 씹는 게 힘들었습니다. 고무를 씹는 것 같은 느낌이었어요. 그리고 살사소스에서 짧은 머리카락이 나와서 정말 놀랐습니다...",
      channel: 'coupang',
      photoCount: 2,
      price: "53,000원",
      quantity: "3개",
      replyType: 'full',
      replyText: `Dear customer, thank you sincerely for your valuable feedback.

We are truly glad to hear that you were satisfied with the portion size and the authentic Mexican flavors. However, we apologize for the inconvenience caused by the texture of the taco meat and the hygiene issues with the salsa.

Your satisfaction is our top priority, and we will strive to provide even better service in the future. 🙏`
    },
    {
      rating: 1,
      date: "8월 22일", 
      statusText: "12일 남음",
      customerName: "김**",
      restaurantName: "곱창의전설 - 외길곱창_하남점",
      reviewText: "평이 좋아 시켰는데 너무 실망했습니다 1.7인분이 같이 온 사이드가 포함인건지 일단 곱창양이 너무 적고 당면이 거의 다였습니다 맛은 멸치가루? 맛이 나서 별로였고 주먹밥도 마요네즈가 너무 많고 좀 비린내나서 얼마 못먹고 버렸어요 부추빼고 그닥..",
      channel: 'baemin',
      photoCount: 2,
      price: "53,000원",
      quantity: "3개",
      replyType: 'generate'
    },
    {
      rating: 5,
      date: "8월 22일",
      statusText: "12일 남음", 
      customerName: "존**",
      restaurantName: "곱창의전설 - 외길곱창_하남점",
      reviewText: "존마탱",
      channel: 'coupang',
      photoCount: 0,
      price: "53,000원",
      quantity: "3개",
      replyType: 'simple',
      replyText: `고객님, 소중한 피드백 진심으로 감사드립니다. 

고객님의 만족이 우리의 최우선 과제이며, 앞으로 더 나은 서비스로 보답하겠습니다. 🙏`
    },
    {
      rating: 1,
      date: "8월 22일",
      statusText: "12일 남음",
      customerName: "김**", 
      restaurantName: "곱창의전설 - 외길곱창_하남점",
      reviewText: "음식의 양이랑 소스맛은 정말 멕시코 현지 맛이긴해요. 근데 타코에 있는 고기가 질김이 심합니다. 고무 씹는거 같아요. 그리고 결정적으로 살사소스에서 짧은 수염같은 머리카락들이 나왔어요...",
      channel: 'coupang',
      photoCount: 2,
      price: "53,000원", 
      quantity: "3개",
      replyType: 'simple',
      replyText: `고객님, 소중한 피드백 진심으로 감사드립니다. 

음식의 양과 멕시코 현지 맛에 만족하셨다니 정말 기쁩니다. 하지만, 타코 고기의 질감과 살사소스의 위생 문제로 불편을 드려 죄송합니다. 고객님의 말씀을 바탕으로 해당 문제를 즉각적으로 개선 조치할 예정입니다. 

고객님의 만족이 우리의 최우선 과제이며, 앞으로 더 나은 서비스로 보답하겠습니다. 🙏`
    },
    {
      rating: 4,
      date: "8월 21일",
      statusText: "13일 남음",
      customerName: "박**",
      restaurantName: "곱창의전설 - 외길곱창_하남점",
      reviewText: "음식은 전반적으로 맛있었어요. 특히 곱창이 신선하고 양념도 잘 배어있었습니다. 다만 배달이 조금 늦어서 아쉬웠어요. 그래도 맛있게 잘 먹었습니다!",
      channel: 'baemin',
      photoCount: 1,
      price: "45,000원",
      quantity: "2개",
      replyType: 'generate'
    },
    {
      rating: 5,
      date: "8월 21일", 
      statusText: "13일 남음",
      customerName: "이**",
      restaurantName: "곱창의전설 - 외길곱창_하남점",
      reviewText: "정말 맛있어요! 곱창이 쫄깃하고 양념이 딱 제 취향이었습니다. 밑반찬도 깔끔하고 양도 충분했어요. 다음에도 주문할게요~",
      channel: 'coupang',
      photoCount: 3,
      price: "38,000원",
      quantity: "2개",
      replyType: 'simple',
      replyText: `고객님, 정말 감사합니다! 

곱창의 쫄깃한 식감과 양념이 취향에 맞으셨다니 너무 기쁩니다. 밑반찬과 양에도 만족해주셔서 감사드립니다. 다음에도 더욱 맛있는 음식으로 찾아뵙겠습니다! 🙏`
    },
    {
      rating: 2,
      date: "8월 20일",
      statusText: "14일 남음", 
      customerName: "최**",
      restaurantName: "곱창의전설 - 외길곱창_하남점",
      reviewText: "기대하고 시켰는데 실망이었어요. 곱창이 너무 질기고 냄새도 좀 났어요. 양념은 괜찮았지만 전체적으로 아쉽네요. 개선이 필요할 것 같습니다.",
      channel: 'baemin',
      photoCount: 0,
      price: "52,000원",
      quantity: "3개",
      replyType: 'full',
      replyText: `고객님, 소중한 의견 주셔서 감사합니다.

곱창의 식감과 신선도에서 기대에 미치지 못해 정말 죄송합니다. 품질 관리에 더욱 신경쓰고, 신선한 재료만을 사용하도록 개선하겠습니다. 다음에는 꼭 만족하실 수 있도록 최선을 다하겠습니다.`
    },
    {
      rating: 3,
      date: "8월 20일",
      statusText: "14일 남음",
      customerName: "정**", 
      restaurantName: "곱창의전설 - 외길곱창_하남점",
      reviewText: "그냥 보통이에요. 나쁘지도 좋지도 않은 맛이었습니다. 가격 대비 양은 적당한 것 같아요. 특별할 건 없었지만 무난하게 먹을 만해요.",
      channel: 'coupang',
      photoCount: 1,
      price: "42,000원",
      quantity: "2개",
      replyType: 'generate'
    },
    {
      rating: 5,
      date: "8월 19일",
      statusText: "15일 남음",
      customerName: "김**",
      restaurantName: "곱창의전설 - 외길곱창_하남점", 
      reviewText: "여기 진짜 맛집이에요! 곱창 양념이 정말 일품이고, 밑반찬도 다 맛있어요. 특히 김치가 아삭아삭하고 시원해서 곱창이랑 같이 먹으니까 더 맛있었어요. 강추합니다!",
      channel: 'baemin',
      photoCount: 4,
      price: "65,000원", 
      quantity: "4개",
      replyType: 'simple',
      replyText: `고객님, 정말 감사합니다! 

곱창 양념과 밑반찬, 특히 김치까지 모두 만족해주셔서 너무 기쁩니다. 고객님의 추천 덕분에 힘이 납니다. 앞으로도 최고의 맛으로 보답하겠습니다! 🙏`
    }
  ];

  const filteredReviews = sampleReviews.filter(review => {
    switch (activeTab) {
      case "답변없음":
        return !review.replyText;
      case "답변완료":
        return !!review.replyText;
      case "곧 만료될 리뷰":
        return review.statusText.includes("남음");
      case "전송실패 리뷰":
        return false; // No sample data for failed transmission
      default:
        return true;
    }
  });

  return (
    <div className="flex-1 overflow-y-auto pb-24" data-name="Review Container" onScroll={(e) => onScroll(e.nativeEvent)}>
      <div className="flex flex-col gap-2 items-start justify-start px-5 py-0">
        {filteredReviews.length === 0 ? (
          <div className="flex items-center justify-center h-32 text-muted-foreground">
            해당하는 리뷰가 없습니다.
          </div>
        ) : (
          filteredReviews.map((review, index) => (
            <DetailedReviewCard key={index} review={review} cardIndex={index} />
          ))
        )}
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-6" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home">
          <path clipRule="evenodd" d={svgPaths.p2e3d3200} fill="currentColor" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame630263071() {
  return (
    <div className="flex gap-2.5 items-center justify-center p-1 relative shrink-0">
      <Home />
    </div>
  );
}

function BottomBarIcons() {
  return (
    <div className="bg-transparent flex items-center justify-center px-3 py-0.5 relative rounded-xl shrink-0" data-name="Bottom Bar / Icons 📱">
      <Frame630263071 />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-6" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.p300c9200} fill="currentColor" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame630263070() {
  return (
    <div className="flex gap-2.5 items-start justify-start p-1 relative shrink-0">
      <Search />
    </div>
  );
}

function BottomBarIcons1() {
  return (
    <div className="bg-transparent flex items-center justify-center px-3 py-0.5 relative rounded-xl shrink-0" data-name="Bottom Bar / Icons 📱">
      <Frame630263070 />
    </div>
  );
}

function Apps() {
  return (
    <div className="relative shrink-0 size-6" data-name="apps">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="apps">
          <path d={svgPaths.p3e8b1540} fill="currentColor" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame630263072() {
  return (
    <div className="flex gap-2.5 items-start justify-start p-1 relative shrink-0">
      <Apps />
    </div>
  );
}

function BottomBarIcons2() {
  return (
    <div className="bg-sidebar-primary flex items-center justify-center px-3 py-0.5 relative rounded-xl shrink-0" data-name="Bottom Bar / Icons 📱">
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
            <rect fill="var(--color-destructive)" height="7.2" id="Bounds" rx="3.6" width="7.2" x="11.9974" y="0.800049" />
            <g id="Subtract">
              <path d={svgPaths.p2aba8080} fill="currentColor" />
              <path d={svgPaths.p63e5400} fill="currentColor" />
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
    <div className="flex gap-2.5 items-start justify-start p-1 relative shrink-0">
      <Icon16 />
    </div>
  );
}

function BottomBarIcons3() {
  return (
    <div className="bg-transparent flex items-center justify-center px-3 py-0.5 relative rounded-xl shrink-0" data-name="Bottom Bar / Icons 📱">
      <Frame630263073 />
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-6" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="User">
          <path d={svgPaths.p1d184bc0} fill="currentColor" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame630263074() {
  return (
    <div className="flex gap-2.5 items-start justify-start p-1 relative shrink-0">
      <User />
    </div>
  );
}

function BottomBarIcons4() {
  return (
    <div className="bg-transparent flex items-center justify-center px-3 py-0.5 relative rounded-xl shrink-0" data-name="Bottom Bar / Icons 📱">
      <Frame630263074 />
    </div>
  );
}

function BottomBar() {
  return (
    <div className="bg-background relative shrink-0 w-full" data-name="Bottom Bar 📱">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="flex gap-3 items-center justify-center px-8 py-3 relative w-full">
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
    <div className="bg-background sticky bottom-0 w-full z-50 border-t border-border" data-name="Footer">
      <BottomBar />
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("전체");
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollTopRef = useRef(0);

  const handleScroll = (event: Event) => {
    const target = event.target as HTMLElement;
    if (!target) return;
    
    const scrollTop = target.scrollTop;
    const lastScrollTop = lastScrollTopRef.current;
    const scrollingUp = scrollTop < lastScrollTop;
    
    // Clear any existing timeout for immediate response
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Update scroll state based on position and direction
    if (scrollTop <= 10) {
      // Near top - always show sections
      setIsScrolled(false);
    } else if (scrollingUp) {
      // Scrolling up - always reveal sections
      setIsScrolled(false);
    } else if (scrollTop > 50) {
      // Scrolling down and past threshold - hide sections
      setIsScrolled(true);
    }
    
    lastScrollTopRef.current = scrollTop;
  };

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-background flex flex-col h-screen max-w-[390px] mx-auto" data-name="App">
      <GlobalNav />
      <AppPageNav activeTab={activeTab} setActiveTab={setActiveTab} isScrolled={isScrolled} />
      <ReviewContainer activeTab={activeTab} onScroll={handleScroll} />
      <Footer />
    </div>
  );
}