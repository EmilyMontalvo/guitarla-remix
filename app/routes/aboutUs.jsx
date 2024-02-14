import React from 'react'
import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/aboutUs.css'

//localhost:3000/nosotros  - > Remix le da esa url por defecto

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

export function meta(){
  return [
      { charset: 'utf-8' },
      { title: 'About us - GuitarLA' },
      { descriptio: 'Venta de guitarras, blog de musica'},
      { name: "viewport", content: "width=device-width,initial-scale=1" }
  ]
}

const AboutUs = () => {
  return (
    <main className='contenedor nosotros'>
        <h2 className="heading">About us</h2>
        <div className="contenido">
          <img src={imagen} alt="Image about us" />
          <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue malesuada massa bibendum tincidunt. 
            Vestibulum efficitur augue nec mollis pulvinar. Mauris laoreet vestibulum felis vitae elementum. 
            Mauris finibus, lectus eget tincidunt maximus, ipsum mauris consequat mi, a lobortis lorem turpis vitae arcu. 
            In lacinia ligula ipsum, sed malesuada felis volutpat eu. Suspendisse vel justo et metus suscipit 
            ultrices sed eget metus. In dui massa, pretium id neque eget, ultricies tempor odio. Mauris id vulputate lectus, 
            quis dignissim tellus. Mauris gravida metus vitae nisi hendrerit vestibulum. 
            Nam vel porttitor turpis, vel blandit nibh. Praesent pretium vestibulum ex sit amet lacinia.
            </p>
            <p>
            Ut sit amet augue sed lacus finibus lacinia sit amet quis mauris. Fusce id tortor risus. Integer in mi velit.
            Vestibulum et dignissim mi, eu consectetur odio. Duis interdum tortor maximus tortor auctor suscipit. Phasellus 
            feugiat a velit nec finibus. Quisque quis pulvinar est. Nulla consequat orci vitae aliquet semper. Praesent 
            sagittis dignissim lorem, vel suscipit nunc faucibus ac. Morbi aliquam iaculis imperdiet. Nam in velit facilisis, 
            varius nibh sed, dignissim leo. Nullam vitae mauris sed ligula aliquam vehicula vitae non tellus. Donec a tempus 
            metus, ut tincidunt urna. Maecenas felis tellus, pulvinar eget laoreet et, vestibulum in est.
            </p>
            </div>
        </div>
    </main>
  )
}

export default AboutUs
