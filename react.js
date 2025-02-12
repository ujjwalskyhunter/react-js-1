

function freeze_gif(i,j) {
  var wid = j;
  var c = document.createElement('canvas');
  var w = c.width = i.width;
  var h = c.height = i.height;
  c.getContext('2d').drawImage(i, 0, 0, w, h);
  try {
    i.src = c.toDataURL("image/gif"); 
  } catch(e) { 
    for (var j = 0, a; a = i.attributes[j]; j++)
      c.setAttribute(a.name, a.value);
    i.parentNode.replaceChild(c, i,j);
  }
}

window.onload = function() {
  setTimeout(function() {
    [].slice.apply(document.images).filter(is_gif_image).map(freeze_gif);
  }, 10000);
}
