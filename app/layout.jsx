import '@styles/globals.css'
import Nav from './(components)/Nav'


export const metadata = {
  title: "Infraestructura Inventory",
  description: "App to create quotations and invetory"
}


const layout = ({ children }) => {
  return (
    <html lang='en'>
      <body className='bg-gray-100'>
        <main>
          <Nav />
          <div className='m-2'>
            { children }
          </div>
        </main>
      </body>
    </html>
  )
}

export default layout