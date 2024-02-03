const Card = () => {
    return (
        <div className="product">
            <img
                className="product-image"
                src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/11/15/f85bdd04-8f3c-4868-a3e6-17cd13845116.jpg.webp?ect=4g"
                alt=""
            />
            <p className="product-name">Samsung Galaxy S24</p>
            <p className="product-price">Rp.21.999.000</p>
            <p className="product-location">Jakarta Barat</p>
            <p className="product-rating">5.0 | 200 Terjual</p>
            <p className="product-estimation">Tiba 20 - 22 Jan</p>
        </div>
    )
}

export { Card }