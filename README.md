# hexo-tag-instagram

Embed Instagram photo and movie tag plugin for [Hexo](https://github.com/hexojs/hexo).

## Introduction

This is a Hexo tag plugin which allows you to embed Instagram photo on your blog posts.

## DEMO

[https://tea3.github.io/p/hexo-tag-instagram/](https://tea3.github.io/p/hexo-tag-instagram/)

## Installation

```
npm install hexo-tag-instagram --save
```

## Usage

```
{% instagram post-url %}
```

or

```
{% instagram shortcode %}
```

## Example

For example, if you want embed [this posts](https://www.instagram.com/p/8ppwIyE6lU/) (This posts shortcode is *8ppwIyE6lU*), please enter the following this.

```
{% instagram https://www.instagram.com/p/8ppwIyE6lU/ %}
```

Also, the above example can coding differently.

```
{% instagram 8ppwIyE6lU %}
```

## License

MIT

[Hexo]: http://hexo.io/