(function () {
  var KEY = 'kh_cookie_consent';
  if (localStorage.getItem(KEY)) return;

  var css = [
    '#kh-cookie{position:fixed;bottom:0;left:0;right:0;z-index:99999;',
    'background:rgba(10,11,12,.97);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);',
    'border-top:1px solid rgba(184,169,138,.18);padding:16px 32px;',
    'display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;}',
    '#kh-cookie p{font-family:"Jost",sans-serif;font-weight:300;font-size:12px;letter-spacing:.05em;',
    'color:rgba(240,235,224,.65);margin:0;line-height:1.7;max-width:640px;}',
    '#kh-cookie a{color:rgba(184,169,138,.8);text-decoration:underline;text-underline-offset:3px;}',
    '#kh-cookie-btns{display:flex;gap:10px;flex-shrink:0;}',
    '#kh-cookie button{font-family:"Jost",sans-serif;font-weight:300;font-size:10px;letter-spacing:.2em;',
    'text-transform:uppercase;cursor:pointer;border-radius:999px;padding:9px 22px;',
    'transition:all .2s;outline:none;}',
    '#kh-btn-ok{background:rgba(184,169,138,.12);border:1px solid rgba(184,169,138,.3);color:rgba(240,235,224,.85);}',
    '#kh-btn-ok:hover{background:rgba(184,169,138,.22);}',
    '#kh-btn-no{background:transparent;border:1px solid rgba(240,235,224,.1);color:rgba(240,235,224,.35);}',
    '#kh-btn-no:hover{border-color:rgba(240,235,224,.2);color:rgba(240,235,224,.55);}',
    '@media(max-width:600px){#kh-cookie{padding:14px 18px;flex-direction:column;align-items:flex-start;}',
    '#kh-cookie-btns{width:100%;}#kh-cookie button{flex:1;text-align:center;}}'
  ].join('');

  var s = document.createElement('style');
  s.textContent = css;
  document.head.appendChild(s);

  var b = document.createElement('div');
  b.id = 'kh-cookie';
  b.setAttribute('role', 'dialog');
  b.setAttribute('aria-label', 'Gestion des cookies');
  b.innerHTML =
    '<p>Ce site utilise Google Fonts, un service hébergé par Google, susceptible de déposer des cookies. ' +
    'En poursuivant votre navigation, vous en acceptez l\'utilisation. ' +
    '<a href="/mentions-legales.html">Politique de confidentialité</a></p>' +
    '<div id="kh-cookie-btns">' +
    '<button id="kh-btn-no">Refuser</button>' +
    '<button id="kh-btn-ok">Accepter</button>' +
    '</div>';
  document.body.appendChild(b);

  function dismiss(val) {
    localStorage.setItem(KEY, val);
    b.style.transition = 'opacity .35s, transform .35s';
    b.style.opacity = '0';
    b.style.transform = 'translateY(8px)';
    setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 380);
  }

  document.getElementById('kh-btn-ok').addEventListener('click', function () { dismiss('accepted'); });
  document.getElementById('kh-btn-no').addEventListener('click', function () { dismiss('refused'); });
})();
