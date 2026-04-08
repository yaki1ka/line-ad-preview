/**
 * lstep-css-preview / data/samples.js
 * ─────────────────────────────────────
 * Lステップ CSS プレビュアー — サンプルCSSデータ & メタ情報
 *
 * ★ サンプルを追加する手順（Claude Codeへの指示例）:
 *   1. SAMPLES に 'キー': `CSSコード` を追加
 *   2. CLAUDE_SAMPLES or CLAUDE_SAMPLES2 に同様に追加
 *   3. Object.assign の行でマージされていることを確認
 *   4. SAMPLE_META に { primary: '#メインカラー' } を追加
 *   5. css-preview.html の #sampleScroll 内にラジオ項目を追加
 * ─────────────────────────────────────
 */

const SAMPLES = {

'1': `/* 女性/可愛い系 - コーチコンサル汎用 */
@import url('https://fonts.googleapis.com/css2?family=Corinthia&display=swap');

.form-top {
  background: linear-gradient(to bottom, #F9F3F3 55%, #E4EFF4);
  padding: 10px 0 30px;
}
.form-top .form-top-left { padding-top: 0; }
.form-top .form-top-left p {
  background: #fff;
  border-radius: 8px;
  padding: 25px 16px;
  box-shadow: 0 0 0 7px #fff;
  margin: 0 40px;
}
.form-top .form-top-left h3 {
  width: 100%;
  padding: 20px;
  background: #fff;
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
  box-shadow: 0 5px 0 5px #fff, 0 -5px 0 5px #fff;
}
.form-top .form-top-left h3::before {
  content: 'Koko ni Title ireru';
  font-family: 'Corinthia', cursive;
  display: block;
  color: rgb(214,214,214);
  text-align: center;
  font-size: 32px;
  letter-spacing: 0.05em;
  font-weight: 400;
  margin-bottom: 15px;
}
.form-top .form-top-left h3::after {
  content: '';
  display: block;
  width: 150px;
  height: 10px;
  background: #FFE0D6;
  margin: 30px auto;
}
.form-editor { opacity: 0; animation: fadeIn 1s .5s forwards; }
@keyframes fadeIn { 0% { opacity: 0; transform: translateY(5px); } 100% { opacity: 1; transform: translateY(0); } }
a { color: #eab4b5; }
.description-md-title { display: flex; background-color: initial; color: initial; padding: initial; margin: initial; box-shadow: initial; }
h4.description-md-title { color: #666; text-align: center; flex-direction: column; letter-spacing: 0.05em; margin-bottom: 2.5em; margin-top: 2em; }
h4.description-md-title::after { content: '▼▲▼▲▼▲'; letter-spacing: 1em; color: #FFE0D6; display: block; margin-top: 20px; }
h5.description-title { padding-bottom: 7px; border-bottom: 5px dotted #C5DCE3; font-weight: bold; }
.btn { background: #eab4b5; border-color: #eab4b5; padding: 16px; border-radius: 100rem; overflow: hidden; position: relative; }
.btn-primary:hover { background: #eab4b5; border-color: #eab4b5; }
.btn::after { content: ''; position: absolute; top: -10%; left: -20%; width: 40px; height: 100%; transform: scale(2) rotate(20deg); background-image: linear-gradient(100deg, rgba(255,255,255,0) 10%, rgba(255,255,255,.5) 100%, rgba(255,255,255,0) 0%); animation: shiny 2.5s ease-in-out infinite; }
@keyframes shiny { 0% { transform: scale(0) rotate(25deg); opacity: 0; } 50% { transform: scale(1) rotate(25deg); opacity: 1; } 100% { transform: scale(50) rotate(25deg); opacity: 0; } }
.form-control { border-color: #eab4b5; }
.form-control:focus { border-color: #eab4b5; box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(242 156 159 / 60%); }
.radio-inline input[type=radio]:after, .radio input[type=radio]:after, input[type=radio]:after { border-color: #eab4b5; }
.radio-inline input[type=radio]:before, .radio input[type=radio]:before, input[type=radio]:before { background-color: #eab4b5; }
.radio-inline input[type=radio]:checked:after, .radio input[type=radio]:checked:after, input[type=radio]:checked:after { border-color: #eab4b5; }
.checkbox-inline input[type=checkbox]:after, .checkbox input[type=checkbox]:after, input[type=checkbox]:after { border-color: #eab4b5; }
.checkbox-inline input[type=checkbox]:checked:after, .checkbox input[type=checkbox]:checked:after, input[type=checkbox]:checked:after { background-color: #eab4b5; border-color: #eab4b5; }
.has-success .checkbox, .has-success .checkbox-inline, .has-success.checkbox-inline label, .has-success.checkbox label, .has-success .control-label, .has-success .help-block, .has-success .radio, .has-success .radio-inline, .has-success.radio-inline label, .has-success.radio label { color: inherit; }
.has-success .form-control { border-color: #eab4b5; }
.form-group .form-text > label::before { content: '●'; color: #eab4b5; }
.label-danger { background-color: #c25d5e; }
@media (max-width: 767px) { .form-bottom { padding: 25px 15px; } }`,

'2': `/* 男性/スタイリッシュ - コーチコンサル系 */
.fieldsets { background: #fff; }
.form-top { padding-left: 0; padding-right: 0; border-radius: 0; }
.form-top .form-top-left { padding-top: 0; }
.form-top .form-top-left p { padding: 40px 30px 0; line-height: 2; }
.form-top .form-top-left h3 {
  background: linear-gradient(180deg, #254BAB 0%, #1E66C2 47.4%, #63D0D7 100%);
  clip-path: polygon(0 0, 100% 0%, 100% 87%, 0% 100%);
  padding: 75px 30px 100px;
  color: #fff;
  width: 100%;
  font-size: 16px;
}
.form-top .form-top-left h3::before { display: block; content: '新しい未来をここからはじめよう'; font-size: 32px; font-weight: 900; line-height: 1.46; margin-bottom: 20px; }
.form-editor { opacity: 0; animation: fadeIn .5s .5s ease-in-out forwards; }
@keyframes fadeIn { 0% { opacity: 0; transform: translateY(5px); } 100% { opacity: 1; transform: translateY(0); } }
a { color: #0558B7; text-decoration: underline; }
.description-md-title { display: flex; background-color: initial; color: initial; padding: initial; margin: initial; box-shadow: initial; }
h4.description-md-title { color: #0558B7; font-weight: 900; flex-direction: column; font-size: 24px; margin-bottom: 20px; margin-top: 2em; line-height: 1.46; }
h4.description-md-title::after { content: ''; display: block; width: 165px; height: 10px; margin-top: 18px; background: linear-gradient(to right, #0040E5, #00AAE0); }
h5.description-title { color: #0558B7; font-size: 18px; padding-bottom: 7px; border-bottom: 1px solid #AFAFAF; font-weight: bold; margin-top: 20px; }
.btn { background: #0558B7; border-color: #0558B7; padding: 16px; border-radius: 4px; overflow: hidden; position: relative; }
.btn-primary:hover { background: #0558B7; border-color: #0558B7; }
.btn::after { content: ''; position: absolute; top: -10%; left: -20%; width: 40px; height: 100%; background-image: linear-gradient(100deg, rgba(255,255,255,0) 10%, rgba(255,255,255,.5) 100%, rgba(255,255,255,0) 0%); animation: shiny 1.5s ease-in-out infinite; }
@keyframes shiny { 0% { transform: scale(0) rotate(25deg); opacity: 0; } 50% { transform: scale(1) rotate(25deg); opacity: 1; } 100% { transform: scale(50) rotate(25deg); opacity: 0; } }
.form-control { border-color: #D3D3D3; }
.form-control:focus { border-color: #D3D3D3; box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%); }
.radio-inline input[type=radio]:after, .radio input[type=radio]:after, input[type=radio]:after { border-color: #D3D3D3; }
.radio-inline input[type=radio]:before, .radio input[type=radio]:before, input[type=radio]:before { background-color: #0558B7; }
.radio-inline input[type=radio]:checked:after, .radio input[type=radio]:checked:after, input[type=radio]:checked:after { border-color: #D3D3D3; }
.checkbox-inline input[type=checkbox]:after, .checkbox input[type=checkbox]:after, input[type=checkbox]:after { border-color: #D3D3D3; }
.checkbox-inline input[type=checkbox]:checked:after, .checkbox input[type=checkbox]:checked:after, input[type=checkbox]:checked:after { background-color: #0558B7; border-color: #0558B7; }
.has-success .checkbox, .has-success .checkbox-inline, .has-success.checkbox-inline label, .has-success.checkbox label, .has-success .control-label, .has-success .help-block, .has-success .radio, .has-success .radio-inline, .has-success.radio-inline label, .has-success.radio label { color: inherit; }
.has-success .form-control { border-color: #D3D3D3; }
.label-danger { background-color: #0558B7; }
.form-group .form-text > .text-break { margin-bottom: 16px; }
.form-group { margin-bottom: 20px; }
@media (max-width: 767px) { .form-bottom { padding: 25px 15px; } }`,

'3': `/* 女性/エレガント - コーチコンサル系 */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Zen+Old+Mincho:wght@400;700&display=swap');
.fieldsets { background: #EFF1F7; }
p { font-size: 14px; color: #663434; }
.form-top { padding-left: 20px; padding-right: 20px; padding-bottom: 40px; border-radius: 0; background: linear-gradient(180deg, #E5E1FF 10.42%, rgba(255,236,252,0.633721) 50%, rgba(255,255,255,0) 100%); }
.form-top .form-top-left { padding-top: 0; }
.form-top .form-top-left p { padding: 20px; color: #663434; font-size: 14px; line-height: 2.14; background: #FFFFFF; box-shadow: 0px 0px 4px rgba(0,0,0,0.25); margin-bottom: 0; opacity: 0; animation: fadeIn 1s .5s ease-in-out forwards; }
.form-top .form-top-left h3 { opacity: 0; animation: fadeIn 1s .25s ease-in-out forwards; padding: 215px 30px 0; margin-bottom: 80px; color: #663434; width: 100%; font-size: 16px; text-align: center; background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20width%3D%22264%22%20height%3D%22125%22%20viewBox%3D%220%200%20264%20125%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M147.729%2063.99C137.017%2058.9095%20129.198%2048.5243%20127%2036C124.793%2048.5243%20116.983%2058.9095%20106.271%2063.99C104.186%2064.9819%2099%2066.5%2099%2066.5C99%2066.5%20104.186%2068.0181%20106.271%2069.01C116.983%2074.0905%20124.802%2084.4757%20127%2097C129.207%2084.4757%20137.017%2074.0905%20147.729%2069.01C149.814%2068.0181%20155%2066.5%20155%2066.5C155%2066.5%20149.814%2064.9819%20147.729%2063.99Z%22%20fill%3D%22white%22%2F%3E%3Ccircle%20cx%3D%226%22%20cy%3D%22103%22%20r%3D%226%22%20fill%3D%22white%22%2F%3E%3Ccircle%20cx%3D%22224%22%20cy%3D%2219%22%20r%3D%226%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E'); background-size: 264px auto; background-position: center top 58px; background-repeat: no-repeat; }
.form-top .form-top-left h3::before { display: block; content: 'Make your Dreams come true'; color: #663434; font-size: 32px; font-weight: 400; line-height: 1.333125; margin-bottom: 50px; text-align: center; font-family: 'Playfair Display', serif; }
.form-top .form-top-left h3::after { content: ''; display: block; width: 275px; height: 1px; background: #8F87EA; margin: 20px auto 0; }
@keyframes fadeIn { 0% { opacity: 0; transform: translateY(5px); } 100% { opacity: 1; transform: translateY(0); } }
.form-bottom { background: #eff1f6; }
.form-editor { opacity: 0; animation: fadeIn 1s .5s ease-in-out forwards; }
a { color: #0558B7; text-decoration: underline; }
.description-md-title { display: flex; background-color: initial; color: initial; padding: initial; margin: initial; box-shadow: initial; }
h4.description-md-title { padding: 0 8px; display: inline; color: #663434; background: #fff; font-size: 24px; font-weight: 400; line-height: 1.58333333; font-family: 'Zen Old Mincho', serif; box-decoration-break: clone; -webkit-box-decoration-break: clone; }
h4.description-md-title + * { margin-top: 20px; }
h5.description-title { color: #663434; display: inline-block; font-size: 18px; padding-bottom: 15px; border-bottom: 1px solid #8F87EA; font-family: 'Zen Old Mincho', serif; font-weight: 400; margin-top: 20px; margin-bottom: 12px; }
.btn { background: #8F87EA; border-color: #8F87EA; color: #fff; padding: 10px; border-radius: 100rem; overflow: hidden; position: relative; font-family: 'Zen Old Mincho', serif; font-weight: 400; font-size: 24px; }
.btn-primary:hover { background: #8F87EA; border-color: #8F87EA; }
.btn::after { content: ''; position: absolute; top: -10%; left: -20%; width: 40px; height: 100%; background-image: linear-gradient(100deg, rgba(255,255,255,0) 10%, rgba(255,255,255,.5) 100%, rgba(255,255,255,0) 0%); animation: shiny 2s ease-in-out infinite; }
@keyframes shiny { 0% { transform: scale(0) rotate(25deg); opacity: 0; } 50% { transform: scale(1) rotate(25deg); opacity: 1; } 100% { transform: scale(50) rotate(25deg); opacity: 0; } }
.form-control { border-color: #AFAFAF; }
.form-control:focus { border-color: #AFAFAF; box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%); }
.radio-inline input[type=radio]:after, .radio input[type=radio]:after, input[type=radio]:after { border-color: #AFAFAF; background: #fff; }
.radio-inline input[type=radio]:before, .radio input[type=radio]:before, input[type=radio]:before { background-color: #8F87EA; z-index: 1; }
.radio-inline input[type=radio]:checked:after, .radio input[type=radio]:checked:after, input[type=radio]:checked:after { border-color: #AFAFAF; background: #fff; }
.checkbox-inline input[type=checkbox]:after, .checkbox input[type=checkbox]:after, input[type=checkbox]:after { border-color: #AFAFAF; background: #fff; }
.checkbox-inline input[type=checkbox]:checked:after, .checkbox input[type=checkbox]:checked:after, input[type=checkbox]:checked:after { background-color: #8F87EA; border-color: #8F87EA; }
.has-success .checkbox, .has-success .checkbox-inline, .has-success.checkbox-inline label, .has-success.checkbox label, .has-success .control-label, .has-success .help-block, .has-success .radio, .has-success .radio-inline, .has-success.radio-inline label, .has-success.radio label { color: inherit; }
.has-success .form-control { border-color: #AFAFAF; }
.label-danger { background-color: #8F87EA; }
.form-group .form-text > .text-break { margin-bottom: 16px; }
.form-group { padding-top: 20px; margin-bottom: 20px; color: #663434; }
@media (max-width: 767px) { .form-bottom { padding: 25px 15px; } }`,

'4': `/* 男女/Z世代 - インフルエンサー・オンラインサロン系 */
.fieldsets { background: #EEEEEE; position: relative; overflow: hidden; }
p { font-size: 14px; }
.form-top { padding-top: 254px; padding-left: 30px; padding-right: 30px; padding-bottom: 40px; border-radius: 0; background: #EEEEEE; position: relative; }
.form-top .form-top-left { padding-top: 0; position: static; }
.form-top::before { transform: rotate(-45deg); content: ''; display: block; width: 315px; height: 64px; background: linear-gradient(224.79deg, #3274A4 49.7%, #FF5E5E 87.73%); border-radius: 100rem; position: absolute; top: -73px; left: -11px; z-index: 1; }
.form-top::after { transform: rotate(-45deg); content: ''; display: block; width: 315px; height: 64px; background: linear-gradient(225.59deg, #EEEEEE 22.29%, #EEEEEE 46.07%, #95BAD6 72.91%); border-radius: 100rem; position: absolute; top: 50px; left: -71px; }
fieldset::before { transform: rotate(135deg); content: ''; display: block; width: 315px; height: 64px; background: linear-gradient(47deg, #664CE6 40.1%, #3274A4 100%); border-radius: 100rem; position: absolute; top: 76px; right: -80px; z-index: 1; }
.form-top .form-top-left p { margin-top: 100px; padding: 0; line-height: 2; color: #181818; font-size: 14px; line-height: 2.14; opacity: 0; animation: fadeIn 1s .5s ease-in-out forwards; }
.form-top .form-top-left h3 { opacity: 0; animation: fadeIn 1s .25s ease-in-out forwards; position: relative; padding: 6px 10px; display: inline; color: #181818; font-weight: bold; background: #FF5E5E; font-size: 24px; box-decoration-break: clone; -webkit-box-decoration-break: clone; line-height: 2.3; z-index: 1; }
.form-top .form-top-left h3::after { content: 'インフルエンサー・オンラインサロン系'; display: block; position: absolute; top: calc(100% + 20px); left: 0; right: 0; width: calc(100vw - 30px); font-size: 18px; }
@keyframes fadeIn { 0% { opacity: 0; transform: translateY(5px); } 100% { opacity: 1; transform: translateY(0); } }
.form-bottom { background: #EEEEEE; }
.form-editor { opacity: 0; animation: fadeIn .75s .5s ease-in forwards; }
a { color: #0558B7; text-decoration: underline; }
.form-group > .form-text > div:first-child { border: 1px solid #181818; background: #fff; position: relative; color: #181818; padding: 20px; margin-bottom: 60px; }
.description-md-title { display: flex; background-color: initial; color: initial; padding: initial; margin: initial; box-shadow: initial; }
h4.description-md-title { color: #33C390; padding: 6px 10px; display: inline-block; font-weight: bold; background: #000; font-size: 18px; margin-top: 0; line-height: 1.46; margin-right: -35px; }
h5.description-title { color: #FF5E5E; font-size: 18px; padding-bottom: 15px; margin-top: 0; margin-bottom: 10px; }
.btn { background: #FF5E5E; border-color: #FF5E5E; color: #131313; padding: 10px; border-radius: 0; overflow: hidden; position: relative; font-size: 18px; font-weight: bold; animation: furu 2.2s infinite; }
@keyframes furu { 0% { transform: translate(0px,0px) rotateZ(0deg) } 2% { transform: translate(2px,2px) rotateZ(2deg) } 4% { transform: translate(0px,2px) rotateZ(0deg) } 6% { transform: translate(2px,0px) rotateZ(-2deg) } 8% { transform: translate(0px,0px) rotateZ(0deg) } 18% { transform: translate(0px,0px) rotateZ(0deg) } 100% { transform: translate(0px,0px) rotateZ(0deg) } }
.btn-primary:hover { background: #FF5E5E; border-color: #FF5E5E; }
.form-control { border-color: #181818; border-radius: 0; }
.radio-inline input[type=radio]:after, .radio input[type=radio]:after, input[type=radio]:after { border-color: #AFAFAF; background: #fff; }
.radio-inline input[type=radio]:before, .radio input[type=radio]:before, input[type=radio]:before { background-color: #2180C5; z-index: 1; }
.radio-inline input[type=radio]:checked:after, .radio input[type=radio]:checked:after, input[type=radio]:checked:after { border-color: #AFAFAF; background: #fff; }
.checkbox-inline input[type=checkbox]:after, .checkbox input[type=checkbox]:after, input[type=checkbox]:after { border-color: #AFAFAF; background: #fff; }
.checkbox-inline input[type=checkbox]:checked:after, .checkbox input[type=checkbox]:checked:after, input[type=checkbox]:checked:after { background-color: #2180C5; border-color: #2180C5; }
.has-success .checkbox, .has-success .checkbox-inline, .has-success.checkbox-inline label, .has-success.checkbox label, .has-success .control-label, .has-success .help-block, .has-success .radio, .has-success .radio-inline, .has-success.radio-inline label, .has-success.radio label { color: inherit; }
.has-success .form-control { border-color: #AFAFAF; }
.label-danger { background-color: #FF5E5E; }
.form-group .form-text > .text-break { margin-bottom: 16px; color: #3274A4; }
@media (max-width: 767px) { .form-bottom { padding: 30px; } }`,

'5': `/* 男女/さわやか - 教室・クリニック系 */
@import url('https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@700&display=swap');
.fieldsets { background: #fff; }
p { font-size: 14px; color: #414141; }
.form-top { border-radius: 0; padding: 0; position: relative; }
.form-top .form-top-left { padding-top: 0; }
.form-top .form-top-left p { padding: 20px; color: #414141; font-size: 14px; line-height: 2.14; background: #F2F2F2; border-radius: 20px; margin-bottom: 0; margin-right: 20px; margin-left: 20px; opacity: 0; animation: fadeIn 1s .5s ease-in-out forwards; }
.form-top .form-top-left h3 { opacity: 0; animation: fadeIn 1s .25s ease-in-out forwards; margin-bottom: 65px; color: #fff; width: 100%; font-size: 16px; padding: 100px calc(20% + 20px) 60px 40px; background: linear-gradient(to right, #2180C5 calc(100% - 60px), #fff calc(100% - 60px)); }
.form-top .form-top-left h3::before { display: block; content: 'あなたのそばに 寄り添うやさしさ'; color: #fff; font-size: 26px; font-weight: 700; line-height: 1.333125; margin-bottom: 50px; font-family: 'Zen Maru Gothic', sans-serif; }
.form-top .form-top-left h3::after { content: ''; display: block; width: 102px; height: 102px; background: #BBDAFF; border-radius: 50%; position: absolute; top: 100%; left: calc(100% - 60px); transform: translate(-50%, -50%); z-index: 1; }
@keyframes fadeIn { 0% { opacity: 0; transform: translateY(5px); } 100% { opacity: 1; transform: translateY(0); } }
.form-editor { opacity: 0; animation: fadeIn 1s .5s ease-in-out forwards; }
.form-group { padding-top: 20px; margin-bottom: 50px; color: #414141; }
a { color: #0558B7; text-decoration: underline; }
.description-md-title { display: flex; background-color: initial; color: initial; padding: initial; margin: initial; box-shadow: initial; }
h4.description-md-title { padding: 0 8px; color: #414141; font-size: 24px; font-weight: 700; line-height: 1.58333333; font-family: 'Zen Maru Gothic', sans-serif; position: relative; }
h4.description-md-title::after { content: ''; display: block; position: absolute; width: 63px; height: 63px; background: #BBDAFF; border-radius: 50%; top: -15px; left: -15px; z-index: -1; }
h4.description-md-title + * { margin-top: 20px; }
h5.description-title { color: #414141; display: inline-block; font-size: 18px; font-family: 'Zen Maru Gothic', sans-serif; font-weight: 700; margin-top: 20px; margin-bottom: 12px; }
h5.description-title::after { content: ''; display: block; width: 100%; height: 4px; background: #2180C5; margin-top: 15px; border-radius: 100rem; }
.btn { background: #2180C5; border-color: #2180C5; color: #fff; padding: 12px; border-radius: 100rem; overflow: hidden; position: relative; font-family: 'Zen Maru Gothic', sans-serif; letter-spacing: 0.5em; font-weight: 700; font-size: 24px; }
.btn-primary:hover { background: #2180C5; border-color: #2180C5; }
.form-control { border-color: #2180C5; border-width: 2px; background: #F2F2F2; }
.form-control:focus { border-color: #2180C5; box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%); }
.radio-inline input[type=radio]:after, .radio input[type=radio]:after, input[type=radio]:after { border-color: #AFAFAF; background: #fff; }
.radio-inline input[type=radio]:before, .radio input[type=radio]:before, input[type=radio]:before { background-color: #2180C5; z-index: 1; }
.radio-inline input[type=radio]:checked:after, .radio input[type=radio]:checked:after, input[type=radio]:checked:after { border-color: #AFAFAF; background: #fff; }
.checkbox-inline input[type=checkbox]:after, .checkbox input[type=checkbox]:after, input[type=checkbox]:after { border-color: #AFAFAF; background: #fff; }
.checkbox-inline input[type=checkbox]:checked:after, .checkbox input[type=checkbox]:checked:after, input[type=checkbox]:checked:after { background-color: #2180C5; border-color: #2180C5; }
.has-success .checkbox, .has-success .checkbox-inline, .has-success.checkbox-inline label, .has-success.checkbox label, .has-success .control-label, .has-success .help-block, .has-success .radio, .has-success .radio-inline, .has-success.radio-inline label, .has-success.radio label { color: inherit; }
.has-success .form-control { border-color: #AFAFAF; }
.label-danger { background-color: #2180C5; }
.form-group .form-text > .text-break { margin-bottom: 8px; font-family: 'Zen Maru Gothic', sans-serif; }
@media (max-width: 767px) { .form-bottom { padding: 25px 15px; } }`,

'6': `/* 男女/明るい - オンラインサロン */
.form-box { padding-top: 0px !important; }
.form-bottom { background-color: #EEFFE1; }
.form-editor { background-color: #fff; border-radius: 10px; padding: 0 !important; animation-name: fadeUpAnime; animation-duration: 1.8s; animation-fill-mode: forwards; opacity: 0; }
@keyframes fadeUpAnime { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }
.form-top { padding: 0 !important; }
.form-top-left { padding-top: 0 !important; background-color: #90BF65; background-image: linear-gradient(#B9D69A 1px, transparent 0), linear-gradient(90deg, #B9D69A 1px, transparent 0); background-size: 15px 15px; }
.description-md-title { display: flex; justify-content: center; background-color: initial; color: initial; padding: initial; margin: initial; box-shadow: initial; text-align: center; }
h3 { width: 100% !important; color: #127602; padding: 0.25em; border-top: solid 5px #FB7E01; border-bottom: solid 5px #FB7E01; background-color: #FFE347; padding: 20px 10px; font-weight: bold !important; text-align: center; }
h4 { font-size: 1.8rem !important; font-weight: bold; position: relative; background: rgb(18,118,2) !important; background: linear-gradient(133deg, rgba(18,118,2,1) 0% 96%, rgba(255,227,71,1) 96% 97.5%, rgba(251,126,1,1) 97.5% 100%) !important; padding: 15px 0 !important; color: #fff !important; margin: 20px 10px 0 10px !important; }
h5 { font-size: 2rem !important; color: #FFF; text-align: center; padding: 0.8em; border-top: solid 2px #E47A1F; border-bottom: solid 2px #E47A1F; background: -webkit-repeating-linear-gradient(-45deg, #FBB03B, #FBB03B 3px, #F7931D 3px, #F7931D 7px); background: repeating-linear-gradient(-45deg, #FBB03B, #FBB03B 3px, #F7931D 3px, #F7931D 7px); margin-bottom: 40px; }
p { margin: 1em; padding: 0.5em; background-color: #ffffff !important; border-radius: 5px; }
.radio input[type=radio]:checked:after { border-color: #127602; }
.radio input[type=radio]:before { background-color: #127602; }
.checkbox-inline input[type=checkbox]:checked:after, .checkbox input[type=checkbox]:checked:after, input[type=checkbox]:checked:after { background-color: #127602; border-color: #127602 !important; }
.has-success .checkbox, .has-success .checkbox-inline, .has-success.checkbox-inline label, .has-success.checkbox label, .has-success .control-label, .has-success .help-block, .has-success .radio, .has-success .radio-inline, .has-success.radio-inline label, .has-success.radio label { color: #333 !important; }
.form-control:focus { border-color: #127602; outline: 0; box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(100,100,50,.6) }
.has-success .form-control { border-color: #127602; outline: 0; }
.label-danger { background-color: #FB7E01; font-size: 0.7em; }
.btn { position: relative; display: block; width: 100%; height: auto; line-height: 40px; text-align: center; text-decoration: none; color: #ffffff; background-color: #127602; border: #127602 thin solid; overflow: hidden; margin: 0 auto !important; }
.btn:hover { background-color: #5e523a; border: #897753 thin solid; }`,

'7': `/* 男性寄り/近未来 - インフルエンサー系 */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
body { font-family: 'Noto Sans JP', sans-serif; background-color: #7d919b; }
.text-break { line-height: 1.6em; }
.form-top { padding: 0 !important; }
.form-top-left { background-image: linear-gradient(180deg, rgba(11,75,131,1), rgba(14,157,211,1)); }
h3 { width: 100% !important; margin-bottom: 30px; padding: 3rem 2rem; font-size: 40px; font-weight: bold !important; text-align: center; color: #fff; letter-spacing: 4px; text-shadow: 0 0 30px #21cbff; }
.form-top .form-top-left { padding-top: 60px; }
.form-top .form-top-left p { margin-bottom: 30px; padding: 0 20px; line-height: 1.5; text-align: center; color: #FFF; }
.form-editor { opacity: 0; animation: fadeIn 1s .5s forwards; }
@keyframes fadeIn { 0% { opacity: 0; transform: translateY(5px); } 100% { opacity: 1; transform: translateY(0); } }
.form-bottom { background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='194' height='194' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(135)'%3E%3Crect width='100%25' height='100%25' fill='rgba(117, 219, 245,0.19)'/%3E%3Cpath d='M-20 30.5l20-20l20 20l20-20l20 20l20-20l20 20v-1l-20-20l-20 20l-20-20l-20 20l-20-20l-20 20z' fill='rgba(255, 255, 240,0.13)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E"); color: #4a4b4f; }
.form-group { margin-bottom: 50px; }
a { color: #2196f3; }
.description-md-title { position: relative; display: block; margin: 20px 0; color: #0d4761; text-align: left; box-shadow: none; font-weight: bold; padding: 1rem 2rem; border-left: 6px double #7d919b; background: #f4f4f4; }
.description-title { position: relative; margin-bottom: 50px; padding: .5rem 0; font-size: 20px; color: #0d4761; text-align: center; }
.description-title:before { position: absolute; bottom: -10px; left: calc(50% - 30px); width: 60px; height: 2px; content: ''; border-radius: 3px; background: #7d919b; }
.btn { position: relative; padding: 16px; color: #fff; border-radius: 50px; background: linear-gradient(60deg, #0daeff, #1c58a2); box-shadow: rgba(97,202,246,0.6) 0px 5px 10px; overflow: hidden; }
.btn-primary:hover { opacity: .8; background: #0d4761; border-color: #23d2ff; }
.btn::after { content: ''; position: absolute; top: -10%; left: -20%; width: 40px; height: 100%; background-image: linear-gradient(100deg, rgba(255,255,255,0) 10%, rgba(255,255,255,.5) 100%, rgba(255,255,255,0) 0%); animation: shiny 2.5s ease-in-out infinite; }
@keyframes shiny { 0% { transform: scale(0) rotate(25deg); opacity: 0; } 50% { transform: scale(1) rotate(25deg); opacity: 1; } 100% { transform: scale(50) rotate(25deg); opacity: 0; } }
.form-control { border-color: #0b4c5d; }
.radio-inline input[type=radio]:after, .radio input[type=radio]:after, input[type=radio]:after { border-color: #0d4761; }
.radio-inline input[type=radio]:before, .radio input[type=radio]:before, input[type=radio]:before { background-color: #0d4761; }
.checkbox-inline input[type=checkbox]:after, .checkbox input[type=checkbox]:after, input[type=checkbox]:after { border-color: #0d4761; }
.checkbox-inline input[type=checkbox]:checked:after, .checkbox input[type=checkbox]:checked:after, input[type=checkbox]:checked:after { background-color: #0d4761; border-color: #0d4761; }
.has-success .checkbox, .has-success .checkbox-inline, .has-success.checkbox-inline label, .has-success.checkbox label, .has-success .control-label, .has-success .help-block, .has-success .radio, .has-success .radio-inline, .has-success.radio-inline label, .has-success.radio label { color: inherit; }
.has-success .form-control { border-color: #747d94; }
.label-danger { background-color: #e51c23; }
@media (max-width: 767px) { .form-bottom { padding: 25px 15px; } }`,

'8': `/* 男性寄り/シンプル - 線が特徴的 */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
body { font-family: 'Noto Sans JP', sans-serif; background-color: #e3dfda; }
.text-break { line-height: 1.6em; }
.form-top { padding: 0 !important; }
.form-top-left { background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='194' height='194' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(135)'%3E%3Crect width='100%25' height='100%25' fill='rgba(203, 213, 224,1)'/%3E%3Cpath d='M-10 30h60v1h-60zM-10-10h60v1h-60' fill='rgba(255, 255, 240,1)'/%3E%3Cpath d='M-10 24h60v1h-60zM-10-16h60v1h-60z' fill='rgba(193, 201, 214,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E") }
h3 { width: 100% !important; color: #08133a; background-color: #FFF; margin-bottom: 30px; padding: 20px 10px; font-weight: bold !important; text-align: center; }
.form-top .form-top-left p { margin-bottom: 30px; padding: 0 20px; line-height: 1.5; text-align: center; color: #08133a; }
.form-editor { opacity: 0; animation: fadeIn 1s .5s forwards; }
@keyframes fadeIn { 0% { opacity: 0; transform: translateY(5px); } 100% { opacity: 1; transform: translateY(0); } }
.form-bottom { background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='119' height='119' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(135)'%3E%3Crect width='100%25' height='100%25' fill='rgba(5, 97, 188,0.11)'/%3E%3Cpath d='M-10 30h60v1h-60zM-10-10h60v1h-60' fill='rgba(255, 255, 240,0.14)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E"); color: #08133a; }
.form-group { margin-bottom: 50px; }
a { color: #2196f3; }
.description-title { position: relative; padding: 1.5rem 2rem; font-size: 20px; border: 2px solid #d8d8d8; border-radius: 10px; background: #fff; }
.description-title:before { position: absolute; bottom: -14px; left: 1em; width: 0; height: 0; content: ''; border-width: 14px 12px 0 12px; border-style: solid; border-color: #d8d8d8 transparent transparent transparent; }
.description-title:after { position: absolute; bottom: -10px; left: 1em; width: 0; height: 0; content: ''; border-width: 14px 12px 0 12px; border-style: solid; border-color: #f9f9f9 transparent transparent transparent; }
.description-md-title { position: relative; display: block; color: #08133a; box-shadow: none; font-weight: bold; padding: 10px 55px; font-size: 20px; border-bottom: solid 3px #6d7d8f; margin-bottom: 30px; }
.btn { position: relative; padding: 16px; background: #6e789c; border-radius: 0; border-color: #484848; overflow: hidden; }
.btn-primary:hover { opacity: .8; background: #6d7d8f; }
.btn::after { content: ''; position: absolute; top: -10%; left: -20%; width: 40px; height: 100%; background-image: linear-gradient(100deg, rgba(255,255,255,0) 10%, rgba(255,255,255,.5) 100%, rgba(255,255,255,0) 0%); animation: shiny 3s ease-in-out infinite; }
@keyframes shiny { 0% { transform: scale(0) rotate(25deg); opacity: 0; } 50% { transform: scale(1) rotate(25deg); opacity: 1; } 100% { transform: scale(50) rotate(25deg); opacity: 0; } }
.form-control { border-color: #b4b5b7; }
.radio-inline input[type=radio]:after, .radio input[type=radio]:after, input[type=radio]:after { border-color: #82898e; }
.radio-inline input[type=radio]:before, .radio input[type=radio]:before, input[type=radio]:before { background-color: #82898e; }
.checkbox-inline input[type=checkbox]:after, .checkbox input[type=checkbox]:after, input[type=checkbox]:after { border-color: #82898e; }
.checkbox-inline input[type=checkbox]:checked:after, .checkbox input[type=checkbox]:checked:after, input[type=checkbox]:checked:after { background-color: #82898e; border-color: #82898e; }
.has-success .checkbox, .has-success .checkbox-inline, .has-success.checkbox-inline label, .has-success.checkbox label, .has-success .control-label, .has-success .help-block, .has-success .radio, .has-success .radio-inline, .has-success.radio-inline label, .has-success.radio label { color: inherit; }
.has-success .form-control { border-color: #747d94; }
.label-danger { background-color: #c42323; }
@media (max-width: 767px) { .form-bottom { padding: 25px 15px; } }`,

'9': `/* 男女/子ども系 - 教室・保育幼稚園 */
@import url('https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@700&display=swap');
body { background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='166' height='166' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(135)'%3E%3Crect width='100%25' height='100%25' fill='rgba(254, 252, 191,1)'/%3E%3Ccircle cx='20' cy='20' r='15' stroke-width='0' fill='rgba(255, 255, 240,1)'/%3E%3Ccircle cx='36' cy='20' r='1' stroke-width='0' fill='rgba(254, 235, 200,1)'/%3E%3Ccircle cx='4' cy='20' r='1' stroke-width='0' fill='rgba(254, 235, 200,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E") }
.text-break { line-height: 1.6em; }
.form-top { padding: 0 !important; }
.form-top-left { padding-top: 30px !important; background-color: #f19934; }
h3 { font-family: 'Zen Maru Gothic', sans-serif; width: 100% !important; color: #502c13; background-color: #f9dfc1; margin-bottom: 30px; padding: 20px 10px; font-weight: bold !important; text-align: center; }
.form-top .form-top-left p { margin-bottom: 30px; padding: 0 20px; line-height: 1.5; text-align: center; color: #fff; }
.form-editor { opacity: 0; animation: fadeIn 1s .5s forwards; }
@keyframes fadeIn { 0% { opacity: 0; transform: translateY(5px); } 100% { opacity: 1; transform: translateY(0); } }
.form-bottom { background: #FFF; color: #341805; }
.form-group { margin-bottom: 50px; }
a { color: #2196f3; }
.description-md-title { font-family: 'Zen Maru Gothic', sans-serif; display: block; position: relative; color: #f58f19; text-align: center; box-shadow: none; font-weight: bold; }
.description-md-title:after { content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 7px; background: repeating-linear-gradient(-45deg, #f9dfc1, #f9dfc1 2px, #fff 2px, #fff 4px); }
.description-title { font-family: 'Zen Maru Gothic', sans-serif; position: relative; color: #ec1d1d; font-size: 20px; padding: 10px 0; text-align: center; margin: 1.5em 0; }
.description-title:before { content: ""; position: absolute; top: -13px; left: 50%; width: 150px; height: 80px; border-radius: 50%; border: 5px solid #fadddc; border-left-color: transparent; border-right-color: transparent; transform: translateX(-50%); }
.btn { position: relative; padding: 16px; background: #f19934; border-radius: 50px; border-color: #f19934; overflow: hidden; }
.btn-primary:hover { opacity: .8; background: #db4c4c; }
.btn::after { content: ''; position: absolute; top: -10%; left: -20%; width: 40px; height: 100%; background-image: linear-gradient(100deg, rgba(255,255,255,0) 10%, rgba(255,255,255,.5) 100%, rgba(255,255,255,0) 0%); animation: shiny 2.5s ease-in-out infinite; }
@keyframes shiny { 0% { transform: scale(0) rotate(25deg); opacity: 0; } 50% { transform: scale(1) rotate(25deg); opacity: 1; } 100% { transform: scale(50) rotate(25deg); opacity: 0; } }
.form-control { border-color: #009542; }
.radio-inline input[type=radio]:after, .radio input[type=radio]:after, input[type=radio]:after { border-color: #2196f3; }
.radio-inline input[type=radio]:before, .radio input[type=radio]:before, input[type=radio]:before { background-color: #2196f3; }
.checkbox-inline input[type=checkbox]:after, .checkbox input[type=checkbox]:after, input[type=checkbox]:after { border-color: #23d2ff; }
.checkbox-inline input[type=checkbox]:checked:after, .checkbox input[type=checkbox]:checked:after, input[type=checkbox]:checked:after { background-color: #23d2ff; border-color: #23d2ff; }
.has-success .checkbox, .has-success .checkbox-inline, .has-success.checkbox-inline label, .has-success.checkbox label, .has-success .control-label, .has-success .help-block, .has-success .radio, .has-success .radio-inline, .has-success.radio-inline label, .has-success.radio label { color: inherit; }
.has-success .form-control { border-color: #747d94; }
.label-danger { background-color: #e51c23; }
@media (max-width: 767px) { .form-bottom { padding: 25px 15px; } }`,

'10': `/* 男性/信頼感 - スタンダードビジネス系 */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');
body { font-family: 'Noto Sans JP', sans-serif; background-color: #315098; }
.text-break { line-height: 1.6em; }
.form-top { background-image: url("https://d27rnpuamwvieu.cloudfront.net/0DFmaXdxiCKEA5UFkbeV4egXX/thumb"); background-repeat: no-repeat; background-position: center; background-size: cover; background-blend-mode: lighten; background-color: rgba(255,255,255,0.3); height: 260px; }
.form-top .form-top-left { padding-top: 100px; }
.form-top .form-top-left h3 { width: 100%; margin-top: 0; padding: 0.5em; text-shadow: 2px 3px 3px rgba(0,0,0,0.4); color: #FFF; font-family: 'Montserrat', sans-serif; font-size: 30px; text-align: center; }
.form-top .form-top-left p { line-height: 1.5; text-align: center; color: #FFF; }
.form-editor { opacity: 0; animation: fadeIn 1s .5s forwards; }
@keyframes fadeIn { 0% { opacity: 0; transform: translateY(5px); } 100% { opacity: 1; transform: translateY(0); } }
.form-bottom { background: #FFF; color: #000; }
.form-group { margin-bottom: 50px; }
a { color: #0e0068; }
.description-md-title { display: block; position: relative; margin: 0 0 1.5em; padding: 0.5em 0.5em 0.5em 1.7em; color: #000; background: transparent; font-weight: bold; box-shadow: none; border-left: solid 5px #2c72a2; border-bottom: solid 1px #ccc; }
.description-title { position: relative; padding: 20px 0; margin: 30px auto 50px; color: #FFF; background: rgb(14,0,104); background-image: linear-gradient(180deg, rgba(0,60,124,1), rgba(70,157,196,1) 79%, rgba(40,115,165,1)); font-size: 20px; font-weight: bold; text-align: center; }
.description-title:after { position: absolute; bottom: -10px; left: 45%; width: 0; height: 0; content: ''; border-width: 14px 12px 0 12px; border-style: solid; border-color: #2873A5FF transparent transparent transparent; }
.btn { position: relative; padding: 16px; background: #003c7c; border-radius: 0; border-color: #000; overflow: hidden; }
.btn-primary:hover { opacity: .5; background: #000; }
.btn::after { content: ''; position: absolute; top: -10%; left: -20%; width: 40px; height: 100%; background-image: linear-gradient(100deg, rgba(255,255,255,0) 10%, rgba(255,255,255,.5) 100%, rgba(255,255,255,0) 0%); animation: shiny 2.5s ease-in-out infinite; }
@keyframes shiny { 0% { transform: scale(0) rotate(25deg); opacity: 0; } 50% { transform: scale(1) rotate(25deg); opacity: 1; } 100% { transform: scale(50) rotate(25deg); opacity: 0; } }
.form-control { border-color: #747d94; }
.radio-inline input[type=radio]:after, .radio input[type=radio]:after, input[type=radio]:after { border-color: #747d94; }
.radio-inline input[type=radio]:before, .radio input[type=radio]:before, input[type=radio]:before { background-color: #747d94; }
.checkbox-inline input[type=checkbox]:after, .checkbox input[type=checkbox]:after, input[type=checkbox]:after { border-color: #747d94; }
.checkbox-inline input[type=checkbox]:checked:after, .checkbox input[type=checkbox]:checked:after, input[type=checkbox]:checked:after { background-color: #747d94; border-color: #747d94; }
.has-success .checkbox, .has-success .checkbox-inline, .has-success.checkbox-inline label, .has-success.checkbox label, .has-success .control-label, .has-success .help-block, .has-success .radio, .has-success .radio-inline, .has-success.radio-inline label, .has-success.radio label { color: inherit; }
.has-success .form-control { border-color: #747d94; }
.label-danger { background-color: #c61e1a; }
@media (max-width: 767px) { .form-bottom { padding: 25px 15px; } .form-top .form-top-left { padding-top: 50px; } }`,

'11': `/* 女性/ラグジュアリー - 美容サロン系 */
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;700&display=swap');
body { font-family: 'Noto Serif JP', serif; background-color: #fbf3f3; }
.text-break { line-height: 1.6em; }
.col-sm-12 { padding-right: 0; padding-left: 0; }
.form-top { background-image: url("https://d27rnpuamwvieu.cloudfront.net/0EgF8Q7xZIxxz2Y0NYQpXCAXX/1040"); background-repeat: no-repeat; background-position: center; background-size: cover; height: 260px; }
.form-top .form-top-left { padding-top: 80px; }
.form-top .form-top-left h3 { width: 100%; margin-top: 0; font-weight: bold; text-align: center; color: #786f5e; }
.form-top .form-top-left p { line-height: 1.5; text-align: center; color: #786f5e; }
.form-editor { opacity: 0; animation: fadeIn 1s .5s forwards; }
@keyframes fadeIn { 0% { opacity: 0; transform: translateY(5px); } 100% { opacity: 1; transform: translateY(0); } }
.form-bottom { background: #f5edd3; color: #80716c; }
.form-group { padding-top: 20px; margin-bottom: 50px; }
a { color: #bd8081; }
.description-md-title { display: flex; background-color: initial; color: initial; padding: initial; margin: initial; box-shadow: initial; }
.container .description-md-title { background-color: #d2baa1; }
.description-md-title { position: relative; padding: 0.25em 0; display: block; position: relative; color: #FFF; text-align: center; font-size: 1.143em; font-weight: bold; margin: 0 0 1.5em; padding: 0.5em 0.5em 0.5em 1.7em; box-shadow: none; }
.description-title { position: relative; margin-bottom: 34px; color: #786f5e; font-size: 20px; font-weight: bold; text-align: center; line-height: 1.4; -webkit-box-reflect: below -10px -webkit-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0) 10%, rgba(0,0,0,0.2)); }
.btn { background-image: linear-gradient(90deg, rgba(221,126,129,1), rgba(207,148,142,1) 51%, rgba(215,136,135,1)); border-color: #eab4b5; padding: 16px; border-radius: 100rem; overflow: hidden; position: relative; }
.btn-primary:hover { background: #eab4b5; border-color: #eab4b5; }
.btn::after { content: ''; position: absolute; top: -10%; left: -20%; width: 40px; height: 100%; background-image: linear-gradient(100deg, rgba(255,255,255,0) 10%, rgba(255,255,255,.5) 100%, rgba(255,255,255,0) 0%); animation: shiny 2.5s ease-in-out infinite; }
@keyframes shiny { 0% { transform: scale(0) rotate(25deg); opacity: 0; } 50% { transform: scale(1) rotate(25deg); opacity: 1; } 100% { transform: scale(50) rotate(25deg); opacity: 0; } }
.form-control { border-color: #d2baa1; }
.form-control:focus { border-color: #d2baa1; box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(242 156 159 / 60%); }
.radio-inline input[type=radio]:after, .radio input[type=radio]:after, input[type=radio]:after { border-color: #d2baa1; }
.radio-inline input[type=radio]:before, .radio input[type=radio]:before, input[type=radio]:before { background-color: #d2baa1; }
.radio-inline input[type=radio]:checked:after, .radio input[type=radio]:checked:after, input[type=radio]:checked:after { border-color: #d2baa1; }
.checkbox-inline input[type=checkbox]:after, .checkbox input[type=checkbox]:after, input[type=checkbox]:after { border-color: #d2baa1; }
.checkbox-inline input[type=checkbox]:checked:after, .checkbox input[type=checkbox]:checked:after, input[type=checkbox]:checked:after { background-color: #d2baa1; border-color: #d2baa1; }
.has-success .checkbox, .has-success .checkbox-inline, .has-success.checkbox-inline label, .has-success.checkbox label, .has-success .control-label, .has-success .help-block, .has-success .radio, .has-success .radio-inline, .has-success.radio-inline label, .has-success.radio label { color: inherit; }
.has-success .form-control { border-color: #d2baa1; }
.form-group .form-text > label::before { content: '✨'; color: #d2baa1; }
.label-danger { background-color: #c25d5e; }
.help-block { color: #8d8784; }`

}; // end SAMPLES

