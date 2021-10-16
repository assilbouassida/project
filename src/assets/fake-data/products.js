const product_01_image_01 = require('../images/products/product-01 (1).jpg').default
const product_01_image_02 = require('../images/products/product-01 (2).jpg').default
// const product_01_image_03 = require('../images/products/product-01 (3).jpg').default

const product_02_image_01 = require('../images/products/product-02 (1).jpg').default
const product_02_image_02 = require('../images/products/product-02 (2).jpg').default

const product_03_image_01 = require('../images/products/product-03 (1).jpg').default
const product_03_image_02 = require('../images/products/product-03 (2).jpg').default

const product_04_image_01 = require('../images/products/product-04 (1).jpg').default
const product_04_image_02 = require('../images/products/product-04 (2).jpg').default

const product_05_image_01 = require('../images/products/product-05 (1).jpg').default
const product_05_image_02 = require('../images/products/product-05 (2).jpg').default

const product_06_image_01 = require('../images/products/product-06 (1).jpg').default
const product_06_image_02 = require('../images/products/product-06 (2).jpg').default

const product_07_image_01 = require('../images/products/product-07 (1).jpg').default
const product_07_image_02 = require('../images/products/product-07 (2).jpg').default

const product_08_image_01 = require('../images/products/product-08 (1).jpg').default
const product_08_image_02 = require('../images/products/product-08 (2).jpg').default

const product_09_image_01 = require('../images/products/product-09 (1).jpg').default
const product_09_image_02 = require('../images/products/product-09 (2).jpg').default

const product_10_image_01 = require('../images/products/product-10 (1).jpg').default
const product_10_image_02 = require('../images/products/product-10 (2).jpg').default

const product_11_image_01 = require('../images/products/product-11 (1).jpg').default
const product_11_image_02 = require('../images/products/product-11 (2).jpg').default

const product_12_image_01 = require('../images/products/product-12 (1).jpg').default
const product_12_image_02 = require('../images/products/product-12 (2).jpg').default

