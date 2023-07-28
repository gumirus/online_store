import { getMainTitle } from "../components/mainTitle"
import { getDesc } from "../components/desc"

// Страница товара
export function getProductPage(title) {
  const page = document.createElement("div")
  page.classList.add("page", "product-page")

  const mainTitle = getMainTitle(title)
  const desc = getDesc("Страница в разработке")

  page.append(mainTitle, desc)
  return page
}