
import img from "../../public/Womanw.avif"
import img1 from "../../public/menw.avif"
import img2 from "../../public/kidw.avif"
import img3 from "../../public/beaw.avif"
import img4 from "../../public/homew.avif"
import w1 from "../../public/w1.png"
import w2 from "../../public/w2.png"
import w3 from "../../public/w3.png"
import w4 from "../../public/w4.png"
import w5 from "../../public/w5.png"
import w6 from "../../public/w6.png"
import w7 from "../../public/w7.png"
import w8 from "../../public/w8.png"
import w9 from "../../public/w9.png"
import w10 from "../../public/w10.png"
import w11 from "../../public/w11.png"
import w12 from "../../public/w12.png"
import w13 from "../../public/w13.png"
import w14 from "../../public/w14.png"
import w15 from "../../public/w15.png"
import w16 from "../../public/w16.png"
import w17 from "../../public/w17.png"
import w18 from "../../public/w18.png"
import w19 from "../../public/w19.png"
import w20 from "../../public/w20.png"
import w21 from "../../public/w21.png"
import w22 from "../../public/w22.png"
import w23 from "../../public/w23.png"
import w24 from "../../public/w24.png"
import { useContext, useEffect, useState } from "react"
import { OtherContext } from "./Othercontext"

const Option = () => {

    const { ups, scrolls, tabs } = useContext(OtherContext)
    const [up, setup] = ups
    const [tab, settab] = tabs
    const [scrollDirection, setScrollDirection, lastScrollTop] = scrolls
    const [list, setlist] = useState(0)
    const [head, sethead] = useState(0)
    const [search,setsearch]=useState(false)

    return (
        <>
            <div className={`options ${lastScrollTop == 0 || scrollDirection == "up" ? "opup" : "opdown"}`} style={{ backgroundColor: up || lastScrollTop !== 0 ? "white" : "transparent",zIndex:"999" }}>
                <div className='obody'>
                    <span onMouseEnter={() => setup(1)} onClick={() => setup((pre) => pre === 1 ? 0 : 1)} onMouseLeave={() => setup(0)} style={{ borderBottom: up == 1 ? "2px solid black" : "2px solid transparent" }}><p>Woman</p><i className={`fa-solid fa-angle-${up == 1 ? "up" : "down"}`}></i></span>
                    <span onMouseEnter={() => setup(2)} onClick={() => setup((pre) => pre === 2 ? 0 : 2)} onMouseLeave={() => setup(0)} style={{ borderBottom: up == 2 ? "2px solid black" : "2px solid transparent" }}><p>Man</p><i className={`fa-solid fa-angle-${up == 2 ? "up" : "down"}`}></i></span>
                    <span onMouseEnter={() => setup(3)} onClick={() => setup((pre) => pre === 3 ? 0 : 3)} onMouseLeave={() => setup(0)} style={{ borderBottom: up == 3 ? "2px solid black" : "2px solid transparent" }}><p>Kids</p><i className={`fa-solid fa-angle-${up == 3 ? "up" : "down"}`}></i></span>
                    <span onMouseEnter={() => setup(4)} onClick={() => setup((pre) => pre === 4 ? 0 : 4)} onMouseLeave={() => setup(0)} style={{ borderBottom: up == 4 ? "2px solid black" : "2px solid transparent" }}><p>Beauty</p><i className={`fa-solid fa-angle-${up == 4 ? "up" : "down"}`}></i></span>
                    <span onMouseEnter={() => setup(5)} onClick={() => setup((pre) => pre === 5 ? 0 : 5)} onMouseLeave={() => setup(0)} style={{ borderBottom: up == 5 ? "2px solid black" : "2px solid transparent" }}><p>Home</p><i className={`fa-solid fa-angle-${up == 5 ? "up" : "down"}`}></i></span>
                    <span onMouseEnter={() => setup(6)} onClick={() => setup((pre) => pre === 6 ? 0 : 6)} onMouseLeave={() => setup(0)} style={{ borderBottom: up == 6 ? "2px solid black" : "2px solid transparent" }}><p>Brands</p><i className={`fa-solid fa-angle-${up == 6 ? "up" : "down"}`}></i></span>
                    <span><p>W-Style</p></span>
                    <span><p>View More</p></span>
                </div>
            </div>
            <div className='woman' onMouseEnter={() => setup(1)} onMouseLeave={() => setup(0)} style={{ display: up == 1 ? "block" : "none", top: lastScrollTop !== 0 && scrollDirection !== "up" ? "33px" : "108px" }}>
                <div className='details'>
                    <div className='di'>
                        <img src={img} alt="img" />
                        <p>New Arrival for Her</p>
                    </div >
                    <div className='db'>
                        <div>
                            <span>
                                <p>Westren Wear</p>
                                <p>Trending Now</p>
                                <p>New In</p>
                                <p>View All</p>
                            </span>
                            <p>Dresses | Jumpsuits</p>
                            <p>Blazers | Jackets</p>
                            <p>Shirts | Tops</p>
                            <p>T-Shirt</p>
                            <p>Jeans</p>
                            <p>Trousers | Joggers</p>
                            <p>Skirts | Shorts</p>
                        </div>
                        <div>
                            <span>
                                <p>Ethnic Wear</p>
                                <p>Trending Now</p>
                                <p>New In</p>
                                <p>View All</p>
                            </span>
                            <p>Co-ord Sets</p>
                            <p>Kurtas</p>
                            <p>Ethnic Suits</p>
                            <p>Kurtis | Tunics</p>
                            <p>Ethnic Dresses</p>
                            <p>Ethnic Tops</p>
                            <p>Palazzos | Skirts</p>
                            <p>Salwars | Pants</p>
                            <p>Dupattas | Shawls</p>
                        </div>
                        <div>
                            <span>
                                <p>Curvy Woman</p>
                                <p>Trending Now</p>
                                <p>New In</p>
                                <p>View All</p>
                            </span>
                            <p>Dresses</p>
                            <p>Shirt | Tops</p>
                            <p>Jackets</p>
                            <p>T-Shirt</p>
                            <p>Jeans</p>
                            <p>Trousers</p>
                            <p>Kurtas</p>
                            <p>Kurtis</p>
                            <p>Palazzos | Pants</p>
                        </div>
                        <div>
                            <span>
                                <p>FootWear & Bags</p>
                                <p>New In</p>
                                <p>View All</p>
                            </span>
                            <p>Flat Sandals</p>
                            <p>Fashion Comforts</p>
                            <p>Heeled Sandals</p>
                            <p>Flat Shoes</p>
                            <p>Heeled Shoes</p>
                            <p>Sneakers | Trainers</p>
                            <p>Flip Flops | Beach Sandals</p>
                            <p>Handbags</p>
                        </div>
                        <div className='las'>
                            <span>
                                <p>Fragrances</p>
                                <p>Beauty</p>
                                <p>Co-ord Sets</p>
                                <p>Gift Shop</p>
                                <p>Lingerie</p>
                                <p>Swimwear</p>
                                <p>Loungewear & Sleepwear</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='ofoot'>
                    <div className='bor'></div>
                    <div className='ofb'>
                        <p>About Us</p>
                        <p>WestStyleClub</p>
                        <p>W-Style</p>
                        <p>Gift Card</p>
                        <p>Contact Us</p>
                        <p>Store Locator</p>
                    </div>
                </div>
            </div>
            <div className='woman' onMouseEnter={() => setup(2)} onMouseLeave={() => setup(0)} style={{ display: up == 2 ? "block" : "none", top: lastScrollTop !== 0 && scrollDirection !== "up" ? "33px" : "108px" }}>
                <div className='details'>
                    <div className='di'>
                        <img src={img1} alt="img" />
                        <p>New Arrival for Her</p>
                    </div >
                    <div className='db'>
                        <div>
                            <span>
                                <p>Westren Wear</p>
                                <p>New In</p>
                                <p>View All</p>
                            </span>
                            <p>Casual Shirts</p>
                            <p>T-Shirt</p>
                            <p>Polo Shirts</p>
                            <p>Sweatshirts</p>
                            <p>Jeans</p>
                            <p>Casual Trousers | Chinos</p>
                            <p>Blazers | Jackets</p>
                            <p>Formal Shirts</p>
                            <p>Formal Trousers</p>
                            <p>Joggers | Shorts</p>
                            <p>Lounge Wear | Sleep Wear</p>
                            <p>Underwears</p>
                        </div>
                        <div>
                            <span>
                                <p>Trending Now</p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <p>Foot Wear</p>
                                <p>New In</p>
                                <p>View All</p>
                            </span>
                            <p>Casual Shoes</p>
                            <p>Formal Shoes</p>
                            <p>Sneakers | Trainers</p>
                            <p>Flip Flop | Sandals</p>
                            <p>Boots</p>
                        </div>
                        <div className='las'>
                            <span>
                                <p>Fragrances</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='ofoot'>
                    <div className='bor'></div>
                    <div className='ofb'>
                        <p>About Us</p>
                        <p>WestStyleClub</p>
                        <p>W-Style</p>
                        <p>Gift Card</p>
                        <p>Contact Us</p>
                        <p>Store Locator</p>
                    </div>
                </div>
            </div>
            <div className='woman' onMouseEnter={() => setup(3)} onMouseLeave={() => setup(0)} style={{ display: up == 3 ? "block" : "none", top: lastScrollTop !== 0 && scrollDirection !== "up" ? "33px" : "108px" }}>
                <div className='details'>
                    <div className='di'>
                        <img src={img2} alt="img" />
                        <p>New Arrival for Her</p>
                    </div >
                    <div className='db'>
                        <div>
                            <span>
                                <p>Trending Now</p>
                                <p>New In</p>
                                <p>View All</p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <p>Girl | 3-14 Yrs</p>
                            </span>
                            <p>Dresses</p>
                            <p>Tops | Jackets</p>
                            <p>Skirts | Shorts</p>
                            <p>jeans | Trousers</p>
                            <p>Ethnic Wear</p>
                            <p>Underwear</p>
                            <p>Footwear</p>
                        </div>
                        <div>
                            <span>
                                <p>Boy | 3-14 Yrs</p>
                            </span>
                            <p>Shirts | T-Shirts</p>

                            <p>Jackets</p>
                            <p>Jeans | Trousers</p>
                            <p>Joggers | Shorts</p>
                            <p>Underwear</p>
                            <p>Footwear</p>
                        </div>
                        <div>
                            <span>
                                <p>Baby Girl | 0-3Yrs</p>

                            </span>
                            <p>Dresses</p>
                            <p>Tops | T-Shirts</p>
                            <p>Jackets</p>
                            <p>Leggings | Jeggings</p>
                            <p>Body Suit</p>
                            <p>Accessories</p>
                            <p>Footwear</p>

                        </div>
                        <div className='las'>
                            <span>
                                <p>Baby Boy | 0-3Yrs</p>
                            </span>
                            <p>Shirts | T-Shirts</p>
                            <p>Jackets</p>
                            <p>Joggers | Shorts</p>
                            <p>Jackets</p>
                            <p>Body Suit</p>
                            <p>Accessories</p>
                            <p>Footwear</p>
                        </div>
                    </div>
                </div>
                <div className='ofoot'>
                    <div className='bor'></div>
                    <div className='ofb'>
                        <p>About Us</p>
                        <p>WestStyleClub</p>
                        <p>W-Style</p>
                        <p>Gift Card</p>
                        <p>Contact Us</p>
                        <p>Store Locator</p>
                    </div>
                </div>
            </div>
            <div className='woman' onMouseEnter={() => setup(4)} onMouseLeave={() => setup(0)} style={{ display: up == 4 ? "block" : "none", top: lastScrollTop !== 0 && scrollDirection !== "up" ? "33px" : "108px" }}>
                <div className='details'>
                    <div className='di'>
                        <img src={img3} alt="img" />
                        <p>New Arrival for Her</p>
                    </div >
                    <div className='db'>
                        <div>
                            <span>
                                <p>Trending Now</p>
                                <p>New In</p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <p>Fragrances</p>
                                <p>View All</p>
                            </span>
                            <p>Man</p>
                            <p>Woman</p>
                            <p>Unisex</p>
                        </div>
                        <div>
                            <span>
                                <p>Skin Care</p>
                                <p>View All</p>
                            </span>
                            <p>Face</p>

                            <p>Bath | Shower</p>

                        </div>
                        <div>
                            <span>
                                <p>Make Up</p>
                                <p>View All</p>

                            </span>
                            <p>Face | Cheek</p>
                            <p>eye</p>
                            <p>Lips</p>
                            <p>Nails</p>
                            <p>Makeup Remover</p>


                        </div>
                        <div className='las'>
                            <span>
                                <p>Accessories</p>
                            </span>

                        </div>
                    </div>
                </div>
                <div className='ofoot'>
                    <div className='bor'></div>
                    <div className='ofb'>
                        <p>About Us</p>
                        <p>WestStyleClub</p>
                        <p>W-Style</p>
                        <p>Gift Card</p>
                        <p>Contact Us</p>
                        <p>Store Locator</p>
                    </div>
                </div>
            </div>
            <div className='woman' onMouseEnter={() => setup(5)} onMouseLeave={() => setup(0)} style={{ display: up == 5 ? "block" : "none", top: lastScrollTop !== 0 && scrollDirection !== "up" ? "33px" : "108px" }}>
                <div className='details'>
                    <div className='di'>
                        <img src={img4} alt="img" />
                        <p>New Arrival for Her</p>
                    </div >
                    <div className='db'>
                        <div>
                            <span>
                                <p>Trending Now</p>
                                <p>New In</p>
                                <p>View All</p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <p>Living</p>
                                <p>View All</p>
                            </span>
                            <p>Cushions</p>
                            <p>Decor</p>
                            <p>Candle | Stands</p>
                            <p>Home Fragrance</p>
                            <p>Flowers | Vases</p>
                            <p>Plants | Planters</p>
                            <p>Lights | Lanterns</p>
                        </div>
                        <div>
                            <span>
                                <p>Kitchen</p>
                                <p>View All</p>
                            </span>
                            <p>Bottles</p>

                            <p>Tea | Coffee</p>
                            <p>Serveware</p>
                            <p>Kitchenware</p>
                            <p>Table Linen</p>
                        </div>
                        <div>
                            <span>
                                <p>Bed</p>
                                <p>View All</p>

                            </span>
                            <p>Bedsheets</p>
                            <p>Pillow Cases | Fillers</p>
                            <p>Duvet Covers</p>


                        </div>
                        <div className='las'>
                            <span>
                                <p>Bath</p>
                                <p>View All</p>
                            </span>
                            <p>Towels | Mats</p>
                            <p>Bath Accessories</p>
                        </div>
                    </div>
                </div>
                <div className='ofoot'>
                    <div className='bor'></div>
                    <div className='ofb'>
                        <p>About Us</p>
                        <p>WestStyleClub</p>
                        <p>W-Style</p>
                        <p>Gift Card</p>
                        <p>Contact Us</p>
                        <p>Store Locator</p>
                    </div>
                </div>
            </div>
            <div className='woman' onMouseEnter={() => setup(6)} onMouseLeave={() => setup(0)} style={{ display: up == 6 ? "block" : "none", top: lastScrollTop !== 0 && scrollDirection !== "up" ? "33px" : "108px" }}>
                <div className='details dimg'>
                    <img src={w1} alt="img" />
                    <img src={w2} alt="img" />
                    <img src={w3} alt="img" />
                    <img src={w4} alt="img" />
                    <img src={w5} alt="img" />
                    <img src={w6} alt="img" />
                    <img src={w7} alt="img" />
                    <img src={w8} alt="img" />
                    <img src={w9} alt="img" />
                    <img src={w10} alt="img" />
                    <img src={w11} alt="img" />
                    <img src={w12} alt="img" />
                    <img src={w13} alt="img" />
                    <img src={w14} alt="img" />
                    <img src={w15} alt="img" />
                    <img src={w16} alt="img" />
                    <img src={w17} alt="img" />
                    <img src={w18} alt="img" />
                    <img src={w19} alt="img" />
                    <img src={w20} alt="img" />
                    <img src={w21} alt="img" />
                    <img src={w22} alt="img" />
                    <img src={w23} alt="img" />
                    <img src={w24} alt="img" />
                </div>
                <div className='ofoot'>
                    <div className='bor'></div>
                    <div className='ofb'>
                        <p>About Us</p>
                        <p>WestStyleClub</p>
                        <p>W-Style</p>
                        <p>Gift Card</p>
                        <p>Contact Us</p>
                        <p>Store Locator</p>
                    </div>
                </div>
            </div>
            <div className={`opentab ${tab ? "otab" : "oclo"}`} >
                <div style={{ marginTop: "60px" }}>
                    <div className="openbody">
                        <p
                            className="ophead"
                            onClick={() => {
                                sethead((prev) => (prev === 1 ? 0 : 1));
                                setlist(0);
                            }}
                        >
                            <span>Woman</span>
                            <span>
                                <i className={`fa-solid fa-angle-${head == 1 ? "up" : "down"}`}></i>
                            </span>
                        </p>
                        <p
                            className="opbody"
                            onClick={() => setlist((prev) => (prev === 1 ? 0 : 1))}
                            style={{ display: head === 1 ? "flex" : "none" }}
                        >
                            Western Wear
                        </p>
                        <div className="oplist" style={{ display: list === 1 ? "block" : "none" }}>
                            <p>Trending Now</p>
                            <p>New In</p>
                            <p>View All</p>
                            <p>Dresses | Jumpsuits</p>
                            <p>Blazers | Jackets</p>
                            <p>Shirts | Tops</p>
                            <p>T-Shirt</p>
                            <p>Jeans</p>
                            <p>Trousers | Joggers</p>
                            <p>Skirts | Shorts</p>
                        </div>

                        <p
                            className="opbody"
                            onClick={() => setlist((prev) => (prev === 2 ? 0 : 2))}
                            style={{ display: head === 1 ? "flex" : "none" }}
                        >
                            Ethnic Wear
                        </p>
                        <div className="oplist" style={{ display: list === 2 ? "block" : "none" }}>
                            <p>Trending Now</p>
                            <p>New In</p>
                            <p>View All</p>
                            <p>Co-ord Sets</p>
                            <p>Kurtas</p>
                            <p>Ethnic Suits</p>
                            <p>Kurtis | Tunics</p>
                            <p>Ethnic Dresses</p>
                            <p>Ethnic Tops</p>
                            <p>Palazzos | Skirts</p>
                            <p>Salwars | Pants</p>
                            <p>Dupattas | Shawls</p>
                        </div>
                        <p
                            className="opbody"
                            onClick={() => setlist((prev) => (prev === 3 ? 0 : 3))}
                            style={{ display: head === 1 ? "flex" : "none" }}
                        >
                            Curvy Woman
                        </p>
                        <div className="oplist" style={{ display: list === 3 ? "block" : "none" }}>
                            <p>Trending Now</p>
                            <p>New In</p>
                            <p>View All</p>
                            <p>Dresses</p>
                            <p>Shirt | Tops</p>
                            <p>Jackets</p>
                            <p>T-Shirt</p>
                            <p>Jeans</p>
                            <p>Trousers</p>
                            <p>Kurtas</p>
                            <p>Kurtis</p>
                            <p>Palazzos | Pants</p>
                        </div>
                        <p
                            className="opbody"
                            onClick={() => setlist((prev) => (prev === 4 ? 0 : 4))}
                            style={{ display: head === 1 ? "flex" : "none" }}
                        >
                            FootWear & Bags
                        </p>
                        <div className="oplist" style={{ display: list === 4 ? "block" : "none" }}>
                            <p>New In</p>
                            <p>View All</p>
                            <p>Flat Sandals</p>
                            <p>Fashion Comforts</p>
                            <p>Heeled Sandals</p>
                            <p>Flat Shoes</p>
                            <p>Heeled Shoes</p>
                            <p>Sneakers | Trainers</p>
                            <p>Flip Flops | Beach Sandals</p>
                            <p>Handbags</p>
                        </div>
                        <p className="opbody" style={{ display: head === 1 ? "flex" : "none" }}>Fragrances</p>
                        <p className="opbody" style={{ display: head === 1 ? "flex" : "none" }}>Beauty</p>
                        <p className="opbody" style={{ display: head === 1 ? "flex" : "none" }}>Co-ord Sets</p>
                        <p className="opbody" style={{ display: head === 1 ? "flex" : "none" }}>Gift Shop</p>
                        <p className="opbody" style={{ display: head === 1 ? "flex" : "none" }}>Lingerie</p>
                        <p className="opbody" style={{ display: head === 1 ? "flex" : "none" }}>Swimwear</p>
                        <p className="opbody" style={{ display: head === 1 ? "flex" : "none" }}>Loungewear & Sleepwear</p>
                        <p
                            className="ophead"
                            onClick={() => {
                                sethead((prev) => (prev === 2 ? 0 : 2));
                                setlist(0);
                            }}
                        >
                            <span>Man</span>
                            <span>
                                <i className={`fa-solid fa-angle-${head == 2 ? "up" : "down"}`}></i>
                            </span>
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 2 ? "flex" : "none" }}
                        >
                            Trending Now
                        </p>
                        <p
                            className="opbody"
                            onClick={() => setlist((prev) => (prev === 5 ? 0 : 5))}
                            style={{ display: head === 2 ? "flex" : "none" }}
                        >
                            Westren Wear
                        </p>
                        <div className="oplist" style={{ display: list === 5 ? "block" : "none" }}>
                            <p>New In</p>
                            <p>View All</p>
                            <p>Casual Shirts</p>
                            <p>T-Shirt</p>
                            <p>Polo Shirts</p>
                            <p>Sweatshirts</p>
                            <p>Jeans</p>
                            <p>Casual Trousers | Chinos</p>
                            <p>Blazers | Jackets</p>
                            <p>Formal Shirts</p>
                            <p>Formal Trousers</p>
                            <p>Joggers | Shorts</p>
                            <p>Lounge Wear | Sleep Wear</p>
                            <p>Underwears</p>
                        </div>

                        <p
                            className="opbody"
                            onClick={() => setlist((prev) => (prev === 6 ? 0 : 6))}
                            style={{ display: head === 2 ? "flex" : "none" }}
                        >
                            Footwear
                        </p>
                        <div className="oplist" style={{ display: list === 6 ? "block" : "none" }}>
                            <p>New In</p>
                            <p>View All</p>
                            <p>Casual Shoes</p>
                            <p>Formal Shoes</p>
                            <p>Sneakers | Trainers</p>
                            <p>Flip Flop | Sandals</p>
                            <p>Boots</p>
                        </div>
                        <p
                            className="opbody"
                            style={{ display: head === 2 ? "flex" : "none" }}
                        >
                            Fragrances
                        </p>
                        <p
                            className="ophead"
                            onClick={() => {
                                sethead((prev) => (prev === 3 ? 0 : 3));
                                setlist(0);
                            }}
                        >
                            <span>Kids</span>
                            <span>
                                <i className={`fa-solid fa-angle-${head == 3 ? "up" : "down"}`}></i>
                            </span>
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 3 ? "flex" : "none" }}
                        >
                            New In
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 3 ? "flex" : "none" }}
                        >
                            View All
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 3 ? "flex" : "none" }}
                        >
                            Trending Now
                        </p>
                        <p
                            className="opbody"
                            onClick={() => setlist((prev) => (prev === 7 ? 0 : 7))}
                            style={{ display: head === 3 ? "flex" : "none" }}
                        >
                            Girl | 3-14 Yrs
                        </p>
                        <div className="oplist" style={{ display: list === 7 ? "block" : "none" }}>
                        <p>Dresses</p>
                            <p>Tops | Jackets</p>
                            <p>Skirts | Shorts</p>
                            <p>jeans | Trousers</p>
                            <p>Ethnic Wear</p>
                            <p>Underwear</p>
                            <p>Footwear</p>
                        </div>

                        <p
                            className="opbody"
                            onClick={() => setlist((prev) => (prev === 8 ? 0 : 8))}
                            style={{ display: head === 3 ? "flex" : "none" }}
                        >
                            Boy | 3-14 Yrs
                        </p>
                        <div className="oplist" style={{ display: list === 8 ? "block" : "none" }}>
                        <p>Shirts | T-Shirts</p>

