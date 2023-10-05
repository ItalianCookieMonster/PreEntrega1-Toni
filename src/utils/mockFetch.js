const products = [
    {
        id: '1',
        name: 'Cup',
        description: 'Celebrate sustainability with our eco-friendly reusable cups, designed to reduce waste and help you enjoy your favorite beverages guilt-free',
        stock: 90,
        price: '15€',
        imageUrl: 'https://i.etsystatic.com/17675784/r/il/da4d3c/3207414591/il_fullxfull.3207414591_m70w.jpg',
        category: 'on-the-go'

    },
    {
        id: '2',
        name: 'Bottle',
        description: 'Elevate your eco-conscious lifestyle with our reusable bottles, the perfect companions for staying hydrated on the go while reducing single-use plastic waste',
        stock: 200,
        price: '15€',
        imageUrl: 'https://img.freepik.com/free-photo/arrangement-different-colored-tumblers_23-2149029220.jpg?size=626&ext=jpg&ga=GA1.1.1848873410.1693993672&semt=ais',
        category: 'on-the-go'
    },
    {
        id: '3',
        name: 'Reusable cotton pads',
        description: 'Experience a gentle and sustainable skincare routine with our reusable cotton pads, designed to pamper your skin while reducing disposable waste.',
        stock: 150,
        price: '4€',
        imageUrl: 'https://www.roseinc.com/cdn/shop/products/Product-Reusable-Cosmetic-Rounds_1200x1200.jpg?v=1628495291',
        category: 'bathroom'
    },
    {
        id: '4',
        name: 'Metallic straws',
        description: 'Sip in style and sustainability with our metallic straws, a chic and eco-friendly choice for enjoying your favorite beverages without plastic wastep',
        stock: 50,
        price: '5€',
        imageUrl: 'https://img.freepik.com/free-photo/reusable-metal-silver-straws-top-view_23-2148768653.jpg?w=1380&t=st=1694008514~exp=1694009114~hmac=401fd9358df9466351d8f661185fd2983d89a6b4b3fecf6eb09cc1cdbd28d0a8',
        category: 'kitchen'
    },
    {
        id: '5',
        name: 'Biodegradable cotton buds',
        description: 'Swap out single-use cotton buds for our biodegredable alternatives, helping you maintain personal care with a conscience for the environment.',
        stock: 200,
        price: '4.50€',
        imageUrl: 'https://anniepooh.ie/cdn/shop/products/image_86b263cd-c01c-4a25-9fbe-8b36475e6666_1000x.jpg?v=1610581839',
        category: 'bathroom',
    },
    {
        id: '6',
        name: 'Organic nettled cotton bags',
        description: "Discover the natural charm of our organic nettle cotton bags, crafted with care for both your needs and the planet's well-being. Perfect for eco-friendly shopping and everyday use",
        stock: 90,
        price: '8€',
        imageUrl: 'https://img.freepik.com/free-photo/vertical-closeup-shot-beige-pink-knitted-bags_181624-15472.jpg?size=626&ext=jpg&ga=GA1.1.1848873410.1693993672&semt=ais',
        category: 'kitchen'
    },
];

export const mFetch = (pib) =>
    new Promise((res, rej) => {
        if (res) {
        setTimeout(() => {
            res(pib ? products.find(product => product.id === pib) : products);
        }, 2000)
        } else {
            rej('Sorry it looks like we have problem');
        }
});