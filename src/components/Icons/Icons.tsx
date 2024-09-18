import React from "react";
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
    | "Blur"
    | "Brush"
    | "Checkmark"
    | "BlurDrop"
    | "CursorSelect"
    | "BlurSelect"
    | "ClipboardVariant"
    | "DragHand"
    | "Drag"
    | "Edit2"
    | "Embed"
    | "Emoji"
    | "FolderSearch"
    | "FolderMove"
    | "Folders"
    | "FullScreenTab"
    | "FullDesktopScreen"
    | "Group"
    | "Info"
    | "LineArrow"
    | "LineStroke"
    | "Merge"
    | "NewWindowTabExternal"
    | "NewWindowVariant"
    | "Notes"
    | "Pause"
    | "PhotoCopyClipboard"
    | "RateStarFull"
    | "RateStar"
    | "RemoveMulti"
    | "Remove"
    | "Screen"
    | "Search"
    | "SelfDestructTimer2"
    | "SelfDestructTimer"
    | "SendShare"
    | "Settings"
    | "ShareMemberAdd"
    | "StackLayers"
    | "TagOff"
    | "Tag"
    | "Tags"
    | "TextEditor"
    | "User"
    | "UsersShared"
    | "Users"
    | "WholePage"
    | "Window"
    | "Add"
    | "AddOn"
    | "AddPeople"
    | "AddToBoard"
    | "AdjustModify"
    | "Alert"
    | "AlignCenter"
    | "AlignLeft"
    | "AlignRight"
    | "AllItems"
    | "ArrowBold"
    | "ArrowLeftNarrow"
    | "ArrowRightNarrow"
    | "Audio"
    | "Back"
    | "Bell"
    | "Billing"
    | "BillingInvoice"
    | "Binoculars"
    | "Board"
    | "BoardShared"
    | "BoardSingle"
    | "Bold"
    | "Browser"
    | "BrowserTab"
    | "CalendarTime"
    | "Calendar"
    | "CamOnly"
    | "CamOnlyOff"
    | "Camera"
    | "Cancel"
    | "ChartAnalytics"
    | "Check"
    | "CheckCircle"
    | "CheckSimple"
    | "CheckboxOff"
    | "CheckboxOn"
    | "CheckboxOnFilled"
    | "ChevronDown"
    | "ChevronLeft"
    | "ChevronRight"
    | "Chrome"
    | "Clipboard"
    | "Close"
    | "CloudDownload"
    | "CloudUpload"
    | "CloudUploadOld"
    | "Code"
    | "CodeBlock"
    | "CollapseSidebar"
    | "Comment"
    | "Copy"
    | "CopyDuplicate"
    | "CopyDuplicateAdd"
    | "CopyDuplicateMulti"
    | "CopyDuplicateVariant"
    | "CreateBoard"
    | "CreditCard"
    | "Crop"
    | "Cross"
    | "CrossBold"
    | "CursorSelect"
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
    | "DropdownLeft"
    | "DropdownRight"
    | "DropdownUp"
    | "Edit"
    | "Elements"
    | "Enable"
    | "EntirePage"
    | "Eraser"
    | "Error"
    | "ExpandSidebar"
    | "ExpireTime"
    | "Export"
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
    | "Gif"
    | "HdVideo"
    | "HeadlineFirst"
    | "HeadlineSecond"
    | "Heart"
    | "Highlighter"
    | "Hyperlink"
    | "Image"
    | "Italic"
    | "Key"
    | "KeyboardShortcuts"
    | "LayoutGrid"
    | "LayoutList"
    | "Leave"
    | "Link"
    | "LockOpenUnlock"
    | "LockOpen"
    | "Lock"
    | "Logout"
    | "Mail"
    | "Markdown"
    | "MicrophoneOff"
    | "Microphone"
    | "Money"
    | "MoreHorizontal"
    | "MoreVertical"
    | "More"
    | "Move"
    | "NewWindow"
    | "Nib"
    | "NotesBold"
    | "Notification"
    | "OrderArrow"
    | "OrderedList"
    | "Others"
    | "PadlockLock"
    | "PadlockUnlock"
    | "Paragraph"
    | "Pen"
    | "Phone"
    | "Photo"
    | "PhotoCamera"
    | "PlayFiiled"
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
    | "RemoveSimple"
    | "RemoveTag"
    | "Restore"
    | "Resume"
    | "Save"
    | "ScreenOnly"
    | "Screenrecording"
    | "SearchBold"
    | "SelectedArea"
    | "Send"
    | "Separator"
    | "Share"
    | "Shared"
    | "SortAsc"
    | "SortBy"
    | "SortDesc"
    | "Sort"
    | "Star"
    | "Step"
    | "Success"
    | "TagFilled"
    | "Task"
    | "Team"
    | "Terminal"
    | "TimerCountdown"
    | "ToolCustomize"
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
    | "XClear"
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
  style?: any;
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
   * @member {boolean} [filled] Fill the icon with color
   * @defaultValue false
   */
  filled?: boolean;
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

