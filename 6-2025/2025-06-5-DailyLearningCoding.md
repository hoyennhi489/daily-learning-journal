**JAVASCRIPT**

**18. Setup axiosClient**

* `axiosClient` is a pre-configured instance of the Axios library, used to call APIs conveniently and consistently across an entire JavaScript project or frontend frameworks like React, Vue.
* Instead of repeatedly configuring URL, headers, or handling errors, you just need to create an `axiosClient`, and then reuse it for all APIs like `postApi`, `userApi`, etc.
  → Helps with **DRY (Don't Repeat Yourself)** – Avoid repeating code.

**- Why use axiosClient**

| Benefit                    | Description                                            |
| -------------------------- | ------------------------------------------------------ |
| Easy base URL config       | Configure `baseURL` once and use it everywhere         |
| Pre-attached headers       | Example: `Content-Type`, `Authorization`               |
| Centralized error handling | Example: if server returns 401, redirect to login page |
| Flexible reuse             | Use `axiosClient` across all types of APIs             |

**- Install axios**

```bash
npm install axios
```

**- Create axiosClient.js file**
Suggested folder: `src/api/axiosClient.js`

```js
// src/api/axiosClient.js
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.example.com/', // Replace with actual URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor (add token if exists)
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (handle data/error status)
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API error:', error.response);
    throw error;
  }
);

export default axiosClient;
```

**- Create postApi.js using axiosClient**
`src/api/postApi.js`

```js
import axiosClient from './axiosClient';

const postApi = {
  getAll(params) {
    return axiosClient.get('/posts', { params });
  },
  getById(id) {
    return axiosClient.get(`/posts/${id}`);
  },
  add(data) {
    return axiosClient.post('/posts', data);
  },
  update(id, data) {
    return axiosClient.put(`/posts/${id}`, data);
  },
  remove(id) {
    return axiosClient.delete(`/posts/${id}`);
  },
};

export default postApi;
```

**- Use in project**

```js
import postApi from './api/postApi';

async function showPosts() {
  try {
    const posts = await postApi.getAll();
    console.log('Post list:', posts);
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
}

showPosts();
```

**Note:**

| Component      | Purpose                                       |
| -------------- | --------------------------------------------- |
| axiosClient.js | Create a shared configuration for all APIs    |
| interceptors   | Attach token, handle errors centrally         |
| postApi.js     | Contains API methods for post operations      |
| showPosts()    | Example function to call API and display data |

---

**19. Setup API file**
An API file is where you organize functions that communicate with the API server. Instead of calling APIs directly inside components, you create separate files like `postApi.js`, `userApi.js` to:

* Enable easy reuse
* Separate API logic from UI
* Improve maintainability and testing
  → Helps make the project clearer and more scalable.

**19.1. Common structure**

```
src/
├── api/
│   ├── axiosClient.js      // axios client config
│   ├── postApi.js          // post-related API
│   ├── userApi.js          // user-related API
│   └── ...                 // other APIs
```

Example: `postApi.js`
This file uses `axiosClient` to call post-related APIs.

```js
// src/api/postApi.js
import axiosClient from './axiosClient';

const postApi = {
  getAll(params) {
    return axiosClient.get('/posts', { params });
  },
  getById(id) {
    return axiosClient.get(`/posts/${id}`);
  },
  add(data) {
    return axiosClient.post('/posts', data);
  },
  update(id, data) {
    return axiosClient.put(`/posts/${id}`, data);
  },
  remove(id) {
    return axiosClient.delete(`/posts/${id}`);
  },
};

export default postApi;
```

**19.2. Usage**
Use the API file inside a component or other JS file:

```js
import postApi from './api/postApi';

async function showPostList() {
  try {
    const postList = await postApi.getAll();
    console.log('Danh sách bài viết:', postList);
  } catch (error) {
    console.error('Lỗi khi tải bài viết:', error);
  }
}

showPostList();
```

**Note:**

* Use the pre-configured `axiosClient` (token, baseURL, etc.)
* Each API should have its own file: `authApi.js`, `productApi.js`, etc.
* Avoid calling Axios directly inside components (hard to test, reuse)

**Remember:**

| Component      | Role                                                |
| -------------- | --------------------------------------------------- |
| axiosClient.js | Common config for all APIs                          |
| postApi.js     | API methods for post operations                     |
| Component      | Calls API methods from a separate file, not inline  |
| Advantages     | Readable, testable, maintainable, industry standard |

---

**20. Per-request config in Axios**
Per-request config is a custom configuration for a specific API call, allowing you to customize each request instead of relying only on the global `axiosClient` config.
→ Useful when you need special settings for a request, such as custom headers, timeout, etc.

**- Basic syntax:**

```js
axios.get('/url', {
  headers: { Authorization: 'Bearer abc123' },
  params: { _page: 1, _limit: 10 },
  timeout: 5000,
});
```

**Real-world examples:**

* Example 1: Send a special token for a request

```js
import axiosClient from './axiosClient';

const response = await axiosClient.get('/users/me', {
  headers: {
    Authorization: 'Bearer custom_token_xyz'
  }
});
```

* Example 2: Send query params for a request

```js
const response = await axiosClient.get('/posts', {
  params: {
    _page: 1,
    _limit: 5,
    title_like: 'react'
  }
});
```

→ Automatically becomes: `/posts?_page=1&_limit=5&title_like=react`

* Example 3: Change timeout for this request

```js
const response = await axiosClient.get('/slow-api', {
  timeout: 10000 // 10 seconds
});
```

**- Common configuration options:**

| Key             | Meaning                                         |
| --------------- | ----------------------------------------------- |
| params          | Add query string (`?key=value`)                 |
| headers         | Send custom headers (token, content-type, etc.) |
| timeout         | Set maximum wait time                           |
| withCredentials | Send cookies (when auth requires cookies)       |
| baseURL         | Override base URL for this request only         |

**Remember:**

| Config Type        | Usage                              |
| ------------------ | ---------------------------------- |
| axiosClient        | Default config for the whole app   |
| Per-request config | Only for a specific single request |

**- Combine with API file**

```js
// Inside postApi.js
getAll(params, customHeaders) {
  return axiosClient.get('/posts', {
    params,
    headers: customHeaders
  });
}

// Call the API
await postApi.getAll({ _page: 1 }, { Authorization: 'Bearer abc' });
```

---

**21. Interceptors in Axios**
Interceptors are "hooks" in Axios that allow you to intercept requests or responses before they are handled.
→ You can add headers, handle errors, log data, auto-refresh tokens, etc. before sending the request or after receiving the response.

**- Interceptor types:**

| Type     | Purpose                                |
| -------- | -------------------------------------- |
| request  | Intercept before sending the request   |
| response | Intercept after receiving the response |

**- Syntax:**

```js
axios.interceptors.request.use(
  function(config) {
    // ✅ Modify before request is sent
    return config;
  },
  function(error) {
    // ❌ Handle request errors
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function(response) {
    // ✅ Modify before returning response
    return response;
  },
  function(error) {
    // ❌ Handle response errors
    return Promise.reject(error);
  }
);
```

**Example in axiosClient.js**

```js
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.example.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// ✅ Response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error.response?.status === 401) {
      console.warn('Unauthenticated! Redirect to login...');
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
```

**- Benefits of Interceptors**

| Feature                    | Achieved via Interceptor             |
| -------------------------- | ------------------------------------ |
| Auto token attachment      | Request Interceptor                  |
| Extract data from response | Response Interceptor                 |
| Global error handling      | Response Interceptor                 |
| Request/Response logging   | Both request & response interceptors |

**Remember:**

* **Request Interceptor**: modify config before sending (add headers, token, log, etc.)
* **Response Interceptor**: process returned data or handle server errors
* Helps you write **cleaner**, **less repetitive** API code.

---

**22. Handle API Errors**

When working with APIs, errors are inevitable. Errors can come from:

* **Client side** (invalid request, missing parameters, network issues)
* **Server side** (500 errors, backend failure, security issues)
* **Authentication** errors (401, 403 – not logged in, unauthorized)

You need to handle errors smartly and consistently to improve user experience and debugging.

**22.1. How Axios handles errors**
All Axios errors are `thrown` as `Promise.reject(error)`, so you need `.catch()` or `try...catch` to handle them.
Error structure may include:

```js
{
  config,           // request config
  request,          // request info
  response: {       // if response received from server
    status,         // HTTP status code (400, 404, 500, ...)
    data,           // error data (usually message, error_code)
  },
  message,          // error message
}
```

**22.2. Global error handling with Interceptors**
You can handle errors once in `axiosClient.js` instead of repeating error handling everywhere.

```js
axiosClient.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 400) {
        console.warn('Bad Request:', data.message || 'Invalid input');
      }

      if (status === 401) {
        console.warn('Unauthorized. Redirect to login');
        // window.location.href = '/login';
      }

      if (status === 403) {
        console.warn('Permission Denied');
      }

      if (status >= 500) {
        console.error('Server error! Please try again later.');
      }
    } else if (error.request) {
      console.error('No response from server!');
    } else {
      console.error('Error setting up request:', error.message);
    }

    return Promise.reject(error);
  }
);
```

**22.3. Catching errors in Component using try...catch**
You can still catch specific errors if you want to handle them separately inside a component:

```js
try {
  const data = await postApi.getAll();
  console.log(data);
} catch (error) {
  console.error('Failed to fetch posts:', error.message);

  if (error.response?.status === 404) {
    alert('Không tìm thấy dữ liệu!');
  }
}
```

**22.4. Display error to user interface**
You can use toast, alert, notification, or render error message in the UI.
Example using `alert`:

```js
.catch((error) => {
  const message = error.response?.data?.message || 'Something went wrong';
  alert(message);
});
```

**Remember:**

| Technique                | Advantage                           |
| ------------------------ | ----------------------------------- |
| Use response interceptor | Handle error once, avoid repetition |
| Use try...catch          | Flexible for specific API handling  |
| Show error to UI         | Better user experience              |
| Log error details        | Easier to debug during development  |