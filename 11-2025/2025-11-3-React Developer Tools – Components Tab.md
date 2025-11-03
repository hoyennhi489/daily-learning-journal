**React Developer Tools – Components Tab**

### 1. What is React Developer Tools?

React Developer Tools is an extension available for Chrome and Firefox. It helps you:

• Explore the entire component tree of a React application.  
• Inspect the props, state, hooks, and context of each component.  
• Check rendering performance and detect unnecessary re-renders.  

If the **DOM tab** helps you understand the HTML structure, then the **Components Tab** helps you understand the *logical structure* of your React app.

**How to install**

1. Go to **React Developer Tools - Chrome Web Store**.  
2. Install the extension.  
3. Open DevTools (F12 or Ctrl + Shift + I).  
4. You will see two new tabs appear:  
   o ⚛️ **Components** (to view the component structure)  
   o ⚛️ **Profiler** (to measure rendering performance)  

→ If you don’t see these tabs, reload the page or restart the browser.

### 2. Components Tab – The “Heart” of DevTools

The **Components Tab** is the control center of React Developer Tools.  
It lets you “see inside” your React app like a doctor using an X-ray — viewing each vein (component), heartbeat (state), and cell (props).

**Main Features**

• Displays the **Component Tree**  
• Lets you select components and inspect props/state/hooks in detail  
• Highlights a component on the UI when you hover over it  
• Allows direct editing of props or state  
• Tracks context and links to source code  

### 3. Getting Familiar with the Components Tab Interface

When you open the **Components** tab, you’ll see:

| Area | Function |
|------|-----------|
| **Left column** | Displays the entire component tree of your app |
| **Right column** | Shows detailed information about the selected component |

**Example:**

```jsx
function Counter({ step }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + step)}>+</button>
    </div>
  );
}
```

When you select `<Counter>` in the Components Tab, you’ll see:  
• Props: `{ step: 1 }`  
• State: `{ count: 0 }`  
• Hooks: `useState`  
• When you click the + button, state changes → DevTools updates to show `{ count: 1 }`.

### 4. Understanding the Component Tree

The component tree shows the hierarchical structure of your app:

```
<App>
 ├─ <Header>
 ├─ <Counter>
 │   └─ <Button>
 └─ <Footer>
```

When you click `<Button>`, the right column displays details for that component.  
When you hover over a component in the tree, the corresponding element on the UI is highlighted — making it easier to connect logic with the actual interface.

**Tip:** Hold **Ctrl + Click** on a component → it automatically highlights that element in the **DOM tab**.

### 5. Viewing Props, State, and Hooks in Detail

**Props**  
Props are data passed from parent to child.  

Example:
```jsx
<App>
  <Counter step={5} />
</App>
```
In `<Counter>`, Props will show:
```json
{
  "step": 5
}
```

**State**  
State is the internal data of a component.  

Example: when you click the “+” button:

```json
State
{
  "count": 1
}
```

→ DevTools updates automatically without reloading the page.

**Hooks**  
If a component uses multiple hooks, you’ll see them clearly listed:

```
Hooks
▼ useState
   count: 1
▼ useEffect
   cleanup: false
```

This is super useful when debugging hooks that are called in the wrong order or have unexpected values.

### 6. Viewing Context and Source Code

If your app uses the **Context API**, React DevTools will display a separate Context section — showing all the data being shared through Context.

At the bottom of the details tab, there’s a **“View Source”** link.  
Clicking it opens the corresponding file in Chrome DevTools → **Sources tab**.

### 7. Settings & Customizing the Components Tab

**Highlight Updates**

• Open “⚙️ Settings” in DevTools → Components.  
• Enable **“Highlight updates when components render”**.  
• When a component re-renders, the corresponding UI area flashes purple.  

This is *extremely helpful* for checking rendering performance!

**Quick Component Search**

Press **Ctrl + F** → type the component name (e.g., “Counter”).  
→ DevTools automatically focuses that component in the tree.

**Switching Between Multiple Root Apps**

If you’re running multiple React apps (e.g., microfrontends), DevTools shows a list of “roots” in the top corner.  
You can select which root you want to analyze.

### 8. Key Takeaways

• **Components Tab** = The map of your entire React app.  
• **Left column:** Component structure.  
• **Right column:** Props/state/hooks/context data.  
• **Highlight updates** help detect unnecessary renders.  
• You can clearly see *who passes what to whom* in React.  