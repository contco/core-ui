<h1 align="center">Avatar</h1>

## Import

```ts
import { Avatar } from '@contco/core-ui'
```

## Props

- `image`: Takes the URL of the image.
- `size`: Size of the Avatar either small, medium or large(sm, md, lg).
- `title`: Title of the avatar
- `name`: Name of the avatar. If there is no image, the avatar would show initials of the name
- `color`: Color of the initials on the avatar
- `active`

## Usage

```tsx
<Avatar
  title='My Avatar'
  size='md'
  name='John Doe'
  color='white'
  image={imageURL}
  active
/>
```
