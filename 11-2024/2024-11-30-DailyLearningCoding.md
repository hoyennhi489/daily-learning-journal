**Learn Regular Expressions by Building a Spam Filter**

### Step 1:
```javascript
const messageInput = document.getElementById('message-input');
const result = document.getElementById('result');
const checkMessageButton = document.getElementById('check-message-btn');
```

### Step 2-3:
```javascript
checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }
});
```
- `alert` is a simple way to display a notification, but you can replace it by directly showing the message in the interface (for example, adding the notification to the `#result` element).

### Step 4:
```javascript
const isSpam = (msg) => false;
```
- Create a function to check for spam (`isSpam`) using the arrow function syntax.
- The function takes a single parameter `msg` and currently always returns `false`.

### Step 5:
```javascript
checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
});
```
- Ternary operator: A shorthand way to write an `if-else` structure.
- Condition (`isSpam(message)`): Check if the message is spam.
  + If true: The content displayed is "Oh no! This looks like a spam message."
  + If false: The content displayed is "This message does not seem to contain any spam."

### Step 6-7:
```javascript
const helpRegex = /please help/i;
```
- Add the `i` flag to the regular expression to make the match case-insensitive.

### Step 8-9:
```javascript
const isSpam = (msg) => helpRegex.test(msg);
```

### Step 10:
```javascript
const helpRegex = /please help|assist me/i;
```
- `please help`: The first part of the regular expression, matching the string "please help".
- `|`: The alternation character, allowing the match of either of the two strings.
- `assist me`: The second part of the regular expression, matching the string "assist me".
- `i` (flag): Helps to ignore case sensitivity.

### Step 11:
```javascript
const denyList = [helpRegex];
```

### Step 12:
```javascript
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));
```
- `denyList`: An array containing the regular expressions to check against.
- `regex.test(msg)`: Checks if the regular expression matches the message.
- `.some()`: If any of the regular expressions in the `denyList` matches the message, `.some()` will return `true`.

### Step 13:
```javascript
const dollarRegex = /dollars/i;
```

### Step 14:
```javascript
const denyList = [helpRegex, dollarRegex];
```

### Step 15-16:
```javascript
const dollarRegex = /[0-9]+ dollars/i;
```
- `+` is a quantifier in regular expressions meaning "match one or more occurrences of the preceding element."
  Example: `/a+/` will match one or more consecutive "a" characters, such as "a", "aa", "aaa", etc.

### Step 17-21:
```javascript
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/
```
- `?` is a quantifier meaning "match zero or one occurrence of the preceding element."
  Example: `/colou?r/` will match both "color" and "colour" because the "u" is optional.
- `*`: Quantifier meaning "match zero or more occurrences," so it matches spaces if they exist or not.
- `+`: Quantifier meaning "match at least one occurrence," so it will match at least one space.
- `\d`: Matches a digit.
- `\s*`: Matches any number of whitespace characters (including zero whitespace).
- `(?:hundred)`: A non-capturing group that matches the word "hundred" but doesn’t save the result.
- `\s+`: Matches at least one space.
- `(?:dollars)`: A non-capturing group that matches the word "dollars" but doesn’t save the result.

### Step 22:
```javascript
const freeRegex = /free money/i;
```

### Step 23:
```javascript
const denyList = [helpRegex, dollarRegex, freeRegex];
```

### Step 24-28:
```javascript
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
```
1. **`(?:^|\s)`**:
   - `(?:...)` is a non-capturing group, meaning this group is for checking without storing the result.
   - `^` checks if the string starts with this, and `\s` is any whitespace character (space, tab, newline, etc.).
   - So this part checks if the string "free money" appears at the beginning or after any whitespace.

2. **`fr[e3][e3]`**:
   - `fr` is part of the string to match.
   - `[e3][e3]` means the character "e" can be replaced by "3", so this matches variations like "fr33" or "free".

3. **`m[o0]n[e3]y`**:
   - This part allows "money" to be written as "m0n3y" or "money", with "o" replaced by "0" and "e" replaced by "3".

4. **`(?:$|\s)`**:
   - Similar to the start, it checks if "free money" appears at the end of the string or is followed by whitespace.

5. **`/i`**:
   - This flag makes the regex case-insensitive, allowing it to match "FREE MONEY", "free money", or "FrEe MoNeY".

### Step 29:
```javascript
const stockRegex = /stock alert/i;
```

### Step 30-34:
```javascript
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
```
1. **`(?:^|\s)`**:
   - Non-capturing group to check if the string starts or is preceded by whitespace.

2. **`[s5]`**:
   - Matches either "s" or "5", allowing variations like "5tock".

3. **`[t7]`**:
   - Matches either "t" or "7".

4. **`[o0]`**:
   - Matches either "o" or "0".

5. **`[c{[(]`**:
   - Matches "c", "{", "[", or "(", allowing for various substitutions.

6. **`k`**:
   - Matches "k".

7. **`[a@4]`**:
   - Matches "a", "@", or "4".

8. **`l`**:
   - Matches "l".

9. **`[e3]`**:
   - Matches "e" or "3".

10. **`r`**:
    - Matches "r".

11. **`[t7]`**:
    - Matches "t" or "7".

12. **`(?:$|\s)`**:
    - Non-capturing group to check if the string ends or is followed by whitespace.

13. **`/i`**:
    - Case-insensitive flag for matching.

### Step 35:
```javascript
const dearRegex = /dear friend/i;
```

### Step 36:
```javascript
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;
```

---