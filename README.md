# hexo-tag-instagram

Simply Embed Instagram photo and movie tag plugin for [Hexo](https://github.com/hexojs/hexo).

## Introduction

This is a Hexo tag plugin which allows you to simply embed Instagram photo on your blog posts.

## DEMO

- [https://photo-tea.com/p/hexo-tag-instagram/](https://photo-tea.com/p/hexo-tag-instagram/)
- [https://blog.eson.org/pub/fc959554/)](https://blog.eson.org/pub/fc959554/)

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

For example, if you want embed [this posts](https://www.instagram.com/p/BXkz1bYB1-N/) (This posts shortcode is *BXkz1bYB1-N*), please enter the following this.

```
{% instagram https://www.instagram.com/p/BXkz1bYB1-N/ %}
```

Also, the above example can coding differently.

```
{% instagram BXkz1bYB1-N %}
```


## Customization

This plugin can specify the following options.

- captioned
- width

## caption & size

You can decide whether to display the caption of posts of instagram. ( By default the caption is displayed. )

Please edit your `_config.yml` as following example.

```
# captioned: false. Hide the captions of all instagrams.
# width: set the width of all instagrams
tagInstagram:
  captioned: false
  width: 50%
```

Also, can customize individually by posts. please edit your `your-posts-markdown.md` as following example.

```
{% instagram false 50% https://www.instagram.com/p/BXkz1bYB1-N/ %}
```

## License

MIT

[Hexo]: http://hexo.io/
