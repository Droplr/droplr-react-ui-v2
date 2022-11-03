# droplr-react-ui-v2 <br/> [![npm version](https://badge.fury.io/js/droplr-react-ui-v2.svg)](https://badge.fury.io/js/droplr-react-ui-v2) <br/>![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)


![Logo](/.storybook/logo.png)
<br/>
The up-to-date touchoup to Droplr's react UI Library. 

## Table of contents

- [Button](#button)
    - [ButtonProps](#buttonProps)
    - [Example](#buttonExample)
- [Input](#input)
    - [DropdownProps](#inputProps)
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
- [TextSwitch](#textSwitch)
    - [TextSwitchProps](#textSwitchProps)
    - [TextSwitchItemProps](#textSwitchItemProps)
    - [Example](#textSwitchExample)
- [ThumbnailSwitch](#thumbnailSwitch)
    - [ThumbnailSwitchProps](#thumbnailSwitchProps)
    - [ThumbnailSwitchItemProps](#thumbnailSwitchItemProps)
    - [Example](#thumbnailSwitchExample)

## Functions
<a name="button"></a>
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

<a name="buttonProps"></a>
▸ **ButtonProps**: Interface

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | string <br/> **required** | The label on the button |
| `onClick` | Function <br/> *optional* | The click handler function for the button |
| `className` | string <br/> *optional* | Appends custom class name |
| `variant` | string <br/>*optional* | Style variants of the button, <br/>**Options** <br/>`primary` `secondary` `success` `info`  `warning` `danger` <br/> *Default*: `primary`|
| `size`| string <br/> *optional*  | Size variants of the button <br/> **Options** <br/> `small` `medium` `large`  <br/> *Default*: `medium`|
| `disabled` | boolean <br/> *optional* | Sets the button to the disabled state. <br/> *Default*: `false`|
| `loading` | boolean <br/> *optional* | Renders a spinner over the button <br/> *Default*: `false` |
| `icon` | Icon <br/> *optional* | Renders an icon before the label text |

<a name="buttonExample"></a>
#### Example

```
<Button label='Button' onClick={clickHandler} variant='secondary' size='large'/>
```
___

<a name="input"></a>
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

<a name="inputProps"></a>
▸ **InputProps**: Interface

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | string <br/> *optional* | The default value of the input field |
| `type` | string <br/> *optional* | The input field type, <br/>**Options** <br/>`text` `password` `number` *Default*: `text`|
| `className` | string <br/> *optional* | Appends custom class name |
| `label` | string <br/> *optional* | The label above the input field |
| `sublabel` | string <br/> *optional* | A smaller label under the {label} prop |
| `disabled` | boolean <br/> *optional* | Disables the component |
| `placeholder` | string <br/> *optional* | The placeholder text of the input field |
| `info` | string <br/> *optional* | Small informative text under the input field |
| `error` | string <br/> *optional* | Displays an error message under the input field |
| `autoFocus` | boolean <br/> *optional* | Autofocuses the input field |
| `readOnly` | boolean <br/> *optional* | Makes the component uneditable |
| `passwordVisible` | boolean <br/> *optional* | Shows or hides the password text |
| `useHidePasswordIcon` | boolean <br/> *optional* | Uses the library's hide password icon to toggle visibility |
| `onBlur` | function <br/> *optional* | Event handler for the 'onBlur' event |
| `onFocus` | function <br/> *optional* | Event handler for the 'onFocus' event |
| `onKeyPress` | function <br/> *optional* | Event handler for the 'onKeyPress' event |
| `onChange` | function <br/> *optional* | Event handler for the 'onChange' event |

<a name="inputExample"></a>
#### Example
```
const onChange = (e) => {
    // Gets the text from the input field
    handleInput(e.target.value);
};

<Input value={'My Input Component' } type={'text'} autoFocus info={'Please fill out the form'} />
```
___

<a name="droplrThemeProvider"></a>
### DroplrThemeProvider

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `theme` | string | Switches the theme for the components wrapped in the provider. <br/> **Options:** <br/> `light` `dark` <br/> *Default*: `light` |

<a name="themeExample"></a>
#### Example
```
<DroplrThemeProvider theme={'light'}>
      <App />
</DroplrThemeProvider>
```
___

<a name="icon"></a>
### Icon

![Icons](https://github.com/Droplr/droplr-react-ui-v2/blob/main/src/assets/icons_0-2-7.png)

▸ **Icon**(`props`): Element

#### Parameters

| Name | Type |Description |
| :------ | :------ | :------ |
| `props` | IconProps | The Icon component props, instance of `IconProps` |

#### Returns

Element

<a name="iconProps"></a>
▸ **IconProps**: Interface

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | string <br/> **required** | The name of the icon <br/> **Options** <br/>  `Add` `AddPeople` `AddToBoard` `Alert` `AlignCenter` `AlignLeft` `AlignRight` `AllItems` `Arrow` `Audio` `Back` `Bell` `Binoculars` `Board` `Bold` `Browser` `BrowserTab` `CalendarTime` `Calendar` `Camera` `Cancel` `CheckCircle` `Check` `ChevronDown` `ChevronRight` `ChevronDown` `ChevronLeft` `Chrome` `Clipboard` `Close` `CloudUpload` `Code` `CodeBlock` `Comment` `CreateBoard` `Crop` `Cross` `CrossBold` `Cut` `Dashboard` `Delete` `Destruct` `DetachBoard` `Disable` `Documents` `Dots` `Down` `Download` `Draw` `DropdownDown` `DropdownUp` `Edit` `Elements` `Enable` `EntirePage` `Error` `ExpireTime` `EyeOff` `Eye` `Face` `Facebook` `FileText` `FileZip` `Folder` `FullScreen` `FullDesktop` `Gear` `HeadlineFirst` `HeadlineSecond` `Heart` `Hyperlink` `Image` `Info` `Italic` `Key` `LayoutGrid` `LayoutList` `Link` `LockOpen` `Lock` `Logout` `Mail` `Markdown` `Money` `More` `Move` `NewWindow` `Nib` `Notes` `NotesBold` `Notification` `OrderArrow` `OrderedList` `Others` `PadlockLock` `PadlockUnlock` `Paragraph` `Pause` `Pen` `Phone` `Photo` `PhotoCamera` `Play` `Plugin` `PlusToBoard` `Private` `Profile` `Public` `PublicFolder` `QuestionMark` `Quote` `Redo` `Refresh` `RemoveTag` `Resume` `Save` `Screenrecording` `Search` `SearchBold` `SelectedArea` `Send` `Separator` `Share` `Shared` `Sort` `Star` `Success` `TagFilled` `Tags` `Task` `Team` `Terminal` `TrashBin` `Twitter` `Typography` `Underline` `Undo` `UnorderedList` `Up` `Upload` `UploadFile` `Url` `VerticalDots` `Video` `VideoCam` `VideoCamPlus` `ViewGrid` `ViewList` `Wallet` `Warning` `WatchFolder` `Window` `Zip` `ZoomIn` `ZoomOut` `ZoomReset` |
| `className` | string <br/> *optional* | Appends custom class name |
| `style` | CSSProperties <br/>*optional* | Appends a custom style to the icon component|
| `size`| number <br/> *optional*  | Pixel-size of the icon <br/> *Default*: `14`|
| `stroke` | string <br/> *optional* | Sets the stroke width for the icon <br/> *Default*: `1`|
| `color` | string <br/> *optional* | The color of the icon <br/> *Default*: `gray` |

<a name="iconExample"></a>
#### Example

```
<Icon name={'Add'} size={12} color={'#000'} stroke={0.75}/>
```
___

<a name="textSwitch"></a>
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

<a name="textSwitchProps"></a>
▸ **TextSwitchComponentProps**: Interface

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | Array<TextSwitchComponentProps> <br/> **required** | The list of the switch control items <br/> Instances of `TextSwitchItemProps` |
| `label` | string <br/> **required** | The label of the component |
| `className` | string <br/> *optional* | Appends custom class name |
| `defaultIndex` | number or string <br/>*optional* | Index (or label) of the default selected item in the switch <br/> *Default*: 0|
| `disabled` | boolean <br/> *optional* | Sets the component to the disabled state. <br/> *Default*: `false`|
| `onChange` | Function <br/> *optional* | The function that handles the change of state. Passes the currently active item as arg, `typeof TextSwitchItemProps`|

<a name="textSwitchItemProps"></a>
▸ **TextSwitchItemProps**: Interface

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | number <br/> **required** | The ID of the switch item |
| `label` | string <br/> **required** | The label of the switch item |
| `icon` | Icon <br/> *optional* | Appends an icon in front of the label |

<a name="textSwitchExample"></a>
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

<TextSwitch items={switch_items} label='My Switch' onChange={onChangeHandler} />

```

___

<a name="thumbnailSwitch"></a>
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

<a name="thumbnailSwitchProps"></a>
▸ **ThumbnailSwitchComponentProps**: Interface

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | Array<TextSwitchComponentProps> <br/> **required** | The list of the switch control items <br/> Instances of `TextSwitchItemProps` |
| `label` | string <br/> **required** | The label of the component |
| `className` | string <br/> *optional* | Appends custom class name |
| `defaultIndex` | number or string <br/>*optional* | Index (or label) of the default selected item in the switch <br/> *Default*: 0|
| `disabled` | boolean <br/> *optional* | Sets the component to the disabled state. <br/> *Default*: `false`|
| `onChange` | Function <br/> *optional* | The function that handles the change of state. Passes the currently active item as arg, `typeof ThumbnailSwitchItemProps`|

<a name="thumbnailSwitchItemProps"></a>
▸ **ThumbnailSwitchItemProps**: Interface

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | number <br/> **required** | The ID of the switch item |
| `label` | string <br/> **required** | The label of the switch item |
| `icon` | Icon <br/> *optional* | Adds an icon to the top portion of the switch |

<a name="thumbnailSwitchExample"></a>
```
const switch_items = items: [
    {
        id: 0, 
        label: 'Option One',
        icon: <Icon name={'RemoveTag'} />
    }, {
        id: 1,
        label: 'Option Two',
        icon: <Icon name={'Delete'} />
    }, {
        id: 2,
        label: 'Option Three',
        icon: <Icon name={'Clipboard'} />
    }
];

<ThumbnailSwitch items={switch_items} label='My Switch' onChange={onChangeHandler} />

```

