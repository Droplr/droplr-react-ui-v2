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
    | "Screen"
    | "Add"
    | "AddPeople"
    | "AddToBoard"
    | "Alert"
    | "AlignCenter"
    | "AlignLeft"
    | "AlignRight"
    | "AllItems"
    | "Arrow"
    | "Audio"
    | "Back"
    | "Bell"
    | "Binoculars"
    | "Board"
    | "Bold"
    | "Browser"
    | "BrowserTab"
    | "CalendarTime"
    | "Calendar"
    | "Camera"
    | "Cancel"
    | "CheckCircle"
    | "Check"
    | "ChevronDown"
    | "ChevronRight"
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
    | "Download"
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
    | "Folder"
    | "FullScreen"
    | "FullDesktop"
    | "Gear"
    | "HeadlineFirst"
    | "HeadlineSecond"
    | "Heart"
    | "Hyperlink"
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
    | "Markdown"
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
    | "Photo"
    | "PhotoCamera"
    | "Play"
    | "Plugin"
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
    | "Screenrecording"
    | "Search"
    | "SearchBold"
    | "SelectedArea"
    | "Send"
    | "Separator"
    | "Share"
    | "Shared"
    | "Sort"
    | "Star"
    | "Success"
    | "TagFilled"
    | "Tags"
    | "Task"
    | "Team"
    | "Terminal"
    | "TrashBin"
    | "Twitter"
    | "Typography"
    | "Underline"
    | "Undo"
    | "UnorderedList"
    | "Up"
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
    | "WebcamScreen"
    | "Webcam"
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
   * @defaultValue 14
   */
  size?: number;
  /**
   * @member {number} [stroke] Stroke width of SVG path lines
   * @defaultValue 1.5
   */
  stroke?: number;
  /**
   * @member {string} [color] The color of the icon
   */
  color?: string;
  /**
   * @member {function} [onClick] onClick function handler
   */
  onClick?: (arg: string) => void;
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
  stroke = 1,
  className = "",
  style = {},
  viewBox = (name === "Screen" || name === "Webcam" || name === "WebcamScreen") ? "0 0 46 46" : "0 0 24 24",
  color = "gray",
  size = 14,
  onClick = (arg) => {},
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
      className={[
        'drui-icon',
        className ? ` ${className}` : ''
      ].join('')}
      style={{...styles, transform: (name === "Screen" || name === "Webcam" || name === "WebcamScreen") ? 'scale(1.5)' : 'none'}}
      viewBox={viewBox}
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      onClick={() => onClick(name)}
    >
      {getPaths(IconRefs.find((ref: any) => ref.k === name)!.v)}
    </svg>
  );
};

export default Icon;
