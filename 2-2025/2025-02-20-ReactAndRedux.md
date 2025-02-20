# React and Redux  

## 1. Getting Started with React Redux  

### React:  
- React is a library used to build user interfaces (UI).  
- You provide data to React, and it efficiently and predictably renders the UI.  

### Redux:  
- Redux is a state management framework.  
- It simplifies the management of application state.  

### How does React Redux work?  
- In a React Redux application, there is typically a single Redux store that manages the entire application state.  
- React components subscribe only to the necessary parts of the store's data.  
- When data needs to be changed, components dispatch actions to update the store.  

### 1.1. When Should You Use Redux?  
- React can manage local state using `useState` or `useReducer`.  
- However, if the application is complex and multiple components need to share data, Redux should be used to centralize state management.  
- Some components can still maintain local state if it only concerns themselves.  
- Redux cannot be used directly with React. We need the `react-redux` library to connect the Redux store to React components.  

### 1.2. Learning Roadmap in This Lesson  
- **Create a basic React component**  
  - This component allows users to enter a new message.  
  - The messages will be stored in an array and displayed in the UI.  
  - This serves as a React knowledge review.  
- **Create a Redux Store and Actions**  
  - Manage the state of the messages array in the Redux store.  
- **Connect Redux with React using react-redux**  
  - Move component local state to the Redux store.  
  - Use `react-redux` to retrieve data from the store in components.  

### 1.3. Getting Started with the DisplayMessages Component  
- Create a `DisplayMessages` component.  
- Add a constructor and initialize state with two properties:  
  - `input`: An empty string (`""`) – stores the entered message.  
  - `messages`: An empty array (`[]`) – stores the list of messages.  

#### Summary  
- React is used for UI rendering.  
- Redux helps centralize state management.  
- Use `react-redux` to connect Redux with React.  
- Start with a component for input and displaying messages.  

### 1.4. Exercise  

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: []
    };
  }

  render() {
    return <div />;
  }
}
```

- `input`: An empty string (`""`) – stores the entered value.  
- `messages`: An empty array (`[]`) – stores the list of messages. 

## 2. Managing Local State First  

### 2.1. Requirements for the DisplayMessages Component  
- In the `render()` method, the component must contain:  
  - An input field for users to enter messages.  
  - A button to submit messages.  
  - A `<ul>` element to display the list of messages.  
- When the input content changes, it must call the `handleChange()` method.  
- The input value must be linked to `state.input`.  
- When the button is clicked, the `submitMessage()` method will be called.  

### 2.2. Writing Event Handler Methods  

1. `handleChange()`  
   - Updates `state.input` based on the user input.  

2. `submitMessage()`  
   - Adds the input content to the `messages` array in state.  
   - Clears the input field after submitting the message.  

### 2.3. Displaying the List of Messages  
- Use a `<ul>` to display messages from `state.messages`.  
- Iterate through the `messages` array using `map()` and display each message as a `<li>` element.  

#### Summary  
- Add an input, button, and `<ul>` in the `render()` method.  
- Write the `handleChange()` method to update the input content.  
- Write the `submitMessage()` method to add messages to `state.messages`.  
- Iterate over `messages` to display the list of messages.  

### 2.4. Exercise  

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state with input as an empty string and messages as an empty array
    this.state = {
      input: '',
      messages: []
    };
    // Bind methods to ensure 'this' refers to the component
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  // This method is called when the user types in the input field
  handleChange(event) {
    this.setState({ input: event.target.value }); // Update state.input based on user input
  }

  // This method is called when the "Add message" button is clicked
  submitMessage() {
    if (this.state.input.trim() !== '') { // Check if input is not empty
      this.setState((state) => ({
        messages: [...state.messages, state.input], // Add the new message to the messages array
        input: '' // Clear the input field after submitting
      }));
    }
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        
        {/* Input field, value displayed from state.input */}
        <input 
          type="text" 
          value={this.state.input} 
          onChange={this.handleChange} // Call handleChange on input change
        />
        
        {/* Button to submit message, calls submitMessage when clicked */}
        <button onClick={this.submitMessage}>Add message</button>
        
        {/* List displaying the submitted messages */}
        <ul>
          {this.state.messages.map((msg, index) => (
            <li key={index}>{msg}</li> // Iterate through messages and display each message
          ))}
        </ul>
      </div>
    );
  }
}
```

## 3. Moving State Management Logic to Redux  

### 3.1. Define Action Type and Action Creator  
- **Action Type**  
  - Define a constant `ADD` to avoid errors when using string literals directly.  

- **Action Creator**  
  - Create a function `addMessage(message)` that returns an action containing the action type (`type: ADD`) and message content (`message`).  

