# 253-Web-Servers

## #standing-koala
Jose Chavez Dominguez, Somaya Bounouar

http://jsdev.learnersguild.org/goals/253-Init_3-Hello_Web_Servers.html

---
authors:
- 'tannerwelsh'
team_size: 2
goal_id: 253
title: 'Init 3: Hello, Web Servers'
created_at: '2017-03-30T10:38:28Z'
labels:
- practice
- foundational
published: true
level: '1'
redirect_from: '/goals/253'
---

# Init 3: Hello, Web Servers

## Challenge Rating

This goal will likely be within your ZPD if you...

- Can write object-oriented JavaScript and execute it on both the browser and with Node.js
- Have completed the first two initiation goals: [1][bossggle-word-game] and [2][bike-shop-oop] (or something similar)
- Have used git and GitHub to do basic tasks like forking, cloning, making commits, and pushing to a remote repository
- Are familiar with the Node.js programming environment and with npm
- Are interested in building full-stack web apps with Node.js
- Are interested in using the popular [Express.js][express] framework

## Description

Build a [markdown][] editor app using Node.js and the popular Express.js framework. The final product will be similar to (but a lot simpler than) this app: http://dillinger.io/.

When people talk about "full-stack web development", usually what they mean is the process of building applications that run on both a _server_ and a _client_.

In this goal, you'll build a "full-stack" web app with code that runs in both environments.

