---
layout: dev
title: Developer Docs
---

<section id="sec0">

##Section 0

Praesent vehicula euismod lectus quis blandit. Sed metus leo, lacinia a scelerisque eu, adipiscing nec metus. Donec vel sollicitudin turpis. Nulla facilisi. Integer id magna volutpat, lacinia sem et, feugiat lorem. Nullam scelerisque, justo mattis congue porta, magna ipsum placerat eros, eu bibendum augue lorem sed erat. Phasellus porttitor lacus vel blandit blandit. Pellentesque at libero mi. Fusce ut dapibus velit, in auctor massa. Ut elit nibh, varius vel blandit ut, bibendum eget odio. Vestibulum fermentum augue nec eros sollicitudin tempor. Suspendisse commodo quam eget tincidunt ornare. Quisque quis convallis nisl. Sed lacus nulla, laoreet in diam eu, pharetra imperdiet mauris. Donec a tincidunt velit.

```css
#sidebar li a {
	color: #808080;
}

#sidebar>li.active>a {
	color: #F05439;
	border:0 #eee solid;
  	border-right-width:4px;
}
```

</section>

<section id="sec01">

###Section 0.1

In blandit metus leo, ac suscipit arcu scelerisque bibendum. Praesent pharetra eu arcu a faucibus. Proin id consectetur nisl. Nulla dapibus facilisis ipsum, vitae ultrices nibh placerat et.

```javascript
var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
```

</section>

<section id="sec02">

###Section 0.2

Ligula sit amet pharetra suscipit, velit metus adipiscing orci, id euismod massa nisi vel lectus. Nullam aliquet est a est imperdiet, id mattis nulla tempor. Ut risus nisi, ornare malesuada nisl ut, auctor sagittis lectus.

```javascript
$('#sidebar').affix({
      offset: {
        top: 150,
        bottom: function () {
            return (this.bottom = $('footer').outerHeight(true) + 15)
        }
      }
});
```

</section>

<section id="sec03">

###Section 0.3

Pellentesque varius ipsum enim, nec commodo nulla iaculis eget. Integer nec leo vitae velit imperdiet venenatis nec eu magna. Pellentesque pharetra nibh vitae felis venenatis consequat. Maecenas egestas.

```javascript
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}
```

</section>

***

<section id="sec1">

##Section 1

Praesent vehicula euismod lectus quis blandit. Sed metus leo, lacinia a scelerisque eu, adipiscing nec metus. Donec vel sollicitudin turpis. Nulla facilisi. Integer id magna volutpat, lacinia sem et, feugiat lorem. Nullam scelerisque, justo mattis congue porta, magna ipsum placerat eros, eu bibendum augue lorem sed erat. Phasellus porttitor lacus vel blandit blandit. Pellentesque at libero mi. Fusce ut dapibus velit, in auctor massa. Ut elit nibh, varius vel blandit ut, bibendum eget odio. Vestibulum fermentum augue nec eros sollicitudin tempor. Suspendisse commodo quam eget tincidunt ornare. Quisque quis convallis nisl. Sed lacus nulla, laoreet in diam eu, pharetra imperdiet mauris. Donec a tincidunt velit.

Praesent dui turpis, adipiscing ultricies nibh ac, venenatis lobortis eros. Ut id tincidunt purus. Morbi consequat at nisi quis scelerisque. Quisque in cursus ligula, vitae adipiscing ipsum. Ut eget risus at quam molestie fermentum pretium at augue. Proin vulputate ut diam id viverra. Sed a sollicitudin purus. Donec non massa nisl. Proin volutpat magna velit, vitae pellentesque elit bibendum iaculis. Etiam non tortor fringilla massa scelerisque varius. Aliquam erat volutpat. Cras iaculis nibh non elit molestie scelerisque. Aenean ultrices arcu quis lectus tincidunt elementum.

In blandit metus leo, ac suscipit arcu scelerisque bibendum. Praesent pharetra eu arcu a faucibus. Proin id consectetur nisl. Nulla dapibus facilisis ipsum, vitae ultrices nibh placerat et. Pellentesque varius ipsum enim, nec commodo nulla iaculis eget. Integer nec leo vitae velit imperdiet venenatis nec eu magna. Pellentesque pharetra nibh vitae felis venenatis consequat. Maecenas egestas, ligula sit amet pharetra suscipit, velit metus adipiscing orci, id euismod massa nisi vel lectus. Nullam aliquet est a est imperdiet, id mattis nulla tempor. Ut risus nisi, ornare malesuada nisl ut, auctor sagittis lectus.

</section>

***

<section id="sec2">

##Section 2

Praesent vehicula euismod lectus quis blandit. Sed metus leo, lacinia a scelerisque eu, adipiscing nec metus. Donec vel sollicitudin turpis. Nulla facilisi. Integer id magna volutpat, lacinia sem et, feugiat lorem. Nullam scelerisque, justo mattis congue porta, magna ipsum placerat eros, eu bibendum augue lorem sed erat. Phasellus porttitor lacus vel blandit blandit. Pellentesque at libero mi. Fusce ut dapibus velit, in auctor massa. Ut elit nibh, varius vel blandit ut, bibendum eget odio. Vestibulum fermentum augue nec eros sollicitudin tempor. Suspendisse commodo quam eget tincidunt ornare. Quisque quis convallis nisl. Sed lacus nulla, laoreet in diam eu, pharetra imperdiet mauris. Donec a tincidunt velit.