const FilledIcons = [
  "CheckboxOnFilled",
  "Browser",
  "Checkmark",
  "Drag",
  "Pause",
  "RateStarFull",
  "SendShare",
  "AlignCenter",
  "AlignLeft",
  "AlignRight",
  "AllItems",
  "Bell",
  "Binoculars",
  "BrowserTab",
  "Cancel",
  "ChevronLeft",
  "Chrome",
  "Code",
  "CodeBlock",
  "Comment",
  "Cross",
  "CrossBold",
  "Dashboard",
  "Destruct",
  "DetachBoard",
  "Disable",
  "Dots",
  "Down",
  "DropdownDown",
  "DropdownLeft",
  "DropdownRight",
  "DropdownUp",
  "Elements",
  "Enable",
  "EntirePage",
  "Error",
  "ExpireTime",
  "Face",
  "Facebook",
  "FullDesktop",
  "Gear",
  "HeadlineFirst",
  "HeadlineSecond",
  "Heart",
  "Image",
  "Italic",
  "LayoutGrid",
  "LayoutList",
  "Logout",
  "Mail",
  "Money",
  "MoreHorizontal",
  "MoreVertical",
  "Move",
  "More",
  "Nib",
  "NotesBold",
  "CreateBoard",
  "NewWindow",
  "Notification",
  "OrderArrow",
  "OrderedList",
  "Others",
  "PadlockLock",
  "PadlockUnlock",
  "Paragraph",
  "Pen",
  "PhotoCamera",
  "PlayFilled",
  "Plugin",
  "PlusToBoard",
  "Private",
  "Profile",
  "Public",
  "QuestionMark",
  "Quote",
  "RemoveTag",
  "Resume",
  "SearchBold",
  "SelectedArea",
  "Send",
  "Separator",
  "Shared",
  "Sort",
  "Success",
  "TagFilled",
  "Task",
  "Team",
  "ToolCustomize",
  "TrashBin",
  "Twitter",
  "Underline",
  "UnorderedList",
  "Up",
  "UploadFile",
  "Url",
  "VerticalDots",
  "VideoCamPlus",
  "Wallet",
  "Warning",
  "WatchFolder",
  "XClear",
  "ZoomIn",
  "ZoomOut",
  "ZoomReset",
  "AddToBoard",
  "AddPeople",
  "Documents",
];
const Icon = ({
  name = "Alert",
  stroke = FilledIcons.includes(name) ? 0 : 1.5,
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
    ? "0 0 24 24"
    : name === "Step"
    ? "0 0 27 27"
    : name === "CheckSimple"
    ? "0 0 14 10"
    : name === "RemoveSimple"
    ? "0 0 12 4"
    : "0 0 24 24",
  color = "gray",
  filled = FilledIcons.includes(name) ? true : false,
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
            strokeWidth={stroke}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            fill={filled ? color : "none"}
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
            strokeWidth={stroke}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            fill={filled ? color : "none"}
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
