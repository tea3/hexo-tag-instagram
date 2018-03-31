# hexo-tag-instagram

Simply Embed Instagram photo and movie tag plugin for [Hexo](https://github.com/hexojs/hexo).

## Introduction

This is a Hexo tag plugin which allows you to simply embed Instagram photo on your blog posts.

## DEMO

[https://photo-tea.com/p/hexo-tag-instagram/](https://photo-tea.com/p/hexo-tag-instagram/)

## Installation

```
npm install hexo-tag-instagram --save
```

## Usage

```
{% instagram url:post-url %}
```

or

```
{% instagram id:shortcode %}
```

## Example

For example, if you want embed [this posts](https://www.instagram.com/p/BXkz1bYB1-N/) (This posts shortcode is *BXkz1bYB1-N*), please enter the following this.

```
{% instagram url:https://www.instagram.com/p/BXkz1bYB1-N/ %}
```

Also, the above example can coding differently.

```
{% instagram id:BXkz1bYB1-N %}
```

You can also resize image.

```
{% instagram width:50% id:BXkz1bYB1-N %}
```


## Option

This plugin can specify the following options.

### Caption option

You can decide whether to display the caption of posts of instagram. ( By default the caption is displayed. )

Please edit your `_config.yml` as following example.

```
# Hide the captions of all instagrams.
tagInstagram:
  captioned: false
```

Also, can customize individually by posts. please edit your `your-posts-markdown.md` as following example.

```
{% instagram captioned:false url:https://www.instagram.com/p/BXkz1bYB1-N/ %}
```

## License

MIT

[Hexo]: http://hexo.io/
