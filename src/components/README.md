# Components

## Import

```ts
import { Avatar, Button, Heading, Modal } from '@contco/core-ui'
```

1. ### Avatar

### Props

- `image`: Takes the URL of the image.
- `size`: Size of the Avatar either small, medium or large (sm, md, lg).
- `title`: Title of the avatar
- `name`: Name of the avatar. If there is no image, the avatar would show initials of the name
- `color`: Color of the initials on the avatar
- `active`

### Usage

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

2. ## Button

### Usage

```tsx
  <Button color='white' p={2} m={5} bg="black">
```

## Heading

### Usage

```tsx
<Heading mb={4} fontSize='36px' textAlign='justify' color='blue'>
  THIS IS A HEADING
</Heading>
```

3. ## Icon

### Props

- `svg`: The svg file of any icon
- `color`: Color of the icon if svg is not present.

### Usage

```tsx
<Icon svg={SunIcon} />
```

4. ## Input

### Usage

```tsx
<Icon svg={SunIcon} />
```

5. ## Box

6. ## Flex

7. ## Image

8. ## Modal

9. ## Text
