import './NetflixIndexComponent.css';
import { NetflixHeaderComponent } from './NetflixHeaderComponent.jsx'; 
import NetflixMainComponent from './NetflixMainComponent.jsx';
import { NetflixRegisterComponent } from './NetflixRegisterComponent.jsx';
import NetflixFooterComponent from './NetflixFooterComponent.jsx';
import BindingCollectionComponent from './BindingCollectionComponent.jsx';
import NestedIterationArrayComponent from './NestedIterationArrayComponent.jsx';
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
                    
                </main>
            </section>
            <footer className='m-2 p-2'>
                <NetflixFooterComponent/>
                
            </footer>
           </div>
        </div>
    )
} 