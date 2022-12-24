import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = (props: any) => {
  if (localStorage.getItem('token') === null) {
		return <Navigate to="/login" />;
  } else {
		return props.children;
  }
}

export default ProtectedRoute