<p>Jackets</p>
<p>Jeans | Trousers</p>
<p>Joggers | Shorts</p>
<p>Underwear</p>
<p>Footwear</p>
                        </div>
                        <p
                            className="opbody"
                            onClick={() => setlist((prev) => (prev === 9 ? 0 : 9))}
                            style={{ display: head === 3 ? "flex" : "none" }}
                        >
                            Baby Girl | 0-3 Yrs
                        </p>
                        <div className="oplist" style={{ display: list === 9 ? "block" : "none" }}>
                        <p>Dresses</p>
                            <p>Tops | T-Shirts</p>
                            <p>Jackets</p>
                            <p>Leggings | Jeggings</p>
                            <p>Body Suit</p>
                            <p>Accessories</p>
                            <p>Footwear</p>
                        </div>
                        <p
                            className="opbody"
                            onClick={() => setlist((prev) => (prev === 10 ? 0 : 10))}
                            style={{ display: head === 3 ? "flex" : "none" }}
                        >
                            Baby Boy | 0-3 Yrs
                        </p>
                        <div className="oplist" style={{ display: list === 10 ? "block" : "none" }}>
                        <p>Shirts | T-Shirts</p>
                            <p>Jackets</p>
                            <p>Joggers | Shorts</p>
                            <p>Jackets</p>
                            <p>Body Suit</p>
                            <p>Accessories</p>
                            <p>Footwear</p>
                        </div>
                        <p
                            className="ophead"
                            onClick={() => {
                                sethead((prev) => (prev === 4 ? 0 : 4));
                                setlist(0);
                            }}
                        >
                            <span>Beauty</span>
                            <span>
                                <i className={`fa-solid fa-angle-${head == 4 ? "up" : "down"}`}></i>
                            </span>
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 4 ? "flex" : "none" }}
                        >
                            New In
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 4 ? "flex" : "none" }}
                        >
                            View All
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 4 ? "flex" : "none" }}
                        >
                            Trending Now
                        </p>
                        <p
                            className="opbody"
                            onClick={() => setlist((prev) => (prev === 11 ? 0 : 11))}
                            style={{ display: head === 4 ? "flex" : "none" }}
                        >
                            Fragrances
                        </p>
                        <div className="oplist" style={{ display: list === 11 ? "block" : "none" }}>
                        <p>View All</p>
                            <p>Man</p>
                            <p>Woman</p>
                            <p>Unisex</p>
                        </div>

                        <p
                            className="opbody"
                            onClick={() => setlist((prev) => (prev === 12 ? 0 : 12))}
                            style={{ display: head === 4 ? "flex" : "none" }}
                        >
                            Skin Care
                        </p>
                        <div className="oplist" style={{ display: list === 12 ? "block" : "none" }}>
                        <p>View All</p>
                            <p>Face</p>

                            <p>Bath | Shower</p>
                        </div>
                        <p
                            className="opbody"
                            onClick={() => setlist((prev) => (prev === 13 ? 0 : 13))}
                            style={{ display: head === 4 ? "flex" : "none" }}
                        >
                            Makeup
                        </p>
                        <div className="oplist" style={{ display: list === 13 ? "block" : "none" }}>
                        <p>View All</p>