/* ---- Claude オリジナルデザイン ---- */
const CLAUDE_SAMPLES = {

'c1': `/* ☁ シンプルホワイト - クリーンミニマル（アクセントカラー変更対応）

  ─ 色の役割分担 ─────────────────────
  #1a1a2e  ← テキスト・見出し（ニュートラル。変更不要）
  #2563eb  ← アクセントカラー（★ここだけカラーピッカーで変わる）
  #e0e0e0  ← 罫線・薄いボーダー（ニュートラル）
  ─────────────────────────────────── */

/* レイアウト */
.fieldsets { background: #fff; }
.form-box { padding-top: 20px; }

/* ヘッダー */
.form-top {
  padding: 0;
  border-radius: 0;
  background: #fff;
  border-bottom: 3px solid #2563eb;   /* ★アクセント */
}
.form-top .form-top-left {
  padding: 40px 30px 30px;
}
.form-top .form-top-left h3 {
  width: 100%;
  font-size: 28px;
  font-weight: 900;
  color: #1a1a2e;                      /* ニュートラル */
  text-align: left;
  letter-spacing: -0.5px;
  margin: 0 0 16px;
  line-height: 1.2;
}
.form-top .form-top-left h3::before {
  content: '';
  display: block;
  width: 32px;
  height: 3px;
  background: #2563eb;                 /* ★アクセント */
  margin-bottom: 20px;
}
.form-top .form-top-left p {
  text-align: left;
  font-size: 14px;
  color: #666;
  line-height: 1.8;
  margin: 0;
}
.form-top .form-top-right { display: none; }

/* ボトム */
.form-bottom { background: #fff; color: #1a1a2e; padding: 30px; }
.form-editor { }
.form-group { margin-bottom: 32px; border-bottom: 1px solid #f0f0f0; padding-bottom: 24px; }
.form-group:last-child { border-bottom: none; }

/* リンク */
a { color: #2563eb; text-decoration: underline; } /* ★アクセント */

/* 中見出し */
.description-md-title {
  display: block;
  background: none;
  color: #1a1a2e;                      /* ニュートラル */
  padding: 0 0 0 14px;
  margin: 24px 0 12px;
  box-shadow: none;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: -0.3px;
  border-left: 4px solid #2563eb;      /* ★アクセント */
  text-align: left;
}

/* 小見出し */
h5.description-title {
  font-size: 12px;
  font-weight: 700;
  color: #2563eb;                      /* ★アクセント */
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-align: left;
  display: block;
  margin: 0 0 8px;
}

/* ラベル */
.control-label {
  font-size: 14px;
  font-weight: 700;
  color: #1a1a2e;                      /* ニュートラル */
  text-align: left;
  display: block;
  margin-bottom: 8px;
}

/* 入力フィールド */
.form-control {
  border: 1px solid #e0e0e0;
  border-radius: 0;
  background: #fafafa;
  font-size: 15px;
  height: 44px;
}
.form-control:focus {
  border-color: #2563eb;               /* ★アクセント */
  box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
  background: #fff;
}
textarea.form-control { height: auto; }

/* ラジオ・チェック */
.radio label, .checkbox label,
.radio-inline label, .checkbox-inline label { font-size: 14px; color: #444; }
.radio input[type=radio]:before,
input[type=radio]:before { background-color: #2563eb; }   /* ★アクセント */
.radio input[type=radio]:after,
input[type=radio]:after { border-color: #ccc; }
.radio input[type=radio]:checked:after,
input[type=radio]:checked:after { border-color: #2563eb; } /* ★アクセント */
.checkbox input[type=checkbox]:after,
input[type=checkbox]:after { border-color: #ccc; }
.checkbox input[type=checkbox]:checked:after,
input[type=checkbox]:checked:after {
  background-color: #2563eb;           /* ★アクセント */
  border-color: #2563eb;
}

/* 状態 */
.has-success .form-control { border-color: #e0e0e0; }
.help-block { font-size: 12px; color: #999; margin-top: 4px; }
.label-danger {
  background: #2563eb;                 /* ★アクセント */
  font-size: 11px;
  border-radius: 2px;
}

/* ボタン */
.btn {
  background: #2563eb;                 /* ★アクセント */
  border-color: #2563eb;
  color: #fff;
  border-radius: 2px;
  padding: 14px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  transition: opacity 0.2s;
}
.btn:hover {
  background: #1d4ed8;                 /* ★アクセント（少し暗め） */
  border-color: #1d4ed8;
  color: #fff;
}`,

'c2': `/* 🌿 ナチュラルグリーン - オーガニック */
@import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;700&display=swap');
.fieldsets { background: #f5f0e8; }
body { background-color: #e8e0d0; }
.form-box { padding-top: 0; }
.form-top {
  padding: 0;
  border-radius: 0;
  background: #5a7a5a;
  position: relative;
  overflow: hidden;
}
.form-top::after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  height: 40px;
  background: #f5f0e8;
  border-radius: 50% 50% 0 0 / 40px;
}
.form-top .form-top-left {
  padding: 50px 30px 60px;
  background: transparent;
}
.form-top .form-top-left h3 {
  width: 100%;
  color: #fff;
  font-size: 24px;
  font-family: 'Shippori Mincho', serif;
  font-weight: 700;
  text-align: center;
  line-height: 1.6;
  margin: 0 0 16px;
  text-shadow: 0 1px 3px rgba(0,0,0,0.2);
}
.form-top .form-top-left h3::before {
  content: '✦';
  display: block;
  font-size: 20px;
  color: #c8e6b0;
  margin-bottom: 12px;
}
.form-top .form-top-left p {
  color: rgba(255,255,255,0.85);
  font-size: 14px;
  line-height: 1.8;
  text-align: center;
}
.form-top .form-top-right { display: none; }
.form-bottom { background: #f5f0e8; color: #3a3328; padding: 40px 25px 30px; }
.form-editor { opacity: 0; animation: fadeIn 1s .3s forwards; }
@keyframes fadeIn { to { opacity: 1; } }
a { color: #5a7a5a; }
.description-md-title {
  display: block; background: none; padding: 0; margin: 0 0 12px; box-shadow: none;
  font-size: 20px; font-weight: 700; color: #4a6840;
  font-family: 'Shippori Mincho', serif;
  border-bottom: 2px solid #b5cc9d;
  padding-bottom: 10px;
  text-align: left;
}
h5.description-title {
  font-size: 16px; font-weight: 700; color: #8b7355;
  text-align: left; display: block;
  position: relative; padding-left: 18px; margin-bottom: 10px;
}
h5.description-title::before {
  content: '🌿';
  position: absolute; left: 0;
}
.control-label { font-size: 14px; font-weight: 700; color: #4a6840; text-align: left; display: block; margin-bottom: 8px; }
.form-group { margin-bottom: 28px; }
.form-control { border: 1px solid #c8b89a; border-radius: 8px; background: #fffdf8; font-size: 15px; height: 42px; }
.form-control:focus { border-color: #5a7a5a; box-shadow: 0 0 0 3px rgba(90,122,90,0.1); }
textarea.form-control { height: auto; }
.radio input[type=radio]:before { background-color: #5a7a5a; }
.radio input[type=radio]:after { border-color: #b5cc9d; }
.radio input[type=radio]:checked:after { border-color: #b5cc9d; }
.checkbox input[type=checkbox]:after { border-color: #b5cc9d; }
.checkbox input[type=checkbox]:checked:after { background-color: #5a7a5a; border-color: #5a7a5a; }
.has-success .form-control { border-color: #b5cc9d; }
.label-danger { background: #d47c5a; border-radius: 4px; font-size: 11px; }
.help-block { font-size: 12px; color: #9a8a75; }
.btn { background: #5a7a5a; border-color: #4a6840; color: #fff; border-radius: 100rem; padding: 14px; font-size: 16px; font-family: 'Shippori Mincho', serif; font-weight: 700; }
.btn:hover { background: #4a6840; border-color: #4a6840; }`,

'c3': `/* 🌑 ダークモード - モダン（アクセシビリティ改善版） */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap');
body { background: #0a0a0a; font-family: 'Noto Sans JP', sans-serif; }
.fieldsets { background: #141414; }
.form-box { padding-top: 0; }
.form-top { background: #141414; padding: 0; border-radius: 0; border-bottom: 1px solid #252525; }
.form-top .form-top-left { padding: 48px 28px 36px; }
.form-top .form-top-left h3 { width: 100%; color: #f0f0f0; font-size: 26px; font-weight: 700; text-align: left; margin: 0 0 12px; line-height: 1.3; letter-spacing: -0.3px; }
.form-top .form-top-left h3::before { content: ''; display: block; width: 40px; height: 2px; background: linear-gradient(to right, #00d4ff, #7b2fff); margin-bottom: 20px; }
/* ヘッダー説明文：#9a9a9a on #141414 = 5.5:1 WCAG AA ✓ */
.form-top .form-top-left p { color: #9a9a9a; font-size: 14px; text-align: left; line-height: 1.8; }
.form-top .form-top-right { display: none; }
/* form-bottom 基本テキスト：#d8d8d8 on #141414 = 9.7:1 WCAG AAA ✓ */
.form-bottom { background: #141414; color: #d8d8d8; padding: 30px 25px; }
.form-editor { opacity: 0; animation: fadeIn .6s .2s ease forwards; }
@keyframes fadeIn { to { opacity: 1; } }
a { color: #00d4ff; }
.description-md-title { display: block; background: rgba(255,255,255,0.04); color: #f0f0f0; padding: 12px 20px; margin: 0 0 12px; box-shadow: none; font-size: 16px; font-weight: 700; text-align: left; border-left: 3px solid; border-image: linear-gradient(to bottom, #00d4ff, #7b2fff) 1; }
h5.description-title { font-size: 13px; font-weight: 700; color: #00d4ff; text-align: left; display: block; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px; }
/* ラベル：#bbbbbb on #141414 = 7.1:1 WCAG AAA ✓ */
.control-label { font-size: 13px; font-weight: 400; color: #bbbbbb; text-align: left; display: block; margin-bottom: 8px; letter-spacing: 0.5px; }
.form-group { margin-bottom: 28px; }
/* 入力欄：テキスト色 #e8e8e8 on #1e1e1e = 10.5:1 ✓ */
.form-control { border: 1px solid #303030; border-radius: 4px; background: #1e1e1e; color: #e8e8e8; font-size: 15px; height: 44px; }
.form-control:focus { border-color: #00d4ff; box-shadow: 0 0 0 2px rgba(0,212,255,0.18); background: #222; color: #f0f0f0; }
/* プレースホルダー：装飾テキストのためやや薄め */
.form-control::-webkit-input-placeholder { color: #5a5a5a; }
.form-control::-moz-placeholder { color: #5a5a5a; }
.form-control::placeholder { color: #5a5a5a; }
textarea.form-control { height: auto; }
select.form-control { color: #e8e8e8; }
select.form-control option { background: #1e1e1e; color: #e8e8e8; }
/* ラジオ・チェック：#cccccc on #141414 = 8.3:1 WCAG AAA ✓ */
.radio label, .checkbox label { color: #cccccc; }
.radio-inline label, .checkbox-inline label { color: #cccccc; }
.radio input[type=radio]:before { background-color: #00d4ff; }
.radio input[type=radio]:after { border-color: #404040; }
.radio input[type=radio]:checked:after { border-color: #00d4ff; }
.checkbox input[type=checkbox]:after { border-color: #404040; }
.checkbox input[type=checkbox]:checked:after { background-color: #00d4ff; border-color: #00d4ff; }
.checkbox input[type=checkbox]:checked:before { border-color: #141414; }
.has-success .checkbox, .has-success .checkbox-inline, .has-success.checkbox-inline label, .has-success.checkbox label, .has-success .control-label, .has-success .help-block, .has-success .radio, .has-success .radio-inline, .has-success.radio-inline label, .has-success.radio label { color: #bbbbbb; }
.has-success .form-control { border-color: #303030; }
/* ヘルプテキスト：#888 on #141414 = 4.5:1 WCAG AA ✓（ちょうどライン） */
.help-block { font-size: 12px; color: #888888; margin-top: 4px; }
.label-danger { background: #7b2fff; border-radius: 3px; font-size: 10px; color: #fff; }
.btn { background: linear-gradient(135deg, #00d4ff 0%, #7b2fff 100%); border-color: transparent; color: #fff; border-radius: 4px; padding: 14px; font-size: 15px; font-weight: 700; letter-spacing: 0.5px; }
.btn:hover { opacity: 0.85; background: linear-gradient(135deg, #00d4ff 0%, #7b2fff 100%); border-color: transparent; }
@media (max-width: 767px) { body { background: #0a0a0a !important; } .form-bottom { padding: 20px 16px; } }`,

'c4': `/* ⛩ 和モダン - ネイビーゴールド */
@import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@400;700;800&display=swap');
body { background-color: #1a1f2e; font-family: 'Shippori Mincho B1', serif; }
.fieldsets { background: #fff; }
.form-box { padding-top: 0; }
.form-top {
  background: #1a2744;
  padding: 0;
  border-radius: 0;
  position: relative;
}
.form-top::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(to right, #c9a84c, #f0d080, #c9a84c);
}
.form-top .form-top-left { padding: 56px 30px 48px; }
.form-top .form-top-left h3 {
  width: 100%;
  color: #f0d080;
  font-size: 26px;
  font-weight: 800;
  text-align: center;
  margin: 0 0 20px;
  line-height: 1.5;
  letter-spacing: 4px;
  font-family: 'Shippori Mincho B1', serif;
  text-shadow: 0 2px 8px rgba(192,160,60,0.3);
}
.form-top .form-top-left h3::before {
  content: '──── ✦ ────';
  display: block;
  color: rgba(240,208,128,0.4);
  font-size: 14px;
  letter-spacing: 8px;
  margin-bottom: 20px;
}
.form-top .form-top-left h3::after {
  content: '──── ✦ ────';
  display: block;
  color: rgba(240,208,128,0.4);
  font-size: 14px;
  letter-spacing: 8px;
  margin-top: 20px;
}
.form-top .form-top-left p { color: rgba(240,220,160,0.7); font-size: 14px; text-align: center; line-height: 2; }
.form-top .form-top-right { display: none; }
.form-bottom { background: #faf8f3; color: #2c2520; padding: 40px 25px 30px; }
.form-editor { opacity: 0; animation: fadeIn .8s .3s forwards; }
@keyframes fadeIn { to { opacity: 1; } }
a { color: #1a2744; text-decoration: underline; }
.description-md-title {
  display: block; background: none; color: #1a2744; padding: 16px 0 14px; margin: 0 0 12px; box-shadow: none;
  font-size: 20px; font-weight: 800; text-align: center;
  font-family: 'Shippori Mincho B1', serif;
  border-top: 1px solid #c9a84c;
  border-bottom: 1px solid #c9a84c;
  letter-spacing: 3px;
}
h5.description-title {
  font-size: 16px; font-weight: 700; color: #8b7240;
  text-align: left; display: block; margin-bottom: 12px;
  font-family: 'Shippori Mincho B1', serif;
  border-left: 3px solid #c9a84c;
  padding-left: 12px;
}
.control-label { font-size: 14px; font-weight: 700; color: #2c2520; text-align: left; display: block; margin-bottom: 8px; font-family: 'Shippori Mincho B1', serif; letter-spacing: 0.5px; }
.form-group { margin-bottom: 30px; }
.form-control { border: 1px solid #d4c090; border-radius: 2px; background: #fffef8; font-size: 15px; height: 42px; font-family: 'Shippori Mincho B1', serif; }
.form-control:focus { border-color: #1a2744; box-shadow: inset 0 0 0 1px #1a2744; }
textarea.form-control { height: auto; }
.radio input[type=radio]:before { background-color: #1a2744; }
.radio input[type=radio]:after { border-color: #c9a84c; }
.radio input[type=radio]:checked:after { border-color: #c9a84c; }
.checkbox input[type=checkbox]:after { border-color: #c9a84c; }
.checkbox input[type=checkbox]:checked:after { background-color: #1a2744; border-color: #1a2744; }
.has-success .form-control { border-color: #d4c090; }
.label-danger { background: #8b3020; border-radius: 2px; font-size: 11px; }
.help-block { font-size: 12px; color: #9a8a75; font-family: 'Shippori Mincho B1', serif; }
.btn { background: #1a2744; border-color: #1a2744; color: #f0d080; border-radius: 2px; padding: 14px; font-size: 16px; font-weight: 800; letter-spacing: 4px; font-family: 'Shippori Mincho B1', serif; }
.btn:hover { background: #253a66; border-color: #253a66; }`,

'c5': `/* 🌈 ポップグラデーション - 明るいビタミンカラー */
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700;800&display=swap');
body { font-family: 'M PLUS Rounded 1c', sans-serif; background: linear-gradient(135deg, #f8f0ff 0%, #fff0f8 50%, #f0f8ff 100%); background-attachment: fixed; }
.fieldsets { background: rgba(255,255,255,0.85); border-radius: 16px; overflow: hidden; }
.form-box { padding-top: 20px; }
.form-top {
  background: linear-gradient(135deg, #ff6b9d 0%, #ff9a3c 35%, #ffd93d 65%, #6bcaff 100%);
  padding: 0;
  border-radius: 0;
  position: relative;
}
.form-top .form-top-left { padding: 40px 25px 60px; }
.form-top .form-top-left h3 {
  width: 100%;
  color: #fff;
  font-size: 26px;
  font-weight: 800;
  text-align: center;
  margin: 0 0 14px;
  line-height: 1.4;
  text-shadow: 0 2px 12px rgba(0,0,0,0.15);
  letter-spacing: 1px;
}
.form-top .form-top-left p {
  color: rgba(255,255,255,0.92);
  font-size: 14px;
  text-align: center;
  line-height: 1.8;
  background: rgba(255,255,255,0.15);
  border-radius: 12px;
  padding: 12px 16px;
  margin: 0;
}
.form-top .form-top-right { display: none; }
.form-bottom {
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(10px);
  padding: 30px 20px;
  color: #333;
  position: relative;
  border-top: none;
}
.form-bottom::before {
  content: '';
  display: block;
  height: 3px;
  background: linear-gradient(to right, #ff6b9d, #ff9a3c, #ffd93d, #6bcaff);
  margin: -30px -20px 30px;
}
.form-editor { opacity: 0; animation: bounceIn .6s .3s cubic-bezier(0.34,1.56,0.64,1) forwards; }
@keyframes bounceIn { to { opacity: 1; } }
a { color: #ff6b9d; }
.description-md-title {
  display: block; padding: 12px 20px; margin: 0 -20px 16px; box-shadow: none;
  font-size: 17px; font-weight: 800; text-align: center;
  background: linear-gradient(135deg, #ff6b9d22, #6bcaff22);
  color: #ff5588;
  border-top: 2px solid #ff6b9d;
  border-bottom: 2px solid #6bcaff;
}
h5.description-title {
  font-size: 16px; font-weight: 800; color: #ff9a3c;
  text-align: left; display: inline-block; margin-bottom: 10px;
  background: linear-gradient(to right, #ff9a3c, #ffd93d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.control-label { font-size: 14px; font-weight: 700; color: #333; text-align: left; display: block; margin-bottom: 8px; }
.form-group { margin-bottom: 24px; background: #fff; border-radius: 12px; padding: 16px; box-shadow: 0 2px 12px rgba(0,0,0,0.05); }
.form-control { border: 2px solid #eee; border-radius: 10px; background: #f8f8ff; font-size: 15px; height: 44px; }
.form-control:focus { border-color: #ff6b9d; box-shadow: 0 0 0 3px rgba(255,107,157,0.15); background: #fff; }
textarea.form-control { height: auto; }
.radio input[type=radio]:before { background-color: #ff6b9d; }
.radio input[type=radio]:after { border-color: #ddd; }
.radio input[type=radio]:checked:after { border-color: #ddd; }
.checkbox input[type=checkbox]:after { border-color: #ddd; }
.checkbox input[type=checkbox]:checked:after { background-color: #ff6b9d; border-color: #ff6b9d; }
.has-success .form-control { border-color: #eee; }
.label-danger { background: #ff5588; border-radius: 100rem; font-size: 11px; padding: 2px 8px; }
.help-block { font-size: 12px; color: #aaa; margin-top: 4px; }
.btn { background: linear-gradient(135deg, #ff6b9d, #ff9a3c); border-color: transparent; color: #fff; border-radius: 100rem; padding: 14px; font-size: 16px; font-weight: 800; letter-spacing: 0.5px; box-shadow: 0 4px 20px rgba(255,107,157,0.35); animation: btnPulse 2s ease-in-out infinite; }
@keyframes btnPulse { 0%, 100% { box-shadow: 0 4px 20px rgba(255,107,157,0.35); } 50% { box-shadow: 0 4px 30px rgba(255,107,157,0.55); } }
.btn:hover { opacity: 0.9; background: linear-gradient(135deg, #ff6b9d, #ff9a3c); border-color: transparent; }
@media (max-width: 767px) { .form-bottom { padding: 20px 15px; } }`

}; // end CLAUDE_SAMPLES

