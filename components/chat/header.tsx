import { useContext } from 'react';
import ChatExcel from './chat-excel';
import { ChatContext } from '@/app/chat-context';
import ModeTab from '@/components/chat/mode-tab';
import ModelSelector from '@/components/chat/model-selector';

/**
 * chat header
 */
interface Props {
  refreshHistory: () => void;
  modelChange: (val: string) => void;
  selectedModel: string;
}

function Header({ refreshHistory, modelChange, selectedModel }: Props) {
  const { refreshDialogList } = useContext(ChatContext);
  return (
    <div className="w-full py-4 flex items-center justify-center border-b border-gray-100 gap-5">
      {/* excel */}
      <ChatExcel
        onComplete={() => {
          refreshDialogList?.();
          refreshHistory?.();
        }}
      />
      {/* models selector */}
      <ModelSelector selectedModel={selectedModel} onChange={modelChange} />
      <ModeTab />
    </div>
  );
}

export default Header;