If this is your first time working with [Express.js][express], you may want to take some time up front to get oriented. Review the [Resources](#resources) to get started.

### Recommended Pace

It is recommended (but not required) that you follow along with the day-by-day pace included here. These are designed to help you break down the problem into more manageable parts so that you can pace your work appropriately and leave time to explore the [learning resources](#resources).

Each day, pay attention to the **terms & concepts** highlighed in **bold**. By the end of the day, you should have a better idea of what they mean and how to use them. In other words, aim to be able to answer the question "what is X?" for yourself.

Depending on how much support you and your team need, balance solo and team time. Make sure to always review the day's work with your team and share important learnings.

#### Day 1

With your team, complete the specs in [Stage 1](#stage-1) to set up your initial Express app and learn:

- how a **web server** program is set up
- how browsers send **requests** to servers and servers reply with a **response**
- what a **static file** is in the context of the web
- what it means for a server to be **listening** on a particular **port**

#### Day 2

With your team, complete the specs in [Stage 2](#stage-2) to organize your view files with the [Pug][] templating engine. You'll be learning and practicing:

- what an **HTML template** is and how it works
- how to split HTML templates into smaller components using **includes**
- how templating is similar to **string interpolation**
- how to include and organize your **static files** like CSS

#### Day 3

With your team, complete the specs in [Stage 3](#stage-3) to implement the "MVP" (Minimum Viable Product) feature: being able to write and render markdown text. You'll be learning and practicing:

- how to install a JavaScript **package** for use in the browser
- what **markdown** is and how it is used
- what it means to **render** markdown text to HTML
- how to listen for **key press events** in the browser
- how to **send data** from a browser to the server
- how to use Node.js to **read and write to a file**

#### Day 4

With your team, complete the specs in [Stage 4](#stage-4) to add the more advanced feature of the product: managing multiple files. You'll be learning and practicing:

- what **routes** are and how to use them in Express.js
- how to **create new files** programmatically with Node.js
- how to use **iteration** in your HTML templates
- what **cookies** are and how to use them in Express.js

#### Day 5

This day is open! There are a lot of new things to learn this week, so use this last day to revisit the areas you least understand.

Use the [Resources](#resources) where applicable, but don't limit yourself to them! There are plenty of great resources online that you can use.

## Context

The series of initiation goals are designed for new members of Learners Guild to get oriented to the learning environment, build key foundational skills, and work on some fun projects.

1. [Init 1: Bossggle Word Game][bossggle-word-game]
1. [Init 2: OOP Practice with Bike Shop][bike-shop-oop]
1. [Init 3: Hello Web Servers][hello-web-servers]
1. [Init 4: Relational Databases][relational-databases]
1. [Init 5: Web APIs][web-apis]
1. [Init 6: Developer Tools][developer-tools]

By the time you are finished with these initiation goals, you should be skilled enough to complete the [Simple Book Store][simple-book-store] goal: it is a good target for you to aim for in your first 6 weeks.

In [Bossggle][bossggle-word-game], you wrote JavaScript to run in a browser (a _client_), but it didn't need a _server_ (until you published to GitHub Pages, in which case GitHub became the server). In [OOP Practice][bike-shop-oop], you wrote JavaScript to run in the _Node.js_ environment.

This goal will help you learn to tie these two pieces together: to create a "full-stack" web app that runs code on _both_ the client and the server.

## Specifications

These are the basic specs for "Hello, Web Servers", broken into 5 stages. If you complete these specs, try taking on some of the [Stretch specs](#stretch).

#### Stage 1

Setup the repo and file structure, install and configure [Express][], and get a basic server running.

- [x] Repo (your artifact) is created on GitHub
- [x] Repo follows a conventional file structure for an Express.js app:
  - [x] `package.json`: standard for any Node.js app; includes package info and lists dependencies
  - [x] `app.js`: your Express server, with all routes defined
  - [x] `views/`: for storing your Pug HTML templates
  - [x] `public/`: for storing static files like CSS and images
  - [x] `README.md`: includes overview of your repo
- [x] Express server can be started with `$ node app.js`
- [x] Server renders a page at the root route (`/`) that looks like the [mockup](#mockups) but does not have any functionality - it is just a static page
- [x] All package dependencies are defined in `package.json`
- [x] The artifact produced is properly licensed, preferably with the [MIT license][mit-license]

#### Stage 2

Build out the template structure with [Pug][] for a single-file editor. Don't worry about multiple files for now, or implementing the markdown rendering.

- [x] [Pug][pug] is installed and set up for HTML templating
- [x] View template files are created in the `/views` subdirectory
- [x] Main view file is called `index`
- [x] Includes are created for the different "components" of the main view:
  - [x] Sidebar (shows list of files)
  - [x] Header (shows current filename, word count, and save button)
  - [x] Editor (shows markdown editor pane)
  - [x] Preview (shows rendered markdown)
- [x] CSS is organized into one or more files in the `public/` directory
- [x] CSS declarations are well-named and formatted (consider using this [small guide](http://tinystride.com/articles/organized-css-a-small-guide/))

#### Stage 3

Setup real markdown rendering so that writing in the left panel updates the right panel, and make the "Save" button work.

- [x] [Marked][marked] is installed
- [x] Markdown text written in the "Editor" pane is rendered in the "Preview" pane automatically
- [x] Preview is updated every time text in the editor changes
- [x] Clicking the "Save" button saves the markdown text in the editor to a file in a subdirectory of the server `data/`
- [x] The markdown file in `data/` is loaded and used as the starter text in the editor (in other words, the last saved text is loaded by default)

#### Stage 4

Build out multiple-file functionality, and use cookies to remember the last opened file.

- [x] Users can create more than one markdown file
- [x] Each file has its own URL, named after its filename (for example, if the markdown file is called `Todos.md`, its URL would be `http://localhost:3000/todos`)
- [x] Markdown files are listed in the sidebar
- [x] Clicking on the "New File" button in the sidebar lets users create a new file and prompts for the file name using `prompt()`
- [x] Clicking on a file in the sidebar will navigate to the page, load the file contents into the editor, and render them in the preview
- [x] Markdown content can still be saved to files in `data/`, with one file in `data/` for each file in the sidebar
- [x] Most recently edited file is tracked using a cookie
- [x] When visiting the root route (`/`), users are redirected to the file they last edited

#### Stage 5

No stage 5! Move into stretch specs, or use the time to polish up your code.

### Mockups

Try to mimic the following mockup as closely as you can. Note that some of the features in the mockup are part of the [stretch specs](#stretch) - you don't have to build those yet.

<img alt="mmmarkdown-mockup" width="800" src="https://cloud.githubusercontent.com/assets/709100/24804622/01ad8ffe-1b7d-11e7-91f4-a60303a79ff8.png">

##### with comments

<img alt="mmmarkdown-mockup-with-comments" width="800" src="https://cloud.githubusercontent.com/assets/709100/24805262/2824fd32-1b7f-11e7-9690-5576477151c6.png">

#### New File

<img alt="mmmarkdown-mockup-new-file" width="800" src="https://cloud.githubusercontent.com/assets/709100/24805253/23e24c84-1b7f-11e7-8820-5f5e022da97b.png">

### Stretch

If you complete all of the specs listed above (the checkboxes), there's no reason to stop there! Try building more advanced features with these stretch specs.

- [x] Clicking the trash can icon...
  - [x] Deletes the file from the `data/` folder
  - [x] Shows the sidebar updated without the deleted file
- [x] "Word count" section in the header displays the word count for the currently open file

And if you get through those, try turning [Bossggle][bossggle-word-game] into an Express app.

- [ ] New repo `bossggle-server` is created
- [ ] Bossggle works the same as in the serverless version, but is built with [Express][] and [Pug][]
- [ ] Score and word history is saved using [localStorage][mdn-localstorage]

## Resources

Use these resources to fill in the gaps in your skills and knowledge as you find them. There is more here than you can do in a week, so focus on the areas that are in your zone of proximal development (ZPD).

##### Tools

- [Express.js][express]: "Fast, unopinionated, minimalist web framework for Node.js"
- [Pug][]: "robust, elegant, feature rich template engine for Node.js"
- [Marked][]: "A full-featured markdown parser and compiler, written in JavaScript. Built for speed."

##### Guides

- The official [Express.js Guide][express-guide] #express #nodejs
- The official [Pug Getting Started][pug-getting-started] #pug #html
- MDN: [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) #html #dom #js
- MDN: [Guide to Event Handlers](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers) #dom #js

##### Courses

- Treehouse: [Express Basics (3h)](https://teamtreehouse.com/library/express-basics) #express #nodejs
- Treehouse: [Understanding Express Middleware (23m)](https://teamtreehouse.com/library/understanding-express-middleware-2) #express #middleware
- Code School: [Building Blocks of Express.js (5h)](https://www.codeschool.com/courses/building-blocks-of-express-js) #express #js

##### Books

- [Eloquent JavaScript](http://eloquentjavascript.net) #js
  - Especially [Chapter 20: Node.js](http://eloquentjavascript.net/20_node.html) #nodejs

##### Tutorials

- [JavaScript.info](https://javascript.info/) #js


[simple-book-store]: {{ site.url }}{% link _goals/69-Simple_Book_Store.md %}

[bossggle-word-game]: {{ site.url }}{% link _goals/251-Init_1-Bossggle_Word_Game.md %}
[bike-shop-oop]: {{ site.url }}{% link _goals/252-Init_2-OOP_Practice_with_Bike_Shop.md %}
[hello-web-servers]: {{ site.url }}{% link _goals/253-Init_3-Hello_Web_Servers.md %}
[relational-databases]: {{ site.url }}{% link _goals/254-Init_4-Relational_Databases.md %}
[web-apis]: {{ site.url }}{% link _goals/255-Init_5-Web_APIs.md %}
[developer-tools]: {{ site.url }}{% link _goals/256-Init_6-Developer_Tools.md %}

[express]: https://expressjs.com/
[express-guide]: https://expressjs.com/en/guide/routing.html
[pug]: https://pugjs.org/
[pug-getting-started]: https://pugjs.org/api/getting-started.html
[marked]: https://www.npmjs.com/package/marked

[markdown]: https://daringfireball.net/projects/markdown/syntax

[mdn-localstorage]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

[mit-license]: https://opensource.org/licenses/MIT
