import Navigo from "navigo" // Импорт navigo

import { getHeader } from "./components/header.js"
import { getPageContainer } from "./components/pageContainer.js"

const app = document.getElementById("app")

// Создание роутера
export const router = new Navigo('/');

const header = getHeader()
const pageContainer = getPageContainer()

// Главная страница
router.on('/', async () => {
  pageContainer.innerHTML = ""
  const moduleMain = await import("./pages/main.js")
  const mainPage = moduleMain.getMainPage()
  pageContainer.append(mainPage)
});

// Страница каталог
router.on('/catalog', async () => {
  pageContainer.innerHTML = ""
  const moduleCatalog = await import("./pages/catalog.js")
  const catalogPage = moduleCatalog.getCatalogPage()
  pageContainer.append(catalogPage)
});

// Корзина
router.on('/basket', async () => {
  pageContainer.innerHTML = ""
  const moduleBasket = await import("./pages/basket.js")
  const basketPage = moduleBasket.getBasketPage()
  pageContainer.append(basketPage)
});

// Страница продукта
router.on('/product/:title', async ({ data }) => {
  pageContainer.innerHTML = ""
  const moduleProduct = await import("./pages/product.js")
  const productPage = moduleProduct.getProductPage(data.title)
  pageContainer.append(productPage)
});

router.resolve();

app.append(header, pageContainer)