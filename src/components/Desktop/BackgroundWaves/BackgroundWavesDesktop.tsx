// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from "./BackgroundWaves.module.css";
// import img1 from './images/1.png';
// import img2 from './images/2.png';
// import img3 from './images/3.png';
// import Image from 'next/image';
// import { Navbar } from '../Navbar/Navbar';

// export const BackgroundWaves = (props: any) => 
// {
//     console.log(img1);
//     return (<>
//         {/* <Navbar/> */}
//         <section className={styles.container}>
//             <div className={`${styles.line} ${styles.line1}`}>
//                 <Image 
//                     src={img1} 
//                     className={`${styles.wave} ${styles.wave1}`}
//                     alt="My image"/>
//             </div>

//             {/* <div className={`${styles.line} ${styles.line2}`}>
//                 <Image 
//                     src={img2} 
//                     className={`${styles.wave} ${styles.wave2}`}
//                     alt="My image"/>
//             </div> */}

//             {/* <div className={`${styles.line} ${styles.line3}`}>
//                 <Image 
//                     src={img3} 
//                     className={`${styles.wave} ${styles.wave3}`}
//                     alt="My image"/>
//             </div> */}
//         </section>
//     </>);
// }

// BackgroundWaves.defaultProps =
// {

// }

// BackgroundWaves.propTypes = 
// {

// }

/*
Resources
https://www.youtube.com/watch?v=tWAGIU3GUk4&t=93s&ab_channel=Divinector

*/

// -------------------------------------------------------------------
// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from "./BackgroundWaves.module.css";
// import img1 from './images/1.png';
// import img2 from './images/2.png';
// import img3 from './images/3.png';
// import Image from 'next/image';

// export const BackgroundWaves = (props: any) => 
// {
//     console.log(img1);
//     return (<>
//         <div className={styles.container}>
            // <Image 
            //     src={img1} 
            //     className={`${styles.wave} ${styles.wave1}`}
            //     alt="My image"/>

            // <Image 
            //     src={img2} 
            //     className={`${styles.wave} ${styles.wave2}`}
            //     alt="My image"/>

            // <Image 
            //     src={img3} 
            //     className={`${styles.wave} ${styles.wave3}`}
            //     alt="My image"/>
//         </div>
//     </>);
// }

// BackgroundWaves.defaultProps =
// {

// }

// BackgroundWaves.propTypes = 
// {

// }

// -------------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import styles from "./BackgroundWavesDesktop.module.css";
import img1 from '../../Common/BackgroundWaves/images/1.png';
import img2 from '../../Common/BackgroundWaves/images/2.png';
import img3 from '../../Common/BackgroundWaves/images/3.png';
import Image from 'next/image';

export const BackgroundWavesDesktop = (props: any) => 
{
    return (<>
        <section className={styles.container}>
            <Image 
                src={img1} 
                className={`${styles.wave} ${styles.wave1}`}
                alt="My image"/>

            <Image 
                src={img2} 
                className={`${styles.wave} ${styles.wave2}`}
                alt="My image"/>

            <Image 
                src={img3} 
                className={`${styles.wave} ${styles.wave3}`}
                alt="My image"/>
        </section>
    </>);
}

BackgroundWavesDesktop.defaultProps =
{

}

BackgroundWavesDesktop.propTypes = 
{

}
