# Getting Familiar with Frame, Layer, and Shape in Figma

### 1. Lesson Objectives

This lesson helps you understand how to use Frames, Layers, Groups, and basic Shapes in Figma. This is an essential foundation for interface design and improving the Little Lemon website.

### 2. Basic Concepts in Figma

#### 2.1. Frame

* A Frame can be understood as a design container, similar to an Artboard in other tools.
* A Frame acts like a screen in an app (Screen 1, Screen 2, …).
* Each frame represents a separate page or screen.

**How to create a Frame:**

* Click the Frame icon on the toolbar and drag on the canvas.
* Or select a preset frame (e.g., Desktop) from the right-hand panel.

#### 2.2. Layer

* A Layer is an object inside a frame.
* Whenever you add a shape, text, or new component, Figma automatically creates a corresponding layer.
* Layers are displayed in the Layers Panel (on the left).

#### 2.3. Group

* Groups are used to combine multiple objects into one.
* When grouping, Figma creates a parent layer containing the child layers.
* Groups help move and manage multiple objects simultaneously.

**Note:**

* Frames and Groups look similar, but Frames offer more features, such as independent resizing and advanced layout support.

### 3. Canvas Navigation and Operations

* **Zoom in / Zoom out:**

  * Ctrl / Command + to zoom in
  * Ctrl / Command - to zoom out
* **Pan (move the canvas):**

  * Select the Hand icon
  * Or hold Shift and drag the mouse

### 4. Drawing Basic Shapes

#### 4.1. Rectangle and Square

* Select Shape Tools → Rectangle
* Drag to draw a rectangle
* Hold Shift while dragging to create a perfect square

#### 4.2. Circle

* Select Ellipse
* Hold Shift while dragging to create a perfect circle

### 5. Duplicating and Editing Shapes

#### 5.1. Duplicate

* Select the object
* Press Ctrl / Command + D

#### 5.2. Shape Properties

In the right-hand panel, you can adjust:

* Position (X, Y)
* Size (Width, Height)
* Rotation
* Corner Radius
  **Example:** Increase Corner Radius to 100 to create a rounded shape.

### 6. Color, Stroke, and Effects

#### 6.1. Fill (Background Color)

* Shapes are gray by default
* Click Fill to open the color panel
* You can choose a color, adjust opacity, or enter a color code

#### 6.2. Stroke (Border)

* Enable Stroke to create a border
* Choose the stroke position: Inside / Outside / Center
* You can change the line style in Advanced options

#### 6.3. Effect

* Click the + sign in the Effect section
* Example: Add a Drop Shadow

### 7. Efficient Layer Management

* Layers are displayed in the drawing order
* Drag layers to change stacking order
* Rename layers (e.g., Rectangle → Square, Ellipse → Circle) for easier management
* You can:

  * Show / hide layers
  * Lock layers to prevent accidental movement

### 8. Grouping Objects

* Select multiple shapes
* Right-click → Group Selection
* Or press Ctrl / Command + G

**Result:**

* Objects move and behave as a single unit
* Double-click the group to edit individual elements inside

---

# Layers, Groups, and Frames in Figma

### 1. Overview

In Figma, layers, groups, and frames are three core concepts that organize design files. Improper use can make files cluttered, hard to edit, and difficult to collaborate on.

This guide helps you understand:

* When to use a Layer, Group, or Frame
* How to name layers at different design stages
* Why Frames are more powerful than Groups in Figma

### 2. Layer

#### 2.1. What is a Layer?

* Every image, text, icon, or object in Figma is a Layer
* Adding a new object automatically creates a corresponding Layer
* All Layers appear in the Layers Panel on the left

#### 2.2. Why good Layer management is important

* Design files often contain many objects
* Without proper naming and organization, searching and editing becomes difficult
* Good Layer management helps:

  * Make files readable
  * Facilitate collaboration
  * Simplify handoff to developers

### 3. Naming Layers by Design Stage

#### 3.1. Ideation Stage

* Focus on problem-solving and idea generation
* Layer naming is not necessary
* Simple shapes can be used (e.g., rectangle as a button)
* Main goal: speed and flexibility
  **Note:** A "messy" file is acceptable at this stage

