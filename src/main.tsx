import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* O Provider é um componente que permite que os componentes filhos tenham acesso ao store da aplicação
    O store é o estado global da aplicação, que pode ser acessado por qualquer componente */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
