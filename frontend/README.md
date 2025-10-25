# Frontend – Angular

This directory contains the Angular frontend for the CMS.  At the moment it provides a very simple scaffold:

- A minimal `AppComponent` with a placeholder view.
- A lightweight `AppModule` that bootstraps the root component.
- A basic `index.html` and TypeScript configuration.

You can build on top of this structure to implement your CMS’s visual editor.  Consider adding:

* Drag‑and‑drop builders using the Angular CDK.
* Rich text editors (e.g. Tiptap, ngx‑quill) for content editing.
* Service classes for communicating with the NestJS backend.
* Routing and authentication for multi‑page admin experiences.

To run this project locally you will need to install Angular’s dependencies (see `package.json`) and set up an Angular build pipeline (for example using Vite or Angular CLI).  For now, this repository simply provides placeholders – you are free to choose your own tooling.