import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import routes from "./routes";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {routes.map((route, index) => {
            const {
              path,
              component: Component,
              private: isPrivate,
              roles,
            } = route;

            return (
              <Route
                key={index}
                path={path}
                element={
                  isPrivate ? (
                    <PrivateRoute roles={roles}>
                      <Component />
                    </PrivateRoute>
                  ) : (
                    <Component />
                  )
                }
              />
            );
          })}
          {/* Chuyển hướng đến trang đăng nhập nếu không có route nào khớp */}
          <Route path="*" element={<Navigate to={routes[0].path} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