const products = [
    {
        title: "produit 01",
        price: '189000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "femme",
        colors: ["white", "red", "orange"],
        slug: "t-shirt-dinosaure-01",
        size: ["s", "m", "l", "xl"],
        description: "La présence de t-shirts basiques à col rond dans votre garde-robe est la clé pour vous aider à avoir des tenues plus intéressantes sans avoir besoin de trop d'articles. Le t-shirt basique en coton à col rond est une arme pratique pour les femmes au quotidien !<br><br><br>Design simple, forme pratique du t-shirt PPN4502. Pourquoi avec 1 seul t-shirt femme basique que vous pouvez mélanger avec 10 ensembles différents ? La réponse réside dans leur simplicité même. Plus il est simple, plus il est facile pour vous de mélanger et assortir différents articles.Le t-shirt pour femmes PPM4502 a un design simple à col rond qui est doux pour la peau. Manches en renard, la forme de la chemise n'est pas difficile, très facile à porter avec de nombreux corps différents. Plus précisément, la couleur de ce t-shirt femme col rond est également très élégante, neutre et lisse. La simplicité de la conception, des coutures à la palette de couleurs aide les femmes à ne pas trop hésiter lors du choix. Le matériau à 95% en coton est strictement traité, le processus et la technologie modernes doivent donner à la chemise une sensation confortable, douce et fraîche au toucher. Parallèlement à cela, le t-shirt pour femme en coton à col rond Yody a une très bonne capacité à assombrir la transpiration, de sorte que le porteur ne ressente pas de mystère, collant à l."
    },
    {
        title: "produit 02",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "femme",
        colors: ["white", "red", "blue"],
        slug: "t-shirt-dinosaure-02",
        size: ["s", "m"],
        description: "La présence de t-shirts basiques à col rond dans votre garde-robe est la clé pour vous aider à avoir des tenues plus intéressantes sans avoir besoin de trop d'articles. Le t-shirt basique en coton à col rond est une arme pratique pour les femmes au quotidien !<br><br><br>Design simple, forme pratique du t-shirt PPN4502. Pourquoi avec 1 seul t-shirt femme basique que vous pouvez mélanger avec 10 ensembles différents ? La réponse réside dans leur simplicité même. Plus il est simple, plus il est facile pour vous de mélanger et assortir différents articles.Le t-shirt pour femmes PPM4502 a un design simple à col rond qui est doux pour la peau. Manches en renard, la forme de la chemise n'est pas difficile, très facile à porter avec de nombreux corps différents. Plus précisément, la couleur de ce t-shirt femme col rond est également très élégante, neutre et lisse. La simplicité de la conception, des coutures à la palette de couleurs aide les femmes à ne pas trop hésiter lors du choix. Le matériau à 95% en coton est strictement traité, le processus et la technologie modernes doivent donner à la chemise une sensation confortable, douce et fraîche au toucher. Parallèlement à cela, le t-shirt pour femme en coton à col rond Yody a une très bonne capacité à assombrir la transpiration, de sorte que le porteur ne ressente pas de mystère, collant à la peau lorsqu'il transpire en été. En outre, le produit contient également 5% d'élasthanne - un type de fibre qui aide à l'étirement, élastique efficacement adapté à porter dans de nombreux environnements, même lors de l'exercice <br><br><br> La présence de vêtements Le col rond basique t- chemise dans votre garde-robe est "
    },
    {
        title: "produit 03",
        price: '190000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "femme",
        colors: ["white", "red", "orange", "yellow"],
        slug: "t-shirt-dinosaure-03",
        size: ["m"],
        description: "La présence de t-shirts basiques à col rond dans votre garde-robe est la clé pour vous a."
    },
    {
        title: "produit 04",
        price: '194000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "femme",
        colors: ["white", "orange", "blue"],
        slug: "t-shirt-dinosaure-04",
        size: ["xl","m","xxl"],
        description: "La présence de t-shirts basiques à col rond dans votre garde-robe est la clé "
    },
    {
        title: "produit 05",
        price: '194000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "enfant",
        colors: ["white", "pink"],
        slug: "T-shirt polo 05",
        size: [""],
        description: "La présence de t-shirts basiques à col rond dans votre garde-robe est la clé pour vous aider à avoir des tenues plus intéressantes sans avoir besoin de trop d'articles. Le t-shirt basique en coton à col rond est une arme pratique pour les femmes au quotidien !<br><br><br>Design simple, forme pratique du t-shirt PPN4502. Pourquoi avec 1 seul t-shirt femme basique que vous pouvez mélanger avec 10 ensembles différents ? La réponse réside dans leur simplicité même. Plus il est simple, plus il est facile pour vous de mélanger et assortir différents articles."
    },
    {
        title: "produit 06",
        price: '194000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "enfant",
        colors: ["black"],
        slug: "T-shirt polo 06",
        size: [""],
        description: "La présence de t-shirts basiques à col rond dans votre garde-robe est la clé pour vous aider à avoir des tenues plus intéressantes sans avoir besoin de trop d'articles. Le t-shirt basique en coton à col rond est une arme pratique pour les femmes au quotidien !<br><br><br>Design simple, forme pratique du t-shirt PPN4502. Pourquoi avec 1 seul t-shirt femme basique que vous pouvez mélanger avec 10 ensembles différents ? La réponse réside dans leur simplicité même. Plus il est simple, plus il est facile pour vous de mélanger et assortir différents articles."
    },
    {
        title: "produit 07",
        price: '194000',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "femme",
        colors: ["white", "red", "orange", "blue"],
        slug: "Chemise à carreaux Somi 07",
        size: ["l", "xl"],
        description: "La présence de t-shirts basiques à col rond dans votre garde-robe est la clé pour vous aider à avoir des tenues plus intéressantes sans avoir besoin de trop d'articles. Le t-shirt basique en coton à col rond est une arme pratique pour les femmes au quotidien !<br><br><br>Design simple, forme pratique du t-shirt PPN4502. Pourquoi avec 1 seul t-shirt femme basique que vous pouvez mélanger avec 10 ensembles différents ? La réponse réside dans leur simplicité même. Plus il est simple, plus il est facile pour vous de mélanger et assortir différents articles."
    },
    {
        title: "produit 08",
        price: '194000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "homme",
        colors: ["white", "red", "black"],
        slug: "Chemise à carreaux Somi 08",
        size: ["s", "m", "xl"],
        description: "La présence de t-shirts basiques à col rond dans votre garde-robe est la clé pour vous aider à avoir des tenues plus intéressantes sans avoir besoin de trop d'articles. Le t-shirt basique en coton à col rond est une arme pratique pour les femmes au quotidien !<br><br><br>Design simple, forme pratique du t-shirt PPN4502. Pourquoi avec 1 seul t-shirt femme basique que vous pouvez mélanger avec 10 ensembles différents ? La réponse réside dans leur simplicité même. Plus il est simple, plus il est facile pour vous de mélanger et assortir différents articles."
    },
    {
        title: "produit 09",
        price: '194000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "femme",
        colors: ["white", "blue"],
        slug: "chemise à manches longues 09",
        size: ["m"],
        description: "La présence de t-shirts basiques à col rond dans votre garde-robe est la clé pour vous aider à avoir des tenues plus intéressantes sans avoir besoin de trop d'articles. Le t-shirt basique en coton à col rond est une arme pratique pour les femmes au quotidien !<br><br><br>Design simple, forme pratique du t-shirt PPN4502. Pourquoi avec 1 seul t-shirt femme basique que vous pouvez mélanger avec 10 ensembles différents ? La réponse réside dans leur simplicité même. Plus il est simple, plus il est facile pour vous de mélanger et assortir différents articles."
    },
    {
        title: "produit 10",
        price: '194000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "femme",
        colors: ["blue", "black"],
        slug: "Jean élégant 10",
        size: ["l"],
        description: "La présence de t-shirts basiques à col rond dans votre garde-robe est la clé pour vous aider à avoir des tenues plus intéressantes sans avoir besoin de trop d'articles. Le t-shirt basique en coton à col rond est une arme pratique pour les femmes au quotidien !<br><br><br>Design simple, forme pratique du t-shirt PPN4502. Pourquoi avec 1 seul t-shirt femme basique que vous pouvez mélanger avec 10 ensembles différents ? La réponse réside dans leur simplicité même. Plus il est simple, plus il est facile pour vous de mélanger et assortir différents articles."
    },
    {
        title: "produit 11",
        price: '194000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "homme",
        colors: ["blue", "black"],
        slug: "Jean élégant 11",
        size: ["s", "m", "xl"],
        description: "La présence de t-shirts basiques à col rond dans votre garde-robe est la clé pour vous aider à avoir des tenues plus intéressantes sans avoir besoin de trop d'articles. Le t-shirt basique en coton à col rond est une arme pratique pour les femmes au quotidien !<br><br><br>Design simple, forme pratique du t-shirt PPN4502. Pourquoi avec 1 seul t-shirt femme basique que vous pouvez mélanger avec 10 ensembles différents ? La réponse réside dans leur simplicité même. Plus il est simple, plus il est facile pour vous de mélanger et assortir différents articles."
    },
    {
        title: "produit 12",
        price: '194000',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "femme",
        colors: ["blue"],
        slug: "jeans 12",
        size: ["s", "m", "xl"],
        description: "La présence de t-shirts basiques à col rond dans votre garde-robe est la clé pour vous aider à avoir des tenues plus intéressantes sans avoir besoin de trop d'articles. Le t-shirt basique en coton à col rond est une arme pratique pour les femmes au quotidien !<br><br><br>Design simple, forme pratique du t-shirt PPN4502. Pourquoi avec 1 seul t-shirt femme basique que vous pouvez mélanger avec 10 ensembles différents ? La réponse réside dans leur simplicité même. Plus il est simple, plus il est facile pour vous de mélanger et assortir différents articles."
    },
    {
        title: "produit 13",
        price: '189000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "t-shirts",
        colors: ["white", "red"],
        slug: "T-shirt dinosaure 13",
        size: ["s", "m", "xl"],
        description: "La présence de t-shirts basiques à col rond dans votre garde-robe est la clé pour vous aider à avoir des tenues plus intéressantes sans avoir besoin de trop d'articles. Le t-shirt basique en coton à col rond est une arme pratique pour les femmes au quotidien !<br><br><br>Design simple, forme pratique du t-shirt PPN4502. Pourquoi avec 1 seul t-shirt femme basique que vous pouvez mélanger avec 10 ensembles différents ? La réponse réside dans leur simplicité même. Plus il est simple, plus il est facile pour vous de mélanger et assortir différents articles."
    },
    {
        title: "produit 14",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "t-shirts",
        colors: ["white", "blue"],
        slug: "ao-thun-dinosaur-14",
        size: ["s", "m"],
        description: "La présence de t-shirts basiques à col rond dans votre garde-robe est la clé pour vous aider à avoir des tenues plus intéressantes sans avoir besoin de trop d'articles. Le t-shirt basique en coton à col rond est une arme pratique pour les femmes au quotidien !<br><br><br>Design simple, forme pratique du t-shirt PPN4502. Pourquoi avec 1 seul t-shirt femme basique que vous pouvez mélanger avec 10 ensembles différents ? La réponse réside dans leur simplicité même. Plus il est simple, plus il est facile pour vous de mélanger et assortir différents articles."
    },
    {
        title: "produit 14",
        price: '190000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "t-shirts",
        colors: ["red", "blue"],
        slug: "ao-thun-dinosaur-15",
        size: ["xl"],
        description: "La présence de t-shirts basiques à col rond dans votre garde-robe est la clé pour vous aider à avoir des tenues plus intéressantes sans avoir besoin de trop d'articles. Le t-shirt basique en coton à col rond est une arme pratique pour les femmes au quotidien !<br><br><br>Design simple, forme pratique du t-shirt PPN4502. Pourquoi avec 1 seul t-shirt femme basique que vous pouvez mélanger avec 10 ensembles différents ? La réponse réside dans leur simplicité même. Plus il est simple, plus il est facile pour vous de mélanger et assortir différents articles."
    },
    {
        title: "produit 14",
        price: '194000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "ao-somi",
        colors: ["blue", "black"],
        slug: "ao-somi-dai-tay-16",
        size: ["m", "xl"],
        description: "La présence de t-shirts basiques à col rond dans votre garde-robe est la clé pour vous aider à avoir des tenues plus intéressantes sans avoir besoin de trop d'articles. Le t-shirt basique en coton à col rond est une arme pratique pour les femmes au quotidien !<br><br><br>Design simple, forme pratique du t-shirt PPN4502. Pourquoi avec 1 seul t-shirt femme basique que vous pouvez mélanger avec 10 ensembles différents ? La réponse réside dans leur simplicité même. Plus il est simple, plus il est facile pour vous de mélanger et assortir différents articles."
    },
    {
        title: "produit 15",
        price: '194000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "ao-somi",
        colors: ["white", "blue"],
        slug: "ao-somi-tay-dai-17",
        size: ["s","m", "l", "xl"],
        description: "La présence de t-shirts basiques à col rond dans votre garde-robe est la clé pour vous aider à avoir des tenues plus intéressantes sans avoir besoin de trop d'articles. Le t-shirt basique en coton à col rond est une arme pratique pour les femmes au quotidien !<br><br><br>Design simple, forme pratique du t-shirt PPN4502. Pourquoi avec 1 seul t-shirt femme basique que vous pouvez mélanger avec 10 ensembles différents ? La réponse réside dans leur simplicité même. Plus il est simple, plus il est facile pour vous de mélanger et assortir différents articles."
    },
    {
        title: "produit 18",
        price: '194000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "t-shirt",
        colors: ["blue", "black"],
        slug: "T-shirt dinosaure 13",
        size: ["s", "m", "l", "xl"],
        description: "La présence de t-shirts basiques à col rond dans votre garde-robe est la clé pour vous aider à avoir des tenues plus intéressantes sans avoir besoin de trop d'articles. Le t-shirt basique en coton à col rond est une arme pratique pour les femmes au quotidien !<br><br><br>Design simple, forme pratique du t-shirt PPN4502. Pourquoi avec 1 seul t-shirt femme basique que vous pouvez mélanger avec 10 ensembles différents ? La réponse réside dans leur simplicité même. Plus il est simple, plus il est facile pour vous de mélanger et assortir différents articles."
    },
    // 18 products
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}

export default productData