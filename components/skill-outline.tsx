import { IconType } from "react-icons";

interface SkillOutlineProps {
  Icon: IconType;
  text: string;
}

export default function SkillOutline({ Icon, text }: SkillOutlineProps) {
  return (
    <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 mr-2">
      <Icon className="mr-2 h-4 w-4" />
      {text}
    </div>
  );
}
