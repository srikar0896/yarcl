```js static
import { OutlineButton } from 'components/Buttons';
```
```jsx
<div style={{background:'#212121', display:'flex',padding:8, borderRadius:2}}>
    <OutlineButton color={'primary'} icon={'simple-add'}>
      Create Project
    </OutlineButton>
    <OutlineButton color={'secondary'} variant={"contained"} >
      Assign
    </OutlineButton>
    <OutlineButton color={'white'} icon={'add'}>
      Create Project
    </OutlineButton>
    <OutlineButton color={'red'}>
      Delete
    </OutlineButton>
</div>
```

### Large Buttons
```jsx
<div style={{background:'#212121', display:'flex',padding:8, borderRadius:2}}>
    <OutlineButton color={'primary'} icon={'simple-add'} large>
      Create Project
    </OutlineButton>
    <OutlineButton large color={'secondary'} variant={"contained"}>
      Assign
    </OutlineButton>
    <OutlineButton color={'white'} icon={'add'} large>
      Create Project
    </OutlineButton>
    <OutlineButton color={'red'} large>
      Delete
    </OutlineButton>
</div>

```

### Loading Buttons
```jsx
<div style={{background:'#212121', display:'flex',padding:8, borderRadius:2}}>
    <OutlineButton color={'primary'} icon={'simple-add'} loading>
      Create Project
    </OutlineButton>
    <OutlineButton color={'secondary'} variant={"contained"} loading>
      Assign
    </OutlineButton>
    <OutlineButton color={'white'} icon={'add'} loading>
      Create Project
    </OutlineButton>
    <OutlineButton color={'green'} loading>
      Delete
    </OutlineButton>
</div>

```

### Disabled Buttons
```jsx
<div style={{background:'#212121', display:'flex',padding:8, borderRadius:2}}>
    <OutlineButton color={'primary'} icon={'simple-add'} disabled>
      Create Project
    </OutlineButton>
    <OutlineButton color={'secondary'} variant={"contained"} disabled>
      Assign
    </OutlineButton>
    <OutlineButton color={'white'} icon={'add'} disabled>
      Create Project
    </OutlineButton>
    <OutlineButton color={'red'} disabled>
      Delete
    </OutlineButton>
</div>

```