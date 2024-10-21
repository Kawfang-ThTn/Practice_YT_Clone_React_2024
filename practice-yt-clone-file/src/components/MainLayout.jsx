import Sidebar from './Sidebar.jsx'
import Contents from './Contents.jsx'
import Nav from './Nav.jsx'


function MainLayout () {
    return (
        <>
            <section id="main-layout">
                <Nav />
                <Sidebar />
                <Contents />
            </section>
        </>
    );
}

export default MainLayout