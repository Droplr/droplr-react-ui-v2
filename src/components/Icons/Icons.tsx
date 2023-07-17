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
    | "ClipboardVariant"
    | "Emoji"
    | "LineArrow"
    | "LineStroke"
    | "NewWindowVariant"
    | "Screen"
    | "Add"
    | "AddPeople"
    | "AddToBoard"
    | "Alert"
    | "AlignCenter"
    | "AlignLeft"
    | "AlignRight"
    | "AllItems"
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
    | "Copy"
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
    | "WebcamScreenAlt"
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
  stroke = 0.1,
  className = "",
  style = {},
  /*
   * Some SVG paths require larger viewboxes
   */
  viewBox = name === "Screen" || name === "Webcam" || name === "WebcamScreen"
    ? "0 0 46 46"
    : name === "NewWindowVariant" || name === "ClipboardVariant"
    ? "0 0 30 30"
    : name === "WebcamScreenAlt"
    ? "0 0 32 32"
    : name === "Copy"
    ? "0 0 36 36"
    : name === "LineArrow"
    ? "0 0 14 14"
    : name === "Emoji"
    ? "0 0 20 20"
    : "0 0 24 24",
  color = "gray",
  size = 14,
  onClick = (arg) => {},
}: IconProps) => {
  const defaultStyles = { display: "inline-block", verticalAlign: "middle" };
  const styles = { ...defaultStyles, ...style };

  const getPaths = (paths: Array<string>) => {
    /**
     * The tags like SLCF, SLJF, HF, SF, etc. are created by the generation script and
     * are used to apply per-image rules and parsing
     */
    return paths.map((data, i) => {
      let attributes = {
        cx: "",
        cy: "",
        r: "",
        fill: "none",
        stroke: "0",
        strokeLinejoin: "",
        strokeLinecap: "",
        strokeWidth: 0,
        path: "",
      };
      let attrSplit = data.split("|");
      if (attrSplit.length > 1 && attrSplit[1].length > 1) {
        let parts = attrSplit[1].split("+");
        attributes.path = attrSplit[0];
        // Line Paths
        parts.forEach((part) => {
          if (part.includes("SLCF"))
            attributes.strokeLinecap = part.split("-")[1];
          else if (part.includes("SLJF"))
            attributes.strokeLinejoin = part.split("-")[1];
          else if (part.includes("HF")) attributes.fill = color;
          else if (part.includes("SF")) attributes.stroke = color;
          else if (part.includes("SWF"))
            attributes.strokeWidth = parseFloat(part.split("-")[1]);
        });
      } else if (attrSplit.length == 1 || attrSplit[1].length < 2) {
        attributes.path = attrSplit[0];
      }
      // Circles
      if (attributes.path.includes("C+")) {
        let parts = attributes.path.split("+");
        parts.forEach((part) => {
          if (part.includes("CX")) {
            attributes.cx = part.split("-")[1];
          } else if (part.includes("CY")) {
            attributes.cy = part.split("-")[1];
          } else if (part.includes("R")) {
            attributes.r = part.split("-")[1];
          }
        });
      }
      if (data.includes("C+")) {
        /*
         * Circle
         */
        return (
          <circle
            cx={attributes.cx}
            cy={attributes.cy}
            r={attributes.r}
            key={i}
            stroke={color}
            strokeWidth={
              stroke != 0.1
                ? stroke
                : attributes.fill != "none"
                ? attributes.strokeWidth
                : "none"
            }
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            fill={attributes.fill}
          />
        );
      } else {
        /*
         * Line Path
         */
        return (
          <path
            d={attributes.path}
            key={i}
            stroke={color}
            strokeWidth={
              stroke != 0.1
                ? stroke
                : attributes.fill != "none"
                ? attributes.strokeWidth
                : "none"
            }
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            fill={attributes.fill}
          />
        );
      }
    });
  };
  return (
    <svg
      className={["drui-icon", className ? ` ${className}` : ""].join("")}
      style={{
        ...styles,
        transform:
          name === "Screen" || name === "Webcam" || name === "WebcamScreen"
            ? "scale(1.5)"
            : "none",
      }}
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