#### 3.2. Refinement & Collaboration Stage

* Design begins to be shared with colleagues or stakeholders
* Layers should be clearly and meaningfully named

**Example:**

* Card
* Image
* Price
* Description
  **Tip:** Layer names should accurately describe object function

### 4. Group

#### 4.1. What is a Group?

* Groups combine multiple Layers into one
* Helps move and manipulate multiple objects at once

#### 4.2. Group Characteristics

* Group size depends on its content
* If a child element changes position or size, the group adjusts accordingly
* Resizing a group scales all its contents
* Default constraints: Left and Top
  **Tip:** Groups are suitable for quick, simple operations

### 5. Frame

#### 5.1. What is a Frame?

* Frames also contain multiple layers but are more powerful than Groups
* A Frame can be seen as:

  * An app screen
  * A window
  * A small canvas within a design

#### 5.2. Key Differences Between Frame and Group

| Feature     | Group                 | Frame                   |
| ----------- | --------------------- | ----------------------- |
| Size        | Dependent on children | Independent of children |
| Resize      | Scales all contents   | Only resizes frame      |
| Auto Layout | Not supported         | Supported               |
| Constraints | Limited               | Very strong             |
| Styling     | Limited               | Like a shape            |

### 6. Key Advantages of Frames

#### 6.1. Independent Size

* Moving or resizing child elements does not change frame size
* Allows:

  * Creating internal padding
  * Mask effects
  * Scrollable areas in prototypes

#### 6.2. Styling

* Frames can:

  * Apply Fill
  * Have Stroke
  * Round corners
  * Add Shadow
    **Example:** A button can be created with just a Frame + Text

#### 6.3. Overflow

* Child content can exceed frame boundaries
* Clip Content option:

  * Hide overflow
  * Or allow it to show

#### 6.4. Constraints & Resizing

* Child elements can be pinned:

  * Top, Bottom, Left, Right, Center
* Or allowed to stretch with the frame

#### 6.5. Auto Layout

* Auto Layout applies only to Frames
* Allows:

  * Automatic resizing based on content
  * Automatic spacing
  * Automatic adjustment when content changes
    **Tip:** One of Figma’s most powerful features

#### 6.6. Grid & Layout

* Grids can be applied to Frames:

  * Large screen frames
  * Small component frames
* Frames can be nested
* Combine with constraints for consistent spacing

### 7. Creating Components

* To create a Component, all layers must be inside a Frame
* If using a Group, Figma will automatically convert the Group into a Frame

### 8. Conclusion

* **Layer:** Basic unit
* **Group:** Quick and simple grouping
* **Frame:** Foundation for professional design in Figma

---

# Text and Font Tools in Figma

### 1. The Role of Fonts in Interface Design

In interface design, fonts directly affect readability and user perception.
Elements such as:

* Text color
* Font size
* Line spacing
* Letter spacing
* Font width

all convey the product’s message and personality to users.

---

### 2. How to Create Text in Figma

#### 2.1. Quick Text Creation

Two ways to create a text object:

* Click the **T** icon on the toolbar
* Press the **T** shortcut key on the keyboard
  Then type to create text.
  👉 This method creates a text box that automatically expands horizontally according to the content.

#### 2.2. Fixed Text Box

* Select **T**
* Click and drag to create a fixed-size text box
  When the content is longer than the box width, the text wraps automatically.

#### 2.3. Editing Text

* Double-click the text box to edit the content

---

### 3. Text Resize Modes

Figma has 3 text resize modes:

1. **Grow Horizontally** (Default when clicking to create text)

   * The text box expands horizontally according to content

2. **Fixed Size** (Default when clicking & dragging)

   * Text is constrained within a fixed box

3. **Grow Vertically**

   * The text box only expands vertically, not horizontally
   * Suitable for long paragraphs

You can change this mode in the **Design Panel** (right-hand panel).

---

### 4. Font and Text Style Customization

#### 4.1. Selecting a Font

* Open the font list in the Design Panel
* Type the font name to search quickly (e.g., Oswald)

