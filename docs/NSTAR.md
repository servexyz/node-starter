![logo](./docs/logo/NStar.svg)

> Starting point for modules being published to npmjs.com & servers

## Getting Started

### Install

```sh
git clone https://github.com:servexyz/node-starter
```

---

## Use

### NPM Scripts - `FAQ`

<details>
<summary>Hierarchy</summary>

<h4>Parent scripts</h4>
<div style="border-left: 4px solid #E1E4E8; padding-left: 8px">The recommended way to use these parent commands is to point them at the child command that you'll use.</div>


<ul style="padding-top:5px">
<li><code>start</code> - Primary entry point; parent to dev</li>
<li><code>build</code> - Standalone command</li>
<li><code>clean</code> - Utility script; intended to be used for docker & node_modules</li>
<li><code>dev</code> - Secondary entry point; parent to test</li>
<li><code>test</code> - Secondary entry point; &lt;<code>np</code>&gt; friendly </li>
<li><code>ci</code> - Utility script; parent to local and remote CI</li>
</ul>

<h4>Why parent & child scripts instead of inline?</h4>
By structuring it this way, you will be able to:

<ul style="padding-top:5px">
<li>use consistent bash aliases across multiple projects</li> 
<li>easily add/remove child scripts as needed</li> 
<li>make reusable child scripts across multiple parent scripts</li> 
</ul>
<hr />
</details>

<details>
<summary>Intended Use Cases</summary>

</details>

### NPM Scripts - `Parents`

<details>
<summary>Start</summary>
<ul>
<li><code>start</code>: run the "dev" script</li>
</ul>

Start is your consistent entry point for developing. Because developers expect to be able to run `npm install && npm start`, I recommend leaving this to delegate to "dev".
</details>

<details>
<summary>Develop</summary>
<ul>
<li><code></code></li>
<li><code></code></li>
<li><code></code></li>
</ul>
</details>

<details>
<summary>Build</summary>
<ul>
<li><code></code></li>
<li><code></code></li>
<li><code></code></li>
</ul>
</details>

<details>
<summary>Test</summary>
There are two ways to test. 

<ul>
<li><code></code></li>
<li><code></code></li>
<li><code></code></li>
</ul>
</details>

<details>
<summary>CI</summary>
<ul>
<li><code></code></li>
<li><code></code></li>
<li><code></code></li>
</ul>

</details>

<details>
<summary>Production</summary>
<ul>
<li><code></code></li>
<li><code></code></li>
<li><code></code></li>
</ul>

</details>



##### Developing

> TLDR:
> npm run dev

- **Module with babel compile & livereload?**: `npm run dev:liveReloadedModule`
- **Module with babel compile**: `npm run dev:builtModule`
- **Module without babel compile**: `npm run dev:vanillaModule`
- **Server with babel compile & livereload?**: `npm run dev:server`
  > dev:server is having issues. For liveReload functionality, stick with `dev:liveReloadedModule`. Read about issue [here](https://github.com/servexyz/node-starter/issues/12)

##### Production

> TLDR:
> npm run build ...or... npm run publish

- **Build**: `npm run build`
- **Publish**: `npm run publish` (this publishes module to NPM)

##### Testing

> TLDR:
> npm run test

- **Test Ava Once**: `npm run test:ava`
- **Test Ava with Live Reload**: `npm run test:liveReloadedAva`

---

## Docs

##### NPM.MD

You'll notice that README.md is symlinked.

When forking, remove README.md. The `NPM.md` file will still exist in docs (that way you don't lose initial reference)

## Questions

_Why are server & module separated?_

- Module is compiled/run via CLI (using @babel/cli & nodemon)
- Server is compiled & run via webpack config (using webpack & nodemon-webpack-plugin)

---

## Related

**Internal**

- [@servexyz/npm-starter-sample-module](https://github.com/servexyz/npm-starter-sample-module)

> The purpose of npm-starter-sample-module is to ensure that imports are working (ie. confirm that webpack is building libraries properly)
