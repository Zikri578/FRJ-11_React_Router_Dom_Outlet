# FRJ-11_React_Router_Dom_Outlet

React Router DOM Outlet adalah komponen yang digunakan dalam aplikasi React yang menggunakan React Router. Komponen ini digunakan untuk menentukan bagian dari aplikasi yang akan di-render ketika ada perubahan rute.

Contohnya, jika Anda memiliki aplikasi yang terdiri dari header, sidebar, dan konten, Anda dapat menggunakan React Router DOM Outlet untuk menentukan bagian konten yang akan di-render ketika rute berubah. Ketika rute berubah, komponen yang sesuai dengan rute tersebut akan di-render di dalam outlet.

React Router DOM Outlet merupakan bagian dari paket react-router-dom, yang merupakan implementasi React Router untuk aplikasi web. Sebelum menggunakan komponen ini, Anda harus menginstal paket tersebut terlebih dahulu.

Anda dapat menggunakan React Router DOM Outlet dengan cara mengimportnya dari paket react-router-dom dan kemudian menggunakannya sebagai komponen di dalam aplikasi Anda. Sebagai contoh:

    import { Outlet } from 'react-router-dom';

    function App() {
      return (
        <div>
          <header>Header</header>
          <sidebar>Sidebar</sidebar>
          <Outlet />
        </div>
      );
    }
    
Di sini, <Outlet /> akan di-render dengan komponen yang sesuai dengan rute yang sedang aktif. Misalnya, jika rute saat ini adalah /about, maka komponen About akan di-render di dalam outlet.
