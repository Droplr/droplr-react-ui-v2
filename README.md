# droplr-react-ui-v2 <br/> [![npm version](https://badge.fury.io/js/droplr-react-ui-v2.svg)](https://badge.fury.io/js/droplr-react-ui-v2) <br/>![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![Logo](/.storybook/logo.png)

<br/>

The up-to-date touch-up to Droplr's react UI Library.

## Table of contents

- [Button](#button)

- [ButtonProps](#buttonProps)

- [Example](#buttonExample)

- [Input](#input)

- [InputProps](#inputProps)

- [Example](#inputExample)

- [Dropdown](#dropdown)

- [DropdownProps](#dropdownProps)

- [DropdownItemProps](#dropdownItemProps)

- [Example](#dropdownExample)

- [DroplrThemeProvider](#droplrThemeProvider)

- [Example](#themeExample)

- [Icon](#icon)

- [IconProps](#iconProps)

- [Example](#iconExample)

- [Switch](#switch)

- [SwitchProps](#switchProps)

- [Example](#switchExample)

- [TextSwitch](#textSwitch)

- [TextSwitchProps](#textSwitchProps)

- [TextSwitchItemProps](#textSwitchItemProps)

- [Example](#textSwitchExample)

- [Tooltip](#tooltip)

- [TooltipProps](#tooltipProps)

- [Example](#tooltipExample)

- [Badge](#badge)

- [BadgeProps](#badgeProps)

- [Example](#badgeProps)

- [Toast](#toast)

- [ToastProps](#toastProps)

- [Example](#toastExample)

- [RadioButton](#radioButton)

- [RadioButtonprops](#radioButtonProps)

- [Example](#radioButtonExample)

- [ThumbnailSwitch](#thumbnailSwitch)

- [ThumbnailSwitchProps](#thumbnailSwitchProps)

- [ThumbnailSwitchItemProps](#thumbnailSwitchItemProps)

- [Example](#thumbnailSwitchExample)

## Components

<a  name="droplrThemeProvider"></a>

### DroplrUIProvider

#### Parameters

| Name | Type | Description |

| :------ | :------ | :------ |

| `theme` | string | Switches the theme for the components wrapped in the provider. <br/> **Options:** <br/> `light` `dark` <br/> _Default_: `light` |

<a  name="themeExample"></a>

#### Example

```

<DroplrUIProvider  theme={'light'}>

<App />

</DroplrUIProvider>

```

---

<a  name="button"></a>

### Button

▸ **Button**(`props`): Element

**`Component`**

**`Desc`**

The button component

#### Parameters

| Name | Type | Description |

| :------ | :------ | :------ |

| `props` | ButtonProps | The component props, instance of `ButtonProps` |

#### Returns

Element

<a  name="buttonProps"></a>

▸ **ButtonProps**: Interface

| Name | Type | Description |

| :------ | :------ | :------ |

| `label` | string <br/> **required** | The label on the button |

| `onClick` | Function <br/> _optional_ | The click handler function for the button |

| `className` | string <br/> _optional_ | Appends custom class name |

| `variant` | string <br/>_optional_ | Style variants of the button, <br/>**Options** <br/>`primary` `secondary` `success` `info` `warning` `alternative` `danger` `transparent` <br/> _Default_: `primary`|

| `size`| string <br/> _optional_ | Size variants of the button <br/> **Options** <br/> `small` `medium` `large` <br/> _Default_: `medium`|

| `disabled` | boolean <br/> _optional_ | Sets the button to the disabled state. <br/> _Default_: `false`|

| `loading` | boolean <br/> _optional_ | Renders a spinner over the button <br/> _Default_: `false` |

| `icon` | Icon <br/> _optional_ | Renders an icon before the label text |

<a  name="buttonExample"></a>

#### Example

```

<Button

label='Button'

onClick={clickHandler}

variant='secondary'

size='large' />

```

---

<a  name="input"></a>

### Input

▸ **Input**(`Component`): Element

**`Desc`**

Input component

#### Parameters

| Name | Type | Description |

| :------ | :------ | :------ |

| `Component` | InputProps | props |

#### Returns

Element

<a  name="inputProps"></a>

▸ **InputProps**: Interface

| Name | Type | Description |

| :------ | :------ | :------ |

| `value` | string <br/> _optional_ | The default value of the input field |

| `type` | string <br/> _optional_ | The input field type, <br/>**Options** <br/>`text` `password` `number` _Default_: `text`|

| `className` | string <br/> _optional_ | Appends custom class name |

| `label` | string <br/> _optional_ | The label above the input field |

| `sublabel` | string <br/> _optional_ | A smaller label under the {label} prop |

| `disabled` | boolean <br/> _optional_ | Disables the component |

| `placeholder` | string <br/> _optional_ | The placeholder text of the input field |

| `info` | string <br/> _optional_ | Small informative text under the input field |

| `error` | string <br/> _optional_ | Displays an error message under the input field |

| `autoFocus` | boolean <br/> _optional_ | Autofocuses the input field |

| `readOnly` | boolean <br/> _optional_ | Makes the component uneditable |

| `passwordVisible` | boolean <br/> _optional_ | Initial visibility state for password fields. When type is "password", shows a toggle icon that switches between showing and hiding the password text |

| `icon` | <Icon /> <br/> _optional_ | An optional icon shown on the right-hand side |

| `onBlur` | function <br/> _optional_ | Event handler for the 'onBlur' event |

| `onFocus` | function <br/> _optional_ | Event handler for the 'onFocus' event |

| `onKeyPress` | function <br/> _optional_ | Event handler for the 'onKeyPress' event |

| `onChange` | function <br/> _optional_ | Event handler for the 'onChange' event |

<a  name="inputExample"></a>

#### Example

```

const onChange = (e) => {

// Gets the text from the input field

handleInput(e.target.value);

};



// Basic text input

<Input

value={'My  Input  Component'}

type={'text'}

autoFocus

info={'Please  fill  out  the  form'}

onChange={onChange}/>



// Password input with visibility toggle

<Input

type={'password'}

value={'mySecretPassword'}

label={'Password'}

passwordVisible={false}  //  Initially  hidden

onChange={onChange}/>

```

---

<a  name="dropdown"></a>

### Dropdown

▸ **Dropdown**(`Component`): Element

**`Desc`**

Dropdown component

#### Parameters

| Name | Type | Description |

| :------ | :------ | :------ |

| `Component` | DropdownProps | props |

#### Returns

Element

<a  name="dropdownProps"></a>

▸ **DropdownProps**: Interface

| Name | Type | Description |

| :------ | :------ | :------ |

| `items` | Array<DropdownItem> <br/> **required** | The list of the dropdown items <br/> Instances of `DropdownItemProps` |

| `selectedOption` | DropdownItem <br/> **required** | The selected item from the provided `items` array |

| `label` | string <br/> **required** | The label of the dropdown |

| `parentElement` | Element <br/> _optional_ | Replaces the default input field with the provided element and attaches the dropdown onto it |

| `className` | string <br/> _optional_ | Appends custom class name |

| `disabled` | boolean <br/> _optional_ | Sets the dropdown input field to the disabled state. No effect if the `parentElement is provided` <br/> _Default_: `false`|

| `loading` | boolean <br/> _optional_ | Renders a loading spinner over the dropdown input field. No effect if the `parentElement is provided`|

| `align` | `left` `right` <br/> _optional_ | Aligns the item to the left or right side of the parent trigger |

| `minWidth`| pixel-format string, ie. `12px` <br/> _optional_ | Sets the minimum width for the input field <br/> _Default_: auto|

| `inputWidth`| pixel-format string, ie. `12px` <br/> _optional_ | Sets the width for the input field <br/> _Default_: auto|

| `maxWidth`| pixel-format string, ie. `12px` <br/> _optional_ | Sets the maximum width for the dropdown list <br/> _Default_: auto|

| `maxHeight`| pixel-format string, ie. `12px` <br/> _optional_ | Sets the maximum height for the dropdown list <br/> _Default_: 300px|

| `matchListWidthToInput`| boolean <br/> _optional_ | Matches the dropdown list width to the width of the input field|

| `textAlign`| `start` `center` `end` <br/> _optional_ | Positions the title text of the dropdown list items|

| `offsetPosition`| number <br/> _optional_ | Offsets the vertical alignment of the dropdown list <br/> _Default_: 0|
| `offsetAlign`| number <br/> _optional_ | Offsets the horizontal alignment of the dropdown list <br/> _Default_: 0|

| `closeOnMouseOut`| boolean <br/> _optional_ | Closes the dropdown when the mouse leaves the list <br/> _Default_: true|

| `closeOnClickOutside`| boolean <br/> _optional_ | Closes the dropdown when the mouse clicks outside of list <br/> _Default_: true|

| `showItemStatus` | boolean <br/> _optional_ | Shows a checkmark icon next to selected items<br/> _Default_: `false` |

| `showItemStatus` | boolean <br/> _optional_ | Shows a checkmark icon next to selected items<br/> _Default_: `false` |

| `showItemStatus` | boolean <br/> _optional_ | Shows a checkmark icon next to selected items<br/> _Default_: `false` |

| `withInput` | boolean <br/> _optional_ | Toggles the input field <br/> _Default_: `false` |

| `inputLoading` | boolean <br/> _optional_ | Shows the input field loader (requires `withInput`) <br/> _Default_: `false` |

| `onInputChanged` | Function <br/> _optional_ | Callback for input changed events (requires `withInput`) |

<a  name="dropdownItemProps"></a>

▸ **DropdownItemProps**: Interface

| Name | Type | Description |

| :------ | :------ | :------ |

| `id` | any <br/> _optional_ | An optional identifier for an item |

| `title` | string <br/> **required** | The title of the list item |

| `type` | `ITEM` `HEADER` `SPLITTER` <br/> _optional_ | The type of the list item. Splitters are a simple border break and a header displays its `title` prop |

| `description` | string <br/> _optional_ | The description of the list item |

| `disabled` | boolean <br/> _optional_ | Sets the list item to the disabled state. <br/> _Default_: `false`|

| `className` | string <br/> _optional_ | Appends custom class name |

| `color` | string <br/> _optional_ | Colors the `title` prop of the item |

| `icon` | Icon <br/> _optional_ | Renders an icon before the title text of the list item |

| `onClick` | Function <br/> **required** | The click handler function for the list item. <br/> Provides the currently selected item as the argument (`typeof DropdownItemProps`) |

<a  name="dropdownExample"></a>

#### Example

```

const dropdown_items: Array<DropdownItemProps> = [{

title: 'My list item - one',

icon: <Icon  name='Calendar'  size={12} />,

onClick: itemClickHandler(),

disabled: false,

},{

title: 'A new section',

type: 'HEADER',

},{

title: 'My list item - two',

description: 'My item's description',

icon: <Icon  name='List'  size={12} />,

onClick: itemClickHandler(),

disabled: true,

}];

<Dropdown  items={dropdown_items}  selectedOption={dropdownSelectedOption}  label='My Dropdown'  closeOnMouseOut={false}  onClick={(item)  => {setSelectedOption(item)}} />

```

#### Defined in

[components/Dropdown/Dropdown.tsx:173](https://github.com/Droplr/droplr-react-ui-v2/blob/f340b40/src/components/Dropdown/Dropdown.tsx#L173)

---

<a  name="icon"></a>

### Icon

![Icons](https://github.com/Droplr/droplr-react-ui-v2/blob/main/src/assets/icons_0-2-7.png)

▸ **Icon**(`props`): Element

#### Parameters

| Name | Type |Description |

| :------ | :------ | :------ |

| `props` | IconProps | The Icon component props, instance of `IconProps` |

#### Returns

Element

<a  name="iconProps"></a>

▸ **IconProps**: Interface

| Name | Type | Description |

| :------ | :------ | :------ |

| `name` | string <br/> **required** | The name of the icon <br/> **Options** <br/> `Add` `AddPeople` `AddToBoard` `Alert` `AlignCenter` `AlignLeft` `AlignRight` `AllItems` `Arrow` `Audio` `Back` `Bell` `Binoculars` `Board` `Bold` `Browser` `BrowserTab` `CalendarTime` `Calendar` `Camera` `Cancel` `CheckCircle` `Check` `ChevronDown` `ChevronRight` `ChevronDown` `ChevronLeft` `Chrome` `Clipboard` `Close` `CloudUpload` `Code` `CodeBlock` `Comment` `CreateBoard` `Crop` `Cross` `CrossBold` `Cut` `Dashboard` `Delete` `Destruct` `DetachBoard` `Disable` `Documents` `Dots` `Down` `Download` `Draw` `DropdownDown` `DropdownUp` `Edit` `Elements` `Enable` `EntirePage` `Error` `ExpireTime` `EyeOff` `Eye` `Face` `Facebook` `FileText` `FileZip` `Folder` `FullScreen` `FullDesktop` `Gear` `HeadlineFirst` `HeadlineSecond` `Heart` `Hyperlink` `Image` `Info` `Italic` `Key` `LayoutGrid` `LayoutList` `Link` `LockOpen` `Lock` `Logout` `Mail` `Markdown` `Money` `More` `Move` `NewWindow` `Nib` `Notes` `NotesBold` `Notification` `OrderArrow` `OrderedList` `Others` `PadlockLock` `PadlockUnlock` `Paragraph` `Pause` `Pen` `Phone` `Photo` `PhotoCamera` `Play` `Plugin` `PlusToBoard` `Private` `Profile` `Public` `PublicFolder` `QuestionMark` `Quote` `Redo` `Refresh` `RemoveTag` `Resume` `Save` `Screenrecording` `Search` `SearchBold` `SelectedArea` `Send` `Separator` `Share` `Shared` `Sort` `Star` `Success` `TagFilled` `Tags` `Task` `Team` `Terminal` `TrashBin` `Twitter` `Typography` `Underline` `Undo` `UnorderedList` `Up` `Upload` `UploadFile` `Url` `VerticalDots` `Video` `VideoCam` `VideoCamPlus` `ViewGrid` `ViewList` `Wallet` `Warning` `WatchFolder` `Window` `Zip` `ZoomIn` `ZoomOut` `ZoomReset` |

| `className` | string <br/> _optional_ | Appends custom class name |

| `style` | CSSProperties <br/>_optional_ | Appends a custom style to the icon component|

| `size`| number <br/> _optional_ | Pixel-size of the icon <br/> _Default_: `14`|

| `stroke` | string <br/> _optional_ | Sets the stroke width for the icon <br/> _Default_: `1`|

| `color` | string <br/> _optional_ | The color of the icon <br/> _Default_: `gray` |

<a  name="iconExample"></a>

#### Example

```

<Icon

name={'Add'}

size={12}

color={'#000'}

stroke={0.75} />

```

---

<a  name="switch"></a>

### Switch

▸ **Switch**(`props`): Element

**`Desc`**

Switch component

#### Parameters

| Name | Type |

| :------ | :------ |

| `props` | SwitchProps |

#### Returns

Element

<a  name="switchProps"></a>

▸ **SwitchProps**: Interface

| Name | Type | Description |

| :------ | :------ | :------ |

| `label` | string <br/> _optional_ | The label of the component |

| `labelPosition` | string <br/> _optional_ | The position of the label <br>**Options** <br/> `top` `bottom` `left` `right`|

| `className` | string <br/> _optional_ | Appends custom class name |

| `checked` | boolean <br/>**required** | The state of the switch component |

| `disabled` | boolean <br/> _optional_ | Sets the component to the disabled state. <br/> _Default_: `false`|

| `onChange` | Function <br/> _optional_ | The function that handles the change of state. Passes the current state as arg, `typeof boolean`|

<a  name="switchExample"></a>

#### Example

```



<Switch

checked={true}

label='My Switch'

onChange={onChangeHandler} />



```

---

<a  name="textSwitch"></a>

### TextSwitch

▸ **TextSwitch**(`props`): Element

**`Desc`**

TextSwitch component

#### Parameters

| Name | Type |

| :------ | :------ |

| `props` | TextSwitchProps |

#### Returns

Element

<a  name="textSwitchProps"></a>

▸ **TextSwitchComponentProps**: Interface

| Name | Type | Description |

| :------ | :------ | :------ |

| `items` | Array<TextSwitchComponentProps> <br/> **required** | The list of the switch control items <br/> Instances of `TextSwitchItemProps` |

| `label` | string <br/> **required** | The label of the component |

| `className` | string <br/> _optional_ | Appends custom class name |

| `defaultIndex` | number or string <br/>_optional_ | Index (or label) of the default selected item in the switch <br/> _Default_: 0|

| `disabled` | boolean <br/> _optional_ | Sets the component to the disabled state. <br/> _Default_: `false`|

| `onChange` | Function <br/> _optional_ | The function that handles the change of state. Passes the currently active item as arg, `typeof TextSwitchItemProps`|

<a  name="textSwitchItemProps"></a>

▸ **TextSwitchItemProps**: Interface

| Name | Type | Description |

| :------ | :------ | :------ |

| `id` | number <br/> **required** | The ID of the switch item |

| `label` | string <br/> **required** | The label of the switch item |

| `icon` | Icon <br/> _optional_ | Appends an icon in front of the label |

<a  name="textSwitchExample"></a>

#### Example

```

const switch_items = items: [

{

id: 0,

label: 'Option One'

}, {

id: 1,

label: 'Option Two'

}, {

id: 2,

label: 'Option Three'

icon: <Icon name={'Clipboard'} />

}

];



<TextSwitch

items={switch_items}

label='My Switch'

onChange={onChangeHandler} />



```

---

<a  name="tooltip"></a>

### Tooltip

▸ **Tooltip**(`props`): Element

**`Desc`**

The Tooltip component

#### Parameters

| Name | Type |

| :------ | :------ |

| `props` | TooltipProps |

#### Returns

Element

<a  name="tooltipProps"></a>

▸ **TooltipProps**: Interface

| Name | Type | Description |

| :------ | :------ | :------ |

| `content` | any **required** | The content of the tooltip, ideally text |

| `onTooltipShow` | Function <br/> _optional_ | The callback for when the tooltip is shown |

| `onTooltipHide` | Function <br/> _optional_ | The callback for when the tooltip is hidden |

| `position` | `top`, `bottom` <br/> _optional_ | The placement of the tooltip with regards to the element it is wrapping<br/> _Default_: `top`|

| `align` | `left`, `right` <br/> _optional_ | The alignment of the tooltip relative to the children|

| `hideDelay` | number <br/> _optional_ | The delay (in ms) before hiding the tooltip <br/> _Default_: `250`|

| `fontSize` | string <br/> _optional_ | Font size of the tooltip's content|

| `customStyle` | Object <br/> _optional_ | Custom styles forwarded to the tooltip component|

| `animated` | boolean <br/> _optional_ | Animates the tooltip's entry and exit|

| `offsetPosition` | number <br/> _optional_ | Vertical offset|

| `offsetAlign` | number <br/> _optional_ | Horizontal offset|

| `closeOnClick` | boolean <br/> _optional_ | Enables closing the tooltip on click, defaults to `false`|

<a  name="tooltipExample"></a>

#### Example

```

// A simple tooltip

<Tooltip content={"Hooray!"}>

Hover over me!

</Tooltip>



// A tooltip with a few custom properties

<Tooltip

title={"Hey!"}

content={"I'm down here!}

position="bottom"

hideDelay={500}

onTooltipHide={() => console.log("Bye!")}

>

Hover over me!

</Tooltip>



```

---

<a  name="badge"></a>

### Badge

▸ **Badge**(`props`): Element

**`Desc`**

The Badge component

#### Parameters

| Name | Type |

| :------ | :------ |

| `props` | BadgeProps |

#### Returns

Element

<a  name="badgeProps"></a>

▸ **BadgeProps**: Interface

| Name | Type | Description |

| :------ | :------ | :------ |

| `variant` | `primary` `secondary` `success` `info` `warning` `alternative` `danger` <br/> _Default_: `primary` **required** | The variant of the badge component |

| `label` | string <br/> **required** | The text within the badge |

<a  name="badgeExample"></a>

#### Example

```

<Badge variant="info" label="My Badge" />



```

---

<a  name="toast"></a>

### Toast

▸ **Toast**(`props`): Element

**`Desc`**

The Toast component and its wrapper

#### Parameters

| Name | Type |

| :------ | :------ |

| `props` | ToastProps |

#### Returns

Element

<a  name="toastProps"></a>

▸ **NewToastProps**: Interface

| Name | Type | Description |

| :------ | :------ | :------ |

| `message` | string **required** | The content of the toast message |

| `title` | string | The title of the toast message |

| `variant` | `success`, `error`, `warning` , `info` | The color variant of the toast message |

| `icon` | Icon | The icon to be shown on the left side of the toast |

| `duration` | number | The duration (in ms) of the Toast element <br/> _Default_: `5000` |

| `withProgressBar` | boolean | Shows a progress bar at the bottom of the toast |

| `clickToDismiss` | boolean | Enables dismissing the toast by clicking on it |

| `onClick` | Function | Triggers this callback if the Toast notification is clicked |

<a  name="toastExample"></a>

#### Example

```

// The wrapper around the app's root

<WithToast>

<App />

</WithToast>



// You can add a top-side offset to the provider on a global level, ie. to avoid headers

<WithToast offsetTop={128}>

<App />

</WithToast>



// Spawn the toast message

InfoToast({

message: "This is a toast message.",

title: "A test toast title. Have fun!",

duration: 7500,

clickToDismiss: true,

onClick: () => console.log("I've been clicked away!");

});



```

---

<a  name="radioButton"></a>

### RadioButton

▸ **RadioButton**(`props`): Element

**`Desc`**

The RadioButton component

#### Parameters

| Name | Type |

| :------ | :------ |

| `props` | RadioButtonprops |

#### Returns

Element

<a  name="radioButtonProps"></a>

▸ **RadioButtonProps**: Interface

| Name | Type | Description |

| :------ | :------ | :------ |

| `className` | string | Appends additional class names to the component |

| `checked` | boolean | The checked state of the component |

| `variant` | `success`, `danger`, `warning` , `secondary` | The color variant of the component |

| `disabled` | boolean | Disables the component, becomes uninteractive |

| `onClick` | Function | The click handler for the component |

<a  name="radioButtonExample"></a>

#### Example

```

<RadioButton

checked={isChecked}

onClick={() => {setIsChecked(!isChecked)}}

variant="primary"

/>



```

---

<a  name="thumbnailSwitch"></a>

### ThumbnailSwitch

▸ **ThumbnailSwitch**(`props`): Element

**`Desc`**

ThumnailSwitch component

#### Parameters

| Name | Type |

| :------ | :------ |

| `props` | ThumbnailSwitchProps |

#### Returns

Element

<a  name="thumbnailSwitchProps"></a>

▸ **ThumbnailSwitchComponentProps**: Interface

| Name | Type | Description |

| :------ | :------ | :------ |

| `items` | Array<TextSwitchComponentProps> <br/> **required** | The list of the switch control items <br/> Instances of `TextSwitchItemProps` |

| `label` | string <br/> **required** | The label of the component |

| `className` | string <br/> _optional_ | Appends custom class name |

| `defaultIndex` | number or string <br/>_optional_ | Index (or label) of the default selected item in the switch <br/> _Default_: 0|

| `disabled` | boolean <br/> _optional_ | Sets the component to the disabled state. <br/> _Default_: `false`|

| `onChange` | Function <br/> _optional_ | The function that handles the change of state. Passes the currently active item as arg, `typeof ThumbnailSwitchItemProps`|

<a  name="thumbnailSwitchItemProps"></a>

▸ **ThumbnailSwitchItemProps**: Interface

| Name | Type | Description |

| :------ | :------ | :------ |

| `id` | number <br/> **required** | The ID of the switch item |

| `label` | string <br/> **required** | The label of the switch item |

| `icon` | Icon <br/> _optional_ | Adds an icon to the top portion of the switch |

<a  name="thumbnailSwitchExample"></a>

```

const switch_items = items: [

{

id: 0,

label: 'Option One',

icon: <Icon  name={'RemoveTag'} />

}, {

id: 1,

label: 'Option Two',

icon: <Icon  name={'Delete'} />

}, {

id: 2,

label: 'Option Three',

icon: <Icon  name={'Clipboard'} />

}

];



<ThumbnailSwitch

items={switch_items}

label='My Switch'

onChange={onChangeHandler} />



```
