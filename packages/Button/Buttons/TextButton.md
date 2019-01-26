```js static
import { TextButton } from 'components/Buttons';
```
```jsx
<div style={{background:'#212121', display:'flex',padding:8, borderRadius:2}}>
    <TextButton color={'secondary'} variant={"contained"} >
      Assign
    </TextButton>
    <TextButton color={'primary'} icon={'simple-add'}>
      Create Project
    </TextButton>
    <TextButton color={'white'} icon={'add'}>
      Create Project
    </TextButton>
    <TextButton color={'green'}>
      Done
    </TextButton>
</div>
```

### Large Buttons
```jsx
<div style={{background:'#212121', display:'flex',padding:8, borderRadius:2}}>
    <TextButton large color={'secondary'} variant={"contained"}>
      Assign
    </TextButton>
    <TextButton color={'primary'} icon={'simple-add'} large>
      Create Project
    </TextButton>
    <TextButton color={'white'} icon={'add'} large>
      Create Project
    </TextButton>
    <TextButton color={'green'} large>
      Done
    </TextButton>
</div>

```

### Loading Buttons
```jsx
<div style={{background:'#212121', display:'flex',padding:8, borderRadius:2}}>
    <TextButton color={'secondary'} variant={"contained"} loading>
      Assign
    </TextButton>
    <TextButton color={'primary'} icon={'simple-add'} loading>
      Create Project
    </TextButton>
    <TextButton color={'white'} icon={'add'} loading>
      Create Project
    </TextButton>
    <TextButton color={'green'} loading>
      Done
    </TextButton>
</div>

```

### Disabled Buttons
```jsx
<div style={{background:'#212121', display:'flex',padding:8, borderRadius:2}}>
    <TextButton color={'secondary'} variant={"contained"} disabled>
      Assign
    </TextButton>
    <TextButton color={'primary'} icon={'simple-add'} disabled>
      Create Project
    </TextButton>
    <TextButton color={'white'} icon={'add'} disabled>
      Create Project
    </TextButton>
    <TextButton color={'green'} disabled>
      Done
    </TextButton>
</div>

```