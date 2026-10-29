// Dil seçimi: ?lang=en / ?lang=tr, yoksa tarayıcı dili; seçim hatırlanır
(function () {
  var html = document.documentElement;
  var pick = new URLSearchParams(location.search).get('lang');
  try { pick = pick || localStorage.getItem('templatehouse-lang'); } catch (e) {}
  pick = pick || ((navigator.language || '').toLowerCase().startsWith('tr') ? 'tr' : 'en');
  function set(l) {
    html.lang = l;
    document.querySelectorAll('.lang button').forEach(function (b) { b.classList.toggle('on', b.dataset.l === l); });
    try { localStorage.setItem('templatehouse-lang', l); } catch (e) {}
  }
  document.querySelectorAll('.lang button').forEach(function (b) { b.onclick = function () { set(b.dataset.l); }; });
  set(pick === 'tr' ? 'tr' : 'en');
})();