<p>Face | Cheek</p>
<p>eye</p>
<p>Lips</p>
<p>Nails</p>
<p>Makeup Remover</p>
                        </div>
                        <p
                            className="opbody"
                            style={{ display: head === 4 ? "flex" : "none" }}
                        >
                            Accessories
                        </p>
                        <p
                            className="ophead"
                            onClick={() => {
                                sethead((prev) => (prev === 5 ? 0 : 5));
                                setlist(0);
                            }}
                        >
                            <span>Home</span>
                            <span>
                                <i className={`fa-solid fa-angle-${head == 5 ? "up" : "down"}`}></i>
                            </span>
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 5 ? "flex" : "none" }}
                        >
                            New In
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 5 ? "flex" : "none" }}
                        >
                            View All
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 5 ? "flex" : "none" }}
                        >
                            Trending Now
                        </p>
                        <p
                            className="opbody"
                            onClick={() => setlist((prev) => (prev === 15 ? 0 : 15))}
                            style={{ display: head === 5 ? "flex" : "none" }}
                        >
                            Living
                        </p>
                        <div className="oplist" style={{ display: list === 15 ? "block" : "none" }}>
                        <p>View All</p>
                            <p>Cushions</p>
                            <p>Decor</p>
                            <p>Candle | Stands</p>
                            <p>Home Fragrance</p>
                            <p>Flowers | Vases</p>
                            <p>Plants | Planters</p>
                            <p>Lights | Lanterns</p>
                        </div>

                        <p
                            className="opbody"
                            onClick={() => setlist((prev) => (prev === 16 ? 0 : 16))}
                            style={{ display: head === 5 ? "flex" : "none" }}
                        >
                            Kitchen
                        </p>
                        <div className="oplist" style={{ display: list === 16 ? "block" : "none" }}>
                        <p>View All</p>
                            <p>Bottles</p>

                            <p>Tea | Coffee</p>
                            <p>Serveware</p>
                            <p>Kitchenware</p>
                            <p>Table Linen</p>
                        </div>
                        <p
                            className="opbody"
                            onClick={() => setlist((prev) => (prev === 17 ? 0 : 17))}
                            style={{ display: head === 5 ? "flex" : "none" }}
                        >
                            Bed
                        </p>
                        <div className="oplist" style={{ display: list === 17 ? "block" : "none" }}>
                        <p>View All</p>
