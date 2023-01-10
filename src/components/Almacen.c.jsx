import React from 'react'

const Almacenc = () => {
    return (
        
        <div class="completed">
        <div class="box-shadow">
            <div class="lette">
            <h2>Ventas</h2>
            </div>
            <div class="letter">
                <h3>$233,000</h3>
            </div>
            <div class="dinero">
                <img src="/media/dollar.png" alt="" />
            </div>
        </div>
        <div class="box-shado">
            <div class="words">
                <h2>Categoria</h2>
            </div>
            <div class="soft">
                <h3>12</h3>
            </div>
            <div class="caja">
                <img src="/media/caja.png" alt="" />
            </div>
        </div>
        <div class="box">
            <div class="word">
                <h2>Clientes</h2>
            </div>
            <div class="wod">
                <h3>19</h3>
            </div>
            <div class="user">
                <img src="/media/camion.png" alt="" />
            </div>
        </div>
        <div class="boxx">
            <div class="voz">
                <h2>Productos</h2>
            </div>
            <div class="nick">
                <h3>1245</h3>
            </div>
            <div class="produ">
                <img src="/media/producto.png" alt="" />
            </div>
        </div>
        <h1 class="title">Grafico de Ventas</h1>
        <section class="container_grafico">
            <div class="grafico">
                <div class="container_leyenda">
                    <span class="leyenda_all">
                        <span class="color_1"></span>
                        <p className="social">40% Hielo</p>
                    </span>
                    <span class="leyenda_all">
                        <span class="color_2"></span>
                        <p className="social">30% Caja de hielo</p>
                    </span>
                    <span class="leyenda_all">
                        <span class="color_3"></span>
                        <p className="social">18% Paquete de hielo</p>
                    </span>
                    <span class="leyenda_all">
                        <span class="color_4"></span>
                        <p className="social">12% Agua</p>
                    </span>
                    <p class="total">Total: 100%</p>
                </div>
            </div>
        </section>
        </div>      
         );
     }
export default Almacenc;