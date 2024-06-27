import { Outlet,Link } from "react-router-dom";
import Image1 from "../assets/bgone.jpg";
import logo from "../assets/lg.png";
import inst from '../assets/inst.png';
import face from '../assets/fb.png';
import link from '../assets/in.png';
import xt from '../assets/xtw.png';

export default function LayoutGuest(){
    return <>
<header className="w-[100vw] h-[100vh] p-[5px] flex justify-center ">
    <div className="rid h-[100vh] w-[100%] absolute top-[0px] bg-[#000000a9] z-10"></div>
    <img src={logo} alt="" className="h-[80px] w-[120px] absolute top-[10px] left-4 z-10" />
    <img src={Image1} alt="" className="h-[100vh] w-[100%] absolute top-[0px] bg-fixed" />
    <div class = "container_H absolute top-[420px] left-60 z-10 text-[#ffffff] flex flex-col justify-center items-center">
        <h1 className="text-[50px] ">BIENVENUE</h1>
        <h2 className="text-[30px] ">Nous sommes ravis de vous accueillir sur le site officiel de <span className="text-[#fa2121] ">POLYLANGUES</span> ,</h2> 
        <h3 className="text-[25px] ">votre destination privilégiée pour l'apprentissage des langues</h3>
    </div>

    <nav className="absolute z-10 mt-6">
        <div className="h_li">Acceuil</div>
        <div className="h_li">Services</div>
        <div className="h_li">Formations</div>
        <div className="h_li">Contact</div>
      <div class="animation start-home"></div>
    </nav>
    
    <button className="boton-elegant1 w-[180px] h-14 absolute top-[650px] left-[48%] text-[#fff] z-10 ">C'est partis!</button>
    <button className="boton-elegant1 w-[180px] h-14 absolute top-[650px] right-[54%] text-[#fff] z-10">Nous contacter</button>
</header>
<main className="">
        <Outlet/>
</main>
<footer
  className="flex flex-col items-center bg-[#6e2b2b] text-center text-white ">
  <div className="container p-4 flex flex-col">
    <div className="social flex items-center justify-center mb-8">
      <img src={face} alt="" className="h-[30px] w-[30px] mr-10  cursor-pointer"/>
      <img src={inst} alt=""  className="h-[30px] w-[30px]  mr-10 cursor-pointer"/>
      <img src={xt} alt=""  className="h-[30px] w-[30px]  mr-10 cursor-pointer"/>
      <img src={link} alt="" className="h-[30px] w-[30px]  mr-10 cursor-pointer" />
    </div>
    <div className="">
      <p className="flex items-center justify-center">
        <span className="me-4">
          <Link to={'/Register'}>Register</Link>
          </span>
        <button
          type="button"
          className="inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 hover:bg-[#ff393993] dark:focus:bg-neutral-600"
          data-twe-ripple-init
          data-twe-ripple-color="light">
          <Link to={'/Login'}>Sign up</Link>
        </button>
      </p>
    </div>
  </div>
 
  <div className="w-full bg-black/20 p-4 text-center">
    © 2024 Copyright :  <a href="https://tw-elements.com/">  Guellal Mohand</a>
  </div>
</footer>
    </>
}