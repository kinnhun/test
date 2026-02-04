import {
  ArrowRightIcon,
  Bars3Icon,
  BriefcaseIcon,
  CameraIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ComputerDesktopIcon,
  EnvelopeIcon,
  HeartIcon,
  HomeIcon,
  MapPinIcon,
  PaintBrushIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  SparklesIcon,
  UserIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

type IconName =
  | "ArrowRightIcon"
  | "Bars3Icon"
  | "BriefcaseIcon"
  | "CameraIcon"
  | "CheckBadgeIcon"
  | "CheckCircleIcon"
  | "ChevronLeftIcon"
  | "ChevronRightIcon"
  | "ComputerDesktopIcon"
  | "EnvelopeIcon"
  | "HeartIcon"
  | "HomeIcon"
  | "MapPinIcon"
  | "PaintBrushIcon"
  | "PaperAirplaneIcon"
  | "PhoneIcon"
  | "SparklesIcon"
  | "UserIcon"
  | "VideoCameraIcon";

const ICON_MAP: Record<IconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  ArrowRightIcon,
  Bars3Icon,
  BriefcaseIcon,
  CameraIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ComputerDesktopIcon,
  EnvelopeIcon,
  HeartIcon,
  HomeIcon,
  MapPinIcon,
  PaintBrushIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  SparklesIcon,
  UserIcon,
  VideoCameraIcon,
};

interface AppIconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export default function AppIcon({ name, size = 20, className }: AppIconProps) {
  const IconComponent = ICON_MAP[name];

  if (!IconComponent) return null;

  return (
    <IconComponent
      className={className}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
}


