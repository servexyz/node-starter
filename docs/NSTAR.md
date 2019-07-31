![logo](./docs/logo/NStar.svg)

> Starting point for node modules and servers

## Getting Started

### Install

```sh
git clone https://github.com:servexyz/node-starter
```

---

## Use

### NPM Scripts

<details>
<summary>Hierarchy</summary>

<h4>Parent scripts</h4>
<div style="border-left: 4px solid #E1E4E8; padding-left: 8px">The recommended way to use these parent commands is to point them at the child command that you'll use.</div>


<ul style="padding-top:5px">
<li><code>start</code> - Primary entry point; parent to dev</li>
<li><code>build</code> - Utility script; parent to build options</li>
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
<summary>Use Case Overview</summary>

<h4>start</h4>
JS Developers are trained to <code>npm install</code> and <code>npm start</code>. In keeping with that tradition, start should point to your default developer experience. 

<h4>build</h4>
Run webpack for the specified environment. Read more about difference in webpack modes <a href="https://webpack.js.org/configuration/mode/">here</a> 

<h4>clean</h4>
Remove build or docker containers.

<h4>dev</h4>
Run your package with babel, nodemon or docker. Live reload watches changes and updatse your build for you automatically. 


<h4>docker</h4>
Compose your containers (see <a href="https://github.com/servexyz/node-starter/blob/master/docker-compose.yml">docker-compose.yml</a> for more info) or live reload your docker containers (currently uses <a href="https://www.npmjs.com/package/docker-live-reload">docker-live-reload</a>)


<h4>test</h4>
Unit tests, via <a href="npmjs.com/package/ava">ava</a>


<h4>production</h4>
This is a standalone script which builds and runs your script with <code>node</code>

<h4>ci</h4>
Run travis (CI) environment locally via trevor and test dependency vulnerabilities with snyk. The <code>ci:remote</code> script is called by travis.yml
<h4>
<hr />
</details>

#### npm run `start`

```json
{
  "start": "npm run dev"
}
```

#### npm run `build`

```json
{
  "build": "npm run build:prod",
  "build:prod": "webpack --mode production --display minimal",
  "build:dev": "webpack --mode development --display minimal",
}
```

#### npm run `clean`

```json
{
  "clean": "npm run clean:build",
  "clean:build": "rm -Rf ./build",
  "clean:docker": "docker rm -f $(docker ps -aqf 'name=node-starter')"
}
```

#### npm run `dev`

```json
{
  "dev": "npm run dev:liveReloadedModuleAndTests",
  "dev:vanillaModule": "babel-node src/index.js",
  "dev:liveReloadedModule": "nodemon --watch src/index.js --exec 'babel-node src/index.js'",
  "dev:liveReloadedDocker": "npm-run-all -p docker:compose dev:liveReloadedModule docker:liveReload ",
  "dev:liveReloadedModuleAndTests": "npm-run-all -s clean:build build test:liveReloadedAva" 
}
```

#### npm run `docker`

```json
{
  "docker:liveReload": "npx docker-live-reload 'src/**/*' node-starter_server_1 /usr/src/server/src",
  "docker:compose": "docker-compose up -d"
}
```

#### npm run `test`

```json
{
  "test": "npm run test:ava",
  "test:ava": "ava",
  "test:liveReloadedAva": "ava --watch"
}
```

#### npm run `production`

```json
{
  "production": "npm run build && node build/main.js"
}
```

#### npm run `ci`

```json
{
  "ci": "npm-run-all -s build ci:local:timed:vuln",
  "ci:snyk": "snyk test",
  "ci:remote": "npm-run-all -s clean:build build test:ava",
  "ci:local": "trevor",
  "ci:local:timed": "npm run ci:local | gnomon --type=elapsed-total",
  "ci:local:timed:vuln": "npm-run-all -p ci:snyk ci:local | gnomon --type=elapsed-total",
  "ci:local:cache:install": "docker pull verdaccio/verdaccio",
  "ci:local:cache:run": "docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio",
  "ci:prepare": "npm install -g trevor gnomon"
}
```
---

## Customizing

#### README.MD --> docs/NSTAR.MD

You'll notice that README.md is symlinked.

When forking, remove README.md. The `NSTAR.md` file will still exist in docs (in case you want to reference any of this later)

#### Cleanup Scripts (Future Goal)

As opposed to the common reject pattern, the goal of node-starter is to keep everything exposed. Meanwhile, you'll have the option to "cleanup" for specific use cases (CLI, library, server, container)
