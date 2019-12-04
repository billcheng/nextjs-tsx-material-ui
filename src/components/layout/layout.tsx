import Navbar from "./navbar/navbar"

const Layout = ({ children }) => (
    <>
        <style jsx global>{`
            body {
                margin: 0;
            }
        `}
        </style>
        <style jsx>{`
            div {
                margin-top: 64px;
            }
        `}
        </style>
        <Navbar />
        <div>
            {children}
        </div>
    </>
)

export default Layout