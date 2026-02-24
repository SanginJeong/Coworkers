import Link from "next/link";
import { FloatingButton, PageLayout } from "@/common";
import { DashBoardHeader, DashBoardBestArticles, DashBoardAllArticles } from "./_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coworkers | 자유게시판",
  description: "게시글을 통해 팀원들과 소통해보세요.",
};

const DashboardPage = () => {
  return (
    <PageLayout>
      <section className="max-w-[1120px]">
        <DashBoardHeader />
        <DashBoardBestArticles />
        <DashBoardAllArticles />
        <Link href="/dashboard/write" className="block">
          <FloatingButton iconName="pencil" className="fixed right-4 bottom-4 tablet:right-6 tablet:bottom-6 pc:right-10 pc:bottom-10" />
        </Link>
      </section>
    </PageLayout>
  );
};

export default DashboardPage;
