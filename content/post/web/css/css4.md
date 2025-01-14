---
date: '2025-01-14T19:47:57+08:00'
draft: false
title: 'Css 第四章'
image: images/others/cool.jpg
---

## 简介
CSS 第四章网页排版内容

## @font-face 载入自定义字体

### 引入字体文件模板
```css
@font-face {
  font-family: 字体族的名称（自己命名）;
  src: URL;
  /* 指明触发条件 */
  font-weight: 字体粗细;
  font-style: 字体样式;
}
```

### 字体可用类型
```css
@font-face {
  font-family: Vollkorn;
  src: url('fonts/Vollkorn-Regular.eot#?ie') format('embedded-opentype'),
       url('fonts/Vollkorn-Regular.woff2') format('woff2'),
       url('fonts/Vollkorn-Regular.woff') format('woff'),
       url('fonts/Vollkorn-Regular.ttf') format('truetype'),
       url('fonts/Vollkorn-Regular.svg') format('svg');
}
```

### 指明触发条件示例
```css
@font-face {
  font-family: Vollkorn;
  src: url('fonts/Vollkorn-Medium.woff') format('woff');
  font-weight: 500;
}

@font-face {
  font-family: Vollkorn;
  src: url('fonts/Vollkorn-Bold.woff') format('woff');
  font-weight: bold;
}

h1, h2, h3, h4, h5, h6 {
  font-family: Vollkorn, Georgia, Times, 'Times New Roman', serif;
  font-weight: bold; /* 使用 Vollkorn Bold 字体 */
}

h3 {
  font-weight: 500; /* 使用 Vollkorn Medium 字体 */
}
```

## Web Font Loader 字体加载感知

:heart: [Web Font Loader Github](https://github.com/typekit/webfontloader)

### 事件接入点
- loading: 开始加载字体
- active: 字体加载完成
- inactive: 字体加载失败

js
```html
<script type="text/javascript">
  WebFontConfig = {
    custom: {
      families: ['AlegreyaSans:n4,i4', 'Vollkorn:n6,n5,n7'],
      urls: ['css/alegreya-vollkorn.css']
    }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
</script>
```
css
```css
body {
  font-family: Helvetica, arial, sans-serif;
}

.wf-alegreya-n4-active body {
  font-family: Alegreya, Helvetica, arial, sans-serif;
}
```

## text-shadow 文本阴影效果

语法
```css
.shadow {
  text-shadow: h-shadow v-shadow blur color;
}
```

属性值
| 值 | 描述 |
| :--- | :--- |
| h-shadow | 必需。水平阴影的位置。允许负值。 |
| v-shadow | 必需。垂直阴影的位置。允许负值。 |
| blur | 可选。模糊的距离。 |
| color | 可选。阴影的颜色。 |

## js 库
[fitText.js][1]：jQuery插件，让文本随页面大小缩放。<br>
[BitText.js][2]：让一行文本放大到尽可能与包含它的容器一般大。<br>
[Widowadjust][3]：通过在一段的末尾每隔一定距离就在单词间插入非换行空白符，防止出现意外的孤行。

[1]: https://github.com/davatron5000/FitText.js "fitText.js GitHub页面"
[2]: https://github.com/zachleat/BigText "BitText.js GitHub页面"
[3]: https://github.com/nathanford/widowadjust "widowadjust GitHub页面"