import { FOOTER_MESSAGE } from "@/app/configuration/ui";

export default function ChatFooter() {
  return (
    <div className="w-full text-xs flex pt-2 text-gray-500">
      <div className="flex-grow text-left">{/* Left Pane */}</div>
      <div className="flex-grow text-center">
        {/* Center Pane */}
        {FOOTER_MESSAGE}
      </div>
      <div className="flex-grow text-right">
        {/* Right Pane */}
        {/* Do not remove or modify the following message. Removal or modification violates the license agreement. */}
        <a
          href="http://www.ringel.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          powered by ringel.AI
        </a>
      </div>
    </div>
  );
}
