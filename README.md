# droplr-react-ui-v2 <br/> [![npm version](https://badge.fury.io/js/droplr-react-ui-v2.svg)](https://badge.fury.io/js/droplr-react-ui-v2) <br/>![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)


![Logo](/.storybook/logo.png)
<br/>
The up-to-date touchoup to Droplr's react UI Library. 

## Table of contents

- [Button](#button)
    - [ButtonProps](#buttonProps)
    - [Example](#buttonExample)
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


#### Defined in

[components/Button/Button.tsx:76](https://github.com/Droplr/droplr-react-ui-v2/blob/f340b40/src/components/Button/Button.tsx#L76)

___

<a name="dropdown"></a>
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

<a name="dropdownProps"></a>
▸ **DropdownProps**: Interface

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | Array<DropdownItem> <br/> **required** | The list of the dropdown items <br/> Instances of `DropdownItemProps` |
| `label` | string <br/> **required** | The label of the dropdown |
| `className` | string <br/> *optional* | Appends custom class name |
| `defaultIndex` | number <br/>*optional* | Index of the default selected item in the items array. <br/> *Default*: 0|
| `disabled` | boolean <br/> *optional* | Sets the dropdown input field to the disabled state. <br/> *Default*: `false`|
| `fullWidth`| boolean <br/> *optional*  | Has the dropdown input field occupy the full width of its parent <br/> *Default*: false |
| `minWidth`| pixel-format string, ie. `12px` <br/> *optional*  | Sets the minimum width for the input field <br/> *Default*: 0px|
| `closeOnMouseOut`| boolean <br/> *optional*  | Closes the dropdown when the mouse leaves the list <br/> *Default*: true|
| `closeOnItemClick`| boolean <br/> *optional*  | Closes the dropdown when an option in selected <br/> *Default*: true|
| `showItemStatus` | boolean <br/> *optional* | Shows a checkmark icon next to selected items<br/> *Default*: `false` |
| `onMouseLeave` | Function <br/> *optional* | Handler function for when the mouse leaves the dropdown |

<a name="dropdownItemProps"></a>
▸ **DropdownItemProps**: Interface

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | string <br/> **required** | The title of the list item |
| `onClick` | Function <br/> **required** | The click handler function for the list item. <br/> Provides the currently selected item as the argument (`typeof DropdownItemProps`) |
| `description` | string <br/> *optional* | The description of the list item |
| `disabled` | boolean <br/> *optional* | Sets the list item to the disabled state. <br/> *Default*: `false`|
| `className` | string <br/> *optional* | Appends custom class name |
| `icon` | Icon <br/> *optional* | Renders an icon before the title text of the list item |
| `href` | string <br/> *optional* | The `href` attribute target for the item click |
| `target` | string <br/> *optional* | The `target` attribute target for the item click |
| `showItemStatus` | boolean <br/> *optional* | Shows a checkmark icon next to selected item<br/> *Default*: `false` |
| `active` | boolean <br/> *optional* | Sets the item to active state by default <br/> *Default*: false|

<a name="dropdownExample"></a>
#### Example
```
const dropdown_items: Array<DropdownItemProps> = [{
    title: 'My list item - one',
    icon: <Icon name='Calendar' size={12} />,
    onClick: itemClickHandler(),
    disabled: false,
    },{
    title: 'My list item - two',
    description: 'My item's description',
    icon: <Icon name='List' size={12} />,
    onClick: itemClickHandler(),
    disabled: true,
}];

<Dropdown items={dropdown_items} label='My Dropdown' closeOnMouseOut={false} />
```

#### Defined in

[components/Dropdown/Dropdown.tsx:173](https://github.com/Droplr/droplr-react-ui-v2/blob/f340b40/src/components/Dropdown/Dropdown.tsx#L173)

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

#### Defined in

[themes/provider.tsx:5](https://github.com/Droplr/droplr-react-ui-v2/blob/f340b40/src/themes/provider.tsx#L5)

___

<a name="icon"></a>
### Icon

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
#### Defined in

[components/Icons/Icons.tsx:212](https://github.com/Droplr/droplr-react-ui-v2/blob/f340b40/src/components/Icons/Icons.tsx#L212)

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
| `defaultIndex` | number|string <br/>*optional* | Index (or label) of the default selected item in the switch <br/> *Default*: 0|
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

#### Defined in

[components/TextSwitch/TextSwitch.tsx:81](https://github.com/Droplr/droplr-react-ui-v2/blob/f340b40/src/components/TextSwitch/TextSwitch.tsx#L81)

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
| `defaultIndex` | number|string <br/>*optional* | Index (or label) of the default selected item in the switch <br/> *Default*: 0|
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

#### Defined in

[components/ThumbnailSwitch/ThumbnailSwitch.tsx:89](https://github.com/Droplr/droplr-react-ui-v2/blob/f340b40/src/components/ThumbnailSwitch/ThumbnailSwitch.tsx#L89)
