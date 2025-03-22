**Git Flow**  
You're following the Git Flow process – a standard workflow in programming that includes the following steps:  
- Create a new branch (`feature/implement-ui-library`) to work on a new feature.  
- Commit changes to that branch.  
- Create a Pull Request to review and merge code into the `main` branch.  

Git Flow helps:  
- Organize work more effectively.  
- Manage source code easily.  
- Make it easier for the team to review and deploy code.  

## **Feature Branching**  
Feature Branching is a source code management technique in Git, where you create a new branch to develop a new feature or implement a major change.  

I created a new branch named `feature/implement-ui-library` using:  
```bash
git checkout -b feature/implement-ui-library
```  
- Develop the new feature (integrating Material UI) without affecting the `main` branch.  
- Allows working independently, making it easier to manage and track changes.  
- After completing the feature, create a Pull Request (PR) to merge the `feature/implement-ui-library` branch into `main`.  

## **Installing Material UI**  
To install Material UI, use either `npm` or `yarn` (depending on which one you're using):  
```bash
# Using npm
npm install @mui/material @emotion/react @emotion/styled

# Or using yarn
yarn add @mui/material @emotion/react @emotion/styled
```  
Material UI will improve the UI, enhance accessibility, and help you get familiar with widely used UI libraries in real-world projects.  

## **Using Material UI Components**  
I've installed and used Material UI components, including **TextField**, **Button**, **Avatar**, **Typography**, **Link**, and **Box** in the `SearchBar.jsx` and `ProfileCard.jsx` components.  

### **1. Avatar**  
```jsx
<Avatar
  src={profile.avatar_url}
  alt={profile.login}
  sx={{ width: 80, height: 80, mb: 1 }}
/>
```  
- **src** → Source of the avatar image from the GitHub API.  
- **alt** → If the image fails to load, it shows `profile.login` as fallback text.  
- **width/height** → Image size is 80px × 80px – large enough to be clear but not too big.  
- **mb: 1** → `margin-bottom = 1 * 8px = 8px` – adds space below the image.  

### **2. Typography**  
```jsx
<Typography variant="h6">
  {profile.name || profile.login}
</Typography>
```  
- **variant="h6"** → Uses the default h6 style from the Material UI design system.  
- **profile.name || profile.login** → If `name` is missing, `login` is shown instead.  

```jsx
<Typography variant="body2" color="text.secondary" mb={1}>
  {profile.bio || "No bio available"}
</Typography>
```  
- **variant="body2"** → Smaller font size for secondary text.  
- **color="text.secondary"** → Uses the secondary text color from the theme (light gray).  
- **mb={1}** → `margin-bottom = 8px` – adds space below the bio.  

```jsx
<Typography variant="body2">
  <strong>Location:</strong> {profile.location || "Not specified"}
</Typography>
<Typography variant="body2">
  <strong>Followers:</strong> {profile.followers} |{" "}
  <strong>Following:</strong> {profile.following}
</Typography>
<Typography variant="body2">
  <strong>Repos:</strong> {profile.public_repos}
</Typography>
```  
- Uses `Typography` for consistent font size and style across different data fields.  
- `||` provides a default message if data is missing.  

### **3. Link to GitHub**  
```jsx
<Link
  href={profile.html_url}
  target="_blank"
  rel="noopener noreferrer"
  sx={{ mt: 1, fontWeight: "bold", color: "#1976d2" }}
>
  Visit GitHub Profile
</Link>
```  
- **href** → Points to the GitHub profile URL.  
- **target="_blank"** → Opens the link in a new tab.  
- **rel="noopener noreferrer"** → Ensures security when opening external links.  
- **sx** → Styling:  
  - **mt: 1** → Adds top margin.  
  - **fontWeight: "bold"** → Makes the text bold.  
  - **color: "#1976d2"** → Uses the default blue color from the Material UI theme.  

### **4. Box**  
```jsx
<Box
  component="form"
  onSubmit={handleSubmit}
  sx={{
    display: "flex",
    gap: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  }}
>
```  
- **component="form"** → Identifies it as a `<form>` element.  
- **display="flex"** → Uses Flexbox for layout.  
- **gap: 2** → Space between elements.  
- **justifyContent="center"** → Centers elements horizontally.  
- **alignItems="center"** → Centers elements vertically.  
- **padding: 2** → Adds padding inside the box.  

### **5. TextField for GitHub Username Input**  
```jsx
<TextField 
  id="outlined-basic" 
  label="GitHub Username" 
  variant="outlined" 
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>
```  
- **id="outlined-basic"** → Unique identifier for the input field.  
- **label="GitHub Username"** → Input label.  
- **variant="outlined"** → Outlined input style.  
- **value={username}** → Controlled input value from state.  
- **onChange={(e) => setUsername(e.target.value)}** → Updates state on input change.  

### **6. Button to Trigger Search**  
```jsx
<Button type="submit" variant="contained">
  Search
</Button>
```  
- **type="submit"** → Triggers the `onSubmit` event of the form.  
- **variant="contained"** → Filled button style.  
- `"Search"` → Text displayed on the button.  