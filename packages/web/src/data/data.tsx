import { categories as categoriesData } from '@otl/api/src/data/category'
import { departments as departmentsData } from '@otl/api/src/data/department'

export const categories = Array.from(
  new Set(categoriesData.map(({ nameKo }) => nameKo)),
).map((name) => ({
  value: name,
  label: name,
}))

export const departments = Array.from(
  new Set(departmentsData.map(({ nameKo }) => nameKo)),
).map((name) => ({
  value: name,
  label: name,
}))
