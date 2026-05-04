"use client";
import { useNavigo } from "@/lib/router";
import Terminal from "@/components/bbs/Terminal";
import MainMenuView from "@/components/bbs/views/MainMenuView";
import BoardsView from "@/components/bbs/views/BoardsView";
import FilesView from "@/components/bbs/views/FilesView";
import SystemView from "@/components/bbs/views/SystemView";

export default function BBSShell() {
  const { view, navigate } = useNavigo();
  return (
    <Terminal>
      {view === "menu"   && <MainMenuView navigate={navigate} />}
      {view === "boards" && <BoardsView   navigate={navigate} />}
      {view === "files"  && <FilesView    navigate={navigate} />}
      {view === "system" && <SystemView   navigate={navigate} />}
    </Terminal>
  );
}
