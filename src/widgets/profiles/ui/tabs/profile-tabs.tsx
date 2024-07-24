'use client';
import { useProfilesEditorReadOnlyStore } from '@/app/_store/profiles-editor-store';
import { Button, Icon } from '@/shared';
import { TabItem } from './tab-item';
import { useEditorState } from '@udecode/plate-common';
import { useProfilesTabModeStore } from '@/app/_store/profiles-tab-store';
import { useUserState } from '@/app/_store/useUserState';
import { useProfileReadmeMutation } from '../../lib/useProfileReadmeMutation';

export const ProfileTabs = ({ profileUserId }: { profileUserId?: number }) => {
  const { isReadOnly, setIsReadOnly } = useProfilesEditorReadOnlyStore();
  const { user: myInfo } = useUserState();
  const { tabMode } = useProfilesTabModeStore();
  const editor = useEditorState();
  const { profileReadmeEdit } = useProfileReadmeMutation();

  const handleEditButton = () => {
    if (!isReadOnly) {
      profileReadmeEdit({ userId: myInfo?.id, readme: editor.children });
    }
    setIsReadOnly();
  };

  return (
    <div className="flex border-b items-center">
      <TabItem title="Overview" />
      <TabItem title="Articles" />
      <TabItem title="Stars" />
      <TabItem title="BookMarks" />
      {profileUserId === myInfo?.id && tabMode === 'Overview' ? (
        <Button
          className="ml-auto"
          variant="ghost"
          size="icon"
          onClick={handleEditButton}
        >
          <Icon name="edit" />
        </Button>
      ) : null}
    </div>
  );
};
