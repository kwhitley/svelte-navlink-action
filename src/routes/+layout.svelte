<script>
  import { navlink } from '../lib/index'
</script>

<ul>
  <li><a href="/" use:navlink={{ exact: true }}>Home</a></li>
  <li><a href="/foo" use:navlink>Foo (default)</a></li>
  <li><a href="/foo" use:navlink={{ exact: true }}>Foo (exact)</a></li>
  <li><a href="/foo/1" use:navlink>foo/1</a></li>
  <li><a href="/foo/2" use:navlink>foo/2</a></li>
  <li><a href="/foo/3" use:navlink>foo/3</a></li>
  <li><a href="/foo/3" use:navlink={{ exact: true }}>foo/3 (exact)</a></li>
  <li><a href="/foo/3?foo" use:navlink>foo/3?foo</a></li>
  <li><a href="?foo" use:navlink>?foo</a></li>
</ul>

<hr />

<slot />

<style>
  a:global(.active) {
    color: red;
  }
</style>
