import { Routes, Route, Navigate } from 'react-router-dom';

// Импорты страниц
import Main from "../Pages/Main/Main"

const AppRouter = () => {

  return (
    <Routes>
      {/* Публичные */}

      {/* menu */}
        <Route path="/" element={<Main />} />

      {/* 404 */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;