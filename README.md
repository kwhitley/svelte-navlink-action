# svelte-navlink-action

[![Version](https://img.shields.io/npm/v/svelte-navlink-action.svg?style=flat-square)](https://npmjs.com/package/svelte-navlink-action)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/svelte-navlink-action?style=flat-square)](https://bundlephobia.com/result?p=svelte-navlink-action)
![Build Status](https://img.shields.io/github/workflow/status/kwhitley/svelte-navlink-action/build?style=flat-square)
[![Coverage Status](https://img.shields.io/coveralls/github/kwhitley/svelte-navlink-action/v0.x?style=flat-square)](https://coveralls.io/github/kwhitley/svelte-navlink-action?branch=v0.x)
[![NPM Weekly Downloads](https://img.shields.io/npm/dw/svelte-navlink-action?style=flat-square)](https://npmjs.com/package/svelte-navlink-action)
[![Open Issues](https://img.shields.io/github/issues/kwhitley/svelte-navlink-action?style=flat-square)](https://github.com/kwhitley/svelte-navlink-action/issues)

[![Discord](https://img.shields.io/discord/832353585802903572?style=flat-square)](https://discord.com/channels/832353585802903572)
[![GitHub Repo stars](https://img.shields.io/github/stars/kwhitley/svelte-navlink-action?style=social)](https://github.com/kwhitley/svelte-navlink-action)
[![Twitter](https://img.shields.io/twitter/follow/kevinrwhitley.svg?style=social&label=Follow)](https://www.twitter.com/kevinrwhitley)

Minimalist Svelte action to simply inject an `active` class into route-matched links.  Styling is up to you!

## Example
###### // Component.svelte
```svelte
<script>
  import { navlink } from 'svelte-navlink-action'
</script>

<!-- MARKUP -->
<ul>
  <li><a href="/" use:navlink>Home</a></li>
  <li><a href="/foo" use:navlink>Foo (default/exact)</a></li>
  <li><a href="/foo" use:navlink={{ exact: false }}>Foo (exact=false)</a></li>
  <li><a href="/foo/1" use:navlink>foo/1</a></li>
  <li><a href="/foo/2" use:navlink>foo/2</a></li>
  <li><a href="/foo/3" use:navlink>foo/3</a></li>
</ul>

<!-- STYLES -->
<!-- alternatively just add the appropriate .active class styles to an imported stylesheet -->
<style>
  :global(a.active) {
    color: red;
  }
</style>
```

## API
#### `use:navlink` || `use:navlink={{ exact?: boolean = false }}`

| Name | Type(s) | Default | Description |
| --- | --- | --- | --- |
| `exact` | `boolean` | **false** | Requires an exact url match if set to true, otherwise will match off the base-path of the url.