### 3.2. Create a Reducer to Handle State  
- Create a reducer called `messageReducer()`.  
- The initial state is an empty array (`[]`).  
- When receiving an action with `type: ADD`, the reducer adds the new message to the `messages` array.  
- If the action does not match, the reducer returns the current state.  

### 3.3. Create the Redux Store  
- Use `createStore()` from Redux to create the store.  
- Pass `messageReducer` into `createStore()` so Redux can manage state based on this reducer.  

#### Summary  
- Define the action type `ADD`.  
- Write the action creator `addMessage(message)`.  
- Create the reducer `messageReducer()` to manage the message list.  
- Create the Redux store and link it to the reducer.  

### 3.4. Exercise  

```jsx
// Define ADD, addMessage(), messageReducer(), and store here:

// 1. Define the action type
const ADD = "ADD";

// 2. Create the action creator
const addMessage = (message) => {
  return {
    type: ADD,
    message,
  };
};

// 3. Create the reducer to manage the messages state
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message]; // Add the new message to the array
    default:
      return state; // Keep the current state if the action does not match
  }
};

// 4. Create the Redux store
const store = Redux.createStore(messageReducer);
```

### 4. Using Provider to Connect Redux with React  
#### 4.1. React Redux and Provider  
- **Provider** is a wrapper component that provides the Redux store to the entire React application.  
- It allows all child components to access the Redux store without manually passing props at each level.  
- **Provider** takes two important props:  
  - `store`: The created Redux store.  
  - `children`: The child components within the application.  

Example usage:  
```jsx
<Provider store={store}>
  <App />
</Provider>
```  
Here, `App` and all its child components will be able to access the Redux store.  

#### 4.2. Implementation in the `AppWrapper` Component  
- The `AppWrapper` component will wrap the entire application with the `Provider`.  
- Pass the Redux store into the `Provider` through the `store` prop.  
- Render the `DisplayMessages` component inside the `Provider`.  

#### 4.3. Summary of Steps  
- Use `Provider` from `react-redux` to wrap the application.  
- Pass the Redux store into `Provider`.  
- Render `DisplayMessages` inside the `Provider`.  

#### 4.4. Exercise  
##### Redux:  
```jsx
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);
```  

##### React:  
```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}
        /><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map((message, idx) => {
            return (
               <li key={idx}>{message}</li>
            )
          })}
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <DisplayMessages />
      </Provider>
    );
  }
};
```

### 5. Connecting Redux State to a React Component with `mapStateToProps`  
#### 5.1. What is `mapStateToProps()`?  
- This function helps pass data from the Redux store into the component’s props.  
- It takes `state` from the Redux store and returns an object containing props.  
- These props will be used within the React component.  

#### 5.2. Implementing `mapStateToProps()`  
```jsx
const mapStateToProps = (state) => {
  return {
    messages: state
  };
};
```

#### Explanation  
- `state` refers to the current Redux state.  
- The function returns an object with a `messages` property that pulls data from the `state`.  
- Since the entire Redux state consists of an array of messages, we can directly pass `state` into `messages`.  

#### 5.3. Summary  
- `mapStateToProps()` helps pass Redux state into component props.  
- Next step: Connecting Redux with the component using `connect()`.  

#### 5.4. Exercise  
```jsx
const state = [];

// Change code below this line
const mapStateToProps = (state) => {
  return {
    messages: state
  };
};
```

### 6. Connecting Redux Actions to a React Component with `mapDispatchToProps`  
#### 6.1. What is `mapDispatchToProps()`?  
- This function provides action creators as props to the component.  
- It takes `dispatch` as an argument and returns an object containing dispatch functions.  
- Each function calls `dispatch()` with a specific action.  

#### 6.2. Implementing `mapDispatchToProps()`  
```jsx
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => dispatch(addMessage(message))
  };
};
```

#### Explanation  
- `dispatch`: A function that sends actions to the Redux store.  
- `submitNewMessage`:  
  - Takes a message as input.  
  - Calls `dispatch(addMessage(message))` to dispatch the `ADD` action.  

#### 6.3. Summary  
- `mapDispatchToProps()` helps pass action creators into the component as props.  
- The component can use `this.props.submitNewMessage(message)` to send a new message to the Redux store.  

#### 6.4. Exercise  
```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => dispatch(addMessage(message))
  };
};
```

### 7. Connecting Redux with React Components using connect()
#### 7.1. What is connect()?
- `connect()` helps link a React component with the Redux store.
- It takes two parameters:
  - `mapStateToProps()` (passes state into the component’s props).
  - `mapDispatchToProps()` (passes actions into props so the component can dispatch them).