#### 4.2. Text Style

* Choose a preset style: Regular, Bold, Italic…
* Common shortcuts:

  * Ctrl / Command + B: Bold
  * Ctrl / Command + I: Italic
  * Ctrl / Command + U: Underline

#### 4.3. Font Size

* Enter the number directly
* Or use ↑ ↓ arrows to increase/decrease size

---

### 5. Letter and Line Spacing

#### 5.1. Line Height

* Default: Auto
* Can increase value (e.g., 43) for better readability

#### 5.2. Letter Spacing

* Adjust the spacing between letters
* Default unit: %
* Can enter px (e.g., 4px)

---

### 6. Text Alignment

#### 6.1. Horizontal Alignment

* Left
* Center
* Right

#### 6.2. Vertical Alignment

* Top
* Middle
* Bottom

---

### 7. Advanced Options (Three-Dot Menu)

#### 7.1. Tab: Basics

Allows you to:

* Change text resize mode
* Underline or strikethrough text
* Adjust paragraph spacing
* Indent text
* Create numbered or bulleted lists
* Change text case (uppercase/lowercase)

#### 7.2. Tab: Details

Allows you to:

* Superscript / Subscript
* Fractions
* OpenType features (alternate glyphs, advanced spacing)

#### 7.3. Tab: Variables

* Adjust variation axes of **Variable Fonts**

---

### 8. Customization Beyond Text Properties

Beyond the Text Panel, text can also:

* Change text color (**Fill**)
* Add a border (**Stroke**)
* Add effects (**Effect**) such as Drop Shadow

**Example:**

* Change text color to blue
* Add a 1px thick blue stroke
* Add shadow

---

## Typography and Best Practices in UI/UX

### 1. Why Typography Matters

Over 90% of online information is text. Typography directly affects:

* User experience
* Interface usability
* Attention and engagement
* Business goals

In UI/UX design, typography makes text readable, understandable, and visually appealing. A Style Guide should always include a Typography section.

---

### 2. Difference Between Lettering and Typography

* **Typography:** Arranging and organizing text content using existing typefaces and fonts
* **Lettering:** Designing custom letters for a specific purpose, not reusable like a font

➡️ In short:

* Typography = arranging letters
* Lettering = drawing letters

---

### 3. Typeface and Font

* **Typeface:** A family of fonts with a consistent style (e.g., Arial, Times New Roman, Helvetica)
* **Font:** A specific variant of a typeface (e.g., Regular, Bold, Light)

➡️ Analogy:

* Typeface = a book
* Font = a chapter in the book

---

### 4. Important Typography Terms

#### 4.1. Hierarchy

Organizing text to show importance, guiding readers on what to read first

#### 4.2. Baseline

The line on which text “stands,” used for alignment

#### 4.3. Cap Height

Height of uppercase letters (H, T, M), not the maximum height of all letters

#### 4.4. X-Height

Height of lowercase letters (x) from baseline

* Larger x-height → easier to read at small sizes

#### 4.5. Ascender & Descender

* **Ascender:** Part of a letter above x-height (b, d, h)
* **Descender:** Part below baseline (g, p, y)

#### 4.6. Weight

Thickness of the font stroke (Light, Regular, Medium, Bold)

#### 4.7. Tracking

Spacing between all characters in a block of text

#### 4.8. Kerning

Spacing between two specific letters (e.g., A and V)

#### 4.9. Leading

Spacing between lines of text

#### 4.10. White Space

Empty space around and between text blocks for readability

#### 4.11. Stroke

The line forming the letter shape

#### 4.12. Serif vs Sans Serif

* **Serif:** Has strokes at the ends → better for print
* **Sans Serif:** No strokes → common in digital interfaces

---

### 5. Using Typography to Improve UX

#### 5.1. Create Hierarchy

* Headings: large and bold
* Subheadings: smaller than headings
* Body text: readable, moderate size

**Recommended text sizes:**

* Desktop: ≥ 16px
* iOS: ≥ 11pt
* Android: ≥ 14sp

#### 5.2. Text Color

