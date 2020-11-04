# Components

## Import

```ts
import { Avatar, Button, Heading, Modal } from '@contco/core-ui'
```

## 1. Avatar

### Props

- `image`: Takes the URL of the image.
- `size`: Size of the Avatar either small, medium or large (sm, md, lg).
- `title`: Title of the avatar
- `name`: Name of the avatar. If there is no image, the avatar would show initials of the name
- `color`: Color of the initials on the avatar
- `active`
- `IconWidth`:Custom Icon Width you want to give in numbers instead of particular size, like (IconWidth={40}).
- `IconHeight`:Custom Icon Height you want to give in numbers instead of particular size, like (Iconheight={40}).
### Usage

```tsx
<Avatar
  title='My Avatar'
  size='md'
  name='John Doe'
  color='white'
  image={imageURL}
  active
  IconWidth={40}
  IconHeight={40}
/>


```

## 2. Button

### Usage

```tsx
<Button color='white' p={2} m={5} bg="black">
```

## 3. Heading

### Usage

```tsx
<Heading mb={4} fontSize='36px' textAlign='justify' color='blue'>
  THIS IS A HEADING
</Heading>
```

## 4. Icon

### Props

- `svg`: The svg file of any icon
- `color`: Color of the icon if svg is not present.

### Usage

```tsx
<Icon svg={SunIcon} />
```

## 5. Input

### Usage

```tsx
<Input placeholder='username' p={3} mb={3} />
```

## 6. Box

### Usage

```tsx
<Box mb={3} p={2} bg='yellow'>
  <Input placeholder='Username' />
</Box>
```

## 7. Flex

### Usage

```tsx
<Flex mb={3} p={2} bg='yellow'>
  <Input placeholder='Username' />
</Flex>
```

## 8. Modal

### Props

- `isOpen`: Boolean value for showing the modal on the screen.
- `onClose`: Evokes a function when the modal is closed.

### Usage

```tsx
<Modal isOpen={isClosed} onClose={setIsClosed}>
  <>
    <Text fontSize={30} fontWeight='bold' textAlign='center'>
      Modal Text
    </Text>
  </>
</Modal>
```

## 9. Text

### Usage

```tsx
<Text fontSize={25} fontWeight='bold' textAlign='center'>
  This is a text
</Text>
```
