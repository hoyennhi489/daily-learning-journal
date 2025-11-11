# **Front-End**

## **SERVER AND WEB SERVER**

#### 1. What is a Server?

• A **server** is a dedicated computer that runs applications and services such as:
o Websites
o Instant messaging
• It is called a “server” because it provides services to other computers and users, called **clients**.

#### 2. Data Center

• Servers are usually stored in **Data Centers**, which house hundreds or thousands of servers, all connected to the Internet.
• A data center is designed to:
o Maintain a continuous power supply
o Ensure stable Internet connectivity
o Keep temperature consistent 24/7 to prevent overheating
• There are many data centers around the world, allowing users to access content faster by connecting to the nearest one.

#### 3. Structure and Purpose of a Server

• Servers are built according to their intended purpose:
o If used for image storage → needs large hard drive capacity.
o If used for complex computations → needs a powerful CPU and large RAM.
• These components are called **Server Hardware**.

#### 4. Hardware and Software

| Comparison      | Hardware                                                                 | Software                                    |
| --------------- | ------------------------------------------------------------------------ | ------------------------------------------- |
| Definition      | The physical components of a server (CPU, RAM, hard drive, etc.)         | The code that runs on the hardware          |
| Characteristics | Tangible, difficult to modify because it requires real component changes | Easy to modify, can be updated or rewritten |
| Memory Tip      | “Hard” = hard to change                                                  | “Soft” = easy to change                     |

#### 5. What is a Web Server?

• A **web server** is a type of **service software** running on a server.
• Main functions include:
o Storing and managing websites
o Storing data
o Securing the system
o Managing emails

#### 6. Main Functions of a Web Server

