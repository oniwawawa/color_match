"use client";
import PageLinkButton from "./components/ui/pege_link_button";

export default function Home() {
  return (
    <div className="py-8 flex flex-col gap-y-8 items-center text-black zatsu">
      色のお部屋
      <PageLinkButton href="/kibun">今日の気分はこんな色</PageLinkButton>
    </div>
  );
}