* High contrast with background
* Use different colors for: headings, body, links, buttons, error messages

#### 5.3. Line Length

Too long lines cause eye strain

* Simple formula: Line length ≈ font size × 30
* Example: 10px font → ~300px line

#### 5.4. Avoid “Text Walls”

Dense, unbroken blocks of text are hard to read

* Break into paragraphs
* Add subheadings
* Use bullet lists
* Combine with images or quotes

---

### 6. Conclusion

Good typography is not only visually appealing but also readable and user-friendly.
Even when following all rules, user testing is essential to identify real-world issues.
Collect feedback from different readers to ensure the interface is:

* More accessible
* Easier to read
* More user-friendly

Typography is the final, crucial step in UI/UX design.

---

# What is Responsive Design?

Nowadays, most websites need to display well on multiple devices, such as desktops, tablets, and mobile phones.

**Responsive Design** is a design approach that allows an interface to automatically adapt to any screen size, without creating separate versions for each device.

**Example:**

* On mobile: content displays in 1 column
* On tablet: content displays in 2 columns
* On desktop: content may display in multiple columns

---

# Grid System in Interface Design

Websites or applications are made up of rectangular blocks arranged according to a **grid system**.

A grid system consists of invisible lines and columns that:

* Organize content neatly
* Ensure alignment and order
* Serve as a foundation for the user interface (UI) structure

---

# Creating a Responsive Grid in Figma

### 1. Create a Desktop Frame

* Select the **Frame** icon on the toolbar or press **F**
* Choose Desktop size: 1440 × 1024

### 2. Add a Layout Grid

* In the right-hand panel, find **Layout Grid**
* Click the **+** button
* By default, a 10px × 10px grid appears (fixed pixel grid)

> This grid does not resize with the frame, so it is not suitable for responsive design yet.

### 3. Use a Column Grid

* Change the grid type to **Column**
* Column grids arrange content horizontally

**Common column numbers:**

* Desktop: 12 columns
* Tablet: 8 columns
* Mobile: 4 columns

**Recommended Desktop settings:**

* Columns: 12
* Type: Stretch (columns resize with frame width)
* Margin: 70px (space between content and screen edge)
* Gutter: 20px (space between columns)

### 4. Add a Vertical Grid (8-Point Grid)

To maintain vertical spacing consistency:

* Select the frame
* Add a new **Layout Grid**
* Choose type **Row**
* Count: 1000
* Height: 8px
* Type: Top
* Gutter: 0

**Result:**

* Both horizontal (columns) and vertical (rows) grids are available
* All elements “snap” to the grid when aligning

---

# Benefits of a Grid System

* Easier alignment and arrangement of content
* Consistent spacing
* Sizes divisible by 8 → clean, professional interface

---

# Toggle Grid On/Off

**Method 1:**

* Click Zoom % (top-right corner)
* Enable/disable Layout Grids

**Method 2 (Shortcut):**

* Mac: Control + G
* Windows: Control + Shift + 4

---

# Constraints – Enable Smart Responsive Layouts

Constraints fix elements’ positions in the grid:

* Left
* Right
* Top
* Bottom
* Center

**Example:**

* Apply **Left & Right** constraints to a content block
* When resizing the frame, the content automatically stretches, creating a responsive effect

---

# Grid System in Web Design

### 1. What is a Grid System?

Each webpage consists of squares and rectangles arranged in a grid of invisible lines and columns.

**Benefits of a grid system:**

* Organizes content on the page
* Ensures alignment and order
* Builds a basic UI structure
* Creates consistent rhythm
* Reduces layout decisions during design

---

### 2. Components of a Grid System

**Columns**

* Vertical divisions
* Common numbers:

  * Desktop: 12
  * Tablet: 8
  * Mobile: 4
* Typical width: 60–80px

**Rows**

* Horizontal divisions
* Combine with columns to form a grid layout

**Gutters**

* Negative space between columns
* Separates content clearly
* Common size: 20px

**Modules**

* Space units created at the intersections of rows and columns
* Each design element (text, image, button) fits inside one or more modules

**Margins**