• A web server processes requests from web browsers (web requests).
• When a user opens a browser and enters a website address (e.g., [www.example.com](http://www.example.com)):
o The browser (client) sends a **request** to the web server.
o The web server processes it and sends a **response** containing the website’s content back to the browser for display.
• This is called the **Request–Response Cycle**.

#### 7. Web Server Performance

• Web servers are designed to:
o Handle thousands of requests per second from many different clients.
o Operate quickly, reliably, and securely.

#### 8. Summary

| Concept                | Quick Reminder                                                            |
| ---------------------- | ------------------------------------------------------------------------- |
| Server                 | A computer providing services to other computers (clients).               |
| Data Center            | Place housing many servers with 24/7 power, Internet, and cooling.        |
| Hardware               | Physical parts of a server – hard to change.                              |
| Software               | Code running on a server – easy to change.                                |
| Web Server             | Software managing websites, data, and security.                           |
| Request–Response Cycle | Process where the client sends a request and the server sends a response. |
| Performance            | A web server can process thousands of requests per second.                |

#### 9. Study Notes

• Hardware is tangible — changing it means replacing physical parts.
• Software is code — it can be updated or edited easily.
• A web server enables a website to function by responding to user requests.
• When you enter a web address, the server sends data back for your browser to display.

---

## **WEBPAGE AND WEBSITE – TECHNOLOGIES BEHIND WEB PAGES**

#### 1. Difference Between Webpage and Website

• A **webpage** is a single document displaying text, images, videos, and other content in a browser.
• A **website** is a collection of interlinked webpages.

Example:
When you visit an online encyclopedia,
• The **homepage** contains links to many articles.
• Clicking a link opens a new **webpage**.
• All pages share similar addresses in the browser’s address bar, indicating they belong to the same website.

However, links on one website can point to other websites.
Example: Search engine results contain links to many different websites.

#### 2. The Scale of the Internet and Website Growth

• Hundreds of thousands of new websites are created every day.
• Fun comparison:
o The Great Pyramid of Giza has 2.3 million stone blocks.
o In one week, nearly the same number of new webpages are created.
• If you tried to download all web pages on the Internet, it would take about **3 million years**.
• Despite billions of webpages, all are built on **three core technologies**.

#### 3. Basic Structure of a Webpage

• A webpage is essentially a text document viewable with any text editor.
• However, web developers use specialized tools for development.
• To build webpages, you need three core technologies:
o **HTML** – structures the content
o **CSS** – defines style and layout
o **JavaScript** – handles user interaction

#### 4. Roles of Each Technology

| Technology | Full Name                 | Role                                                                                |
| ---------- | ------------------------- | ----------------------------------------------------------------------------------- |
| HTML       | HyperText Markup Language | Builds the structure and content (headings, paragraphs, images, audio, video, etc.) |
| CSS        | Cascading Style Sheets    | Adds styling, colors, and layout – “the design”                                     |
| JavaScript | –                         | Creates interactivity, handles data, actions, and dynamic updates                   |

#### 5. Simple Analogy

Imagine a store:
• **HTML** = the building – structure, walls, floors, doors.
• **CSS** = the decoration – design, colors, layout.
• **JavaScript** = the business operations – customers, staff, and activities inside.

#### 6. Details of Each Technology

**a. HTML (HyperText Markup Language)**
• HTML works using **markup tags**.
• Tags describe content displayed in the browser:
o Headings
o Paragraphs
o Images
o Audio and video
• The way HTML marks up content is called **markup**.

**b. CSS (Cascading Style Sheets)**
• CSS adds color, layout, and visual styling to HTML.
• It’s like “makeup” for a webpage.
• Example: If hair is HTML, hairstyle and color are CSS.

**c. JavaScript**
• A programming language built into browsers.
• Enables user interaction, data processing, and dynamic updates.
Examples:
o When you log in and see an “invalid password” message → JavaScript validates the data.
o When a page updates automatically (like new video suggestions) → that’s JavaScript.
• JavaScript makes websites lively and interactive.
Without it, websites would be static and dull.

#### 7. How a Webpage Displays in a Browser

• When a webpage is sent from a web server to a browser:
o The browser reads the code line by line.
o Interprets each line.
o Gradually builds the visible interface.
• This process is called **Page Rendering**.
• The server’s response must be a complete webpage for proper display.

#### 8. Summary

| Concept        | Key Point                                    |
| -------------- | -------------------------------------------- |
| Webpage        | A document displayed in the browser.         |
| Website        | A collection of interlinked webpages.        |
| HTML           | Builds the structure.                        |
| CSS            | Adds style, color, and layout.               |
| JavaScript     | Adds interactivity and dynamic behavior.     |
| Page Rendering | The browser turns code into visible content. |

#### 9. Study Notes

• HTML, CSS, and JavaScript are the three core web technologies.
• Every time you visit a website, your browser downloads code from the server, reads it, and renders it into visible content.

---

## **WEB BROWSER AND THE REQUEST–RESPONSE CYCLE**

#### 1. What is a Web Browser?

• A **Web Browser** is an application used to navigate the World Wide Web.
• It sends **requests** to web servers and receives **responses** containing webpage data, which it displays on your screen.
Examples: Chrome, Firefox, Safari, Edge.

#### 2. Entering a Web Address (URL)

• The address bar in a browser is where you enter a website’s address.
• This address is called a **URL (Uniform Resource Locator)**.

Example:
`https://www.example.com/about`
– `https` → protocol (usually HTTP or HTTPS)
– `www.example.com` → domain name
– `/about` → file path

#### 3. HTTP Protocol and Communication Process

• Browsers and servers exchange data via **HTTP (Hypertext Transfer Protocol)**.
• This exchange follows the **Request–Response Cycle**:
Browser sends a request → Server processes it → Server responds → Browser displays the result.

#### 4. Example: Searching the Internet

**Step 1:** Open your browser (e.g., Chrome or Firefox).
**Step 2:** Type the search engine’s address (e.g., Google or Bing).
**Step 3:** The browser sends a **request** to the search engine’s web server.
• The web server processes the request and sends back a **webpage**.
**Step 4:** The browser receives the response and **renders** the search results.

#### 5. Interacting with a Webpage

When you type “restaurants near me” and press Search:

1. The browser sends a **new request** with the search query.
2. The server processes it and retrieves data from the **database**.
3. The server sends back a **new response** containing search results.
4. The browser renders a new webpage showing restaurant names, maps, reviews, etc.

#### 6. Request–Response Cycle Summary

1. User enters a URL or performs an action (e.g., clicking Search).
2. Browser creates and sends an **HTTP Request**.
3. Web Server processes it, querying the **Database** if needed.
4. Web Server sends an **HTTP Response**.
5. Browser **renders** the content.

This cycle happens every time you browse, stream, chat, or share files.

#### 7. Roles of Each Component

| Component              | Role                                                             |
| ---------------------- | ---------------------------------------------------------------- |
| Browser                | Sends requests and displays web content.                         |
| Web Server             | Receives requests, processes data, and sends responses.          |
| Database               | Stores data such as articles, user accounts, images, or reviews. |
| HTTP Protocol          | Communication rules between browser and server.                  |
| Request–Response Cycle | The data exchange loop between both sides.                       |

#### 8. Conclusion

• A web browser is the bridge between users and the Internet.
• All web browsing depends on the **HTTP Request–Response Cycle**.
• The browser and server “talk” via the Internet to transfer data.
• Every search, video, or message involves thousands of data exchanges in seconds.

#### 9. Quick Review

| Question                  | Short Answer                                               |
| ------------------------- | ---------------------------------------------------------- |
| What is a Web Browser?    | Software used to access and display web content.           |
| What is a URL?            | A website’s address, including protocol, domain, and path. |
| What is HTTP?             | Communication protocol for browser–server interaction.     |
| What is a Web Server?     | A computer that receives requests and sends responses.     |
| What is Request–Response? | The process of sending and receiving data.                 |
| What is a Database for?   | Storing data accessed by the web server.                   |

---

## **WEB HOSTING – TYPES OF WEBSITE HOSTING**

#### 1. What is Web Hosting?

• Websites and their files are stored on **web servers** in **data centers**.
• Developers can put their websites online through **web hosting services** instead of owning physical hardware.
• **Web hosting** is a service that lets you store your website’s files on a hosting provider’s server.
• You rent storage space so your website can run reliably and securely.
• Both individuals and businesses can use hosting services.

#### 2. Common Types of Web Hosting

**a. Shared Hosting**
• Cheapest and most popular option.
• Many websites share the same server and resources (CPU, memory, bandwidth).
• If one site uses too many resources, others slow down.
• Suitable for small websites with low traffic.
• Often used by beginners or for testing.
• Some free plans exist but usually include ads and limits.

**b. VPS Hosting (Virtual Private Server)**
• A virtual server with dedicated resources like CPU, RAM, and bandwidth.
• Several VPS instances run on one physical server, but each is isolated.
• More stable and powerful than shared hosting, but also more expensive.
• Suitable for medium websites or small businesses.

**c. Dedicated Hosting**
• You own an entire physical server.
• All resources belong exclusively to you.
• High performance and reliability – ideal for large websites or enterprise systems.
• The most expensive option.

**d. Cloud Hosting**
• Your website runs on a cloud network of multiple physical and virtual servers.
• If one fails, another automatically takes over, ensuring uptime.
• Resources can scale up or down based on demand.
• You pay only for what you use.
• Ideal for fast-growing or high-traffic websites.
• Most modern web apps use this model.

#### 3. Pros and Cons

| Type              | Advantages                       | Disadvantages                     | Best For                       |
| ----------------- | -------------------------------- | --------------------------------- | ------------------------------ |
| Shared Hosting    | Cheap, easy to use               | Low performance, shared resources | Personal sites, small blogs    |
| VPS Hosting       | Stable, customizable             | More expensive                    | Small business sites           |
| Dedicated Hosting | Full control, strong performance | Highest cost                      | Large or critical systems      |
| Cloud Hosting     | Scalable, flexible, reliable     | Can be costly at high usage       | Large apps, fast-growing sites |

---

## **INTERNET PROTOCOL (IP) – HOW DATA TRAVELS THROUGH THE INTERNET**

#### 1. Understanding IP

• Like a home address, an **IP address** tells computers where to send data.
• When you visit a website, your computer sends “data letters” to the server’s IP address.
• IP ensures the data travels correctly across the Internet.

#### 2. What is an IP Address?

• Every device connected to a network has a unique IP.
• Two main types:
o **IPv4:** e.g., 192.0.2.235
o **IPv6:** e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334
• IPv6 was created because IPv4 addresses are running out.

#### 3. Data Packets

• Data is broken into small **packets** before transmission.
• Each packet includes:
o **Header:** sender and receiver addresses.
o **Payload:** actual content (like the letter inside an envelope).

#### 4. Possible Transmission Errors

• Packets may arrive late, out of order, or get lost.
• Internet protocols handle these issues automatically.

#### 5. Two Main Transmission Methods

| Protocol                            | How It Works                                                          | Used For                                |
| ----------------------------------- | --------------------------------------------------------------------- | --------------------------------------- |
| TCP (Transmission Control Protocol) | Slower but reliable, ensures all data arrives correctly and in order. | Email, websites, file downloads         |
| UDP (User Datagram Protocol)        | Very fast, but doesn’t check for errors.                              | Video calls, live streams, online games |

#### 6. Quick Summary

• IP = device “home address.”
• Data is split into packets before sending.
• TCP ensures accuracy; UDP prioritizes speed.
• Thanks to IP and these protocols, the Internet runs smoothly and efficiently.

---

## **HTTP & HTTPS – WEB COMMUNICATION PROTOCOLS**

#### 1. What is HTTP?

• **HTTP (Hypertext Transfer Protocol)** is the communication protocol of the web, enabling browsers and servers to exchange data.
• Every time you load a webpage, your browser sends a **request** and receives a **response**.
• This **request–response cycle** is the foundation of all Internet communication.

#### 2. Structure of an HTTP Request

An HTTP Request includes four main parts:

1. **Method** – describes the action:
   o GET – retrieve data from the server.
   o POST – send data to the server (e.g., a registration form).
   o PUT – update existing data.
   o DELETE – remove data.
2. **Path** – resource path (e.g., `/images/photo.jpg`).
3. **Version** – HTTP version (usually 1.1 or 2.0).
4. **Headers** – additional info (browser type, language, content type, etc.).
   → With POST/PUT, there’s also a **Body** containing sent data.

#### 3. Structure of an HTTP Response

Includes:
• **Status line:** status code + message.
• **Headers:** info about the server or returned data.
• **Body:** actual content (HTML, image, JSON, etc.).

**Status Codes** are three-digit numbers (100–599) showing the request result.

#### 4. HTTP Status Code Groups

| Group | Range   | Meaning       | Example                                                         |
| ----- | ------- | ------------- | --------------------------------------------------------------- |
| 1xx   | 100–199 | Informational | 100 Continue                                                    |
| 2xx   | 200–299 | Success       | 200 OK                                                          |
| 3xx   | 300–399 | Redirection   | 301 Moved Permanently, 302 Found                                |
| 4xx   | 400–499 | Client Error  | 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found |
| 5xx   | 500–599 | Server Error  | 500 Internal Server Error                                       |

#### 5. HTTPS – The Secure Version of HTTP

• **HTTPS (HTTP Secure)** = HTTP + encryption.
• Protects transmitted information (e.g., passwords, credit cards).
• Data is encrypted into “secret code,” readable only by the intended receiver.
• Identified by a **lock icon 🔒** in the browser’s address bar.

#### 6. Quick Summary

• HTTP is the communication language between browsers and servers.
• A Request includes method, path, version, headers, and possibly body.
• A Response includes status code, headers, and body.
• There are five main groups of status codes.
• HTTPS ensures safe, encrypted data transmission.