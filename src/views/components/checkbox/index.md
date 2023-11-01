<script setup>
import Preview from '@/components/Preview.vue';
import CheckboxBasic from './demo/CheckboxBasic.vue';
import CheckboxLabel from './demo/CheckboxLabel.vue';
import CheckboxTheme from './demo/CheckboxTheme.vue';
</script>

## checkbox

### Usage

#### checkbox 多选框的基本使用

<Preview :comp="CheckboxBasic" comp-path="checkbox/demo/CheckboxBasic" />

### Label

<Preview :comp="CheckboxLabel" comp-path="checkbox/demo/CheckboxLabel" />

### Theming

#### Example
<Preview :comp="CheckboxTheme" comp-path="checkbox/demo/CheckboxTheme" />

#### Tokens

| Token                                    | Default value                       |
| ---------------------------------------- | ----------------------------------- |
| `--md-checkbox-outline-color`            | `--md-sys-color-on-surface-variant` |
| `--md-checkbox-selected-container-color` | `--md-sys-color-primary`            |
| `--md-checkbox-selected-icon-color`      | `--md-sys-color-on-primary`         |
| `--md-checkbox-container-shape`          | `2px`                               |

### API

#### Properties

| Property            | Attribute       | Type              | Default     | Description                                                                                                                                                                    |
| ------------------- | --------------- | ----------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `checked`           | `checked`       | `boolean`         | `false`     | Whether or not the checkbox is selected.                                                                                                                                       |
| `disabled`          | `disabled`      | `boolean`         | `false`     | Whether or not the checkbox is disabled.                                                                                                                                       |
| `indeterminate`     | `indeterminate` | `boolean`         | `false`     | Whether or not the checkbox is indeterminate.<br />https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes                     |
| `required`          | `required`      | `boolean`         | `false`     | When true, require the checkbox to be selected when participating in form submission.<br />https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation |
| `value`             | `value`         | `string`          | `'on'`      | The value of the checkbox that is submitted with a form when selected.<br />https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value                     |
| `name`              |                 | `string`          | `undefined` |                                                                                                                                                                                |
| `form`              |                 | `HTMLFormElement` | `undefined` |                                                                                                                                                                                |
| `labels`            |                 | `NodeList`        | `undefined` |                                                                                                                                                                                |
| `validity`          |                 | `ValidityState`   | `undefined` |                                                                                                                                                                                |
| `validationMessage` |                 | `string`          | `undefined` |                                                                                                                                                                                |
| `willValidate`      |                 | `boolean`         | `undefined` |                                                                                                                                                                                |

#### Methods

| Method              | Parameters | Returns   | Description                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------- | ---------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checkValidity`     | None       | `boolean` | Checks the checkbox's native validation and returns whether or not the element is valid.<br />If invalid, this method will dispatch the `invalid` event.<br />https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity                                                                                                                                       |
| `reportValidity`    | None       | `boolean` | Checks the checkbox's native validation and returns whether or not the element is valid.<br />If invalid, this method will dispatch the `invalid` event.<br />The `validationMessage` is reported to the user by the browser. Use `setCustomValidity()` to customize the `validationMessage`.<br />https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/reportValidity |
| `setCustomValidity` | `error`    | `void`    | Sets the checkbox's native validation error message. This is used to customize `validationMessage`.<br />When the error is not an empty string, the checkbox is considered invalid and `validity.customError` will be true.<br />https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity                                                                |