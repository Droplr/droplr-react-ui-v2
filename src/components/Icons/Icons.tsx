import React from "react";
import { CSSProperties } from "styled-components";
import * as icons from "./IconList/IconList";

/**
 * @interface Icon Component props
 * @member {String} name The Icon name
 * @member {String} [className] Appends custom class names
 * @member {CSSProperties} [style] Appends custom styles
 * @member {String} [viewBox] SVG ViewBox parameter
 * @member {Number} [size] Pixel-size of element, ie. (14x14)
 * @member {Number} [stroke] Stroke width of SVG path lines
 * @member {string} [color] The color of the icon
 */
export interface IconProps {
  /**
   * @member {String} name The Icon name
   */
  name:
    | "Add"
    | "AddPeople"
    | "AddToBoard"
    | "AlertCopy2"
    | "Alert"
    | "AlignCenter"
    | "AlignLeft"
    | "AlignRight"
    | "AllItems"
    | "Arrow"
    | "AudioCopy2"
    | "Audio"
    | "BackCopy2"
    | "Back"
    | "Bell"
    | "Binoculars"
    | "Board"
    | "Bold"
    | "Browser"
    | "BrowserTab"
    | "CalendarCopy2"
    | "CalendarTimeCopy2"
    | "CalendarTime"
    | "Calendar"
    | "CameraCopy2"
    | "Camera"
    | "Cancel"
    | "CheckCopy2"
    | "CheckCircle"
    | "Check"
    | "ChevronDown"
    | "ChevronRight"
    | "ChevronDown"
    | "ChevronLeft"
    | "Chrome"
    | "Clipboard"
    | "Close"
    | "CloudUpload"
    | "Code"
    | "CodeBlock"
    | "Comment"
    | "CreateBoard"
    | "Crop"
    | "Cross"
    | "CrossBold"
    | "Cut"
    | "Dashboard"
    | "Delete"
    | "Destruct"
    | "DetachBoard"
    | "Disable"
    | "Documents"
    | "Dots"
    | "Down"
    | "DownloadCopy2"
    | "Download"
    | "DrawCopy2"
    | "Draw"
    | "DropdownDown"
    | "DropdownUp"
    | "Edit"
    | "Elements"
    | "Enable"
    | "EntirePage"
    | "Error"
    | "ExpireTime"
    | "EyeOff"
    | "Eye"
    | "Face"
    | "Facebook"
    | "FileText"
    | "FileZip"
    | "FolderCopy2"
    | "Folder"
    | "FullScreen"
    | "FullDesktop"
    | "Gear"
    | "HeadlineFirst"
    | "HeadlineSecond"
    | "Heart"
    | "Image"
    | "Info"
    | "Italic"
    | "Key"
    | "LayoutGrid"
    | "LayoutList"
    | "Link"
    | "LockOpen"
    | "Lock"
    | "Logout"
    | "Mail"
    | "Money"
    | "More"
    | "Move"
    | "NewWindow"
    | "Nib"
    | "Notes"
    | "NotesBold"
    | "Notification"
    | "OrderArrow"
    | "OrderedList"
    | "Others"
    | "PadlockLock"
    | "PadlockUnlock"
    | "Paragraph"
    | "Pause"
    | "Pen"
    | "Phone"
    | "PhotoCopy2"
    | "Photo"
    | "PhotoCamera"
    | "PlayCopy2"
    | "Play"
    | "PlusToBoard"
    | "Private"
    | "Profile"
    | "Public"
    | "PublicFolder"
    | "QuestionMark"
    | "Quote"
    | "Redo"
    | "Refresh"
    | "RemoveTag"
    | "Resume"
    | "Save"
    | "Search"
    | "SearchBold"
    | "SelectedArea"
    | "Send"
    | "Separator"
    | "ShareCopy2"
    | "Share"
    | "Shared"
    | "Sort"
    | "Star"
    | "Success"
    | "TagFilled"
    | "Tags"
    | "Task"
    | "Team"
    | "TrashBin"
    | "Twitter"
    | "Typography"
    | "Underline"
    | "Undo"
    | "UnorderedList"
    | "Up"
    | "UploadCopy2"
    | "Upload"
    | "UploadFile"
    | "Url"
    | "VerticalDots"
    | "Video"
    | "VideoCam"
    | "VideoCamPlus"
    | "ViewGrid"
    | "ViewList"
    | "Wallet"
    | "Warning"
    | "WatchFolder"
    | "Window"
    | "Zip"
    | "ZoomIn"
    | "ZoomOut"
    | "ZoomReset";
  /**
   * @member {String} [className] Appends classes to the component
   */
  className?: string;
  /**
   * @member {CSSProperties} [style] Appends custom styles
   */
  style?: CSSProperties;
  /**
   * @member {String} [viewBox] SVG ViewBox parameter
   */
  viewBox?: string | undefined;
  /**
   * @member {number} [size] Pixel-size of element, ie. (14x14)
   * @default 14
   */
  size?: number;
  /**
   * @member {number} [stroke] Stroke width of SVG path lines
   * @default 1.5
   */
  stroke?: number;
  /**
   * @member {string} [color] The color of the icon
   */
  color?: string;
}

interface iconMap {
  k: string;
  v: string[];
}
const IconRefs: Array<iconMap> = Object.keys(icons).map((key) => {
  return { k: key, v: icons[key as keyof typeof icons] };
});

const Icon = ({
  name = "Alert",
  stroke = 1.5,
  className = "",
  style = {},
  viewBox = "0 0 24 24",
  color = "gray",
  size = 14,
}: IconProps) => {
  const defaultStyles = { display: "inline-block", verticalAlign: "middle" };
  const styles = { ...defaultStyles, ...style };

  const getPaths = (paths: Array<string>) => {
    return paths.map((data, i) => {
      return (
        <path
          stroke={color}
          d={data}
          key={i}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );
    });
  };
  return (
    <svg
      className={className}
      style={styles}
      viewBox={viewBox}
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
    >
      {getPaths(IconRefs.find((ref: any) => ref.k === name)!.v)}
    </svg>
  );
};

export default Icon;
