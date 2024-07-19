'use client';
import React from 'react';
import { PlateController } from '@udecode/plate-common';
import { TooltipProvider } from '@/components/plate-ui/tooltip';
import DetailPlateEditor from '@/widgets/workspace/ui/detail/detail-editor';
import { DetailSetting } from '@/widgets/workspace/ui/detail/detail-setting';
import { useGetWorkspaceDetailsQuery } from '@/widgets/workspace/tanstack-query/useGetWorkspaceDetailsQuery';
import { useParams, usePathname, useSearchParams } from 'next/navigation';

export default function WorkspaceDetailPage() {
  const { articleId } = useParams<{ articleId: string }>();
  const { document, isLoading } = useGetWorkspaceDetailsQuery(
    parseInt(articleId),
  );

  if (isLoading) {
    return <div>불러오는 중입니다.</div>;
  }

  return (
    <div>
      <div className="flex flex-1 relative">
        <PlateController>
          <TooltipProvider
            disableHoverableContent
            delayDuration={200}
            skipDelayDuration={0}
          >
            <div className="w-[820px] rounded-lg border bg-background shadow">
              <DetailPlateEditor contents={document?.contents} />
            </div>
          </TooltipProvider>
          <DetailSetting
            title={document?.title}
            isPrivate={document?.isPrivate}
            isPublish={document?.isPublish}
            description={document?.description}
          />
        </PlateController>
      </div>
    </div>
  );
}