* Space between the outermost columns and frame edges
* Prevents content from sticking to screen edges

---

### 3. Common Types of Grids

**3.1. Block Grid**

* Simplest grid type, one large column
* Vertical content layout
* Commonly used for: long text blocks, full-width images, hero images

**3.2. Column Grid**

* Most common in web and graphic design
* Divides content into equal columns
* Column count varies by device:

  * 12 → desktop
  * 8 → tablet
  * 4 → mobile
* Flexible, easy to expand layout

**3.3. Modular Grid**

* Made of equally sized cells
* Suitable for displaying many items simultaneously
* Examples: mobile home screens, e-commerce product lists

**3.4. Hierarchical Grid**

* Uneven, flexible layout
* Elements placed naturally based on content
* Often used in creative, non-restrictive designs

**3.5. Baseline Grid**

* Aligns text vertically
* Creates rhythm and aesthetics
* Similar to lined paper

---

### 4. Importance of a Grid System

* Shapes and organizes web design
* Provides good UX
* Helps easy navigation of content
* Essential for responsive design

**Example:**

* Desktop: multiple columns for wider content
* Tablet: 2–3 columns
* Mobile: 1 column

---

### 5. Tips for Using Grids Effectively

**Set up grids early:**

* Build the grid after wireframing and research
* No need to rethink layout for each page

**Don’t fear breaking the grid:**

* Grids are a tool, not a limit
* Break them when emphasizing content

**Don’t fill all empty space:**

* Proper margins and spacing improve readability

---

### 6. 960 Grid System

Simplifies traditional web design

**Features:**

* Total width: 960px
* Options: 12 or 16 columns

**12-column example:**

* Column width: 60px
* Total gutter: 20px (10px each side)
* Actual content width: 940px

> 12-column grid is flexible, easy to divide into 2, 3, or more columns

---

# Manipulating Elements in Figma

### 1. Why Work with Shapes?

Figma provides basic shapes (rectangle, circle, polygon), but complex shapes often require:

* Combining basic shapes
* Precise alignment
* Correct resizing

These skills help create flexible and professional UI components.

---

### 2. Combine Shapes

**Steps:**

* Select multiple shapes
* Click the **Combine Shapes** icon on the top toolbar

**Options:**

* **Union:** Merge all selected shapes into one
* **Subtract:** Use one shape to cut part of another
* **Intersect:** Keep only overlapping parts
* **Exclude:** Remove overlapping areas

> Often used for creating icons, buttons, or custom shapes

---

### 3. Aligning and Distributing Objects

**Why it’s important:**

* Clean, professional layout
* Improved UX

**How to align:**

* Select objects
* Use the **Alignment** tools in the Design Panel

**Alignment options:**

* Left, Center (horizontal), Right
* Top, Middle (vertical), Bottom

**Distribute objects:**

* Evenly horizontally or vertically
* Ensures consistent spacing between elements

---

### 4. Resizing (Scaling)

**Normal scaling:**

* Select an object
* Drag corners to resize

⚠️ When resizing a group:

* Child shapes resize
* Text, strokes, and effects do NOT scale

---

### 5. Scale Tool – Precise Scaling

**When to use:**

* To resize everything proportionally, including text, strokes, and effects

**How to use:**

* Select object or group
* Choose **Scale Tool** (top-left)
* Drag to resize

> Ensures consistent proportions and design consistency

---

# Enhancing Wireframes: Basic Design Elements

After creating a wireframe, the next step is to make the interface visually appealing by thoughtfully applying design elements. You can think of them as ingredients in a recipe: each component is important, and the way they are combined affects the final result.

---

### 1. Line

* Lines come in different colors, thicknesses, and styles.
* They can be visible or invisible, guiding the user’s attention to important areas.
* **Thick/Bold lines:** stand out, attract attention
* **Thin lines:** subtle, elegant

---

### 2. Text / Typography

* Similar to print design but optimized for screens.
* Key elements to balance:

  * **Typeface** (font style)
  * **Size** (font size)
  * **Color** (text color)
  * **Line height**
  * **Letter shapes**
* Proper typography improves readability and provides a comfortable user experience.

