import PublicRouter from "../../router/PublicRouter"
import {PublicProvider} from '../../store/context/PublicContext';

const AppContainer = () => {
  return (
    <PublicProvider>
      <PublicRouter />
    </PublicProvider>
  )
}

export default AppContainer