<p>Bedsheets</p>
<p>Pillow Cases | Fillers</p>
<p>Duvet Covers</p>
                        </div>
                        <p
                            className="opbody"
                            onClick={() => setlist((prev) => (prev === 18 ? 0 : 18))}
                            style={{ display: head === 5 ? "flex" : "none" }}
                        >
                            Bath
                        </p>
                        <div className="oplist" style={{ display: list === 18 ? "block" : "none" }}>
                        <p>View All</p>
                            <p>Towels | Mats</p>
                            <p>Bath Accessories</p>
                        </div>
                        <p
                            className="ophead"
                            onClick={() => {
                                sethead((prev) => (prev === 6 ? 0 : 6));
                                setlist(0);
                            }}
                        >
                            <span>Brand</span>
                            <span>
                                <i className={`fa-solid fa-angle-${head == 6 ? "up" : "down"}`}></i>
                            </span>
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Utsa
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Bombay Paisley
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Gia
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Luna Blu
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Vark
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            L.O.V
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Wardrobe
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Zuba
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Diza
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Wunderlove
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Ascot
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Soleplay
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Studiofit Woman
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Studiofit Man
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Yellow
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Studiowest
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            WES Formals
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            WES Casuals
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            WES Lounge
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Westside Home
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Hop Girl
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Utsa Kids
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Hop Boy
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            E.T.A
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Nuon Man
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Nuon Woman
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Superstar
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Hop Baby
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Accessories
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Y&F Girl
                        </p>
                        <p
                            className="opbody"
                            style={{ display: head === 6 ? "flex" : "none" }}
                        >
                            Y&F Boy
                        </p>
                        <p
                            className="ophead"
                            onClick={() => {
                                sethead(0);
                                setlist(0);
                            }}
                        >
                            <span>W-Style</span>
                        </p>
                        <p
                            className="ophead"
                            onClick={() => {
                                sethead(0);
                                setlist(0);
                            }}
                        >
                            <span>View More</span>
                        </p>
                        <div className="abouttab">
                                 <p>About Us</p>
                                 <p>WestStyleClub</p>
                                 <p>W-Style</p>
                                 <p>Gift Card</p>
                                 <p>Contact Us</p>
                                 <p>Store Loactor</p>
                        </div>
                        <div className="lastab">
                                 <p><span><i className="fa-solid fa-house"></i></span><span>Home</span></p>
                                 <p><span><i className="fa-solid fa-user"></i></span><span>My Profile</span></p>
                        </div>
                    </div>

                </div>
            </div>
             <div className="cusbar">
                <div className="cusbody">
                      <span ><i className="fa-solid fa-house"></i><p>Home</p></span>
                      <span><i className="fa-solid fa-border-all"></i><p>Categories</p></span>
                      <span onClick={()=>setsearch(true)}><i className="fa-solid fa-magnifying-glass"></i><p>Search</p></span>
                      <span><i className="fa-solid fa-cart-shopping"></i><p>Bag</p></span>
                      <span><i className="fa-solid fa-user"></i><p>Profile</p></span>
                </div>
             </div>
             <div className={`searchcus ${search?"sop":"scl"}`}>
                    <div className="sbody">
                   <div className="cusi">
                   <i className="fa-solid fa-magnifying-glass"></i>
                   </div>
                        <input type="text" placeholder="Search"/>
                        <div className="cusham" onClick={()=>setsearch(false)}>
                            <div className="cus1"></div>
                            <div className="cus2"></div>
                        </div>
                    </div>
             </div>
        </>
    )
}

export default Option