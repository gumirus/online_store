import { getMainTitle } from "../components/mainTitle"
import { getDesc } from "../components/desc"

// Страница корзины
export function getBasketPage() {
  const page = document.createElement("div")
  page.classList.add("page", "basket-page")

  const mainTitle = getMainTitle("Козина")
  const desc = getDesc("Страница в разработке")

  page.append(mainTitle, desc)
  return page
}