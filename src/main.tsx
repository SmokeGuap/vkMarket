import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from 'src/App.tsx';
import store from 'src/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>
);