---

### 3. Color

* Sets mood, conveys brand identity, and emphasizes content.
* Common color systems:

  * **RGB** (Red, Green, Blue) – digital design
  * **CMYK** – print design

**Color properties:**

* **Hue:** basic color (red, blue, green…)
* **Tint:** mix with white → lighter
* **Tone:** mix with gray → softer, muted
* **Shade:** mix with black → darker
* **Saturation:** intensity → strong or weak

---

### 4. Shape

* Attracts attention and emphasizes layout structure.
* Three main types of shapes:

  * **Geometric:** precise shapes (square, circle, triangle)
  * **Organic:** soft, natural, irregular
  * **Abstract:** minimalist, conceptual (e.g., company logo)

---

### 5. Image

* Visual, memorable, and engaging for users.
* Evokes emotion, builds trust, and draws interest.
* Using relevant images improves the overall user experience.

---

### 6. Space

* Includes **positive space** (objects) and **negative space** (empty areas around objects).
* Space helps:

  * **Connect elements:** narrow spacing
  * **Separate elements:** wide spacing
  * **Create balanced, readable layouts**

---

# **Design Systems, UI Kits, and Atomic Design – Little Lemon**

### 1. Design Systems

* **Definition:** Includes everything that makes up a product:

  * Typography (fonts)
  * Color palette
  * Icons, layout, grids
  * Coding standards & naming conventions
  * Style guide & developer guidelines
* **Goal:** Help teams develop, learn, and work efficiently while creating consistent designs.
* **Scope:** Broad, can include “do’s and don’ts” or just a set of components guiding layouts.

### 2. UI Kits

* **Definition:** Similar to a design system but more limited; focuses on UI elements such as:

  * Buttons, menu items, small components
  * Typographic scale & color system
* **Goal:** Provide a systematic yet quick approach for creating consistent UIs.
* **Example:** Navigation bar (logo, links, call-to-action buttons, login/sign up, search).

### 3. Atomic Design (Brad Frost)

* **Idea:** Build interfaces from small components to larger ones like “atomic theory”:

  1. **Atoms:** Single elements like textboxes, buttons, links → corresponds to HTML elements.
  2. **Molecules:** Combination of atoms (e.g., input + label + login button).
  3. **Organisms:** Groups of molecules (e.g., full navigation bar).
  4. **Templates:** Low-fidelity wireframes combining atoms, molecules, organisms.
  5. **Pages:** Refined templates with real content and images.
* **Benefits:**

  * Consistency: Reusable components
  * Time-saving: No need to design from scratch
  * Single source of truth: All files/components centralized

**Summary:**

* **Design system:** Complete brand guidelines & components
* **UI kit:** Quick-access set of UI components
* **Atomic design:** Method to organize & combine elements from small → large for reusable, consistent interfaces

---

# **Design System (Hệ thống Thiết kế)**

### 1. Definition

* A design system is a set of reusable components, principles, and guidelines that allow design and development teams to communicate a common language and produce consistent products.
* Includes tangible elements (components, patterns, templates, UI elements) and intangible aspects (brand values, shared practices, design philosophy).

### 2. Key Elements

**A. Reusable Elements**

* Components, patterns, and guidelines that can be reused across multiple products.
* Help establish a common language for the team.
* **Components:** Building blocks like buttons, inputs, navigation bars.
* **Patterns:** Guide proper, consistent use of components.

**B. Shared Values**

* Principles and goals guiding teams towards a unified brand vision.
* Include:

  * **Design Principles:** Guidelines to achieve product goals via design (e.g., Material Design principles: material as metaphor, bold and purposeful graphics, meaningful motion).
  * **Brand Identity & Language:** Visual brand elements (colors, logos, images) applied consistently.

### 3. Components & Patterns

* **Components:** Technical & functional documentation, used directly in layouts and code.
* **Patterns:** Guide consistent and logical component usage across products.
* **Goal:** Ensure consistent UX and optimized workflow.

### 4. Purpose

* Facilitate team workflow, increase efficiency, save time.
* Provide a **single source of truth** for design and development.
* Ensure UX/UI consistency across all products.

