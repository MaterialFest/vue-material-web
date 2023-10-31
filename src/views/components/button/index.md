<script setup>
import Preview from '@/components/Preview.vue';
import ButtonType from './demo/ButtonType.vue';
import ButtonIcon from './demo/ButtonIcon.vue';
import ButtonElevatedTheme from './demo/ButtonElevatedTheme.vue';
import ButtonFilledTheme from './demo/ButtonFilledTheme.vue';
import ButtonFilledToanlTheme from './demo/ButtonFilledTonalTheme.vue';
import ButtonOutlinedTheme from './demo/ButtonOutlinedTheme.vue';
import ButtonTextTheme from './demo/ButtonTextTheme.vue';
</script>

## Buttons 按钮

Buttons help people initiate actions, from sending an email, to sharing a document, to liking a post.

There are five types of common buttons: elevated, filled, filled tonal, outlined, and text.

### Types

#### button 按钮的基本使用

1. Elevated button
2. Filled button
3. Filled tonal button
4. Outlined button
5. Text button

<Preview :comp="ButtonType" comp-path="button/demo/ButtonType" />

### Icon

<Preview :comp="ButtonIcon" comp-path="button/demo/ButtonIcon" />

### Elevated 自定义样式

<figure>
  <Preview :comp="ButtonElevatedTheme" comp-path="button/demo/ButtonElevatedTheme" />
</figure>

## Elevated button tokens

| Token                                   | Default value                         |
| --------------------------------------- | ------------------------------------- |
| `--md-elevated-button-container-color`  | `--md-sys-color-surface`              |
| `--md-elevated-button-container-shape`  | `9999px`                              |
| `--md-elevated-button-label-text-color` | `--md-sys-color-on-surface`           |
| `--md-elevated-button-label-text-font`  | `--md-sys-typescale-label-large-font` |

### Filled 自定义样式

<figure>
  <Preview :comp="ButtonFilledTheme" comp-path="button/demo/ButtonFilledTheme" />
</figure>

### Filled button tokens

| Token                                 | Default value                         |
| ------------------------------------- | ------------------------------------- |
| `--md-filled-button-container-color`  | `--md-sys-color-primary`              |
| `--md-filled-button-container-shape`  | `9999px`                              |
| `--md-filled-button-label-text-color` | `--md-sys-color-on-primary`           |
| `--md-filled-button-label-text-font`  | `--md-sys-typescale-label-large-font` |

### Filled tonal 自定义样式

<figure>
  <Preview :comp="ButtonFilledToanlTheme" comp-path="button/demo/ButtonFilledToanlTheme" />
</figure>

### Filled tonal button tokens

| Token                                       | Default value                           |
| ------------------------------------------- | --------------------------------------- |
| `--md-filled-tonal-button-container-color`  | `--md-sys-color-secondary-container`    |
| `--md-filled-tonal-button-container-shape`  | `9999px`                                |
| `--md-filled-tonal-button-label-text-color` | `--md-sys-color-on-secondary-container` |
| `--md-filled-tonal-button-label-text-font`  | `--md-sys-typescale-label-large-font`   |

### Outlined 自定义样式

<figure>
  <Preview :comp="ButtonOutlinedTheme" comp-path="button/demo/ButtonOutlinedTheme" />
</figure>

### Outlined button tokens

| Token                                   | Default value                         |
| --------------------------------------- | ------------------------------------- |
| `--md-outlined-button-outline-color`    | `--md-sys-color-outline`              |
| `--md-outlined-button-container-shape`  | `9999px`                              |
| `--md-outlined-button-label-text-color` | `--md-sys-color-primary`              |
| `--md-outlined-button-label-text-font`  | `--md-sys-typescale-label-large-font` |

### Text 自定义样式

<figure>
  <Preview :comp="ButtonTextTheme" comp-path="button/demo/ButtonTextTheme" />
</figure>

### Outlined button tokens

| Token                               | Default value                         |
| ----------------------------------- | ------------------------------------- |
| `--md-text-button-label-text-color` | `--md-sys-color-primary`              |
| `--md-text-button-label-text-font`  | `--md-sys-typescale-label-large-font` |

## API

### MdElevatedButton `<md-elevated-button>`
### MdFilledButton `<md-filled-button>`
### MdFilledTonalButton `<md-filled-tonal-button>`
### MdOutlinedButton `<md-outlined-button>`
### MdTextButton `<md-text-button>`

| Property       | Attribute       | Type              | Default     | Description                                                                                                                               |
| -------------- | --------------- | ----------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled`     | `disabled`      | `boolean`         | `false`     | Whether or not the button is disabled.                                                                                                    |
| `href`         | `href`          | `string`          | `''`        | The URL that the link button points to.                                                                                                   |
| `target`       | `target`        | `string`          | `''`        | Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab.                           |
| `trailingIcon` | `trailing-icon` | `boolean`         | `false`     | Whether to render the icon at the inline end of the label rather than the inline start.<br>Note: Link buttons cannot have trailing icons. |
| `hasIcon`      | `has-icon`      | `boolean`         | `false`     | Whether to display the icon or not.                                                                                                       |
| `type`         | `type`          | `string`          | `'submit'`  |                                                                                                                                           |
| `value`        | `value`         | `string`          | `''`        |                                                                                                                                           |
| `name`         |                 | `string`          | `undefined` |                                                                                                                                           |
| `form`         |                 | `HTMLFormElement` | `undefined` |