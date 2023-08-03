const header = document.querySelector('header');
const footer = document.querySelector('footer');

header.innerHTML=`
<div class="menu">
        <nav>
        <ul>
        <li><a href="index.html"></a></li>
         </ul>
        </nav>
    </div>`;
footer.innerHTML=`       
<div class="grupo-1">
            <div class="box">
                <figure>
                        <div class="logo">
                            <h1>Untref School</h1>
                        </div>
                </figure>
            </div>
            <div class="box">
                <h2>QUIENES SOMOS</h2>
                <p>Lorem ipsum dolor sit amet </p>
                <p>Lorem ipsum dolor sit amet </p>
            </div>
            <div class="box">
                <h2>SIGUENOS</h2>
                <div class="red-social">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-instagram"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-youtube"></a>
                </div>
            </div>
            </div>
            <div class="grupo-2">
            <small>&copy; 2023 <b>Guillermina Irigaray</b> - Todos los Derechos Reservados.</small>
            </div>`;