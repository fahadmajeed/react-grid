import { Navbar } from "./components/Navbar";
import { TableContainer } from "./components/TableContainer";
import { ConfirmProvider } from "material-ui-confirm";

const App = () => {
  return (
    <>
      <ConfirmProvider>
        <Navbar />
        <TableContainer />
      </ConfirmProvider>
    </>
  );
}

export default App;
