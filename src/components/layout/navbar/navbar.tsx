const Navbar = () => (
    <div className="navbar">
        <div className="brand">MENU</div>
        <div className="fill-up"></div>
        <div className="actions">ACTION</div>
        <style jsx>{`
        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 60px;
            background-color: gray;
            line-height: 60px;
            display: flex;
            flex-direction: row;
        }

        .brand {
            margin-left: 8px;
        }

        .fill-up {
            flex-grow: 1;
        }

        .actions {
            margin-right: 8px;
        }
        `}
        </style>
    </div>
)

export default Navbar