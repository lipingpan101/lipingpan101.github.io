"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2023/03/02/router","metadata":{"permalink":"/blog/2023/03/02/router","editUrl":"https://lipingpan101.github.io/blog/2023-03-02-router.md","source":"@site/blog/2023-03-02-router.md","title":"Front-End Routing & Server-Side Routing","description":"There are two main types of routing: front-end routing and server-side routing. Front-end routing is handled entirely by the client-side code in the browser, while server-side routing is handled by the server that hosts the website.","date":"2023-03-02T00:00:00.000Z","formattedDate":"March 2, 2023","tags":[],"readingTime":1.745,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Front-End Routing & Server-Side Routing"},"nextItem":{"title":"React Router","permalink":"/blog/2023/03/01/react-router"}},"content":"There are two main types of routing: front-end routing and server-side routing. Front-end routing is handled entirely by the client-side code in the browser, while server-side routing is handled by the server that hosts the website.\\n\\nFront-end routing is typically used in single-page applications (SPAs), where the entire website is loaded once and subsequent page views are handled by JavaScript code running in the browser. This type of routing is implemented using client-side routing libraries like React Router, and it allows for a seamless user experience with fast page transitions and minimal page refreshes. However, since the routing is entirely handled by JavaScript, it\'s not SEO(Search Engine Optimization)-friendly and can be less performant for initial page loads.\\n\\nOn the other hand, server-side routing is used in traditional multi-page applications, where each page is loaded separately from the server. This type of routing is handled by the server-side code, typically using a web framework like Express or Ruby on Rails. Since the server handles the routing, the website can be SEO-friendly and performant for initial page loads. However, subsequent page transitions can be slower due to the need to reload the entire page from the server.\\n\\nIn some cases, a hybrid approach is used, called server-side rendering (SSR). In this approach, the server renders the initial HTML content of the website and sends it to the client, which then takes over for subsequent page transitions using client-side routing. This approach provides the best of both worlds, allowing for SEO-friendly initial page loads and seamless client-side routing for subsequent page transitions.\\n\\nOverall, choosing the right type of routing depends on the specific requirements of your website or application. React Router and the Router Hook API provide powerful tools for implementing front-end routing in your React applications, while server-side routing and SSR can be useful for more traditional multi-page applications.\\n\\n##### Notes:\\n\\n1. SPA (Single Page Application, \u5355\u9875\u9762\u5e94\u7528)\\n\\n2. SEO (Search Engine Optimization, \u641c\u7d22\u5f15\u64ce\u4f18\u5316)\\n\\n3. SSR (Server Side Rendering, \u670d\u52a1\u7aef\u6e32\u67d3)\\n\\n4. CSR(Client Side Rendering, \u5ba2\u6237\u7aef\u6e32\u67d3)"},{"id":"/2023/03/01/react-router","metadata":{"permalink":"/blog/2023/03/01/react-router","editUrl":"https://lipingpan101.github.io/blog/2023-03-01-react-router.md","source":"@site/blog/2023-03-01-react-router.md","title":"React Router","description":"React Router is a powerful library that allows you to implement front-end routing in your React applications. It offers a wide range of components and features that make it easy to create single-page applications with multiple routes and views. One of the most useful features of React Router is the Router Hook API, which allows you to interact with the routing system programmatically.","date":"2023-03-01T00:00:00.000Z","formattedDate":"March 1, 2023","tags":[],"readingTime":3.645,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"React Router"},"prevItem":{"title":"Front-End Routing & Server-Side Routing","permalink":"/blog/2023/03/02/router"},"nextItem":{"title":"Git Basics","permalink":"/blog/2023/02/25/git-basics"}},"content":"React Router is a powerful library that allows you to implement front-end routing in your React applications. It offers a wide range of components and features that make it easy to create single-page applications with multiple routes and views. One of the most useful features of React Router is the Router Hook API, which allows you to interact with the routing system programmatically.\\n\\nThe Router Hook API provides a set of hooks that allow you to access the current location, navigate to different routes, and listen for changes to the route. Let\'s take a look at some of the most useful hooks in the Router Hook API:\\n\\n1. `useHistory()`: This hook returns the history object, which you can use to navigate to different routes programmatically. For example, you can use history.push(\'/my-route\') to navigate to the \'my-route\' route.\\n2. `useLocation()`: This hook returns the current location object, which contains information about the current URL. You can use this hook to get the current pathname, search, and hash values.\\n3. `useParams()`: This hook returns an object containing the dynamic parameters in the current URL. For example, if you have a route defined as \'/users/:userId\', you can use useParams() to get the value of \':userId\' in the current URL.\\n4. `useRouteMatch()`: This hook returns an object containing information about the current route match. You can use this hook to get the current path, URL, and params for the matched route.\\n\\nUsing these hooks, you can create custom navigation components, implement authentication and authorization logic, and handle complex routing scenarios. For example, you can use the Router Hook API to redirect users to a login page if they try to access a protected route without authentication.\\n\\nIn addition to the Router Hook API, React Router also provides a wide range of components for implementing routing in your application. The most commonly used components include:\\n\\n1. `<Router>`: This component is the top-level component for the routing system. It provides the context and history objects that are used by other routing components.\\n2. `<Route>`: This component is used to define a route in your application. You can specify the path, component, and other options for the route.\\n3. `<Link>`: This component is used to create links between routes in your application. It provides a declarative way to navigate between routes.\\n\\nOverall, React Router is an essential library for any React developer who wants to implement front-end routing in their applications. With the Router Hook API and other components, you can create powerful routing systems that are flexible and easy to use.\\n\\n-------------------\\n\\n### Questions: \\n\\nQ1. How to implement front-end routing in React without using React Router?\\n\\nAnswer: \\n1. Listen for URL changes and retrieve the current URL, which can be done using the browser\'s provided API: window.location.\\n2. Match the corresponding page or component based on the current URL.\\n3. Render the matched page or component.\\n\\n\\n\\nQ2. What components need to be defined to implement React Router?\\nAnswer:\\n1. Router: The router component is the top-level component that holds the entire routing configuration. There are two types of routers you can use: `<BrowserRouter>` and `<HashRouter>`. `<BrowserRouter>` uses the HTML5 History API to manage the URLs, while `<HashRouter>` uses the hash portion of the URL to store the routing information.\\n2. Route Matcher: The route matcher components are used to match the current URL with a specific component that should be rendered. There are several types of route matcher components available, including `<Route>`, `<Switch>`, and `<Redirect>`. `<Route>` is used to specify a particular path and the component that should be rendered when the path matches. `<Switch>` is used to group multiple `<Route>` components and render only the first one that matches the current URL. `<Redirect>` is used to redirect the user to a different URL when a certain path is matched.\\n3. Navigation components: The navigation components are used to create links between the different pages of your application. There are several navigation components available, including `<Link>`, `<NavLink>`, and `<RouterLink>`. `<Link>` is used to create a standard hyperlink that takes the user to a different page. `<NavLink>` is used to create a hyperlink that is styled differently when the current URL matches the link\'s path. `<RouterLink>` is used to create a hyperlink that is aware of the current routing context and can navigate to a different route within your application.\\n\\nAn example can be found [here](https://www.w3schools.com/react/react_router.asp)."},{"id":"/2023/02/25/git-basics","metadata":{"permalink":"/blog/2023/02/25/git-basics","editUrl":"https://lipingpan101.github.io/blog/2023-02-25-git-basics.md","source":"@site/blog/2023-02-25-git-basics.md","title":"Git Basics","description":"Here are some commonly used Git commands:","date":"2023-02-25T00:00:00.000Z","formattedDate":"February 25, 2023","tags":[],"readingTime":2.41,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Git Basics"},"prevItem":{"title":"React Router","permalink":"/blog/2023/03/01/react-router"},"nextItem":{"title":"TDD Benefits for Beginners","permalink":"/blog/2023/02/23/TDD-benefits"}},"content":"Here are some commonly used Git commands:\\n\\n## Introduction Sequence\\n\\n1. `git commit`: records changes to the repository \\n2. `git commit --amend`: modifies the last commit \\n3. `git branch newImage`: creates a new branch named newImage \\n4. `git checkout <name>`: switches to an existing branch \\n5. `git checkout -b [yourbranchname]`: creates a new branch and switches to it \\n6. `git merge bugFix`: merges the bugFix branch into the current branch \\n7. `git rebase main`: applies the changes from the current branch on top of the main branch\\n\\n## Ramping Up\\n\\n1. `HEAD`: the symbolic name for the currently checked out commit \\n2. Detaching `HEAD`: attaching it to a commit instead of a branch \\n3. Moving upwards one commit at a time with `^`. Moving upwards a number of times with `~<num>`, e.g., `git checkout HEAD~4`. \\n4. Reassigning a branch to a commit with the `-f` option, e.g., `git branch -f main HEAD~3`, moves the `main` branch to three parents behind `HEAD`. \\n5. `git reset`: moves a branch backwards as if the commit had never been made. Use `git revert` instead to reverse changes and share those reversed changes with others.\\n\\n## Moving Work Around\\n\\n1. `git cherry-pick <commit1> <commit2> <...>`: copies a series of commits below your current location (`HEAD`)\\n2. `git rebase -i`: opens up a UI to show you which commits are about to be copied below the target of the rebase, e.g., `git rebase -i HEAD~4`\\n\\n## A Mixed Bag\\n\\n1. `git tag v1 C1`: names the tag `v1` and references the commit `C1` explicitly\\n2. `git describe <ref>`: describes the commit referenced by `<ref>` in the form of `<tag>_<numCommits>_g<hash>`\\n\\n## Advanced Topics\\n\\n1. The `^` modifier also accepts an optional number after it, which specifies which parent reference to follow from a merge commit.\\n\\n## Push & Pull -- Git Remotes\\n\\n1. `git clone`: creates a copy of a remote repository on your local machine.\\n2. Remote branches are on your local repository, not on the remote repository. \\n3. Remote branches have a naming convention in the format of `<remote name>/<branch name>`, e.g., `origin/main`. \\n4. `git fetch`: downloads changes from the remote repository but does not integrate them into your local repository. \\n5. `git pull`: downloads changes from the remote repository and integrates them into your local repository. \\n6. `git fakeTeamwork <branch> <numCommits>`: simulates a teammate pushing commits to the `<branch>` branch on the remote. \\n7. `git push`: uploads changes from your local repository to the remote repository.\\n\\n## To Origin And Beyond -- Advanced git Remotes\\n\\n1. `git checkout -b branchname origin/branchname`: creates a new local branch from a remote branch.\\n\\n2. `git branch -u origin/main foo`: sets the `foo` branch to track `origin/main`.\\n\\n3. `git push <remote> <place>`: pushes the changes in `<place>` to the specified `<remote>`.\\n\\n4. `git push origin <source>:<destination>`: pushes changes from the `<source>` branch to the `<destination>` branch on the origin remote."},{"id":"/2023/02/23/TDD-benefits","metadata":{"permalink":"/blog/2023/02/23/TDD-benefits","editUrl":"https://lipingpan101.github.io/blog/2023-02-23-TDD-benefits.md","source":"@site/blog/2023-02-23-TDD-benefits.md","title":"TDD Benefits for Beginners","description":"Test-Driven Development (TDD) is an approach to software development that involves writing tests before writing code. By writing tests first, developers can ensure that their code is working as expected, and they can catch bugs early in the development process. TDD can be especially beneficial for beginners, as it can help them to break down tasks into smaller, more manageable chunks, and to focus on writing clean, maintainable code.","date":"2023-02-23T00:00:00.000Z","formattedDate":"February 23, 2023","tags":[],"readingTime":4.19,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"TDD Benefits for Beginners"},"prevItem":{"title":"Git Basics","permalink":"/blog/2023/02/25/git-basics"},"nextItem":{"title":"React Hooks","permalink":"/blog/2023/02/23/react-hooks"}},"content":"Test-Driven Development (TDD) is an approach to software development that involves writing tests before writing code. By writing tests first, developers can ensure that their code is working as expected, and they can catch bugs early in the development process. TDD can be especially beneficial for beginners, as it can help them to break down tasks into smaller, more manageable chunks, and to focus on writing clean, maintainable code.\\n\\nOne of the key benefits of TDD is that it helps developers to write better code by forcing them to think about the functionality of their code before they write it. This is especially important for beginners who may not have as much experience in writing code. When writing tests first, developers must break down the functionality of their code into smaller, testable units, which can help to make the task of writing code more manageable. This process of breaking down tasks into smaller units is known as \\"tasking\\", and it\'s a key part of TDD.\\n\\nTo illustrate the benefits of TDD, let\'s look at an example of a React component. Suppose we want to create a registration form for a website that allows users to sign up for an account. Here\'s how we could use TDD to write this feature:\\n\\n1. First, we write a test that checks that the registration form contains all the necessary fields:\\n\\n   ```javascript\\n   test(\'registration form contains required fields\', () => {\\n       const { getByLabelText } = render(<RegistrationForm />);\\n       expect(getByLabelText(/username/i)).toBeInTheDocument();\\n       expect(getByLabelText(/email/i)).toBeInTheDocument();\\n       expect(getByLabelText(/password/i)).toBeInTheDocument();\\n       expect(getByLabelText(/confirm password/i)).toBeInTheDocument();\\n   });\\n   ```\\n\\n2. Next, we write a test that checks that the form cannot be submitted if any of the fields are empty:\\n\\n   ```javascript\\n   test(\'form cannot be submitted if fields are empty\', () => {\\n       const { getByLabelText, getByRole } = render(<RegistrationForm />);\\n       fireEvent.click(getByRole(\'button\'));\\n   \\n       expect(getByLabelText(/username/i)).toHaveAttribute(\'required\');\\n       expect(getByLabelText(/email/i)).toHaveAttribute(\'required\');\\n       expect(getByLabelText(/password/i)).toHaveAttribute(\'required\');\\n       expect(getByLabelText(/confirm password/i)).toHaveAttribute(\'required\');\\n   });\\n   ```\\n\\n3. Then, we write a test that checks that the form cannot be submitted if the passwords don\'t match:\\n\\n   ```javascript\\n   test(\'form cannot be submitted if passwords do not match\', () => {\\n       const { getByLabelText, getByRole } = render(<RegistrationForm />);\\n       const usernameField = getByLabelText(/username/i);\\n       const emailField = getByLabelText(/email/i);\\n       const passwordField = getByLabelText(/password/i);\\n       const confirmPasswordField = getByLabelText(/confirm password/i);\\n   \\n       fireEvent.change(usernameField, { target: { value: \'testuser\' } });\\n       fireEvent.change(emailField, { target: { value: \'testuser@example.com\' } });\\n       fireEvent.change(passwordField, { target: { value: \'password\' } });\\n       fireEvent.change(confirmPasswordField, { target: { value: \'not the same password\' } });\\n   \\n       fireEvent.click(getByRole(\'button\'));\\n   \\n       expect(getByLabelText(/password/i)).toHaveAttribute(\'aria-invalid\', \'true\');\\n       expect(getByLabelText(/confirm password/i)).toHaveAttribute(\'aria-invalid\', \'true\');\\n   });\\n   ```\\n\\n4. Finally, we write a test that checks that the form can be submitted if all fields are filled out correctly:\\n\\n   ```javascript\\n   test(\'form can be submitted if all fields are filled out correctly\', () => {\\n     const { getByLabelText, getByRole } = render(<RegistrationForm />);\\n     const usernameField = getByLabelText(/username/i);\\n     const emailField = getByLabelText(/email/i);\\n     const passwordField = getByLabelText(/password/i);\\n     const confirmPasswordField = getByLabelText(/confirm password/i);\\n     \\n     fireEvent.change(usernameField, { target: { value: \'testuser\' } });\\n     fireEvent.change(emailField, { target: { value: \'testuser@example.com\' } });\\n     fireEvent.change(passwordField, { target: { value: \'password\' } });\\n     fireEvent.change(confirmPasswordField, { target: { value: \'password\' } });\\n   \\n     fireEvent.click(getByRole(\'button\'));\\n   \\n     expect(getByLabelText(/success message/i)).toBeInTheDocument();\\n   });\\n   ```\\n\\n5. Once all tests are passing, we can implement the code for the RegistrationForm component:\\n\\n   ```javascript\\n   import React from \'react\';\\n   \\n   function RegistrationForm(props) {\\n     const [formData, setFormData] = React.useState({\\n       username: \'\',\\n       email: \'\',\\n       password: \'\',\\n       confirmPassword: \'\'\\n     });\\n     const [formError, setFormError] = React.useState(\'\');\\n   \\n     function handleChange(event) {\\n       const { name, value } = event.target;\\n       setFormData(formData => ({\\n         ...formData,\\n         [name]: value\\n       }));\\n     }\\n   \\n   function handleSubmit(event) {\\n       event.preventDefault();\\n       if (formData.password !== formData.confirmPassword) {\\n         setFormError(\'Passwords do not match\');\\n       } else {\\n         // Call API to submit registration form data\\n         // If successful, display success message\\n       }\\n     }\\n     \\n       return (\\n       <form onSubmit={handleSubmit}>\\n         <div>\\n           <label htmlFor=\\"username\\">Username</label>\\n           <input\\n             type=\\"text\\"\\n             id=\\"username\\"\\n             name=\\"username\\"\\n             value={formData.username}\\n             onChange={handleChange}\\n             required\\n           />\\n         </div>\\n         <div>\\n           <label htmlFor=\\"email\\">Email</label>\\n           <input\\n             type=\\"email\\"\\n             id=\\"email\\"\\n             name=\\"email\\"\\n             value={formData.email}\\n             onChange={handleChange}\\n             required\\n           />\\n         </div>\\n         <div>\\n           <label htmlFor=\\"password\\">Password</label>\\n           <input\\n             type=\\"password\\"\\n             id=\\"password\\"\\n             name=\\"password\\"\\n             value={formData.password}\\n             onChange={handleChange}\\n             required\\n           />\\n         </div>\\n         <div>\\n           <label htmlFor=\\"confirmPassword\\">Confirm Password</label>\\n           <input\\n             type=\\"password\\"\\n             id=\\"confirmPassword\\"\\n             name=\\"confirmPassword\\"\\n             value={formData.confirmPassword}\\n             onChange={handleChange}\\n             required\\n           />\\n         </div>\\n         {formError && <div className=\\"error\\">{formError}</div>}\\n         <button type=\\"submit\\">Submit</button>\\n       </form>\\n     );\\n   }\\n   ```\\n\\nHere, we\'ve implemented a RegistrationForm component that uses the formData state to track the user\'s input, and the formError state to display an error message if the passwords don\'t match. The handleChange function updates the formData state whenever the user enters or modifies a value, and the handleSubmit function checks whether the passwords match before submitting the form.\\n\\nBy using TDD to write this feature, we were able to break down the task of creating a registration form into smaller, testable pieces, and we were able to ensure that each piece of code worked correctly before moving on to the next one. This approach helped us write code that was more modular, more maintainable, and less error-prone, which can be especially helpful for beginners who may not have as much experience with writing code.\\n\\nIn summary, Test-Driven Development can be a valuable tool for beginners to break down tasks into smaller, testable units, and to focus on writing clean, maintainable code. By using TDD, beginners can ensure that their code is working as expected, catch bugs early in the development process, and ultimately become better developers."},{"id":"/2023/02/23/react-hooks","metadata":{"permalink":"/blog/2023/02/23/react-hooks","editUrl":"https://lipingpan101.github.io/blog/2023-02-23-react-hooks.md","source":"@site/blog/2023-02-23-react-hooks.md","title":"React Hooks","description":"Introduction","date":"2023-02-23T00:00:00.000Z","formattedDate":"February 23, 2023","tags":[],"readingTime":4.415,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"React Hooks"},"prevItem":{"title":"TDD Benefits for Beginners","permalink":"/blog/2023/02/23/TDD-benefits"}},"content":"## Introduction\\n\\nReact Hooks were introduced in version 16.8 of React and have become a popular feature among developers. Hooks provide a way to manage state and side effects in functional components, making them more powerful and easier to write. In this article, we\'ll explore the basics of React Hooks and how to use them to manage state and side effects in your applications.\\n\\n## What are React Hooks?\\n\\nReact Hooks are functions that allow you to use state and other React features in functional components. They provide a way to reuse stateful logic between components, without having to create class components or pass props down through many levels of components. There are several built-in hooks that come with React, such as useState and useEffect, and you can also create your own custom hooks.\\n\\n## The useState Hook\\n\\nThe useState hook allows you to manage state in functional components. It takes an initial state value and returns an array with the current state value and a function to update that state value. You can use multiple instances of the useState hook to manage different pieces of state in your component.\\n\\n```javascript\\nimport React, { useState } from \'react\';\\n\\nfunction Counter() {\\n  const [count, setCount] = useState(0);\\n\\n  function handleClick() {\\n    setCount(count + 1);\\n  }\\n\\n  return (\\n    <div>\\n      <p>You clicked {count} times</p>\\n      <button onClick={handleClick}>\\n        Click me\\n      </button>\\n    </div>\\n  );\\n}\\n```\\n\\nIn this example, we are using the `useState` hook to manage state in a functional component. We initialize the state with a value of `0`, and we get back an array with the current state value (`count`) and a function to update that state value (`setCount`). When the button is clicked, we call the `handleClick` function, which updates the state by calling `setCount` with the new value of `count + 1`.\\n\\n## The useEffect Hook\\n\\nThe useEffect hook allows you to manage side effects in functional components. It takes a function that performs a side effect, such as fetching data or updating the DOM, and an array of dependencies that trigger the effect when they change. You can use multiple instances of the useEffect hook to manage different side effects in your component.\\n\\n```javas\\nimport React, { useState, useEffect } from \'react\';\\n\\nfunction UserList() {\\n  const [users, setUsers] = useState([]);\\n\\n  useEffect(() => {\\n    fetch(\'https://jsonplaceholder.typicode.com/users\')\\n      .then(response => response.json())\\n      .then(data => setUsers(data));\\n  }, []);\\n\\n  return (\\n    <ul>\\n      {users.map(user => (\\n        <li key={user.id}>{user.name}</li>\\n      ))}\\n    </ul>\\n  );\\n}\\n```\\n\\nIn this example, we are using the `useEffect` hook to fetch data from an API and update the state in a functional component. We initialize the state with an empty array, and we use the `useEffect` hook to perform the fetch operation when the component mounts (i.e., when the array of dependencies is empty). When the fetch operation is complete, we update the state by calling `setUsers` with the fetched data. Finally, we render the list of users by mapping over the `users` array.\\n\\n## Custom Hooks\\n\\nCustom hooks are functions that allow you to reuse stateful logic between components. They are a way to extract common functionality into a reusable module, making your code more modular and easier to maintain. Custom hooks can use built-in hooks or other custom hooks, and can take arguments and return values.\\n\\n```javascrip\\nimport React, { useState, useEffect } from \'react\';\\n\\nfunction useCounter(initialCount) {\\n  const [count, setCount] = useState(initialCount);\\n\\n  useEffect(() => {\\n    const intervalId = setInterval(() => {\\n      setCount(count => count + 1);\\n    }, 1000);\\n\\n    return () => clearInterval(intervalId);\\n  }, []);\\n\\n  return count;\\n}\\n\\nfunction Timer() {\\n  const count = useCounter(0);\\n\\n  return (\\n    <p>You have been on this page for {count} seconds.</p>\\n  );\\n}\\n```\\n\\nIn this example, we are creating a custom hook called `useCounter` that uses the `useState` and `useEffect` hooks to implement a simple counter. The `useCounter` hook takes an `initialCount` argument and returns the current count value, which is updated every second using a `setInterval` function inside the `useEffect` hook. We then use the `useCounter` hook inside the `Timer` component to display the number of seconds the user has been on the page.\\n\\n## Best Practices for Using React Hooks\\n\\nTo get the most out of React Hooks, it\'s important to follow some best practices. These include using the useState hook to manage local state, using the useEffect hook to manage side effects, and creating custom hooks to reuse stateful logic. It\'s also important to avoid using hooks inside loops or conditionals, and to use the array destructuring syntax to name your variables.\\n\\n## Conclusion\\n\\nReact Hooks are a powerful tool for managing state and side effects in your functional components. They allow you to reuse stateful logic between components, making your code more modular and easier to maintain. By following the best practices outlined in this article, you can take advantage of the full power of React Hooks and build better React applications.\\n\\nReact Hooks provide a way to manage state and side effects in functional components, making them more powerful and easier to write. By using the useState and useEffect hooks, creating custom hooks, and following best practices, you can take advantage of the full power of React Hooks and build better React applications. With this knowledge, you\'ll be able to take your front-end development skills to the next level and create more efficient and maintainable code."}]}')}}]);