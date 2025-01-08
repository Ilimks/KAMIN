import React, { useState} from "react";
import "./StovesaAndFreplacesCarts.scss";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../Store/BasketSlice/BasketSlice";
import viewBox1 from "../StovesaAndFreplacesIMG/viewBox1.svg";
import viewBox2 from "../StovesaAndFreplacesIMG/viewBox2.svg";
import { Link, useNavigate,} from "react-router-dom";
  
  
  
const StovesaAndFreplacesCarts = () => {

  //-----------------------------------------------------------------------StoreProducts------------------------------------------------------------------
  const products = useSelector((state) => state.productsSlice.data);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  //-----------------------------------------------------------------------UseState-----------------------------------------------------------------------
  const [OpenPanel, setOpenPanel] = useState("panel1");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [value, setValue] = useState([0, 400000]);
  const [basketShowAdd, setBasketShowAdd] = useState(false)
  const [characteristics1, setCharacteristics1] = useState(false)
  const [characteristics2, setCharacteristics2] = useState(false)
  const [characteristics3, setCharacteristics3] = useState(false)
  const [characteristics4, setCharacteristics4] = useState(false)
  const [characteristics5, setCharacteristics5] = useState(false)

  //------------------------------------------------------------------------Range--------------------------------------------------------------------------
  function valuetext(value) {
    return `${value}`;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrentPage(1);
  };


  //------------------------------------------------------------------------Characteristics-----------------------------------------------------------------
  const CharacteristicsChange1 = () => {
    setCharacteristics1((popupCharact)=>!popupCharact)
  }

  const CharacteristicsChange2 = () => {
    setCharacteristics2((popupCharact)=>!popupCharact)
  }

  const CharacteristicsChange3 = () => {
    setCharacteristics3((popupCharact)=>!popupCharact)
  }

  const CharacteristicsChange4 = () => {
    setCharacteristics4((popupCharact)=>!popupCharact)
  }

  const CharacteristicsChange5 = () => {
    setCharacteristics5((popupCharact)=>!popupCharact)
  }


  const ShowBasketAdd = () => {
    setBasketShowAdd(true)
    
    setTimeout(() => {
      setBasketShowAdd(false);
    },5000);
  }


  //-------------------------------------------------------------------------FilterPrice--------------------------------------------------------------------
  const filteredProductsRange = products.filter((el) => el.price >= value[0] && el.price <= value[1]);


  //-------------------------------------------------------------------------Pagition-----------------------------------------------------------------------
  const totalPages = Math.ceil(filteredProductsRange.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredProductsRange.slice(startIndex, endIndex);


  const resetFilters = () => {
    setValue([0, 400000]);
    setCharacteristics1(false);
    setCharacteristics2(false);
    setCharacteristics3(false);
    setCharacteristics4(false);
    setCharacteristics5(false);
  };




  const ContantPanel = () => {
    return (

      <>
        {currentItems.map((el) => (
          <div key={el.id} className={OpenPanel === "panel1" ? "stovesa__and__freplaces__carts__box__contant__cart1" : "stovesa__and__freplaces__carts__box__contant__cart1-1"}>

              <div onClick={()=>{
                navigate(`/single/${el.id}`)
             
              }} className={OpenPanel === "panel1" ? "stovesa__and__freplaces__carts__box__contant__cart1__img__box" : "stovesa__and__freplaces__carts__box__contant__cart1-1__img__box"}>
                <img className={OpenPanel === "panel1" ? "stovesa__and__freplaces__carts__box__contant__cart1__img" : "stovesa__and__freplaces__carts__box__contant__cart1-1__img"} src={el.image} alt=""/>
              </div>
  
              <p onClick={()=>navigate(`/single/${el.id}`)} className={OpenPanel === "panel1" ? "stovesa__and__freplaces__carts__box__contant__cart1__title" : "stovesa__and__freplaces__carts__box__contant__cart1-1__title"}>{el.title}</p>
  
              {OpenPanel === "panel1" && (
  
                <p className="stovesa__and__freplaces__carts__box__contant__cart1__origin">Производитель: Astov</p>
  
              )}
              <h3 className={OpenPanel === "panel1" ? "stovesa__and__freplaces__carts__box__contant__cart1__price" : "stovesa__and__freplaces__carts__box__contant__cart1-1__price"}>{el.price.toLocaleString('ru-RU')} ₽</h3>
  
              {OpenPanel === "panel1" && (
  
                <button onClick={()=>{
                  dispatch(add({...el, count: 1 }));
                  ShowBasketAdd()
                }}
                className="stovesa__and__freplaces__carts__box__contant__cart1__btn">В корзину</button>
                
              )}

          </div>
        ))}
      </>

    );
  };

  return (
    <section className="stovesa__and__freplaces__carts">
        <div className="container">
          
            <div className="stovesa__and__freplaces__panel__box">
                <div className="stovesa__and__freplaces__panel__box__img">
  
                  <div onClick={() => setOpenPanel("panel1")} className={OpenPanel === "panel1" ? "stovesa__and__freplaces__panel__box__img1--1" : "stovesa__and__freplaces__panel__box__img1"}>
                    <img className="stovesa__and__freplaces__panel__box__img1-1" src={viewBox1} alt=""/>
                  </div>
      
                  <div onClick={() => setOpenPanel("panel2")} className={OpenPanel === "panel2" ? "stovesa__and__freplaces__panel__box__img2--2" : "stovesa__and__freplaces__panel__box__img2"}>
                    <img className="stovesa__and__freplaces__panel__box__img2-2" src={viewBox2} alt=""/>
                  </div>
  
                </div>

              <p className="stovesa__and__freplaces__panel__box__popup">По умолчанию</p>

            </div>
    
            <div className="stovesa__and__freplaces__carts__box">
                <aside className="stovesa__and__freplaces__carts__aside">

                    <h4 className="stovesa__and__freplaces__carts__aside__name">Цена</h4>
        
                    <form className="stovesa__and__freplaces__carts__aside__form" action="">

                        <div className="stovesa__and__freplaces__carts__aside__form__inputs">
                          <input onChange={(e) => setValue([Number(e.target.value), value[1]])} value={value[0]} className="stovesa__and__freplaces__carts__aside__form__input1" type="number"/>
                          <input onChange={(e) => setValue([value[0], Number(e.target.value)])} value={value[1]} className="stovesa__and__freplaces__carts__aside__form__input2" type="number"/>
                        </div>
        
                        <Box sx={{ width: 286 }}>
                          <Slider
                            getAriaLabel={() => "Диапазон цен"}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            min={0}
                            max={400000}
                            sx={{
                              color: "orange",
                              height: 8,
                              "& .MuiSlider-thumb": {
                                backgroundColor: "black",
                                width: 16,
                                height: 16,
                              },
                              "& .MuiSlider-track": {
                                backgroundColor: "orange",
                              },
                              "& .MuiSlider-rail": {
                                backgroundColor: "#DFE2E5",
                                borderRadius: 50,
                                width: 286,
                                height: 16,
                              },
                              "& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible": {
                                boxShadow: "0 0 0 8px rgba(255, 165, 0, 0.16)",
                              },
                            }}
                          />
                        </Box>
                    </form>
        
                    <div className="stovesa__and__freplaces__carts__aside__box">

                          <div className="stovesa__and__freplaces__carts__aside__box__line"></div>

                          <p onClick={CharacteristicsChange1} className={`stovesa__and__freplaces__carts__aside__box__characteristics1 ${characteristics1 ? "close__characteristics1" : ""}`}>Производители</p>
                             {characteristics1 && ( 
                              <div className="stovesa__and__freplaces__carts__aside__box__characteristics1__in">

                                 <label className="stovesa__and__freplaces__carts__aside__box__characteristics1__in1">
                                    <input className="stovesa__and__freplaces__carts__aside__box__characteristics1__in1-input" type="checkbox" />
                                    <span className="custom__checkbox"></span>
                                    <p className="stovesa__and__freplaces__carts__aside__box__characteristics1__in1-text">Ермак</p>
                                 </label>

                                 <label className="stovesa__and__freplaces__carts__aside__box__characteristics1__in2">
                                    <input className="stovesa__and__freplaces__carts__aside__box__characteristics1__in2-input" type="checkbox" />
                                    <span className="custom__checkbox"></span>
                                    <p className="stovesa__and__freplaces__carts__aside__box__characteristics1__in2-text">ABX</p>
                                 </label>

                                 <label className="stovesa__and__freplaces__carts__aside__box__characteristics1__in3">
                                    <input className="stovesa__and__freplaces__carts__aside__box__characteristics1__in3-input" type="checkbox" />
                                    <span className="custom__checkbox"></span>
                                    <p className="stovesa__and__freplaces__carts__aside__box__characteristics1__in3-text">Jotul</p>
                                 </label>

                                 <label className="stovesa__and__freplaces__carts__aside__box__characteristics1__in4">
                                    <input className="stovesa__and__freplaces__carts__aside__box__characteristics1__in4-input" type="checkbox" />
                                    <span className="custom__checkbox"></span>
                                    <p className="stovesa__and__freplaces__carts__aside__box__characteristics1__in4-text">Kratki</p>
                                 </label>

                              </div>
                             )}

                          <div className="stovesa__and__freplaces__carts__aside__box__line"></div>

                          <p onClick={CharacteristicsChange2} className={`stovesa__and__freplaces__carts__aside__box__characteristics2 ${characteristics2 ? "close__characteristics2" : ""}`}>Материал топки</p>
                             {characteristics2 && (
                              <div className="stovesa__and__freplaces__carts__aside__box__characteristics2__in">

                                  <label className="stovesa__and__freplaces__carts__aside__box__characteristics2__in1">
                                    <input className="stovesa__and__freplaces__carts__aside__box__characteristics2__in1-input" type="checkbox" />
                                    <span className="custom__checkbox1"></span>
                                    <p className="stovesa__and__freplaces__carts__aside__box__characteristics2__in1-text">Чугун</p>
                                  </label>

                                  <label className="stovesa__and__freplaces__carts__aside__box__characteristics2__in2">
                                    <input className="stovesa__and__freplaces__carts__aside__box__characteristics2__in2-input" type="checkbox" />
                                    <span className="custom__checkbox1"></span>
                                    <p className="stovesa__and__freplaces__carts__aside__box__characteristics2__in2-text">Сталь</p>
                                  </label>

                              </div>
                             )}

                          <div className="stovesa__and__freplaces__carts__aside__box__line"></div>

                          <p onClick={CharacteristicsChange3} className={`stovesa__and__freplaces__carts__aside__box__characteristics3 ${characteristics3 ? "close__characteristics3" : ""}`}>Варочная плита</p>
                             {characteristics3 && (
                              <div className="stovesa__and__freplaces__carts__aside__box__characteristics3__in">

                                  <label className="stovesa__and__freplaces__carts__aside__box__characteristics3__in1">
                                    <input className="stovesa__and__freplaces__carts__aside__box__characteristics3__in1-input" type="checkbox" />
                                    <span className="custom__checkbox2"></span>
                                    <p className="stovesa__and__freplaces__carts__aside__box__characteristics3__in1-text">Да</p>
                                  </label>

                              </div>
                             )}

                          <div className="stovesa__and__freplaces__carts__aside__box__line"></div>

                          <p onClick={CharacteristicsChange4} className={`stovesa__and__freplaces__carts__aside__box__characteristics4 ${characteristics4 ? "close__characteristics4" : ""}`}>Духовка</p>
                             {characteristics4 && (
                              <div className="stovesa__and__freplaces__carts__aside__box__characteristics4__in">
                                
                                  <label className="stovesa__and__freplaces__carts__aside__box__characteristics4__in1">
                                    <input className="stovesa__and__freplaces__carts__aside__box__characteristics4__in1-input" type="checkbox" />
                                    <span className="custom__checkbox3"></span>
                                    <p className="stovesa__and__freplaces__carts__aside__box__characteristics4__in1-text">Да</p>
                                  </label>

                              </div>
                             )}

                          <div className="stovesa__and__freplaces__carts__aside__box__line"></div>

                          <p onClick={CharacteristicsChange5} className={`stovesa__and__freplaces__carts__aside__box__characteristics5 ${characteristics5 ? "close__characteristics5" : ""}`}>Расположение</p>
                             {characteristics5 && (
                              <div className="stovesa__and__freplaces__carts__aside__box__characteristics5__in">
                                  
                                  <label className="stovesa__and__freplaces__carts__aside__box__characteristics5__in1">
                                    <input className="stovesa__and__freplaces__carts__aside__box__characteristics5__in1-input" type="checkbox" />
                                    <span className="custom__checkbox4"></span>
                                    <p className="stovesa__and__freplaces__carts__aside__box__characteristics5__in1-text">Пристенное</p>
                                  </label>

                                  <label className="stovesa__and__freplaces__carts__aside__box__characteristics5__in2">
                                    <input className="stovesa__and__freplaces__carts__aside__box__characteristics5__in2-input" type="checkbox" />
                                    <span className="custom__checkbox4"></span>
                                    <p className="stovesa__and__freplaces__carts__aside__box__characteristics5__in2-text">Угловое</p>
                                  </label>

                              </div>
                             )}
                          <div className="stovesa__and__freplaces__carts__aside__box__line"></div>
                        
                      </div>
        
                    <button onClick={resetFilters} className="stovesa__and__freplaces__carts__aside__btn">Сбросить</button>

                </aside>
    
                <div className={OpenPanel === "panel1" ? "stovesa__and__freplaces__carts__box__contant" : "stovesa__and__freplaces__carts__box__contant-1"}>

                  {ContantPanel()}

                </div>

            </div>
    
            <div className="pagination__box">
              {Array.from({ length: totalPages }, (_, index) => (
                <button key={index} className={`pagination__button__products ${currentPage === index + 1 ? "active" : ""}`} onClick={() => setCurrentPage(index + 1)}>

                  {index + 1}

                </button>
              ))}
            </div>

            <div style={{opacity:`${basketShowAdd? 1: 0}`}} className={`show__basket__add ${basketShowAdd ? 'basketshow' : ''}`}>
              <p className="show__basket__add__text">Товар добавлен в корзину</p>
              <Link to='/basket'><button className="show__basket__add__btn">Корзина</button></Link>
            </div>
        </div>
    </section>
  );
};

export default StovesaAndFreplacesCarts;


