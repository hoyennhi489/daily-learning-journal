
**Learn More About CSS Pseudo Selectors by Building A Balance Sheet.**

Step 1-28:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Balance Sheet</title>
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    <main>
      <section>
        <h1>
          <span class="flex">
            <span>AcmeWidgetCorp</span>
            <span>Balance Sheet</span>
          </span>
        </h1>
        <div id="years" aria-hidden="true">
          <span class="year">2019</span>
          <span class="year">2020</span>
          <span class="year">2021</span>
        </div>
        <div class="table-wrap">
          <table>
            <caption>Assets</caption>
            <thead>
              <tr>
                <td></td>
                <th><span class="sr-only year">2019</span></th>
                <th><span class="sr-only year">2020</span></th>
                <th class="current"><span class="sr-only year">2021</span></th>
              </tr>
            </thead>
            <tbody>
              <tr class="data">
                <th>Cash <span class="description">This is the cash we currently have on hand.</span></th>
                <td>$25</td>
                <td>$30</td>
                <td class="current">$28</td>
              </tr>
              <tr class="data">
                <th>Checking <span class="description">Our primary transactional account.</span></th>
                <td>$54</td>
                <td>$56</td>
                <td class="current">$53</td>
              </tr>
              <tr class="data">
                <th>Savings <span class="description">Funds set aside for emergencies.</span></th>
                <td>$500</td>
                <td>$650</td>
                <td class="current">$728</td>
              </tr>
              <tr class="total">
                <th>Total <span class="sr-only">Assets</span></th>
                <td>$579</td>
                <td>$736</td>
                <td class="current">$809</td>
              </tr>
            </tbody>
          </table>
          <table>
            <caption>Liabilities</caption>
            <thead>
              <tr>
                <td></td>
                <th><span class="sr-only">2019</span></th>
                <th><span class="sr-only">2020</span></th>
                <th><span class="sr-only">2021</span></th>
              </tr>
            </thead>
            <tbody>
              <tr class="data">
                <th>Loans <span class="description">The outstanding balance on our startup loan.</span></th>
                <td>$500</td>
                <td>$250</td>
                <td class="current">$0</td>
              </tr>
              <tr class="data">
                <th>Expenses <span class="description">Annual anticipated expenses, such as payroll.</span></th>
                <td>$200</td>
                <td>$300</td>
                <td class="current">$400</td>
              </tr>
              <tr class="data">
                <th>Credit <span class="description">The outstanding balance on our credit card.</span></th>
                <td>$50</td>
                <td>$50</td>
                <td class="current">$75</td>
              </tr>
              <tr class="total">
                <th>Total <span class="sr-only">Liabilities</span></th>
                <td>$750</td>
                <td>$600</td>
                <td class="current">$475</td>
              </tr>
            </tbody>
          </table>
          <table>
            <caption>Net Worth</caption>
            <thead>
              <tr>
                <td></td>
                <th><span class="sr-only">2019</span></th>
                <th><span class="sr-only">2020</span></th>
                <th><span class="sr-only">2021</span></th>
              </tr>
            </thead>
            <tbody>
              <tr class="total">
                <th>Total <span class="sr-only">Net Worth</span></th>
                <td>$-171</td>
                <td>$136</td>
                <td class="current">$334</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </body>
</html>
```

- The attribute `aria-hidden="true"` means it will be hidden from assistive technologies like screen readers.
- `aria-hidden` is often used to hide non-essential content or elements handled by JavaScript but not needed for display to users through assistive technology.
- `<table>`: Creates an HTML table.
- `<caption>`: The title of the table, used to describe the content or purpose of the table. In this case, the title is "Assets."
- `<thead>`: The header section of the table, usually containing column headers. Currently, this section has no content but can be used to add header rows to the table.
  + `tr` element: Used to indicate a row in the table.
  + `td` element: Used to display data in the table.
  + `th` element: Used to display column headers in the table.
- `<tbody>`: The body of the table, containing the main data. This section also currently has no content but will be used to add data rows.
- The `<span>` tags: In this case, the `<span>` with the class `description` is used to provide additional information for each type of liability, which is very helpful for providing context.
- The `sr-only` class: In the total row, the `<span>` with the `sr-only` class is used to describe for screen readers. This improves accessibility.

Step 28:
```css
html {
  box-sizing: border-box;
}
```
- box-sizing: border-box; helps calculate element sizes more accurately.

Step 29:
```css
body {
  font-family: sans-serif;
  color: #0a0a23;
}
```
- Sets default font and text color for the entire page.

Step 30:
```css
span[class~="sr-only"] {
  border: 0;
}
``` 
- Hides elements with the sr-only class, commonly used to improve accessibility without affecting the visible layout.