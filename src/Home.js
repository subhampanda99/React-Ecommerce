import React from 'react'
import './Home.css'
import Products from './Products'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Products
                        id="4379297914740714"
                        title="The lean startup"
                        price={1500}
                        image="http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg"
                        rating={5}
                    />
                    <Products
                        id="4916652239913067"
                        title="Echo Plus (2nd Gen) – Premium sound, powered by Dolby, built-in Smart Home hub (Black)"
                        price={9999}
                        image="https://i.gadgets360cdn.com/products/smart-home/large/1551964774_832_amazon_echo-plus-2nd-gen-smart-speaker.jpg"
                        rating={4}
                    />

                    <Products
                        id="2221007902016710"
                        title="Tissot Men's Swiss Quartz Stainless Steel Casual Watch (Model: T0954171104700)"
                        price={28000}
                        image="https://i.pinimg.com/originals/bb/16/10/bb1610aa728ff7a0bad3098377fb192c.png"
                        rating={5}
                    />

                    <Products
                        id="5160840528243706"
                        title="Burberry Watch, Women's Swiss Nude Leather Strap 34mm BU9109 "
                        price={28000}
                        image="https://th.bing.com/th/id/OIP.onsejIg7GjNEtBlnCDG-rwHaHQ?pid=Api&rs=1"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Products
                        id="373318012120809"
                        title="ASUS ROG Zephyrus G14, 14 FHD 120Hz, Ryzen 5 4600HS, GTX 1650Ti 4GB GDDR6 Graphics, Gaming Laptop (8GB/1TB SSD/Eclipse Gray/Without Anime Matrix/1.6 Kg)"
                        price={94490}
                        image="https://i.gadgets360cdn.com/products/large/asus-rog-zephyrus-g14-1400x800-1596707843.jpg"
                        rating={5}
                    />
                    <Products
                        id="376961244441175"
                        title="ASUS ROG Zephyrus G14, 14 FHD, Ryzen 5 4600HS, GTX 1650Ti 4GB GDDR6 Graphics, Gaming Laptop (8GB/512GB SSD/Moonlight White/Anime Matrix/1.7 Kg)"
                        price={109990}
                        image="https://i.gadgets360cdn.com/large/asus_rog_zephyrus_g14_image_1596708617529.jpg "
                        rating={4}
                    />
                    <Products
                        id="349933369977246"
                        title="ASUS ROG Zephyrus G14, 14 FHD 120Hz, Ryzen 5 4600HS, GTX 1650Ti 4GB GDDR6 Graphics, Gaming Laptop (8GB/512GB SSD/Eclipse Gray/Without Anime Matrix/1.6 Kg)"
                        price={106000}
                        image="https://i.gadgets360cdn.com/products/large/asus-rog-zephyrus-g14-1400x800-1596707843.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Products
                        id="6011541876342871"
                        title="OnePlus 8 (Glacial Green 12GB RAM+256GB Storage)"
                        price={49999}
                        image="https://th.bing.com/th/id/OIP.V1uJxvGm-b5GlGRpbh-hzAHaHa?w=178&h=180&c=7&o=5&pid=1.7"
                        rating={4}
                    />

                    <Products
                        id="6011797831969022"
                        title="Apple iPhone 11 (128GB) - White"
                        price={70000}
                        image="https://th.bing.com/th/id/OIP.uqiCvrghI3PpaLT8UBm_dAHaIx?w=143&h=180&c=7&o=5&pid=1.7"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Products
                        id="3533543077832664"
                        title="Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart Android LED TV 65X7400H (Black) (2020 Model)"
                        price={109990}
                        image="https://www.techarena.co.ke/wp-content/uploads/2020/01/xiaomi-tv.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
