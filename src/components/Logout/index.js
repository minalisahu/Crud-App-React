import React from 'react';
import Swal from 'sweetalert2';

const Logout = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    Swal.fire({
      icon: 'question',
      title: 'Logging Out',
      text: 'Are you sure you want to log out?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then(result => {
      if (result.value) {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            localStorage.setItem('is_authenticated', false);
            // setIsAuthenticated(false);
            window.location.reload();
          },
        });
      }
    });
  };

  return (
    <button
      style={{ marginLeft: '12px' }}
      className="btn btn-danger"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
