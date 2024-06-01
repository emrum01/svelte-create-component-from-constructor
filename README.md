# svelte-create-component-from-constructor

## デモ

プロジェクトルートで以下を実行することで、ライブラリのデモ用のページが開きます。
`dist/test.html`に呼び出しのサンプルコードが書き出されます

```bash
npm run build && cat <<EOF >> dist/test.html && npm i -D http-server && open http://127.0.0.1/test.html && npx http-server ./dist -c-1 -p 80
<html>
  <body>
    <script type="module">
      import { createButton } from './svelte-create-component-from-constructor-sdk.js';
      createButton(document.body, {
        buttonText: 'Click me!',
        onClick: () => alert('Hello!'),
      });
    </script>
  </body>
</html>
EOF
```
