import React from 'react'

const Dashboardc = () => {
  return (
    <div className="completed">
        <div className="box-shadow">
            <div className="lette">
            <h2>Ventas</h2>
            </div>
            <div className="letter">
                <h3>$233,000</h3>
            </div>
            <div className="dinero">
                <img src="/media/dollar.png" alt="" />
            </div>
        </div>
        <div className="box-shado">
            <div className="words">
                <h2>Categoria</h2>
            </div>
            <div className="soft">
                <h3>12</h3>
            </div>
            <div className="caja">
                <img src="/media/caja.png" alt="" />
            </div>
        </div>
        <div className="box">
            <div className="word">
                <h2>Clientes</h2>
            </div>
            <div className="wod">
                <h3>19</h3>
            </div>
            <div className="user">
                <img src="/media/camion.png" alt="" />
            </div>
        </div>
        <div className="boxx">
            <div className="voz">
                <h2>Productos</h2>
            </div>
            <div className="nick">
                <h3>1245</h3>
            </div>
            <div className="produ">
                <img src="/media/producto.png" alt="" />
            </div>
        </div>
        <h1 className="title">Grafico de Ventas</h1>
        <section className="container_grafico">
            <div className="grafico">
                <div className="container_leyenda">
                    <span className="leyenda_all">
                        <span className="color_1"></span>
                        <p className="social">40% Hielo</p>
                    </span>
                    <span className="leyenda_all">
                        <span className="color_2"></span>
                        <p className="social">30% Caja de hielo</p>
                    </span>
                    <span className="leyenda_all">
                        <span className="color_3"></span>
                        <p className="social">18% Paquete de hielo</p>
                    </span>
                    <span className="leyenda_all">
                        <span className="color_4"></span>
                        <p className="social">12% Agua</p>
                    </span>
                    <p className="total">Total: 100%</p>
                </div>
            </div>
        </section>
        <div className="container_more">
            <h2 className="title_more">Productos en Almacen</h2>
            <div className="button">
                <img src="/media/mas.png" alt="" />
                </div>
                <div className="bx">
                    <img src="/media/cajas.jpg" alt="" />
                </div>
        </div>
        </div>
  )
}

export default Dashboardc