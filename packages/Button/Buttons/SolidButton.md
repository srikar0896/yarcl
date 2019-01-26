```js static
import Button from 'components/Buttons';
```
```jsx
<div style={{background:'#212121', display:'flex',padding:8, borderRadius:2}}>
    <SolidButton color={'secondary'} variant={"contained"} >
      Assign
    </SolidButton>
    <SolidButton color={'primary'} icon={'simple-add'}>
      Create Project
    </SolidButton>
    <SolidButton color={'white'} icon={'add'}>
      Create Project
    </SolidButton>
    <SolidButton color={'green'}>
      Done
    </SolidButton>
</div>
```

### Large Buttons
```jsx
<div style={{background:'#212121', display:'flex',padding:8, borderRadius:2}}>
    <SolidButton large color={'secondary'} variant={"contained"}>
      Assign
    </SolidButton>
    <SolidButton color={'primary'} icon={'simple-add'} large>
      Create Project
    </SolidButton>
    <SolidButton color={'white'} icon={'add'} large>
      Create Project
    </SolidButton>
    <SolidButton color={'green'} large>
      Done
    </SolidButton>
</div>

```

### Loading Buttons
```jsx
<div style={{background:'#212121', display:'flex',padding:8, borderRadius:2}}>
    <SolidButton color={'secondary'} variant={"contained"} loading>
      Assign
    </SolidButton>
    <SolidButton color={'primary'} icon={'simple-add'} loading>
      Create Project
    </SolidButton>
    <SolidButton color={'white'} icon={'add'} loading>
      Create Project
    </SolidButton>
    <SolidButton color={'green'} loading>
      Done
    </SolidButton>
</div>

```

### Disabled Buttons
```jsx
<div style={{background:'#212121', display:'flex',padding:8, borderRadius:2}}>
    <SolidButton color={'secondary'} variant={"contained"} disabled>
      Assign
    </SolidButton>
    <SolidButton color={'primary'} icon={'simple-add'} disabled>
      Create Project
    </SolidButton>
    <SolidButton color={'white'} icon={'add'} disabled>
      Create Project
    </SolidButton>
    <SolidButton color={'green'} disabled>
      Done
    </SolidButton>
</div>

```