/* ---- さらに5種 LISM インスパイア ---- */
const CLAUDE_SAMPLES2 = {

'c6': `/* 🏔 テラコッタ＆ストーン - エディトリアル */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Noto+Sans+JP:wght@300;400&display=swap');

:root {
  --tc-stone:   #f5f0ea;
  --tc-warm:    #e8ddd0;
  --tc-terra:   #c4603a;
  --tc-dark:    #2a1f1a;
  --tc-mid:     #6b5a52;
  --tc-line:    #d4c4b8;
  --tc-space-s: 16px;
  --tc-space-m: 32px;
  --tc-space-l: 56px;
}

body { background: var(--tc-stone); font-family: 'Noto Sans JP', sans-serif; font-weight: 300; }
.fieldsets { background: var(--tc-stone); }
.form-box { padding-top: 0; }

/* ヘッダー */
.form-top {
  background: var(--tc-dark);
  padding: 0;
  border-radius: 0;
  position: relative;
}
.form-top .form-top-left {
  padding: var(--tc-space-l) var(--tc-space-m) var(--tc-space-m);
}
.form-top .form-top-left h3 {
  width: 100%;
  color: var(--tc-stone);
  font-family: 'Cormorant Garamond', serif;
  font-size: 36px;
  font-weight: 300;
  letter-spacing: 0.08em;
  text-align: left;
  margin: 0 0 var(--tc-space-s);
  line-height: 1.2;
}
.form-top .form-top-left h3::before {
  content: '';
  display: block;
  width: 24px;
  height: 1px;
  background: var(--tc-terra);
  margin-bottom: var(--tc-space-m);
}
.form-top .form-top-left p {
  color: rgba(245,240,234,0.55);
  font-size: 13px;
  text-align: left;
  line-height: 2;
  letter-spacing: 0.04em;
}
.form-top .form-top-right { display: none; }

/* ボトム */
.form-bottom {
  background: var(--tc-stone);
  color: var(--tc-dark);
  padding: var(--tc-space-m) var(--tc-space-m) var(--tc-space-l);
  border-top: 1px solid var(--tc-line);
}
.form-editor { opacity: 0; animation: tcFade 0.8s 0.2s ease forwards; }
@keyframes tcFade { to { opacity: 1; } }

/* ラベル・タイポグラフィ */
a { color: var(--tc-terra); }
.control-label {
  font-size: 11px;
  font-weight: 400;
  color: var(--tc-mid);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-align: left;
  display: block;
  margin-bottom: 8px;
}
.form-group { margin-bottom: 28px; }

/* 中見出し */
.description-md-title {
  display: block;
  background: none;
  color: var(--tc-dark);
  padding: 0;
  margin: 0 0 12px;
  box-shadow: none;
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0.06em;
  text-align: left;
  border-bottom: 1px solid var(--tc-line);
  padding-bottom: 12px;
}

/* 小見出し */
h5.description-title {
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--tc-terra);
  text-align: left;
  display: block;
  margin-bottom: 12px;
}

/* 入力 */
.form-control {
  border: none;
  border-bottom: 1px solid var(--tc-line);
  border-radius: 0;
  background: transparent;
  color: var(--tc-dark);
  font-size: 15px;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 300;
  height: 42px;
  padding-left: 0;
  padding-right: 0;
  box-shadow: none;
}
.form-control:focus {
  border-bottom-color: var(--tc-terra);
  box-shadow: none;
  outline: none;
  background: transparent;
}
.form-control::placeholder { color: var(--tc-line); }
textarea.form-control { height: auto; }
select.form-control { padding-left: 0; }

/* ラジオ・チェック */
.radio label, .checkbox label, .radio-inline label, .checkbox-inline label {
  font-size: 14px;
  color: var(--tc-mid);
  font-weight: 300;
}
.radio input[type=radio]:after, input[type=radio]:after { border-color: var(--tc-line); }
.radio input[type=radio]:before, input[type=radio]:before { background-color: var(--tc-terra); }
.radio input[type=radio]:checked:after, input[type=radio]:checked:after { border-color: var(--tc-terra); }
.checkbox input[type=checkbox]:after, input[type=checkbox]:after { border-color: var(--tc-line); }
.checkbox input[type=checkbox]:checked:after, input[type=checkbox]:checked:after { background-color: var(--tc-terra); border-color: var(--tc-terra); }

.has-success .form-control { border-bottom-color: var(--tc-line); }
.help-block { font-size: 11px; color: var(--tc-line); letter-spacing: 0.04em; }
.label-danger { background: var(--tc-terra); border-radius: 2px; font-size: 10px; letter-spacing: 0.06em; }

/* ボタン */
.btn {
  background: var(--tc-dark);
  border-color: var(--tc-dark);
  color: var(--tc-stone);
  border-radius: 0;
  padding: 16px 24px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
}
.btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--tc-terra);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
}
.btn:hover::after { transform: scaleX(1); }
.btn:hover { background: var(--tc-dark); border-color: var(--tc-dark); }`,


'c7': `/* ⬜ スイスグリッド - ウルトラミニマル */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+JP:wght@300;400;500&display=swap');

:root {
  --sw-bg:    #f8f8f8;
  --sw-white: #ffffff;
  --sw-ink:   #101010;
  --sw-gray:  #767676;
  --sw-line:  #e0e0e0;
  --sw-red:   #e8001a;
  --sw-unit:  8px;
}

body { background: var(--sw-bg); font-family: 'IBM Plex Sans JP', sans-serif; }
.fieldsets { background: var(--sw-white); }
.form-box { padding-top: 0; }

/* ヘッダー: タイポグラフィのみ、装飾ゼロ */
.form-top {
  background: var(--sw-white);
  padding: 0;
  border-radius: 0;
  border-bottom: 2px solid var(--sw-ink);
}
.form-top .form-top-left {
  padding: calc(var(--sw-unit)*7) calc(var(--sw-unit)*4) calc(var(--sw-unit)*4);
}
.form-top .form-top-left h3 {
  width: 100%;
  color: var(--sw-ink);
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 300;
  letter-spacing: -0.02em;
  text-align: left;
  margin: 0 0 calc(var(--sw-unit)*2);
  line-height: 1.1;
}
.form-top .form-top-left p {
  color: var(--sw-gray);
  font-size: 13px;
  font-weight: 300;
  text-align: left;
  line-height: 1.7;
  max-width: 480px;
}
.form-top .form-top-right { display: none; }

/* ボトム */
.form-bottom {
  background: var(--sw-white);
  color: var(--sw-ink);
  padding: calc(var(--sw-unit)*4);
  border-top: none;
}
.form-editor { }

a { color: var(--sw-ink); }

/* ラベル */
.control-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--sw-ink);
  letter-spacing: 0.06em;
  text-align: left;
  display: block;
  margin-bottom: calc(var(--sw-unit));
}
.form-group {
  margin-bottom: calc(var(--sw-unit)*3);
  padding-bottom: calc(var(--sw-unit)*3);
  border-bottom: 1px solid var(--sw-line);
}

/* 中見出し */
.description-md-title {
  display: block;
  background: var(--sw-red);
  color: var(--sw-white);
  padding: calc(var(--sw-unit)) calc(var(--sw-unit)*2);
  margin: 0 calc(var(--sw-unit)*-4) calc(var(--sw-unit)*2) calc(var(--sw-unit)*-4);
  box-shadow: none;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-align: left;
  text-transform: uppercase;
}

/* 小見出し */
h5.description-title {
  font-size: 24px;
  font-weight: 300;
  color: var(--sw-ink);
  letter-spacing: -0.02em;
  text-align: left;
  display: block;
  margin-bottom: calc(var(--sw-unit)*2);
  line-height: 1.2;
}

/* 入力 */
.form-control {
  border: 1px solid var(--sw-line);
  border-radius: 0;
  background: var(--sw-white);
  color: var(--sw-ink);
  font-size: 14px;
  font-family: 'IBM Plex Sans JP', sans-serif;
  height: 40px;
  box-shadow: none;
}
.form-control:focus { border-color: var(--sw-ink); box-shadow: none; }
.form-control::placeholder { color: var(--sw-line); }
textarea.form-control { height: auto; }

.radio label, .checkbox label, .radio-inline label, .checkbox-inline label { font-size: 14px; color: var(--sw-ink); }
.radio input[type=radio]:after, input[type=radio]:after { border-color: var(--sw-line); }
.radio input[type=radio]:before, input[type=radio]:before { background-color: var(--sw-ink); }
.radio input[type=radio]:checked:after, input[type=radio]:checked:after { border-color: var(--sw-ink); }
.checkbox input[type=checkbox]:after, input[type=checkbox]:after { border-color: var(--sw-line); }
.checkbox input[type=checkbox]:checked:after, input[type=checkbox]:checked:after { background-color: var(--sw-ink); border-color: var(--sw-ink); }

.has-success .form-control { border-color: var(--sw-line); }
.help-block { font-size: 11px; color: var(--sw-gray); }
.label-danger { background: var(--sw-red); border-radius: 0; font-size: 10px; letter-spacing: 0.08em; }

/* ボタン */
.btn {
  background: var(--sw-ink);
  border-color: var(--sw-ink);
  color: var(--sw-white);
  border-radius: 0;
  padding: 14px 32px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.btn:hover { background: var(--sw-red); border-color: var(--sw-red); color: var(--sw-white); }`,


'c8': `/* 🌊 オーシャンデプス - グラデーションレイヤー */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Serif+Display&display=swap');

:root {
  --od-deep:   #0a1628;
  --od-navy:   #0f2d5c;
  --od-ocean:  #1a6b9e;
  --od-teal:   #0891b2;
  --od-foam:   #e0f2fe;
  --od-white:  #f8faff;
  --od-mist:   rgba(255,255,255,0.08);
  --od-line:   rgba(255,255,255,0.12);
}

body { background: var(--od-deep); font-family: 'DM Sans', sans-serif; }
.fieldsets { background: transparent; }
.form-box { padding-top: 0; }

/* ヘッダー */
.form-top {
  background: linear-gradient(160deg, var(--od-deep) 0%, var(--od-navy) 60%, var(--od-ocean) 100%);
  padding: 0;
  border-radius: 0;
  position: relative;
  overflow: hidden;
}
.form-top::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(8,145,178,0.2) 0%, transparent 70%);
  pointer-events: none;
}
.form-top .form-top-left {
  padding: 56px 28px 48px;
  position: relative;
  z-index: 1;
}
.form-top .form-top-left h3 {
  width: 100%;
  color: var(--od-white);
  font-family: 'DM Serif Display', serif;
  font-size: 32px;
  font-weight: 400;
  text-align: left;
  margin: 0 0 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
}
.form-top .form-top-left h3::before {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background: linear-gradient(to right, var(--od-teal), transparent);
  margin-bottom: 24px;
  border-radius: 2px;
}
.form-top .form-top-left p {
  color: rgba(224,242,254,0.65);
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  line-height: 1.8;
}
.form-top .form-top-right { display: none; }

/* ボトム */
.form-bottom {
  background: linear-gradient(180deg, var(--od-navy) 0%, var(--od-deep) 100%);
  color: var(--od-foam);
  padding: 32px 24px 40px;
  border-top: 1px solid var(--od-line);
}
.form-editor { opacity: 0; animation: odFade 0.6s 0.2s ease forwards; }
@keyframes odFade { to { opacity: 1; } }

a { color: var(--od-teal); }

.control-label {
  font-size: 12px;
  font-weight: 500;
  color: rgba(224,242,254,0.7);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-align: left;
  display: block;
  margin-bottom: 8px;
}
.form-group { margin-bottom: 24px; }

.description-md-title {
  display: block;
  background: var(--od-mist);
  color: var(--od-white);
  padding: 14px 20px;
  margin: 0 0 16px;
  box-shadow: none;
  font-family: 'DM Serif Display', serif;
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  border-left: 3px solid var(--od-teal);
}

h5.description-title {
  font-size: 11px;
  font-weight: 500;
  color: var(--od-teal);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-align: left;
  display: block;
  margin-bottom: 12px;
}

.form-control {
  border: 1px solid var(--od-line);
  border-radius: 6px;
  background: var(--od-mist);
  color: var(--od-white);
  font-size: 14px;
  height: 44px;
  box-shadow: none;
  transition: border-color 0.2s;
}
.form-control:focus { border-color: var(--od-teal); box-shadow: 0 0 0 3px rgba(8,145,178,0.15); background: rgba(255,255,255,0.06); }
.form-control::placeholder { color: rgba(255,255,255,0.25); }
textarea.form-control { height: auto; }
select.form-control option { background: var(--od-navy); color: var(--od-white); }
select.form-control { color: var(--od-white); }

.radio label, .checkbox label, .radio-inline label, .checkbox-inline label { color: var(--od-foam); font-weight: 300; }
.radio input[type=radio]:after, input[type=radio]:after { border-color: rgba(255,255,255,0.3); }
.radio input[type=radio]:before, input[type=radio]:before { background-color: var(--od-teal); }
.radio input[type=radio]:checked:after, input[type=radio]:checked:after { border-color: var(--od-teal); }
.checkbox input[type=checkbox]:after, input[type=checkbox]:after { border-color: rgba(255,255,255,0.3); }
.checkbox input[type=checkbox]:checked:after, input[type=checkbox]:checked:after { background-color: var(--od-teal); border-color: var(--od-teal); }
.checkbox input[type=checkbox]:checked:before { border-color: var(--od-deep); }

.has-success .checkbox, .has-success .checkbox-inline, .has-success.checkbox-inline label, .has-success.checkbox label, .has-success .control-label, .has-success .help-block, .has-success .radio, .has-success .radio-inline, .has-success.radio-inline label, .has-success.radio label { color: var(--od-foam); }
.has-success .form-control { border-color: var(--od-line); }
.help-block { font-size: 11px; color: rgba(224,242,254,0.45); }
.label-danger { background: #ef4444; border-radius: 4px; font-size: 10px; }

.btn {
  background: linear-gradient(135deg, var(--od-teal), var(--od-ocean));
  border-color: transparent;
  color: #fff;
  border-radius: 8px;
  padding: 14px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.02em;
  box-shadow: 0 4px 20px rgba(8,145,178,0.3);
  transition: all 0.25s;
}
.btn:hover { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 8px 28px rgba(8,145,178,0.4); background: linear-gradient(135deg, var(--od-teal), var(--od-ocean)); border-color: transparent; }`,


'c9': `/* 🍂 ペーパー＆インク - 和紙テクスチャ */
@import url('https://fonts.googleapis.com/css2?family=Klee+One:wght@400;600&family=Noto+Serif+JP:wght@300;400&display=swap');

:root {
  --pi-paper: #f9f5ee;
  --pi-cream: #f2ead8;
  --pi-ink:   #1c1812;
  --pi-sepia: #6b5d4a;
  --pi-rust:  #8b3a2a;
  --pi-sage:  #5a6e55;
  --pi-line:  rgba(107,93,74,0.2);
  --pi-dot:   rgba(107,93,74,0.08);
}

body {
  background-color: var(--pi-cream);
  background-image: radial-gradient(var(--pi-dot) 1px, transparent 1px);
  background-size: 24px 24px;
  font-family: 'Noto Serif JP', serif;
}
.fieldsets { background: var(--pi-paper); }
.form-box { padding-top: 0; }

/* ヘッダー */
.form-top {
  background: var(--pi-paper);
  padding: 0;
  border-radius: 0;
  border-bottom: 2px solid var(--pi-ink);
  position: relative;
}
.form-top::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--pi-line);
}
.form-top .form-top-left {
  padding: 48px 28px 36px;
}
.form-top .form-top-left h3 {
  width: 100%;
  color: var(--pi-ink);
  font-family: 'Klee One', cursive;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-align: center;
  margin: 0 0 16px;
  line-height: 1.4;
}
.form-top .form-top-left h3::before {
  content: '◆';
  display: block;
  color: var(--pi-rust);
  font-size: 14px;
  letter-spacing: 0.3em;
  margin-bottom: 20px;
}
.form-top .form-top-left h3::after {
  content: '';
  display: block;
  width: 60px;
  height: 1px;
  background: var(--pi-rust);
  margin: 16px auto 0;
}
.form-top .form-top-left p {
  color: var(--pi-sepia);
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  line-height: 2;
}
.form-top .form-top-right { display: none; }

/* ボトム */
.form-bottom {
  background: var(--pi-paper);
  color: var(--pi-ink);
  padding: 32px 24px 40px;
}
.form-editor { opacity: 0; animation: piFade 0.8s 0.3s ease forwards; }
@keyframes piFade { to { opacity: 1; } }

a { color: var(--pi-rust); }

.control-label {
  font-size: 13px;
  font-weight: 400;
  color: var(--pi-ink);
  letter-spacing: 0.06em;
  text-align: left;
  display: block;
  margin-bottom: 8px;
  font-family: 'Klee One', cursive;
}
.form-group { margin-bottom: 28px; }

.description-md-title {
  display: block;
  background: none;
  color: var(--pi-rust);
  padding: 0;
  margin: 0 0 12px;
  box-shadow: none;
  font-family: 'Klee One', cursive;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-align: center;
  border-top: 1px solid var(--pi-line);
  border-bottom: 1px solid var(--pi-line);
  padding: 12px 0;
}

h5.description-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--pi-sage);
  letter-spacing: 0.08em;
  text-align: left;
  display: block;
  margin-bottom: 10px;
  font-family: 'Klee One', cursive;
}
h5.description-title::before { content: '｜'; margin-right: 6px; color: var(--pi-rust); }

.form-control {
  border: 1px solid var(--pi-line);
  border-radius: 0;
  background: rgba(255,255,255,0.6);
  color: var(--pi-ink);
  font-size: 15px;
  font-family: 'Noto Serif JP', serif;
  height: 42px;
  box-shadow: none;
}
.form-control:focus { border-color: var(--pi-rust); box-shadow: 2px 2px 0 var(--pi-cream); }
.form-control::placeholder { color: var(--pi-line); }
textarea.form-control { height: auto; }

.radio label, .checkbox label, .radio-inline label, .checkbox-inline label { font-size: 14px; color: var(--pi-sepia); }
.radio input[type=radio]:after, input[type=radio]:after { border-color: var(--pi-line); }
.radio input[type=radio]:before, input[type=radio]:before { background-color: var(--pi-rust); }
.radio input[type=radio]:checked:after, input[type=radio]:checked:after { border-color: var(--pi-rust); }
.checkbox input[type=checkbox]:after, input[type=checkbox]:after { border-color: var(--pi-line); }
.checkbox input[type=checkbox]:checked:after, input[type=checkbox]:checked:after { background-color: var(--pi-sage); border-color: var(--pi-sage); }

.has-success .form-control { border-color: var(--pi-line); }
.help-block { font-size: 11px; color: var(--pi-sepia); opacity: 0.6; }
.label-danger { background: var(--pi-rust); border-radius: 0; font-size: 10px; }

.btn {
  background: var(--pi-ink);
  border-color: var(--pi-ink);
  color: var(--pi-paper);
  border-radius: 0;
  padding: 14px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.2em;
  font-family: 'Klee One', cursive;
  position: relative;
}
.btn::before {
  content: '';
  position: absolute;
  inset: 3px;
  border: 1px solid rgba(249,245,238,0.2);
  pointer-events: none;
}
.btn:hover { background: var(--pi-rust); border-color: var(--pi-rust); }`,


'c10': `/* ✦ レモングラス - フレッシュジオメトリ */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap');

:root {
  --lg-bg:    #f0faf4;
  --lg-white: #ffffff;
  --lg-lime:  #16a34a;
  --lg-fresh: #4ade80;
  --lg-light: #dcfce7;
  --lg-ink:   #14191d;
  --lg-mid:   #5a7060;
  --lg-line:  #d1fae5;
  --lg-acc:   #f59e0b;
}

body { background: var(--lg-bg); font-family: 'Outfit', sans-serif; }
.fieldsets { background: var(--lg-white); }
.form-box { padding-top: 0; box-shadow: 0 0 0 1px var(--lg-line), 0 8px 32px rgba(22,163,74,0.08); }

/* ヘッダー */
.form-top {
  background: var(--lg-white);
  padding: 0;
  border-radius: 0;
  border-bottom: none;
  position: relative;
}
/* 左側カラーバー */
.form-top::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, var(--lg-lime), var(--lg-fresh));
}
.form-top .form-top-left {
  padding: 48px 28px 32px 36px;
}
.form-top .form-top-left h3 {
  width: 100%;
  color: var(--lg-ink);
  font-size: 28px;
  font-weight: 700;
  text-align: left;
  margin: 0 0 12px;
  line-height: 1.2;
  letter-spacing: -0.02em;
}
.form-top .form-top-left h3 span { color: var(--lg-lime); }
.form-top .form-top-left p {
  color: var(--lg-mid);
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  line-height: 1.7;
}
.form-top .form-top-right { display: none; }

/* ボトム */
.form-bottom {
  background: var(--lg-bg);
  color: var(--lg-ink);
  padding: 28px 24px 36px;
  border-top: 1px solid var(--lg-line);
}
.form-editor { }

a { color: var(--lg-lime); }

.control-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--lg-ink);
  text-align: left;
  display: block;
  margin-bottom: 6px;
}
.form-group {
  margin-bottom: 20px;
  background: var(--lg-white);
  border-radius: 10px;
  padding: 16px;
  border: 1px solid var(--lg-line);
}

.description-md-title {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--lg-light);
  color: var(--lg-lime);
  padding: 10px 16px;
  margin: 0 -16px 12px;
  box-shadow: none;
  font-size: 15px;
  font-weight: 600;
  text-align: left;
  border-radius: 8px 8px 0 0;
}
.description-md-title::before { content: '◉'; font-size: 12px; flex-shrink: 0; }

h5.description-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--lg-ink);
  text-align: left;
  display: block;
  margin-bottom: 10px;
  padding-left: 12px;
  border-left: 3px solid var(--lg-fresh);
}

.form-control {
  border: 1px solid var(--lg-line);
  border-radius: 8px;
  background: var(--lg-bg);
  color: var(--lg-ink);
  font-size: 15px;
  font-family: 'Outfit', sans-serif;
  height: 42px;
  box-shadow: none;
}
.form-control:focus { border-color: var(--lg-lime); box-shadow: 0 0 0 3px rgba(22,163,74,0.1); background: var(--lg-white); }
.form-control::placeholder { color: var(--lg-line); }
textarea.form-control { height: auto; }

.radio label, .checkbox label, .radio-inline label, .checkbox-inline label { font-size: 14px; color: var(--lg-mid); font-weight: 400; }
.radio input[type=radio]:after, input[type=radio]:after { border-color: var(--lg-line); }
.radio input[type=radio]:before, input[type=radio]:before { background-color: var(--lg-lime); }
.radio input[type=radio]:checked:after, input[type=radio]:checked:after { border-color: var(--lg-lime); }
.checkbox input[type=checkbox]:after, input[type=checkbox]:after { border-color: var(--lg-line); }
.checkbox input[type=checkbox]:checked:after, input[type=checkbox]:checked:after { background-color: var(--lg-lime); border-color: var(--lg-lime); }

.has-success .form-control { border-color: var(--lg-line); }
.help-block { font-size: 12px; color: var(--lg-mid); opacity: 0.8; }
.label-danger { background: var(--lg-acc); border-radius: 6px; font-size: 10px; color: var(--lg-ink); }

.btn {
  background: var(--lg-lime);
  border-color: var(--lg-lime);
  color: #fff;
  border-radius: 10px;
  padding: 14px;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Outfit', sans-serif;
  letter-spacing: 0.02em;
  box-shadow: 0 4px 0 #15803d;
  transition: all 0.1s;
}
.btn:hover { background: #15803d; border-color: #15803d; transform: translateY(2px); box-shadow: 0 2px 0 #166534; }`

}; // end CLAUDE_SAMPLES2

