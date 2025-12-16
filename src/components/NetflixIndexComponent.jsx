import './NetflixIndexComponent.css';
import { NetflixHeaderComponent } from './NetflixHeaderComponent.jsx'; 
import NetflixMainComponent from './NetflixMainComponent.jsx';
import { NetflixRegisterComponent } from './NetflixRegisterComponent.jsx';
import NetflixFooterComponent from './NetflixFooterComponent.jsx';
export default function NetflixIndexComponent()
{
    return(
        <div className="contianer-fluid">
           <div className='box'>
            <header>
                <NetflixHeaderComponent/>
            </header>
            <section >
                <main>
                    
                    <NetflixMainComponent/>
                    <NetflixRegisterComponent/>
                </main>
            </section>
            <footer className='m-2 p-2'>
                <NetflixFooterComponent/>
                
            </footer>
           </div>
        </div>
    )
} 