- Afterward, `connect()` returns a new component that has access to the Redux store.

#### 7.2. How to Use connect()
Formula:
```js
connect(mapStateToProps, mapDispatchToProps)(MyComponent);
```
Example with a Presentational component:
```js
const ConnectedComponent = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Presentational);
```

#### 7.3. Explanation
- `ReactRedux.connect()`: This is a function from the `react-redux` library.
- `mapStateToProps`: Helps the component receive data from the Redux store.
- `mapDispatchToProps`: Helps the component send actions to the Redux store.
- `Presentational`: The component that needs to be connected to Redux.
- `ConnectedComponent`: This is the new version of `Presentational`, connected to Redux.

#### 7.4. What If You Want to Skip a Parameter?
- If you only need to access state but don’t need to dispatch actions:
  ```js
  ReactRedux.connect(mapStateToProps, null)(Presentational);
  ```
- If you only need to access dispatch actions but don’t need state:
  ```js
  ReactRedux.connect(null, mapDispatchToProps)(Presentational);
  ```

#### 7.5. Summary
- `connect()` links a React component with the Redux store.
- Pass `mapStateToProps` and `mapDispatchToProps` into `connect()`.
- The connected component can access state and dispatch actions.

#### 7.6. Exercise
```js
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;

// Change code below this line
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational);
```

### 8. Connecting Redux with a Messages Application
#### 8.1. Difference Between Presentational and Container Components
- **Presentational Component**
  - Only displays UI, does not connect directly with Redux.
  - Receives data from props.
- **Container Component**
  - Connects with Redux and manages data logic.
  - Passes state and actions down to the Presentational Component via props.

#### 8.2. Creating a Container Component Connected to Redux
```js
const Container = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Presentational);
```
**Explanation**
- `connect(mapStateToProps, mapDispatchToProps)(Presentational)`
  - Connects the `Presentational` component with Redux.
  - Passes state from the Redux store into `props.messages`.
  - Passes the `submitNewMessage` action into props.
- `Container` is the connected version of `Presentational`.

#### 8.3. Adding Provider to AppWrapper
```js
const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
};
```
**Explanation**
- Wraps the entire app inside `Provider` to enable Redux.
- Passes `store={store}` so all child components can access the Redux store.
- Displays `Container`, which is connected to Redux.

#### 8.4. Summary
- Create a **Container** using `connect()` to link Redux with `Presentational`.
- Use `Provider` to supply the Redux store to the entire application.
- Display `Container` instead of `Presentational`.

#### 8.5. Exercise
```js
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map((message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Define the Container component here:
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
};
```

### 9. Extracting Local State Management to Redux

#### 9.1. Steps to Implement
🔹 **Remove local state `messages` from `Presentational`**  
- Redux will manage the list of messages, so storing `messages` in local state is no longer necessary.  

🔹 **Modify `submitMessage()` to dispatch an action instead of updating local state**  
- Instead of adding messages to `this.state.messages`, we will send an action to Redux.  

🔹 **Update `render()` to retrieve messages from `props` instead of `state`**  
- Previously, messages were taken from `this.state.messages`.  
- Now, they will come from `this.props.messages` (data fetched from the Redux store).  

#### 9.2. Updating the Presentational Component
```js
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  submitMessage() {
    this.props.submitNewMessage(this.state.input); // Dispatch action to Redux
    this.setState({ input: '' }); // Clear input after submitting
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map((message, idx) => (
            <li key={idx}>{message}</li>
          ))}
        </ul>
      </div>
    );
  }
}
```

#### 9.3. Explanation of Updates
- **Removed `messages` from `this.state`**  
- **Modified `submitMessage()`**  
  - Calls `this.props.submitNewMessage()`, which dispatches an action instead of updating local state.  
- **Updated `render()`**  
  - Uses `this.props.messages` to display the message list from Redux.  

#### 9.4. Summary
- Redux now fully manages `messages`, so local state no longer stores them.  
- The React component only keeps `input` in local state (since it's component-specific data).  
- Messages are displayed using `props.messages`, which is managed by Redux.  

#### 9.5. Exercise
```js
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  };
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  submitMessage() {
    this.props.submitNewMessage(this.state.input); // Dispatch action instead of updating local state
    this.setState({ input: '' }); // Clear input after submitting
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} /><br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map((message, idx) => (
            <li key={idx}>{message}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// Map Redux state to component props
const mapStateToProps = (state) => ({ messages: state });

// Map Redux actions (dispatch) to component props
const mapDispatchToProps = (dispatch) => ({
  submitNewMessage: (message) => dispatch(addMessage(message))
});

// Connect React component to Redux store
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}
```