### 5. Notes on Implementation

* Design systems are human-created, managed, and maintained.
* Consider scale, resources, and time.
* **Good implementation:** Educates team, streamlines work, solves complex UX issues.
* **Poor implementation:** Becomes a hard-to-use set of components & code, inconsistent.

---

# **Creating Interactive Prototypes in Figma**

### 1. What is a Prototype?

* A prototype is a near-functional model of a product.
* Used to:

  * Test experiences with users & stakeholders
  * Gather feedback before actual development
* Can be interactive and shared with clients or colleagues.

### 2. Preparation

* Complete high-fidelity designs from wireframes.
* Use existing design systems and UI kits.
* Example: Persona “Tilly” uses Little Lemon app to order food.

### 3. Process to Create Interactive Prototypes

**Step 1: Identify User Flow**

* Tilly opens Order Online page.
* Selects items:

  1. Tap Bruschetta → view details → add to basket
  2. Tap Greek Salad → view details → add to basket
* Check order summary and basket.
* Use Back button to return to main screen.

**Step 2: Link Screens in Figma**

* Go to Prototype tab (next to Design tab).
* Select element (e.g., Bruschetta) → drag arrow to next screen.
* Set interactions:

  * Navigate to Screen → target screen.
* Repeat for other buttons:

  * Add button → order summary
  * Greek Salad → new screen → Add button → updated summary
  * Back button → main screen

**Step 3: Test Prototype**

* Click Play icon (blue box with arrow) on Figma Canvas.
* Tap elements to check screens & transitions.
* Ensure user flow matches the scenario.

### 4. Benefits

* Test UX before coding.
* Get fast feedback from clients/colleagues.
* Ensure logical interactions and display of design.

---

# **Micro-Interactions & Micro-Animations**

### 1. Basic Concept

* **Micro-interactions:** Small moments in a product performing a single task with visual feedback.

  * Examples: Facebook Like button, hamburger menu, pull-to-refresh, volume controls, autocomplete.
* **Micro-animations:** Small UI movements that visualize actions, guide users, and smooth the experience.

### 2. Benefits

* Provide feedback: Inform user of action results.
* Complete small tasks: Show immediate effect.
* Increase sense of direct manipulation: Users feel in control.
* Prevent errors: Guide users and reduce confusion.

### 3. Real-World Examples

* Facebook Like button: Hover → reactions → select → visual feedback.
* Hamburger menu: Tap to show/hide menu.
* Pull-to-refresh: Swipe down to load data.
* Volume controls: Direct interaction with motion feedback.
* Autocomplete: Suggests entries as user types.

### 4. Structure (Dan Saffer)

1. **Trigger:** Activates the interaction (manual/user or system)
2. **Rules:** Define behavior after trigger
3. **Feedback:** Visual outcome for user
4. **Modes & Loops:** Determine duration, repetition

### 5. Micro-animations in UI

* Provide immediate feedback.
* Support context & transitions on small screens.
* Draw user attention to key actions.
* Reward user satisfaction (e.g., successful form submission).

### 6. Tips

* Use small animations, avoid long sequences.
* Don’t overuse motion; maintain information hierarchy.
* Micro-interactions/animations enhance usability, make interfaces intuitive, lively, and easy to use.

---

# **Micro Interactions – Key Points**

### 1. Definition

* Subtle, small, often invisible interactions.
* Help users understand system state, confirm actions, or guide next steps.

### 2. Purpose

* Provide feedback
* Guide user flow
* Add emotional, human touch

### 3. Examples

* Facebook Like button: hover → reactions → select → lively interaction
* Toast notifications: small success/error alerts
* Form validation: immediate error feedback

### 4. Design Process

1. **Conceptualize:** Design each step of the user flow
2. **Implementation:** Developers create micro interactions
3. **Testing:** Identify gaps or ineffective interactions
4. **Refinement:** Make interactions clear, useful, and understandable

### 5. Advice

* Keep it simple: avoid complex animations
* Be selective: avoid overwhelming users
* Observe in testing: ensure interactions are truly helpful