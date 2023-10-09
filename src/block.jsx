import Obklei from './assets/cars/red.png'
import disk from './assets/cars/disk.png'
import kuz from './assets/cars/kuz.png'
import vihlop from './assets/cars/vihlop.png'
import wash from './assets/cars/wash.png'
import detail from './assets/cars/detail.png'

import './App.css'

function Block() {
  return (
    <>
      <button className="block">
            <div className="selling">АКЦИЯ</div>
            <h4>Обклейка авто пленкой</h4>
            <p>от <strong>32 000 ₽</strong></p>
            <img src={kuz} alt="" />
        </button>
        <button className="block">
            <h4>Слесарный ремонт</h4>
            <p>от <strong>2 999 ₽</strong></p>
            <img src={detail} alt="" />
          </button>
          <button className="block">
          <div className="selling">АКЦИЯ</div>
            <h4>Покраска дисков</h4>
            <p>от <strong>4 000 ₽</strong></p>
            <img src={disk} alt="" />
          </button>
          <button className="block">
            <h4>Тюнинг выхлопной системы</h4>
            <p>от <strong>32 000 ₽</strong></p>
            <img src={vihlop} alt="" />
          </button>
          <button className="block">
          <div className="selling">АКЦИЯ</div>
            <h4>Кузовной ремонт</h4>
            <p>от <strong>32 000 ₽</strong></p>
            <img src={Obklei} alt="" />
          </button>
          <button className="block">
            <h4>Мойка автомобиля</h4>
            <p>от <strong>990 ₽</strong></p>
            <img src={wash} alt="" />
          </button>
    </>
  )
}

export default Block
