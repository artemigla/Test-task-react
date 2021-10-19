import React from 'react';
import { I18nextProvider } from 'react-i18next';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from './i18n';

// Использовав этот "флаг" <I18nextProvider i18n={i18n}>...</I18nextProvider> и в конфигурации файла i18n.js из-зи строчки wait: true
// в консоле ругается, что эта опция устаревшая и желательно использовать useSuspense
// (react-i18next:: It seems you are still using the old wait option,
// you may migrate to the new useSuspense behaviour.)

// Но как ты написал, что нужно использовать другой флаг, прочитавши несколько статтей и документации в интернете, я нашел этот I18nextProvider.
// Поигравшись немного с кодом в файле i18n.js с такими модулями как: lng, ns, backend: {loadPath "..."}, defaultNS... в консоле было и остается
// очень много предупреждений, которые, я пока что не решил...
ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