Praesent dui turpis, adipiscing ultricies nibh ac, venenatis lobortis eros. Ut id tincidunt purus. Morbi consequat at nisi quis scelerisque. Quisque in cursus ligula, vitae adipiscing ipsum. Ut eget risus at quam molestie fermentum pretium at augue. Proin vulputate ut diam id viverra. Sed a sollicitudin purus. Donec non massa nisl. Proin volutpat magna velit, vitae pellentesque elit bibendum iaculis. Etiam non tortor fringilla massa scelerisque varius. Aliquam erat volutpat. Cras iaculis nibh non elit molestie scelerisque. Aenean ultrices arcu quis lectus tincidunt elementum.

In blandit metus leo, ac suscipit arcu scelerisque bibendum. Praesent pharetra eu arcu a faucibus. Proin id consectetur nisl. Nulla dapibus facilisis ipsum, vitae ultrices nibh placerat et. Pellentesque varius ipsum enim, nec commodo nulla iaculis eget. Integer nec leo vitae velit imperdiet venenatis nec eu magna. Pellentesque pharetra nibh vitae felis venenatis consequat. Maecenas egestas, ligula sit amet pharetra suscipit, velit metus adipiscing orci, id euismod massa nisi vel lectus. Nullam aliquet est a est imperdiet, id mattis nulla tempor. Ut risus nisi, ornare malesuada nisl ut, auctor sagittis lectus.

</section>

***

<section id="sec3">

##Section 3

Praesent vehicula euismod lectus quis blandit. Sed metus leo, lacinia a scelerisque eu, adipiscing nec metus. Donec vel sollicitudin turpis. Nulla facilisi. Integer id magna volutpat, lacinia sem et, feugiat lorem. Nullam scelerisque, justo mattis congue porta, magna ipsum placerat eros, eu bibendum augue lorem sed erat. Phasellus porttitor lacus vel blandit blandit. Pellentesque at libero mi. Fusce ut dapibus velit, in auctor massa. Ut elit nibh, varius vel blandit ut, bibendum eget odio. Vestibulum fermentum augue nec eros sollicitudin tempor. Suspendisse commodo quam eget tincidunt ornare. Quisque quis convallis nisl. Sed lacus nulla, laoreet in diam eu, pharetra imperdiet mauris. Donec a tincidunt velit.

Praesent dui turpis, adipiscing ultricies nibh ac, venenatis lobortis eros. Ut id tincidunt purus. Morbi consequat at nisi quis scelerisque. Quisque in cursus ligula, vitae adipiscing ipsum. Ut eget risus at quam molestie fermentum pretium at augue. Proin vulputate ut diam id viverra. Sed a sollicitudin purus. Donec non massa nisl. Proin volutpat magna velit, vitae pellentesque elit bibendum iaculis. Etiam non tortor fringilla massa scelerisque varius. Aliquam erat volutpat. Cras iaculis nibh non elit molestie scelerisque. Aenean ultrices arcu quis lectus tincidunt elementum.

In blandit metus leo, ac suscipit arcu scelerisque bibendum. Praesent pharetra eu arcu a faucibus. Proin id consectetur nisl. Nulla dapibus facilisis ipsum, vitae ultrices nibh placerat et. Pellentesque varius ipsum enim, nec commodo nulla iaculis eget. Integer nec leo vitae velit imperdiet venenatis nec eu magna. Pellentesque pharetra nibh vitae felis venenatis consequat. Maecenas egestas, ligula sit amet pharetra suscipit, velit metus adipiscing orci, id euismod massa nisi vel lectus. Nullam aliquet est a est imperdiet, id mattis nulla tempor. Ut risus nisi, ornare malesuada nisl ut, auctor sagittis lectus.

</section>

***

<section id="sec4">

##Section 4

Praesent vehicula euismod lectus quis blandit. Sed metus leo, lacinia a scelerisque eu, adipiscing nec metus. Donec vel sollicitudin turpis. Nulla facilisi. Integer id magna volutpat, lacinia sem et, feugiat lorem. Nullam scelerisque, justo mattis congue porta, magna ipsum placerat eros, eu bibendum augue lorem sed erat. Phasellus porttitor lacus vel blandit blandit. Pellentesque at libero mi. Fusce ut dapibus velit, in auctor massa. Ut elit nibh, varius vel blandit ut, bibendum eget odio. Vestibulum fermentum augue nec eros sollicitudin tempor. Suspendisse commodo quam eget tincidunt ornare. Quisque quis convallis nisl. Sed lacus nulla, laoreet in diam eu, pharetra imperdiet mauris. Donec a tincidunt velit.

Praesent dui turpis, adipiscing ultricies nibh ac, venenatis lobortis eros. Ut id tincidunt purus. Morbi consequat at nisi quis scelerisque. Quisque in cursus ligula, vitae adipiscing ipsum. Ut eget risus at quam molestie fermentum pretium at augue. Proin vulputate ut diam id viverra. Sed a sollicitudin purus. Donec non massa nisl. Proin volutpat magna velit, vitae pellentesque elit bibendum iaculis. Etiam non tortor fringilla massa scelerisque varius. Aliquam erat volutpat. Cras iaculis nibh non elit molestie scelerisque. Aenean ultrices arcu quis lectus tincidunt elementum.

In blandit metus leo, ac suscipit arcu scelerisque bibendum. Praesent pharetra eu arcu a faucibus. Proin id consectetur nisl. Nulla dapibus facilisis ipsum, vitae ultrices nibh placerat et. Pellentesque varius ipsum enim, nec commodo nulla iaculis eget. Integer nec leo vitae velit imperdiet venenatis nec eu magna. Pellentesque pharetra nibh vitae felis venenatis consequat. Maecenas egestas, ligula sit amet pharetra suscipit, velit metus adipiscing orci, id euismod massa nisi vel lectus. Nullam aliquet est a est imperdiet, id mattis nulla tempor. Ut risus nisi, ornare malesuada nisl ut, auctor sagittis lectus.

</section>