Object.assign(SAMPLES, CLAUDE_SAMPLES);
Object.assign(SAMPLES, CLAUDE_SAMPLES2);

const SAMPLE_META = {
  '1':  { primary: '#eab4b5' },
  '2':  { primary: '#0558B7' },
  '3':  { primary: '#8F87EA' },
  '4':  { primary: '#FF5E5E' },
  '5':  { primary: '#2180C5' },
  '6':  { primary: '#127602' },
  '7':  { primary: '#0daeff' },
  '8':  { primary: '#6e789c' },
  '9':  { primary: '#f19934' },
  '10': { primary: '#003c7c' },
  '11': { primary: '#d2826e' },
  'c1': { primary: '#2563eb' },
  'c2': { primary: '#5a7a5a' },
  'c3': { primary: '#00d4ff' },
  'c4': { primary: '#c9a84c' },
  'c5': { primary: '#ff6b9d' },
  'c6': { primary: '#c4603a' },
  'c7': { primary: '#e8001a' },
  'c8': { primary: '#0891b2' },
  'c9': { primary: '#8b3a2a' },
  'c10':{ primary: '#16a34a' },
};

/* ─ グローバル公開 ─ css-preview.html から window.LSTEP_* で参照 ─ */
window.LSTEP_SAMPLES = SAMPLES;
window.LSTEP_META    = SAMPLE_META;
